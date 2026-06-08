---
name: ux-task-to-phrase
description: Push new or updated English UX copy authored in a `tasks/` Markdown file into the matching `phrase-data/` English copy and tag CSV files, then hand the user the `pnpm` push command to apply those changes. Reads the project, branch, and tag from the task document, validates the project against `phrase-data/phrase-project-ids.csv`, updates the local CSVs itself, marks pushed rows `Added`, and updates the task Changelog. Use when a user asks to push, add, or sync pending `TODO:` UX copy from a task file into Phrase data.
---

# UX task to Phrase

Move **new or updated UX copy** authored in a `tasks/` Markdown file into the matching `phrase-data/` files, then hand the user the push command.

This skill **always updates the local `phrase-data/` files itself** (that data is local, version-controlled, and reviewable). It then **prints, but never runs**, the `pnpm` push command that applies those changes to the repository and production. The user runs that command after review, so they keep full control over when changes reach production.

This skill manages **English copy and its metadata only**. It never writes Japanese (`-ja-copy`) files. After the English copy is pushed, hand off Japanese localization to the [`ux-en-to-ja-localize`][] skill.

This skill reuses [`ux-data-syncer`][] to construct the push command rather than reimplementing push logic.

[`ux-en-to-ja-localize`]: ../ux-en-to-ja-localize/SKILL.md
[`ux-data-syncer`]: ../ux-data-syncer/SKILL.md

## Inputs

- **Task file** (required): a single Markdown file under `tasks/` (or a sibling `tasks-*` folder), for example `tasks/473-delete-kintone-onetime-sync.md`. If the user does not name one, ask for it before continuing.
- **`phrase-data/` directory**: the target CSV files and `phrase-data/phrase-project-ids.csv` used for project, branch, and tag validation.

## File scope and boundaries

Allowed edits:

- `phrase-data/<project>-en-copy.csv` - add or update English copy rows.
- `phrase-data/<project>-tags.csv` - add or update the matching tag entries for the resolved tag.
- The source task Markdown file - flip pushed rows from `TODO:` to `Added` and append a Changelog entry.

Never edit:

- Any `phrase-data/*-ja-copy.csv` file. Defer Japanese to [`ux-en-to-ja-localize`][].
- `phrase-data/phrase-project-ids.csv`.
- Any `phrase-data/*.yaml` config.
- Unrelated rows, the header, column order, delimiters, quoting, or line endings of any CSV.

Never run the push command. Print it for the user only.

## Workflow

Follow these steps in order. Stop and report at the first failure; do not partially apply changes silently.

### 1) Locate the file

Accept the task file path from the user. If none is given, ask for it. If the path does not exist or is not a Markdown file, stop and report the exact path that failed.

### 2) Find pending copy

Scan the file's `## UX copy` section for copy tables (for example, the tables under headings such as `Failed to delete directory (sync in progress) modal` and `Deletion modal body variants`).

Within those tables, select **only** rows whose `Notes` column contains a `TODO:` label. Ignore rows marked `Reused` or `Added`. A copy table has at least an `English` (or `EN`) column, a `Key` column, a `Description` column, and a `Notes` column.

If no `TODO:` rows are found, stop and tell the user there is nothing pending to push.

### 3) Gather Phrase metadata

Read the document for the **project**, **branch**, and **tag**. These typically live in a `Phrase Strings` block near the top, for example:

```markdown
Phrase Strings:

- Tag: `570-kintone-dir-sync`
- Project: KinID (`id`)
- Branch: `473-delete-kintone-onetime-sync`
```

For each of the three values, record whether it was **extracted verbatim** from the document or **inferred** from context:

