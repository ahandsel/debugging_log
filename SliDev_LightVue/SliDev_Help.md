# npx slidev --help

slidev [args]

## Commands

| Commands                  | Notes                           |
| ------------------------- | ------------------------------- |
| slidev [entry]            | Start a local server for Slidev |
| slidev build [entry]      | Build hostable SPA              |
| slidev format [entry]     | Format the markdown file        |
| slidev theme [subcommand] | Theme related operations        |
| slidev export [entry]     | Export slides to PDF            |

## Positions
[entry]
  * path to the slides markdown entry
  * [string] [default: "slides.md"]

## Options

| Options   | Purpose                                               | Specs                                                                   |
| --------- | ----------------------------------------------------- | ----------------------------------------------------------------------- |
| --theme   | override theme                                        | [string]                                                                |
| --port    | port                                                  | [number]                                                                |
| --open    | open in browser                                       | [boolean] [default: false]                                              |
| --remote  | listen public host and enable remote control          | [boolean] [default: false]                                              |
| --log     | log level                                             | [string] [choices: "error", "warn", "info", "silent"] [default: "warn"] |
| --force   | force the optimizer to ignore the cache and re-bundle | [boolean] [default: false]                                              |
| --help    | Show help                                             | [boolean]                                                               |
| --version | Show version number                                   | [boolean]                                                               |
