# Skills

This folder contains local Codex skills used by this repository.

## Usage

To use a skill, enter the skill's name in the AI interface (VS Code extension, terminal prompt, or desktop app) with the appropriate prefix for AI tool.

| Tool           | Input       | Example                                                 |
| -------------- | ----------- | ------------------------------------------------------- |
| Claude         | /skill-name | `/ai-commit --auto` or `/extract-copy-from-figma <URL>` |
| Codex          | $skill-name | `$ai-commit --auto` or `$extract-copy-from-figma <URL>` |
| GitHub Copilot | @skill-name | `@ai-commit --auto` or `@extract-copy-from-figma <URL>` |

> [!TIP]
> Ask the AI `What does [skill name] do?` to get a description of the skill's functionality and usage instructions.

## Available skills

### Daily utility skills

| Skill                     | Description                                                                                                                                                                                                        | Last updated (UTC) |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------ |
| [`ai-commit`][]           | Auto-gather git changes, confirm scope with the user, and draft a commit title and message following the project commit style guide.                                                                               | 2026-06-03 13:30   |
| [`general-en-polisher`][] | Polishes Markdown files to enforce the repo core writing rules (straight quotes, no contractions, the Oxford comma, sentence case headings, plain hyphens, and more), then runs `link-polisher` on the same files. | 2026-06-03 09:37   |
| [`git-pull-main`][]       | Bring the current git branch up to date with commits from the main branch (pull, rebase, or merge main).                                                                                                           | 2026-03-31 08:36   |

[`ai-commit`]: ./ai-commit/SKILL.md
[`general-en-polisher`]: ./general-en-polisher/SKILL.md
[`git-pull-main`]: ./git-pull-main/SKILL.md

### Repository maintenance skills

| Skill                         | Description                                                                                                                                                                                    | Last updated (UTC) |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| [`file-folder-name-linter`][] | Lints repository file and folder names against three fixed rules (`notes/` date prefix, `.yaml` not `.yml`, kebab-case) via `pnpm lint-naming`, with style-guide pointers for the reviewer.    | 2026-06-05 00:00   |
| [`readme-maintainer`][]       | Audits the repository for missing or outdated folder `README.md` files and creates or updates them.                                                                                            | 2026-06-03 04:16   |
| [`script-auditor`][]          | Audits helper scripts in `scripts/` and `skills/*/scripts/` against the `AGENTS.md` script guidelines (no Python, prefer `.mjs` or zsh, require `--help`, a notes section, and status emojis). | 2026-06-04 01:36   |
| [`skill-allowlist-syncer`][]  | Fully syncs the `Skill(<name>)` entries in `.claude/settings.json` under `permissions.allow` with the skills in the repo `skills/` folder, adding new skills and removing deleted ones.        | 2026-06-01 09:37   |
| [`ux-key-reviewer`][]         | Reviews Phrase key naming and related terminology consistency.                                                                                                                                 | 2026-02-25 12:13   |

[`file-folder-name-linter`]: ./file-folder-name-linter/SKILL.md
[`readme-maintainer`]: ./readme-maintainer/SKILL.md
[`script-auditor`]: ./script-auditor/SKILL.md
[`skill-allowlist-syncer`]: ./skill-allowlist-syncer/SKILL.md
[`ux-key-reviewer`]: ./ux-key-reviewer/SKILL.md

### UX copywriting and localization skills

| Skill                         | Description                                                                                                                                                          | Last updated (UTC) |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| [`extract-copy-from-figma`][] | Extracts UX copy and layer names from a Figma node into a Markdown table for downstream review and localization.                                                     | 2026-06-03 13:14   |
| [`ux-copy-en-review`][]       | Reviews and auto-edits English UX copy in Markdown tables, with TODO comments for uncertain cases.                                                                   | 2026-06-03 13:14   |
| [`ux-copy-ja-review`][]       | Reviews and improves Japanese UX copy.                                                                                                                               | 2026-06-03 13:14   |
| [`ux-data-syncer`][]          | Push and pull Phrase Strings keys via `scripts/phrase-pull.sh` and `scripts/phrase-push.sh`, parsing intent into a confirmed command.                                | 2026-06-02 05:25   |
| [`ux-en-to-ja-localize`][]    | Localizes Japanese UX copy in `phrase-data` project CSV files using validated project and key workflows.                                                             | 2026-06-03 13:14   |
| [`ux-key-searcher`][]         | Searches highlighted English or Japanese UX copy across the `phrase-data` CSV files and reuses the matching Phrase key, description, and a `Reused` note.            | 2026-06-03 14:18   |
| [`ux-task-to-phrase`][]       | Pushes pending `TODO:` English UX copy from a `tasks/` Markdown file into the matching `phrase-data` English and tag CSV files, then prints the `pnpm` push command. | 2026-06-04 04:10   |

