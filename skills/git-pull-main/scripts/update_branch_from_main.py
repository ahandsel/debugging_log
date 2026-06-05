#!/usr/bin/env python3
"""Update the current git branch from a base branch."""

from __future__ import annotations

import argparse
import subprocess
import sys


def run_git(args: list[str], *, capture_output: bool = False) -> subprocess.CompletedProcess[str]:
    return subprocess.run(
        ["git", *args],
        check=True,
        text=True,
        capture_output=capture_output,
    )


def ensure_git_repo() -> None:
    run_git(["rev-parse", "--show-toplevel"], capture_output=True)


def current_branch() -> str:
    return run_git(["branch", "--show-current"], capture_output=True).stdout.strip()


def is_worktree_clean() -> bool:
    return run_git(["status", "--short"], capture_output=True).stdout.strip() == ""


def print_plan(commands: list[list[str]]) -> None:
    print("Plan:")
    for command in commands:
        print(f"  {' '.join(command)}")
    sys.stdout.flush()


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Bring the current branch up to date from a base branch.",
    )
    parser.add_argument(
        "--base-branch",
        default="main",
        help="Base branch to sync from. Defaults to main.",
    )
    parser.add_argument(
        "--remote",
        default="origin",
        help="Remote to fetch from. Defaults to origin.",
    )
    parser.add_argument(
        "--strategy",
        choices=("rebase", "merge"),
        default="rebase",
        help="Update strategy. Defaults to rebase.",
    )
    parser.add_argument(
        "--allow-dirty",
        action="store_true",
        help="Allow updating even if the working tree has local changes.",
    )
    return parser.parse_args()


def main() -> int:
    args = parse_args()

    try:
        ensure_git_repo()
        branch = current_branch()
        if not branch:
            print("Could not determine the current branch.", file=sys.stderr)
            return 1

        if branch == args.base_branch:
            print(
                f"Refusing to update while checked out on {args.base_branch}. Switch to a feature branch first.",
                file=sys.stderr,
            )
            return 1

        if not args.allow_dirty and not is_worktree_clean():
            print(
                "Working tree is not clean. Commit, stash, or rerun with --allow-dirty.",
                file=sys.stderr,
            )
            return 1

        base_ref = f"{args.remote}/{args.base_branch}"
        commands = [["git", "fetch", args.remote, args.base_branch]]
        if args.strategy == "rebase":
            commands.append(["git", "rebase", base_ref])
        else:
            commands.append(["git", "merge", base_ref])

        print_plan(commands)

        for command in commands:
            subprocess.run(command, check=True, text=True)
    except subprocess.CalledProcessError as exc:
        print(f"Command failed with exit code {exc.returncode}: {' '.join(exc.cmd)}", file=sys.stderr)
        return exc.returncode

    print(f"Branch {branch} is now updated from {base_ref} using {args.strategy}.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