- **Project:** validate against the `project_name` column of `phrase-data/phrase-project-ids.csv`. The project also has to match the key prefix of the pending keys (for example, keys beginning `id_` belong to the `id` project). If the documented project and the key prefix disagree, treat that as an error (step 9).
- **Branch:** when missing, infer it from the task file name or the document title (for example, `473-delete-kintone-onetime-sync.md` implies the branch `473-delete-kintone-onetime-sync`).
- **Tag:** when missing, infer it from context (the `Tag:` line, a related-copy table's `Tag` column, or the ticket number).

When a value is missing, **infer it and proceed without asking for confirmation**, but always disclose which values were extracted verbatim and which were inferred (step 4). If the project cannot be resolved or validated, stop (step 9).

### 4) Confirm before writing

Present a summary and ask for explicit confirmation before making any change. Include:

- The rows to be added or updated, each with its **English**, **Key**, and **Description**.
- The resolved **project**, **branch**, and **tag**.
- The **source of each metadata value** (extracted vs. inferred).

Do not write anything before the user confirms.

### 5) Update the `phrase-data/` files

On confirmation, update both files for the resolved project:

1. **English copy:** write each pending row into `phrase-data/<project>-en-copy.csv` with columns `key_name,en,comment`, mapped from the table's `Key`, `English`, and `Description` cells.
2. **Tag file:** add the matching entry to `phrase-data/<project>-tags.csv` with columns `key_name,en,comment,tags`, using the resolved tag in the `tags` column.

Apply these formatting rules so the files stay byte-compatible with their existing contents:

- **Add vs. update:** if a `key_name` already exists in the file, update its `en` and `comment` in place; otherwise insert a new row.
- **Row placement:** insert each new row in the position that matches the file's existing key ordering (alphabetical by `key_name`). The push step pulls the data back afterward, which re-normalizes order, so do not reorder unrelated rows to chase exactness.
- **CSV quoting:** wrap a field in double quotes only when it contains a comma, a double quote, or a newline, and escape an embedded double quote by doubling it (`"` becomes `""`). Match the quoting style already used in the file.
- **Line breaks in copy:** convert `<br>`, `<br/>`, and `<br />` in the task copy to a real newline inside a quoted CSV field, matching how [`ux-key-searcher`][] normalizes copy.
- **Tags column:** if a key already carries other tags, append the resolved tag to the existing comma-separated list (quoted, for example `"24-entraid, 570-kintone-dir-sync"`) rather than overwriting it.

The bundled `pnpm ux-key-md-to-csv <file>` script can convert a `Key`/`English`/`Description` table into correctly quoted CSV rows if you want a reference for the quoting; it writes a separate CSV and only converts the first table, so use it as a helper, not as the writer.

[`ux-key-searcher`]: ../ux-key-searcher/SKILL.md

### 6) Output the push command

Construct the push command using [`ux-data-syncer`][]'s command-construction rules (project and branch only), then present it as the `pnpm` wrapper the repo exposes:

```shell
pnpm push --project <project> --branch <branch>
```

- Omit `--branch` when the resolved branch is `main`.
- **Never add the `--tag` flag.** The resolved tag is already written into `phrase-data/<project>-tags.csv` (step 5), so the push picks it up from the local tag file. Passing `--tag` would re-tag every key being pushed, which is wrong for this workflow.
- This command updates the repository and production data when executed, so **never run it** - only print it. Tell the user to run it from the repository root after reviewing the local diff.

### 7) Update the source Markdown

In the task file:

- Change each pushed row's `Notes` value from `TODO:` to `Added`.
- Append an entry to the `## Changelog` section. **Match the existing format** used in that file's Changelog. If the file has no Changelog section, create one and use the default format:

  ```markdown
  ## Changelog

  - YYYY-MM-DD: Added N keys (tag) to <project>
  ```

Leave every other cell, row, and section untouched.

### 8) Hand off Japanese localization

After the English copy is finalized and the push command is provided, encourage the user to run the [`ux-en-to-ja-localize`][] skill to localize the Japanese copy. Keep localization a separate, specialized step; this skill does not write Japanese values.

### 9) Handle errors

If any step fails - no matching project in `phrase-data/phrase-project-ids.csv`, a project that disagrees with the key prefix, a malformed or missing copy table, a missing target CSV, or a write failure - stop, report the specific problem, and tell the user what action is needed. Do not partially apply changes silently.

## Guardrails

- Always update the local `phrase-data/` CSV and tag files yourself; never execute the `pnpm` push command. The user runs it after review.
- Update **English** copy rows and their **tag-file** entries only. Never write `-ja-copy` files.
- Reuse [`ux-data-syncer`][] to construct the push command instead of duplicating Phrase push logic.
- Never include the `--tag` flag in the push command. The tag lives in the local `phrase-data/<project>-tags.csv` file, so the push reads it from there.
- When metadata is inferred, always disclose what was inferred vs. extracted verbatim.
- Keep `phrase-data/` file formatting byte-compatible with the existing files (header, column order, quoting, sort order, and line endings).
- Make every change reviewable: confirm before writing, and report exactly what changed.
- Follow the repo core writing rules in `AGENTS.md` (straight quotes, no contractions, the Oxford comma, plain hyphens, and sentence-case headings).

## Output format

1. **Result:** one sentence stating the state (inspection only, waiting for confirmation, or changes applied).
2. **Pending rows:** a table of the selected `TODO:` rows with `English`, `Key`, and `Description`.
3. **Metadata:** resolved project, branch, and tag, each marked `extracted` or `inferred`.
4. **What changed:** the exact rows added or updated in `phrase-data/<project>-en-copy.csv` and `phrase-data/<project>-tags.csv`, and the task-file edits (`TODO:` to `Added`, Changelog entry).
5. **Push command:** the exact `pnpm push ...` command for the user to run, with a reminder that it reaches production and that only the user runs it.
6. **Next step:** encourage running [`ux-en-to-ja-localize`][] for the Japanese copy.

## Related skills

- [`extract-copy-from-figma`][] - extracts the copy table this skill consumes.
- [`ux-key-searcher`][] - back-fills existing keys and marks reused rows before new copy is pushed.
- [`ux-key-reviewer`][] - audits key naming before import.
- [`ux-data-syncer`][] - builds and runs the underlying Phrase push and pull commands.
- [`ux-en-to-ja-localize`][] - localizes the Japanese copy after the English copy is pushed.

[`extract-copy-from-figma`]: ../extract-copy-from-figma/SKILL.md
