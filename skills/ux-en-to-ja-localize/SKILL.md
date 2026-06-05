---
name: ux-en-to-ja-localize
description: Localize Japanese UX copy in `phrase-data/<project>-ja-copy.csv` from the paired English CSV for a user-specified Phrase project and workflow (auto-detect missing JA or user-specified keys). Use when a user asks to add or update Japanese localization values in Phrase CSV files with project validation, key validation, review against `skills/ux-copy-ja-review/SKILL.md`, safe row-level edits, and a precise change report.
---

# Japanese UX copy localization for Phrase CSV

Localize Japanese UX copy in `phrase-data/` with strict project validation, controlled row edits, and auditable reporting.


## Inputs expected from the user

Collect these inputs before writing:

1. `project` (required): Phrase project name, such as `auth`, `dashboard`, or `id`.
2. `workflow` (required): one of:
   * `Option 1`: automatically detect keys that need JA localization.
   * `Option 2`: localize user-specified keys.
3. `keys` (required only for Option 2): one key or a list of keys.

If any required input is missing, ask only the minimum targeted question needed to continue.


## File scope and boundaries

Allowed edits:

* Only `phrase-data/<project>-ja-copy.csv`.
* Only rows for confirmed target keys.

Do not edit:

* Any `phrase-data/*-en-copy.csv`.
* `phrase-data/phrase-project-ids.csv`.
* Unrelated rows in the JA CSV.
* File schema, header names, row ordering, delimiters, quoting, or line endings.


## Runtime workflow

Follow these steps in order every time this skill is invoked.


### 1) Validate the project

1. Open `phrase-data/phrase-project-ids.csv`.
2. Confirm the user-provided `project` exists in `project_name`.
3. If invalid:
   * Stop.
   * Report the project is invalid.
   * Provide close matches when they can be determined safely.


### 2) Locate and validate project files

Resolve and verify both files:

* `phrase-data/<project>-en-copy.csv`
* `phrase-data/<project>-ja-copy.csv`

If either file is missing, stop and report exactly which path is missing.


### 3) Load review guidance

Read these files before drafting JA copy:

1. `skills/README.md`
2. `skills/ux-copy-ja-review/SKILL.md`
3. `skills/ux-en-to-ja-localize/MEMORY.md`
4. `kws-writing-style-guide/translation.csv`

If guidance files are unavailable, continue with existing CSV patterns and report that limitation.


### 4) Select workflow

Offer exactly these options when workflow is not already specified:

1. Automatically determine which keys need JA localization.
2. Localize specific key or keys.

Do not assume the workflow. Ask once, then continue.


### 5) Option 1 behavior (auto-detect)

1. Compare EN and JA CSV rows by key (`key` or `key_name` depending on actual header).
2. Identify candidate keys where JA appears missing or not localized, including:
   * empty or whitespace-only JA,
   * placeholder-like values (for example `TODO`, `TBD`, `-`, `N/A`),
   * clearly untranslated JA (for example JA identical to EN).
3. Build a candidate report with:
   * `key`,
   * `en`,
   * existing `ja`,
   * `comment`.
4. Ask for user confirmation before editing files.


### 6) Option 2 behavior (user-specified keys)

1. Collect key list if not provided.
2. Validate each key exists in the EN CSV.
3. If any key is invalid:
   * report invalid keys,
   * do not edit files until valid keys are resolved.
4. Build a candidate report with:
   * `key`,
   * `en`,
   * existing `ja`,
   * `comment`.
5. Ask for user confirmation before editing files.


### 7) Localization logic per key

For each confirmed target key, do the following:

1. Exact duplicate search:
   * Find rows in EN CSV where `en` text exactly matches the target English string.
   * If a duplicate has known JA, treat it as highest-priority reference.
2. Similar-entry search:
   * Find semantically or structurally similar EN rows with existing JA.
   * Use as secondary reference.
