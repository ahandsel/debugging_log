---
name: ux-copy-ja-review skill memory
description: Japanese UX copy conventions confirmed for this project - colon width, honorific level, rate-limit wording, and recurring review checkpoints.
type: feedback
---

# ux-copy-ja-review skill MEMORY


## Colons in labels: full-width vs half-width

Use full-width `：` for explanatory or labeling contexts. Use half-width `:` only for time (`9:00`) and ratios (`1:1`).

**Why:** Matches the project style guide (see `style-guide-japanese.md` lines 257-262).

**How to apply:** Labels that introduce a list or detail content end with `：`.


## No half-width spaces between Japanese and alphanumeric characters

Do not insert a half-width space between Japanese characters and adjacent alphanumeric characters.

**Why:** Project convention per `style-guide-japanese.md` (line 213).

**How to apply:** Check mixed Japanese and alphanumeric strings for stray spaces.


## Honorific level: prefer `てください`

Prefer the `てください` form and avoid overly formal expressions.

**How to apply:** Keep instructions polite but not excessively honorific or verbose.


## Button labels: noun-phrase form without `する`

Use the noun-phrase form for button labels (for example, `パスワードを変更`, not `パスワードを変更する`).


## Title and heading punctuation: no trailing period

Do not add a trailing period to titles or headings.


## Quote UI element names with `「」`

Wrap references to UI element names in `「」` per the UX style guide.


## Rate-limit and password-reset wording (known systemic patterns)

* **Rate-limit pattern:** `{N}日の{action}回数が上限の10回に達しました。24時間後に再度お試しください。` is established across the dashboard and id CSVs.
  * Known issue: existing strings use `一日`, but the style guide requires `1日` (Arabic numerals for countable numbers). This is a systemic inconsistency across dashboard and id CSVs.
* **Password terminology split:** use `リセット` for the bare action ("reset password"), and `再設定` only in the compound `パスワード再設定メール` per the glossary.
  * Known issue: `general_verifyEmailOwner_helpTxt_notVerified` uses `パスワードリセットメール`, which contradicts the glossary.

**How to apply:** When reviewing these areas, flag the known inconsistencies rather than propagating them.

See related Japanese localization lessons in [[ux-en-to-ja-localize skill memory]] (`skills/ux-en-to-ja-localize/MEMORY.md`).


## Recurring review checkpoints

* Colon character (full-width vs half-width) in label contexts.
* Agent ambiguity in multi-step Japanese instructions (who performs each action).
* `可能性があります` softening - check whether it matches the source intent.
* Consistency of subject and object inclusion in modal body text when the title already provides context.
* Title and body redundancy in banner and modal pairs (the body should not repeat the title verbatim).
* Accuracy of compound error messages (for example, "A and B failed" - verify both failures are mentioned in the Japanese).
