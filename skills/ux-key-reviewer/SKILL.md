---
name: ux-key-reviewer
description: Review English UX copy files (typically Markdown docs with localization tables) and audit `Key` values against `kws-writing-style-guide/key-naming-rules.md`. Use when a user asks to check key naming compliance, find invalid keys, suggest corrected keys, or QA table-based copy before Phrase import.
---

# UX key reviewer


## Overview

Audit `Key` values in Markdown table rows and report compliance with the key naming rules.


## Required Input

Receive a file path from the user.

Example:

* `tasks-kinid/v1-midfi/prd37-pw-mgt.md`


## Review Workflow

1. Open `kws-writing-style-guide/key-naming-rules.md` first and treat it as the source of truth.
2. Open the user-provided file.
3. Locate Markdown tables that include a `Key` column and an `English` column.
4. Also accept `EN` as an alias for `English` when present.
5. Ignore rows where `Key` is empty, placeholder text, or clearly not a key candidate.
6. Validate each key candidate against the rule set below.
7. Return a structured review report with violations and suggested fixes.


## Rule Set to Enforce

Apply the following checks in order:

1. Use the template `[project-identifier]_[screenPath]_[category]_[modifier]` unless a documented exception applies.
2. Require `_` as segment separators.
3. Require the first character to be lowercase.
4. Require camelCase segments (no spaces, no kebab-case, no PascalCase start).
5. Require a valid project identifier listed in the rules doc.
6. Flag numeric step ordering patterns such as `step1`, `step2` in path/category/modifier.
7. Allow numeric suffixes only for documented multiline breakdown cases such as `body1`, `body2`, `body3`.
8. Apply the General-project special pattern when `general` keys include product-specific scope.
9. Do not enforce normal template rules for the email exception; follow the email exception guidance from the rules doc.

If a rule appears ambiguous, cite the exact section title from `key-naming-rules.md` and state the assumption.


## Output Format

Return findings in this order:

1. Summary: total keys reviewed, valid count, invalid count.
2. Violations table with columns: `Row`, `Current Key`, `Issue`, `Rule Reference`, `Suggested Key`.
3. Ambiguities or assumptions.
4. Optional quick-fix plan (only if at least one invalid key exists).

Use concise, actionable wording. Prefer one concrete suggested key per issue.


## Editing Policy

Do not edit files unless the user explicitly asks for applied fixes.

When asked to apply fixes, update only confirmed `Key` cells and preserve all other table content.