[`extract-copy-from-figma`]: ./extract-copy-from-figma/SKILL.md
[`ux-copy-en-review`]: ./ux-copy-en-review/SKILL.md
[`ux-copy-ja-review`]: ./ux-copy-ja-review/SKILL.md
[`ux-data-syncer`]: ./ux-data-syncer/SKILL.md
[`ux-en-to-ja-localize`]: ./ux-en-to-ja-localize/SKILL.md
[`ux-key-searcher`]: ./ux-key-searcher/SKILL.md
[`ux-task-to-phrase`]: ./ux-task-to-phrase/SKILL.md

### Other utility skills

| Skill                | Description                                                                                                                                                      | Last updated (UTC) |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| [`gh-cli`][]         | Interact with GitHub repositories using the GitHub CLI (gh). Covers PRs, issues, releases, workflow runs, and branch operations.                                 | 2026-05-14 06:13   |
| [`gh-pr-reporter`][] | Fetches every comment on a GitHub PR (reviews, inline review comments, and general comments) and emits a single consolidated Markdown report.                    | 2026-06-04 14:30   |
| [`link-polisher`][]  | Rewrites raw URLs in Markdown files as Markdown links with a human-readable label fetched from the source (Figma file name, GitHub issue or pull request title). | 2026-06-03 04:16   |

[`gh-cli`]: ./gh-cli/SKILL.md
[`gh-pr-reporter`]: ./gh-pr-reporter/SKILL.md
[`link-polisher`]: ./link-polisher/SKILL.md

### Figma official skills

Vendored from the official `figma@claude-plugins-official` plugin (Figma MCP Server Guide v2.2.12). See [doc-figma-mcp.md](/doc-figma-mcp.md) for MCP server setup:

| Skill                        | Description                                                                                                                                                             | Last updated (UTC) |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| [`figma-use`][]              | Mandatory prerequisite before every `use_figma` tool call (write actions or JavaScript execution in a Figma file).                                                      | 2026-05-25 09:49   |
| [`figma-generate-design`][]  | Translate an application page, view, or multi-section layout from code into Figma. Pair with `figma-use`.                                                               | 2026-05-25 09:49   |
| [`figma-generate-library`][] | Build or update a design system in Figma from a codebase (variables, tokens, components, theming). Pair with `figma-use`.                                               | 2026-05-25 09:49   |
| [`figma-code-connect`][]     | Create and maintain Figma Code Connect template files (`.figma.ts` / `.figma.js`) that map Figma components to code.                                                    | 2026-05-25 09:49   |
| [`figma-create-new-file`][]  | Mandatory prerequisite before every `create_new_file` tool call (new Design, FigJam, or Slides file).                                                                   | 2026-05-25 09:49   |
| [`figma-generate-diagram`][] | Mandatory prerequisite before every `generate_diagram` tool call. Routes flowcharts, ERDs, sequence diagrams, gantt charts, and other Mermaid-based diagrams to FigJam. | 2026-05-25 09:49   |
| [`figma-use-figjam`][]       | FigJam-specific guidance for `use_figma`. Compose with `figma-use`.                                                                                                     | 2026-05-25 09:49   |
| [`figma-use-slides`][]       | Slides-specific guidance for `use_figma`. Compose with `figma-use`.                                                                                                     | 2026-05-25 09:49   |

[`figma-use`]: ./figma-use/SKILL.md
[`figma-generate-design`]: ./figma-generate-design/SKILL.md
[`figma-generate-library`]: ./figma-generate-library/SKILL.md
[`figma-code-connect`]: ./figma-code-connect/SKILL.md
[`figma-create-new-file`]: ./figma-create-new-file/SKILL.md
[`figma-generate-diagram`]: ./figma-generate-diagram/SKILL.md
[`figma-use-figjam`]: ./figma-use-figjam/SKILL.md
[`figma-use-slides`]: ./figma-use-slides/SKILL.md
