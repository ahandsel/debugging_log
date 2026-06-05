---
name: ux-en-to-ja-localize skill memory
description: Lessons from user corrections on Japanese UX copy localization - compound nouns, scope phrasing, rate-limit wording, and conciseness preferences.
type: feedback
---

# ux-en-to-ja-localize skill MEMORY


## Native verbs over katakana loanwords in descriptions

When a native Japanese verb or expression exists and is equally clear, prefer it over a katakana loanword verb.
E.g., `含まれない` not `カバーされない` (for "not covered/included").

**Why:** Native verbs integrate more smoothly into Japanese sentence structure.

**How to apply:** Apply to all text in general. Do not apply to established UI/tech terms where the katakana form is standard (e.g., `マッピング`, `リセット`, `コピー`).


## Compound nouns in short labels and titles - adding `の` in a kanji string to clarify the structural relationship between the nouns

Add `の` between compound nouns when the resulting string would be a long sequence of kanji without a natural visual break. Consider adding `の` when the compound is 5+ kanji characters in a row. `の` can be dropped when the preceding element is katakana, which provides a natural visual break from the following kanji, unless the resulting string is still very long and hard to parse.

**Where to add `の`:** The weakest semantic connection in the compound, which is often between two nouns where one modifies the other. For example, in `パスワード変更試行回数`, the weakest connection is between `変更` and `試行回数`, so adding `の` there (`パスワード変更の試行回数`) improves readability.

**Examples:**

* `パスワードリセット試行回数` (`リセット` is katakana → no need for `の` between `リセット` and `試行回数`)
* `パスワード変更の試行回数` (`変更試行回数` is a long, hard-to-parse kanji string → add `の` for readability)
* `パスワード変更回数` (`変更回数` is a shorter compound and visually easier to parse → `の` not strictly needed, but can be added for clarity)
* `パスワードリセットの試行可能回数` (`パスワードリセット試行可能回数` is long, but the weakest connection is between `リセット` and `試行可能回数` → add `の` for readability)

**Why:** Long strings of kanji without visual breaks can be difficult to parse; `の` serves as a helpful delimiter to clarify the relationships between the nouns.

**How to apply:** In toast titles and short labels, look for long sequences of kanji and identify the weakest semantic connection between nouns; add `の` there to improve readability. If the preceding element is katakana, the visual break is sufficient and `の` can be omitted.


## Rate-limit scope: use `同一〜に対する`

When describing the scope of a rate limit, prefer `同一〜に対する` as a front-loaded modifier over `〜ごとに` (or `〜ごとの`) as a postpositional phrase. For example, `同一アカウントに対するパスワードリセットの試行可能回数` not `ユーザーアカウントごとのパスワードリセットの試行回数`.

**Why:** Front-loading the scope makes the constraint target immediately clear; `同一` emphasizes the "same entity" aspect which is the key info in a rate-limit message. `ごとの` (or `ごとに`) can be less precise and could be interpreted in multiple ways, such as "per action taker" or "per entity", while `同一〜に対する` clearly indicates the rate limit applies to actions targeting the same entity (account, user, etc.).

**How to apply:** Apply this feedback to all rate-limit and quota messages, both admin-facing and end-user-facing. Do not drop the scope for end-users even when they are acting on their own account, as clarity about the scope of the limit is still important, and also maintaining consistency with admin-facing messages is beneficial for overall UX consistency.


## `試行可能回数` over `試行回数` for allowed attempts

When the limit is about how many attempts are _allowed_, use `試行可能回数` (allowed attempt count), not just `試行回数` (attempt count). Use `試行回数` when referring to the count of attempts already made, and `試行可能回数` when referring to the total allowed attempts or the number of attempts that are still allowed under the limit.

**Why:** `可能` clarifies the number refers to the quota/allowance, not the count of attempts already made.

**How to apply:** Rate-limit body text that states the allowed number of attempts.


## `24時間ごとに` over `24時間あたり` for rate limit time windows

When describing the interval for a rate limit that resets after a fixed time window, use `〜ごとに` instead of `〜あたり` to indicate that the limit resets every 24 hours.

**Why:** `ごとに` is the standard way to express "every {time period}" in Japanese and is more precise for rate limits that reset after a fixed interval. `あたり` can be interpreted as "approximately" or "per" in a more general sense, which may not convey the intended meaning of a strict time-window limit. Using `ごとに` maintains clarity and aligns with common usage for time-based intervals in Japanese.

**How to apply:** When describing rate limits that reset after a specific time interval, use `ごとに` to indicate the reset period. If the context is about a general rate or frequency without a strict reset, you can consider using `あたり` as an alternative, although this is less common for rate limits.