3. Cross-key consistency check:
   * When the same English concept appears in multiple keys (for example, "Continue" buttons), ensure all keys use the same JA term.
   * Flag and resolve inconsistencies before drafting. Prefer the term already established in the majority of existing keys.
   * Common patterns to verify: button labels (`続ける` for "Continue", `次へ` for "Next"), error message phrasing, field labels.
   * Sibling category labels: when neighbor keys (often sharing a key prefix, such as `*_attrTableTitle_*`) form a parallel set of labels distinguished only by a modifier (e.g., "Standard …" vs "Custom …", "Internal …" vs "External …"), draft the JA so the shared noun and the modifier each occupy the same position across the whole sibling set, producing visually parallel labels (see the "Keep the same word order for sibling category labels" entry in `MEMORY.md`).
4. Context review:
   * Read `comment` for UI intent and constraints.
5. Terminology check:
   * Reuse project terminology already used in the CSV and translation glossary.
6. Draft JA:
   * Produce natural, concise, UX-appropriate Japanese.
   * Prefer consistency and clarity over literal word-by-word translation.
   * Remove redundant words when the meaning is clear from context (for example, prefer `パスワードが一致しません` over `パスワードと確認用パスワードが一致しません` when the UI context is a confirm-password screen).
   * For labels that introduce a list or detail content, end with a full-width colon `：` (for example, `パスワードの要件：`).
   * For rate-limit and quota messages, clearly state who or what the limit applies to (for example, per admin, per user, per device).
7. Uncertainty handling:
   * If uncertain, choose the safest wording.
   * Add a concise TODO note in the same row `comment` cell only when necessary.
   * Do not add columns.


### 8) Placeholder and token preservation

Preserve placeholders and control syntax exactly. Do not translate, reorder, or corrupt tokens such as:

* `%s`, `%d`
* `{name}`, `{{name}}`
* HTML or XML-like tags
* markdown markers
* escaped newlines
* ICU or message-format syntax


### 9) Write changes safely

1. Edit only the target JA rows.
2. Keep file structure unchanged.
3. Preserve all unrelated content.
4. Save the updated `phrase-data/<project>-ja-copy.csv`.


### 10) Validate after edits

Run lightweight checks:

1. CSV parses successfully.
2. Header is unchanged.
3. Only intended keys changed.
4. Every updated key exists in both EN and JA CSVs.
5. Placeholder and token usage remained valid where applicable.

Use non-destructive commands. Prefer:

* `rg` for key and path checks.
* `python3` for CSV-level validation.
* repo lint commands only when clearly relevant and available.


## Helper script

Use `skills/ux-en-to-ja-localize/scripts/candidate_report.py` for deterministic candidate extraction and key validation:

```bash
python3 skills/ux-en-to-ja-localize/scripts/candidate_report.py --project auth --mode auto
python3 skills/ux-en-to-ja-localize/scripts/candidate_report.py --project auth --mode keys --keys auth_common_btn_back auth_common_btn_regenerate_qrCode
```

The script validates project and file existence, then prints JSON with candidates and invalid keys.


## Safety constraints

* Do not exfiltrate secrets, credentials, or environment variables.
* Do not invent files, commands, schema fields, or validations.
* Do not use destructive git or filesystem commands.
* Do not modify production EN copy during this workflow.
* Do not claim certainty when ambiguity remains.


## Output contract

Return results in this exact structure:

1. `Result`
   * one sentence stating whether inspection only, waiting for confirmation, or localization completed.
2. `Project`
   * project name,
   * project ID validation result,
   * file paths used.
3. `Workflow`
   * `Option 1` or `Option 2`,
   * keys considered,
   * keys updated,
   * invalid keys.
4. `What changed`
   * concise bullets for edited keys only.
5. `Localization report`
   * per key: `key`, `en`, previous `ja`, new `ja`, references used (exact and similar), comment context summary, TODO added or not.
6. `Validation`
   * every command run,
   * each command outcome,
   * whether formal tests existed,
   * if none existed, include: `No repo-defined tests/lint were found for this task; lightweight CSV validation was performed instead.`
7. `Diff summary`
   * edited file path,
   * row-level change summary,
   * minimal unified diff snippet for edited rows only when useful.
8. `Notes`
   * unresolved ambiguities,
   * follow-up risks,
   * skipped steps and reason.
