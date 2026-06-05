#!/usr/bin/env python3
"""Generate localization candidates for Phrase EN/JA CSV pairs."""

from __future__ import annotations

import argparse
import csv
import difflib
import json
from pathlib import Path
from typing import Iterable


PLACEHOLDER_VALUES = {"", "-", "--", "n/a", "na", "todo", "tbd"}


def resolve_repo_root() -> Path:
    return Path(__file__).resolve().parents[3]


def read_csv_rows(path: Path) -> tuple[list[dict[str, str]], list[str]]:
    with path.open("r", encoding="utf-8-sig", newline="") as handle:
        reader = csv.DictReader(handle)
        rows = [dict(row) for row in reader]
        headers = list(reader.fieldnames or [])
    return rows, headers


def detect_key_header(headers: Iterable[str]) -> str:
    for key in ("key", "key_name"):
        if key in headers:
            return key
    raise ValueError("No key column found. Expected `key` or `key_name`.")


def contains_japanese_text(text: str) -> bool:
    for char in text:
        if (
            ("\u3040" <= char <= "\u309f")
            or ("\u30a0" <= char <= "\u30ff")
            or ("\u4e00" <= char <= "\u9fff")
        ):
            return True
    return False


def needs_localization(en_value: str, ja_value: str) -> bool:
    ja_trim = (ja_value or "").strip()
    if ja_trim.lower() in PLACEHOLDER_VALUES:
        return True
    if ja_trim == (en_value or "").strip():
        return True
    if not contains_japanese_text(ja_trim) and any(ch.isalpha() for ch in ja_trim):
        return True
    return False


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Generate candidate keys for JA localization and validate keys."
    )
    parser.add_argument("--project", required=True, help="Project name in phrase-project-ids.csv")
    parser.add_argument(
        "--mode",
        choices=("auto", "keys"),
        default="auto",
        help="auto: detect missing JA candidates, keys: validate explicit keys",
    )
    parser.add_argument(
        "--keys",
        nargs="*",
        default=[],
        help="Keys to validate when --mode keys is selected",
    )
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    root = resolve_repo_root()
    data_dir = root / "phrase-data"
    project_ids_path = data_dir / "phrase-project-ids.csv"
    en_path = data_dir / f"{args.project}-en-copy.csv"
    ja_path = data_dir / f"{args.project}-ja-copy.csv"

    output: dict[str, object] = {
        "status": "ok",
        "project": args.project,
        "mode": args.mode,
        "project_ids_path": str(project_ids_path),
        "en_path": str(en_path),
        "ja_path": str(ja_path),
        "candidates": [],
        "invalid_keys": [],
    }

    if not project_ids_path.exists():
        output["status"] = "error"
        output["error"] = f"Missing required file: {project_ids_path}"
        print(json.dumps(output, ensure_ascii=False, indent=2))
        return 1

    project_rows, project_headers = read_csv_rows(project_ids_path)
    if "project_name" not in project_headers:
        output["status"] = "error"
        output["error"] = "Missing `project_name` column in phrase-project-ids.csv"
        print(json.dumps(output, ensure_ascii=False, indent=2))
        return 1

    valid_projects = [row.get("project_name", "").strip() for row in project_rows]
    if args.project not in valid_projects:
        output["status"] = "error"
        output["error"] = f"Invalid project: {args.project}"
        output["valid_projects"] = sorted(set(p for p in valid_projects if p))
        output["close_matches"] = difflib.get_close_matches(args.project, valid_projects, n=5)
        print(json.dumps(output, ensure_ascii=False, indent=2))
        return 1

    missing_paths = [str(path) for path in (en_path, ja_path) if not path.exists()]
    if missing_paths:
        output["status"] = "error"
        output["error"] = "Missing required project CSV file(s)"
        output["missing_paths"] = missing_paths
        print(json.dumps(output, ensure_ascii=False, indent=2))
        return 1

    en_rows, en_headers = read_csv_rows(en_path)
    ja_rows, ja_headers = read_csv_rows(ja_path)

    en_key_header = detect_key_header(en_headers)
    ja_key_header = detect_key_header(ja_headers)
    en_column = "en" if "en" in en_headers else None
    ja_column = "ja" if "ja" in ja_headers else None
    if not en_column or not ja_column:
        output["status"] = "error"
        output["error"] = "Missing `en` or `ja` column in project copy CSV files"
        print(json.dumps(output, ensure_ascii=False, indent=2))
        return 1

    en_by_key = {row.get(en_key_header, ""): row for row in en_rows}
    ja_by_key = {row.get(ja_key_header, ""): row for row in ja_rows}

    candidates: list[dict[str, str]] = []
    invalid_keys: list[str] = []

    if args.mode == "keys":
        requested_keys = [key.strip() for key in args.keys if key.strip()]
        if not requested_keys:
            output["status"] = "error"
            output["error"] = "Mode `keys` requires at least one --keys value"
            print(json.dumps(output, ensure_ascii=False, indent=2))
            return 1

        for key in requested_keys:
            en_row = en_by_key.get(key)
            ja_row = ja_by_key.get(key, {})
            if not en_row:
                invalid_keys.append(key)
                continue
            candidates.append(
                {
                    "key": key,
                    "en": (en_row.get(en_column) or "").strip(),
                    "ja": (ja_row.get(ja_column) or "").strip(),
                    "comment": (en_row.get("comment") or ja_row.get("comment") or "").strip(),
                }
            )
    else:
        for key, en_row in en_by_key.items():
            ja_row = ja_by_key.get(key, {})
            en_value = (en_row.get(en_column) or "").strip()
            ja_value = (ja_row.get(ja_column) or "").strip()
            if not needs_localization(en_value, ja_value):
                continue
            candidates.append(
                {
                    "key": key,
                    "en": en_value,
                    "ja": ja_value,
                    "comment": (en_row.get("comment") or ja_row.get("comment") or "").strip(),
                }
            )

    output["candidates"] = candidates
    output["invalid_keys"] = invalid_keys
    output["count"] = len(candidates)
    print(json.dumps(output, ensure_ascii=False, indent=2))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
