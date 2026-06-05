---
name: ux-copy-en-review skill memory
description: Project structure notes for English UX copy review - where localized strings and style sources live.
type: project
---

# ux-copy-en-review skill MEMORY


## Where localized strings live

* CSV files in `phrase-data/` hold localized strings, named `{product}-{lang}-copy.csv`.
* EN files use the column format `key_name,en,comment`; JA files use `key_name,ja,comment`.
* Markdown copy tables (the usual input for this skill) carry an `English` or `EN` column alongside `Key`, `Description`, and `Notes`.

**Why:** Knowing the file naming and column layout up front avoids editing the wrong cells or product.

**How to apply:** Confirm the product and language from the file name before editing, and edit only the English cells.


## Style sources

* Primary English rules: `kws-writing-style-guide/style-guide-english.md`.
* Official glossary and terminology: `kws-writing-style-guide/translation.csv`.

**How to apply:** Defer to these over general UX writing habits; the style guide already covers voice, capitalization, punctuation, inclusive language, and global English in depth.
