---
name: ux-copy-en-review
description: Review and polish the English UX copy in Markdown tables (especially columns like English or EN) by directly updating the English cells for clarity, consistency, grammar, vocabulary simplicity, active voice, and US English style, and add TODO comments when user review is required. Use when a user asks to improve, polish, or standardize English UI text, error messages, labels, helper text, or table-based localization copy.
---

# English UX copy reviewer

Review and polish UX copy in `English` or `EN` columns of Markdown tables and apply fixes directly.

## Required input

Receive a file path from the user.

Example:

- `tasks-kinid/v1-midfi/prd37-pw-mgt.md`

## Source of truth

Read these files before editing:

1. `kws-writing-style-guide/style-guide-english.md` (primary style rules)
2. `kws-writing-style-guide/translation.csv` (official terminology list)
3. `kws-writing-style-guide/terminology-kinid.md` or `kws-writing-style-guide/terminology-remochat.md` when product context is relevant
4. `skills/ux-copy-en-review/MEMORY.md` (accumulated project conventions and recurring fixes)

If guidance conflicts, prioritize:

1. Explicit project terminology docs and `translation.csv`
2. `style-guide-english.md`
3. General UX writing best practices

## Default workflow

1. Open the user-provided file.
2. Locate Markdown tables that contain an `English` or `EN` column.
3. Review `English` or `EN` cells only, and use `Key`, `Description`, and `Notes` for context.
4. Edit `English` cells in place without waiting for extra confirmation.
5. Preserve table structure and all non-English columns.
6. Save the file with the revised copy.
7. Add TODO comments for uncertain cases that require user confirmation.

Switch to review-only mode only when the user explicitly asks for suggestions without file edits. See "Review-only mode" below.

## Review-only mode

When the user asks for a review without applied edits, do not change the file. Instead, report each issue with a severity grade so the user can triage:

- 🔴 **Must fix**: Incorrect, misleading, inaccessible, or blames the user.
- 🟡 **Should fix**: Inconsistent, wordy, wrong capitalization, or does not follow the style guide.
- 🟢 **Consider**: Minor polish or optional improvement.

For each issue, give the file location, the current text, the guideline it violates, and a suggested revision. End with a short summary: total strings reviewed, issue counts by severity, and the top recurring patterns observed.

## Checks to perform

1. Terminology and style consistency:
   - Use approved terms from `translation.csv` and terminology docs.
   - Flag inconsistent variants (for example, `login` vs `log in`, `user name` vs `username`).
2. Clarity and concision:
   - Prefer direct, user-friendly wording.
   - Remove unnecessary words and ambiguity.
3. Vocabulary level:
   - Keep wording at high school reading level or lower.
   - Flag uncommon or overly technical words unless domain-required.
   - Suggest simpler alternatives.
4. Grammar and voice:
   - Fix grammar issues.
   - Prefer active voice when it improves clarity and responsibility.
5. US English conventions:
   - Enforce US spelling and grammar.
6. Sentence case:
   - Use sentence case for headings, titles, and UI text unless proper nouns or explicit exceptions apply in the style guide.
7. Error-message quality:
   - Ensure error messages are specific and actionable.
   - For messages like `Check the poll above for errors.`, verify that the action and location are clear to users.

## Safe edit rules

1. Edit only `English` or `EN` cells unless the user asks for broader edits.
2. Preserve pipes, alignment, headings, and table ordering.
3. Preserve placeholders, variables, Markdown links, product names, and IDs.
4. Preserve intentional capitalization for branded terms.
5. Keep each revised string semantically equivalent unless the original meaning is clearly wrong or ambiguous.

## TODO comments for user review

1. Add a TODO comment when meaning, product behavior, legal wording, or terminology intent is uncertain and needs user confirmation.
2. Use this exact format:
   - `<!-- TODO: Needs user review - Table <table_number>, Row <row_number>: <reason> -->`
3. Place TODO comments directly below the relevant table, not inside table rows.
4. Write one TODO comment per uncertain row.
5. Keep TODO reasons short, specific, and actionable.

## Output format

Return results in this order:

1. Summary:
   - Total `English` cells reviewed
   - Number of edited cells
   - Number of unchanged cells
   - Number of TODO comments added
2. Applied changes table with columns:
   - `Table`
   - `Row`
   - `Before`
   - `After`
   - `Rule reference`
3. Ambiguities:
   - Note uncertain edits and the deciding rule.
4. TODO comments added:
   - List each inserted TODO comment.