## Drop redundant context in rate-limit recovery instructions

When the admin is already on a specific user's page, omit `このユーザーについては` because it is redundant. Use the concise `時間をおいて再度お試しください` instead of longer forms like `このユーザーについては、時間をおいて再度お試しください`.

**Why:** The UI context already tells the admin which user is affected; restating it adds unnecessary length.

**How to apply:** Toast and error body text where the subject is already clear from the UI context.


## Drop redundant `ユーザー` from `アカウント`

When the context already makes clear this is a user account, prefer `アカウント` over `ユーザーアカウント`.

**Why:** Avoids restating information already obvious from context (admin user management page).

**How to apply:** Rate-limit and account-scoped messages where the user/account type is clear from the surrounding UI.


## Required field errors: use `〜は必須です` by default

For inline validation errors on empty required fields, use the declarative `〜は必須です` pattern instead of the imperative `〜を入力してください` unless the English version uses a softer tone (e.g., "Please enter X").

**Why:** `〜は必須です` is a straightforward, standard way to indicate a required field error in Japanese forms. It is appropriate for most cases where a required field is left empty. However, if the English copy intentionally uses a softer tone (e.g., "Please enter X") or an imperative form (e.g., "Enter X"), then the Japanese should also reflect that tone with a softer phrasing like `〜を入力してください`.

**How to apply:** For required field validation errors, default to using `〜は必須です`. However, review the English copy for the field in question; if it uses a softer tone or an imperative form, adjust the Japanese to match that tone accordingly so that the user experience is consistent across languages.


## Data type labels: append `型` suffix

When displaying a data type name as a value or label, append `型` to the type name. E.g., `文字列型` not `文字列`.

**Why:** `文字列` alone means "string" (the text), while `文字列型` explicitly means "string type" (the data type). The `型` suffix disambiguates the value as a type classification.

**How to apply:** Apply to data type option labels, table cell values, and help text that references data types by name.


## Limit-reached messages: structure and phrasing

When writing limit-reached titles and body text, follow these two principles together:

* Make the subject explicit by mentioning the count
  * E.g., `Xの数が上限に達しています` rather than just `Xの上限に達しています` or `Xが上限に達しています`.
  * Use `Xの数が上限に達しています` so the sentence clearly says "the _number_ of X has reached the limit." `Xの上限` or `Xが上限` does not clearly indicate what aspect of X has reached the limit.
* Integrate the limit number into the sentence naturally
  * Do not use parentheses to present the limit number (e.g., ~~`上限（50件）`~~). Instead, weave the number into the sentence so it reads as part of the statement.

**Examples:**

| Component                  | Not                                          | OK                                                                   |
| -------------------------- | -------------------------------------------- | -------------------------------------------------------------------- |
| Title                      | `カスタム属性が上限に達しています`           | `カスタム属性の数が上限に達しています`                               |
| Body (without parentheses) | `カスタム属性が上限（50件）に達しています。` | `カスタム属性の数が上限の50件に達しています。`                       |
| Body (alt. phrasing)       | -                                            | `このワークスペースにはすでに50件のカスタム属性が作成されています。` |

The alternative phrasing (describing current state directly) is preferred when the message needs to explain the situation in a more detailed and less technical way (without using `上限`).

**Why:** Parentheses should not carry critical information, and omitting `の数` makes the subject ambiguous. Applying both rules together produces sentences that are clear about what hit the limit and what the limit is.

**How to apply:** Apply to titles and body text of limit-reached banners, error modals, and similar constraint messages where a maximum count has been reached.


## Success toasts: passive `が...されました` over active `を...しました`

For success toast messages, prefer passive phrasing `Xが...されました` over active `Xを...しました` to match existing Japanese UX copy patterns. E.g., `カスタム属性が作成されました` not `カスタム属性を作成しました`.

**Why:** Passive phrasing (`が...されました`) presents the result as a completed event rather than an action the system took, which is more natural for system-generated notifications.

**How to apply:** Apply to toast success messages for CRUD operations.


## Description field label: `詳細` over `説明`

For field labels meaning "description" (as in a freeform notes field), prefer `詳細` over `説明` or `概要`.

**Why:** `説明` implies an explanation or account of something, and `概要` implies a summary, while `詳細` (details) better matches the purpose of a supplementary notes/description field.

**How to apply:** Apply to form field labels for description/notes fields in modals and forms. Analyze the purpose of the field and apply the most semantically appropriate term based on whether the field is meant for an explanation (`説明`), a summary (`概要`), or details (`詳細`).


## `ユーザーデータ` → `ユーザー情報`

