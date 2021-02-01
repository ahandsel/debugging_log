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
