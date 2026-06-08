---
name: ux-key-searcher
description: Find existing Phrase keys for UX copy in a highlighted Markdown table by searching the phrase-data CSV files for an exact match. For each row, fill the Key column with the matching key_name, fill the Description column with the matching comment, and set Notes to Reused. Use when a user highlights a table of English or Japanese UX copy and asks to look up, reuse, or back-fill existing keys.
---

# UX key searcher

Search highlighted UX copy against the `phrase-data/` CSV files and reuse the existing Phrase key when the copy matches an existing string exactly.

For each highlighted table row, this skill:

1. Searches the copy text across `phrase-data/` for an exact match.
2. Fills the `Key` column with the matching `key_name`.
3. Fills the `Description` column with the matching `comment`.
4. Sets the `Notes` column to `Reused`.

This skill only reuses existing keys. It does not invent new keys, edit copy, or translate. Run [`ux-key-reviewer`][] afterward to audit naming.

[`ux-key-reviewer`]: ../ux-key-reviewer/SKILL.md

## Required input

A Markdown table in an open file that contains at least one of these copy columns:

- `English` or `EN` - searched against the `*-en-copy.csv` files.
- `Japanese`, `JA`, or `日本語` - searched against the `*-ja-copy.csv` files.

The table is edited in place in its source file.

### Scope

**By default, use the IDE-selected lines as the scope.** Resolve the selection to the table rows to process:

- If the selection covers one or more table rows, process exactly those rows. Leave all other rows and tables untouched.
- If the selection is a section heading, a caption, or any partial line above or beside a table (for example, just the line `Deletion modal body variants`), process every data row of the first table in that section.
- If the selection spans multiple sections or tables, process every data row of every table inside the selected range.

When there is no IDE selection, fall back to the table the user named or pointed to. If neither a selection nor a named target resolves to a Markdown table with a copy column and a `Key`, `Description`, or `Notes` column, stop and ask the user to confirm the target.

## Search corpus

All data lives in `phrase-data/`:

- English: `phrase-data/{project}-en-copy.csv` with header `key_name,en,comment`.
- Japanese: `phrase-data/{project}-ja-copy.csv` with header `key_name,ja,comment`.

The `{project}` part of the filename is the project identifier and the prefix of every key in that file (for example, `id-en-copy.csv` holds keys that start with `id_`). Use this to reason about which project a candidate key belongs to.

## Default workflow

1. **Read the table.** Identify the copy column (English or Japanese), the `Key` column, the `Description` column, and the `Notes` column. Note the existing `Key` formatting convention (whether keys are wrapped in backticks).
2. **Collect the queries.** Build a JSON array of the copy-cell values for the rows in scope, in row order. Pass each cell value exactly as it appears in the table - do not convert `<br>` to a newline, because the helper handles that conversion.
3. **Run the search helper.** Use the bundled `search.mjs` so CSV quoting, commas, and multi-line values are parsed correctly. Do not grep the CSVs directly - quoted fields and embedded commas break naive matching.

   ```bash
   echo '["Close", "Add directory", "Delete this directory?"]' \
     | node skills/ux-key-searcher/search.mjs --lang en
   ```

   For a long table, write the queries to a temporary JSON file and pass `--queries`:

   ```bash
   node skills/ux-key-searcher/search.mjs --lang ja --queries /tmp/ux-keys.json
   ```

   The helper returns, per query: `match_count` and a `matches` array of `{ project, key, comment }`.

4. **Apply results per row** using the rules below.
5. **Edit the table in place.** Preserve the table structure, column order, every other column, and all rows outside the highlighted range.
6. **Report** a summary of reused, uncertain, and unmatched rows.

## Applying results

For each row, act on `match_count`:

### Exactly one match (`match_count == 1`)

- Set `Key` to the matched `key`.
- Set `Description` to the matched `comment`.
- Set `Notes` to `Reused`.

### Multiple matches (`match_count > 1`)

Pick the single most likely candidate using the other rows' results as context, in this priority order:

1. **Project agreement.** Prefer the candidate whose `project` matches the project of rows in the same table that resolved to exactly one match.
2. **Key-prefix proximity.** Prefer the candidate that shares the longest key prefix (project, screen path, and component) with the confidently resolved neighboring keys. UX copy from the same screen or modal shares a key prefix.
3. **Cross-language confirmation.** If the table has both an English and a Japanese column, the correct `key_name` must match in both the `*-en-copy.csv` and `*-ja-copy.csv` files. Run the helper for both languages and prefer the key that appears in both result sets.

Then:

- Set `Key` to the chosen candidate's `key`.
- Set `Description` to the chosen candidate's `comment`.
- Set `Notes` to `TODO: Verify key`.

### No match (`match_count == 0`)

Leave the `Key`, `Description`, and `Notes` cells unchanged. Do not guess a key. List the row in the report as unmatched.

## Matching rules

- **Exact match only.** The copy must equal the CSV value after normalization. Do not fuzzy-match, do not match substrings, and do not match across a trimmed difference in wording.
- **Normalization** (handled by `search.mjs`): `<br>`, `<br/>`, and `<br />` become newlines, CRLF becomes LF, and leading and trailing whitespace is trimmed. Matching is otherwise case-sensitive and character-exact.
- **Both copy columns present.** Process the language the user highlighted. If both columns hold copy, match on English first, then confirm the same `key_name` matches the Japanese value (see cross-language confirmation above). A row where the languages disagree on the key is uncertain - use `TODO: Verify key`.

## Safe edit rules

1. Edit only the `Key`, `Description`, and `Notes` cells of in-scope rows. Never change the copy cells.
2. Preserve pipes, alignment, headings, table ordering, and every column not listed above.
3. Always wrap an inserted key in backticks (code format), for example `` `id_admin_dirSync_deleteDirModal_title` ``. This visually differentiates a found, reused key from a yet-to-be-added key (placeholder copy that still sits in the `Key` cell from extraction). Leave any untouched `Key` cell exactly as it is.
4. Preserve placeholders, variables, Markdown links, product names, and IDs in any cell.
5. If a cell already holds a value you would overwrite (for example, an existing `Key` or a `Notes` of `Extracted`), replace it per the rules above; the reused value is authoritative.

## Output format

Return results in this order:

1. Summary:
   - Total rows processed.
   - Number set to `Reused` (single match).
   - Number set to `TODO: Verify key` (multiple matches).
   - Number left unmatched.
2. Applied changes table with columns:
   - `Row`
   - `Copy`
   - `Key`
   - `Notes` (`Reused` or `TODO: Verify key`)
3. Uncertain rows:
   - For each `TODO: Verify key` row, list the candidate keys and the deciding heuristic.
4. Unmatched rows:
   - List the copy that had no exact match, so the user knows a new key is needed.

## Related skills

- [`extract-copy-from-figma`][] - produces the table this skill consumes.
- [`ux-key-reviewer`][] - audit key naming after keys are filled in.
- [`ux-copy-en-review`][] and [`ux-copy-ja-review`][] - polish the copy itself.

[`extract-copy-from-figma`]: ../extract-copy-from-figma/SKILL.md
[`ux-copy-en-review`]: ../ux-copy-en-review/SKILL.md
[`ux-copy-ja-review`]: ../ux-copy-ja-review/SKILL.md