Prefer `ユーザー情報` (user information) over `ユーザーデータ` (user data) in non-developer-facing text (i.e., admin or end-user UX copy).

**Why:** `情報` is less technical and more natural in Japanese admin and business contexts than the katakana word `データ` when referring to user profile information. `データ` is better suited for raw/technical data contexts.

**How to apply:** Apply to non-developer-facing text that refers to user profile or account information.


## Spell out `IdP` → `IDプロバイダー`

By default, spell out `IdP` as `IDプロバイダー` in all Japanese copy.

**Why:** Not all admin users are familiar with the abbreviation `IdP`. Spelling it out removes ambiguity.

**How to apply:** Apply to all text in general.


## Keep the same word order for sibling category labels

When labeling categories of items that share a common noun but differ by a modifier (e.g., Standard vs Custom attributes), keep the same word order in the Japanese label to create visually parallel and easily scannable category labels. For example, use `カスタムユーザー属性`, `標準ユーザー属性`, `カスタムグループ属性`, and `標準グループ属性`.

**Why:** Keeping the same word order for categories of the same concept makes the categorization explicit and produces visually parallel labels across the sibling set.

**How to apply:** Before drafting JA for a label, look at neighbor keys in the same UI (often the same key prefix, e.g., `*_attrTableTitle_*`). If two or more sibling labels share a noun and differ only by a modifier (Standard/Custom, Internal/External, Active/Archived, etc.), draft the JA so that the shared noun is in the same position across all sibling labels, and the modifiers are also in the same position across all sibling labels. This creates a clear, consistent pattern that enhances scannability and comprehension.


## Compound nouns must have semantically close elements adjacent

When creating a compound noun, the two semantically closest elements must be adjacent. For example, `custom user attributes` is a compound noun where `user attributes` is the core noun and `custom` is the modifier. The closest relationship is between `user` and `attributes`, so they should be adjacent (`ユーザー属性`) and the modifier (`カスタム`) should be placed before them, resulting in `カスタムユーザー属性` in Japanese.

**Why:** In Japanese compound nouns, the elements that are most closely related in meaning should be adjacent to each other to maintain clarity or otherwise the meaning can become incorrect.

**How to apply:** When translating compound nouns, identify the core noun and its closest relationships, and ensure those elements are adjacent in the Japanese translation. Modifiers should be placed before the core noun.

**Interaction with the `の` insertion rule:** When applying the rule to add `の` to break up long kanji runs, ensure that the `の` does not separate semantically close elements of a compound noun. The `の` should be placed at the weakest semantic connection in the string, rather than between elements that form a tight compound. For example, in `パスワード変更試行回数`, the closest relationship is between `パスワード` and `変更`, and between `試行` and `回数`. The weakest connection is between `変更` and `試行回数`, so the `の` should be placed there (`パスワード変更の試行回数`) rather than between `パスワード` and `変更` or between `試行` and `回数`. As another example, in `カスタムユーザー属性`, the closest relationship is between `ユーザー` and `属性`, so they should be adjacent without `の` between them, and the modifier `カスタム` should be placed before them. Using `カスタムユーザーの属性` or `ユーザーのカスタム属性` would incorrectly separate the semantically close elements `ユーザー` and `属性` with `の`, which leads to an incorrect meaning (`カスタムユーザーの属性` means "attributes of the custom user" rather than "custom user attributes", and `ユーザーのカスタム属性` implies "custom attributes of the user").


## Translate polite-invitation imperatives as invitations, not commands

> Imperative form indicating a polite invitation should be translated to convey the same nuance in Japanese, instead of a plain command or capability statement

When the English copy uses an imperative form that serves as a polite invitation to take an action (e.g., "Use this field to..."), the Japanese translation should convey that same nuance of invitation rather than a plain command or capability statement. For example, the help text for an optional field "Use this field to provide additional context or notes about this attribute." should be translated to something like `この属性に関する補足情報やメモを入力するのにお使いください` rather than a direct command like `この属性に関する補足情報やメモを入力してください` or a capability statement like `この属性に関する補足情報やメモを入力できます`.

**Why:** The original English phrasing is a polite invitation, and the Japanese translation should reflect that tone to maintain the same user experience. A direct command can feel too strong and forceful, while a capability statement can sound odd especially when it is obvious that the user can carry out the action mentioned.

**How to apply:** When translating imperative sentences that are meant to be polite invitations, use phrasing that conveys an invitation or suggestion rather than a direct command or capability statement. This often involves using expressions like `お使いください` (please use) or `ご検討ください` (please consider) to soften the tone and invite the user to take the action without feeling forced.
