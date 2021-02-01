# Personal Markdown Lint Configuration

## How to change Markdownlint settings in Visual Studio Code
1. In Visual Studio Code, open `File` -> `Preferences` -> `Settings`
2. Seach: `markdownlint.config`
3. Under `Markdownlint: Config`, Click on `Edit in settings.json`
4. Edit the JSON Setting File with the configuration

   ```JSON
   "markdownlint.config": {
     "MD004": {
       "style": "consistent"
     },
     "MD007": {
       "indent": 2,
       "start_indented": true
     },
     "MD013": false,
     ...
   }
   ```
<!-- markdownlint-capture -->
<!-- markdownlint-disable -->

## Quick ways to Enable / Disable rules within a file
Add one of the following markers to the appropriate place:

| Type                                                     | Marker                                                |
| -------------------------------------------------------- | ----------------------------------------------------- |
| Disable all rules                                        | `<!-- markdownlint-disable -->`                       |
| Disable all rules for the next line only                 | `<!-- markdownlint-disable-next-line -->`             |
| Disable one or more rules by name                        | `<!-- markdownlint-disable MD001 MD005 -->`           |
| Disable one or more rules by name for the next line only | `<!-- markdownlint-disable-next-line MD001 MD005 -->` |
| Enable all rules                                         | `<!-- markdownlint-enable -->` <!-- markdownlint-disable -->                       |
| Enable one or more rules by name                         | `<!-- markdownlint-enable MD001 MD005 -->`            |
| -                                                        | -                                                     |
| Capture the current rule configuration                   | `<!-- markdownlint-capture -->`                       |
| Restore the captured rule configuration                  | `<!-- markdownlint-restore -->`                       |

To temporarily disable rule(s), then restore the former configuration:

  ``` md
  <!-- markdownlint-capture -->
  <!-- markdownlint-disable -->
  any violations you want
  <!-- markdownlint-restore -->
  ```

<!-- markdownlint-restore -->

## Deviation from the default

MD004 - Unordered list style
  * style: "consistent"

MD007 - Unordered list indentation
  * Indent: 2
  * Stat Indenting

MD013 - Line length
  * false

MD022 - Headings should be surrounded by blank lines
  * false

MD024 - Multiple headers with the same content
  * false

MD032 - Lists should be surrounded by blank lines
  * false

MD033 - Inline HTML
  * false
