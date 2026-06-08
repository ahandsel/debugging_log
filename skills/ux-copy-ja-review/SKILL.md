---
name: ux-copy-ja-review
description: Review Japanese UX copy in Markdown tables (especially columns like Japanese, Key, Description, English, Notes) for clarity, consistency, grammar, natural phrasing, punctuation, and terminology compliance. Use when a user asks to QA or improve Japanese UI text, error messages, labels, helper text, or table-based localization copy.
---

# Japanese UX copy review

Review UX copy in the `Japanese` column of Markdown tables and return actionable fixes.

## Required input

Receive a file path from the user.

Example:

- `tasks-kinid/v1-midfi/prd37-pw-mgt.md`

## Source of truth

Read these files before reviewing:

1. `kws-writing-style-guide/style-guide-japanese.md` (primary style rules)
2. `kws-writing-style-guide/ux-style-guide-japanese.md` (UX-specific Japanese rules)
3. UI component-specific content guidelines in `kws-writing-style-guide/ui-component-style-guide/`
   - `kws-writing-style-guide/ui-component-style-guide/message/error-message-jp.md` (error message-specific Japanese rules)
   - `kws-writing-style-guide/ui-component-style-guide/accessible-name-jp.md` (accessible name-specific Japanese rules)
   - `kws-writing-style-guide/ui-component-style-guide/button-jp.md` (button label-specific Japanese rules)
   - `kws-writing-style-guide/ui-component-style-guide/link-jp.md` (link-specific Japanese rules)
   - `kws-writing-style-guide/ui-component-style-guide/textfield-jp.md` (textfield-specific Japanese rules)
   - `kws-writing-style-guide/ui-component-style-guide/tooltip-jp.md` (tooltip-specific Japanese rules)
4. `kws-writing-style-guide/translation.csv` (official terminology list)
5. `kws-writing-style-guide/terminology-kinid.md` or `kws-writing-style-guide/terminology-remochat.md` when product context is relevant
6. `skills/ux-copy-ja-review/MEMORY.md` (accumulated Japanese conventions and recurring review checkpoints)

If guidance conflicts, prioritize:

1. Explicit project terminology docs and `translation.csv`
2. The relevant UI component-specific content guidelines in `kws-writing-style-guide/ui-component-style-guide/` if the copy to be reviewed is clearly associated with a specific component
3. `ux-style-guide-japanese.md`
4. `style-guide-japanese.md`
5. General Japanese UX writing best practices

## Review scope

1. Open the user-provided file.
2. Locate Markdown tables that contain a `Japanese` column.
3. Focus on `Japanese` cells only, and use `Key`, `Description`, `English`, and `Notes` for context.
4. Review all matching tables in the file.

## Checks to perform

1. Terminology and consistency:
   - Use approved terms from `translation.csv` and relevant terminology docs.
   - Flag inconsistent variants for the same concept.
   - Verify that the same English concept maps to a single JA term across all keys (for example, "Continue" buttons must consistently use `続ける`, not a mix of `続ける` and `次へ`; "Next" buttons use `次へ`).
2. Natural Japanese phrasing:
   - Prefer clear, concise, conversational Japanese.
   - Avoid translationese and awkward literal phrasing.
   - Prefer precise wording over ambiguous wording.
   - Avoid unnatural loanword usage when a natural Japanese term exists (for example, prefer `保存` over `セーブ`, `ために作られています` over `ためにデザインされています`), unless the loanword is already established in the project terminology or widely used in the industry for that concept.
3. Conciseness:
   - Remove redundant words when the meaning is already clear from context (for example, `パスワードが一致しません` instead of `パスワードと確認用パスワードが一致しません` when on a confirm-password screen).
   - Prefer shorter, more direct instructions over verbose multi-clause sentences.
   - Prefer concise verb forms (for example, `作成する` instead of `作成を実施する` or `作成を行う`) when the meaning is clear without the extra words.
   - Avoid restating information already visible in the UI.
4. Register and tone:
   - Keep user-facing strings in a consistent polite style.
   - Avoid excessive honorific wording and unnecessary verbosity.
   - Avoid style mixing unless explicitly justified by context.
5. Grammar, particles, and sentence structure:
   - Fix particle and postposition errors.
   - Improve awkward sentence structure.
   - Avoid unnecessary negative phrasing and double negatives.
6. Kanji and hiragana conventions:
   - Follow style-guide-preferred notation choices.
   - Prefer readable hiragana forms where required by convention (for example, `ください`, `できる`).
7. Katakana and long-vowel marks:
   - Ensure loanwords use consistent katakana spelling.
   - Do not drop long-vowel marks (`ー`) unless the form is an established exception.
8. Punctuation and character-width rules:
   - Use `。` and `、` correctly.
   - Apply full-width and half-width punctuation rules correctly by symbol type and context.
   - Keep Japanese and alphanumeric mixed text spacing consistent with the guide.
   - Labels that introduce a list or detail content must end with a full-width colon `：` (for example, `パスワードの要件：`).
9. Nakaguro and symbol usage:
   - Use `・` only for approved uses, including foreign compound word boundaries when appropriate.
   - Flag discouraged symbol usage when it violates the style guide.
10. UX-specific Japanese rules:
    - Quote UI element names with `「」`.
    - Avoid instructions that rely only on sensory characteristics (color, shape, or position).
    - Flag wording that creates variable-fragment or word-order constraints that hurt localization.
11. UI component guideline compliance:
    - If the copy is clearly associated with a specific UI component, check it against the relevant `kws-writing-style-guide/ui-component-style-guide/` guidelines (for example, button labels should follow `button-jp.md` rules).
    - Flag any violations of the component-specific guidelines.
12. Error-message quality:
    - Ensure error messages are specific and actionable.
    - Ensure users can identify what went wrong and what to do next.
13. Constraint and limit message clarity:
    - Rate-limit and quota messages must clearly state who or what the limit applies to (for example, per admin, per user, per device).
    - Ensure the scope of the constraint is unambiguous so the reader knows whether it applies to themselves, another role, or the system.

## Output format

Return results in this order:

1. Summary:
   - Total `Japanese` cells reviewed
   - Number of issues
   - Number of no-change cells
2. Findings table with columns:
   - `Table`
   - `Row`
   - `Original`
   - `Issue`
   - `Suggested revision`
   - `Why`
   - `Rule reference`
3. Final polished copy list:
   - Provide a clean list of revised Japanese strings in table order.
4. Assumptions or ambiguities:
   - Note uncertain cases and the rule used to decide.

Use concise wording and provide one best revision per issue.

Ensure `Original` and `Suggested revision` contain Japanese text.

## Editing policy

Do not edit files unless the user explicitly asks for applied fixes.

When asked to apply fixes:

1. Update only `Japanese` cells unless requested otherwise.
2. Preserve table structure, pipes, alignment, and all non-Japanese columns.
3. Keep placeholders, variables, Markdown links, and product names intact.
