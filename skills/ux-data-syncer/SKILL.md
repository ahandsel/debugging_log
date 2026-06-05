---
name: ux-data-syncer
description: Push and pull Phrase Strings translation keys using the repo scripts in `scripts/`. Parses natural-language intent (pull/push, project, branch, flags) into a concrete command, shows the planned invocation, confirms with the user, and runs it. Use when the user asks to push, pull, sync, upload, or download Phrase keys, translations, or copy for a project listed in `phrase-data/phrase-project-ids.csv`.
---

# UX data syncer


## Overview

Wrap the Phrase CLI helper scripts so the user does not need to remember flags. Translate the user request into a single `scripts/phrase-pull.sh` or `scripts/phrase-push.sh` invocation, confirm, and run.

The skill never bypasses the underlying scripts. It only resolves arguments, validates inputs, and runs the script in the repository root so logs land in `phrase-data.log` in the working directory.


## Scripts and entry points

* `scripts/phrase-pull.sh` - pull translation files for one project or all projects in the CSV.
* `scripts/phrase-push.sh` - push translation files for one project or all projects; supports `--delete` and `--tag`.
* `scripts/phrase-setup.sh` - one-shot setup for Homebrew, Phrase CLI, and `PHRASE_ACCESS_TOKEN`.
* `scripts/phrase-env.sh` - sourced helper for `.env` and token handling (not invoked directly).

Always run scripts from the repository root so the default `phrase-data/` folder and `phrase-data.log` resolve correctly:

```shell
./scripts/phrase-pull.sh ...
./scripts/phrase-push.sh ...
```


## Known projects

Projects come from `phrase-data/phrase-project-ids.csv`. The `project_name` column maps to a `.yaml` config file in `phrase-data/`. Current projects:

* `auth`
* `dashboard`
* `dashboardMobile`
* `email`
* `general`
* `id`
* `notice`
* `noticeMobile`

Each project also has a sibling `*-tags` config (e.g. `auth-tags`) used for tag-only sync. Treat `*-tags` configs as advanced usage; only pass them when the user explicitly asks.

Use `ALL` (uppercase, case-sensitive) as the `--project` value to push every project listed in the CSV. `ALL` is only supported by `phrase-push.sh`. For `phrase-pull.sh`, omit `--project` to pull every project from the CSV.


## Required Input

The user request. Accept short natural-language phrasings such as:

* "pull id"
* "pull dashboard on the 600-ai-chat-layout branch"
* "push auth"
* "push id with delete on cleanupOldKeys"
* "push general with tag 39-audit-logs"
* "push all projects on newFeature"

Map the request to:

* `action` - `pull` or `push`
* `project` - one of the known project names, or `ALL` (push only)
* `branch` - default `main` unless the user specifies a branch
* Optional `--delete` (push only)
* Optional `--tag <value>` (push only)
* Optional `--folder <dir>` if the user wants a non-default folder


## Workflow

1. **Identify intent.** Determine `action`, `project`, `branch`, and any optional flags from the user message. If any required value is ambiguous, ask one short clarifying question with 2-3 suggested answers before continuing. Never guess the project or branch.
2. **Validate the project.** Confirm the project exists in `phrase-data/phrase-project-ids.csv` and that `phrase-data/<project>.yaml` exists. For `pull` with no project, skip this check; the script reads the CSV itself. For push `ALL`, skip the per-project check; the script handles it.
3. **Check the environment.** Verify that:
   * The `phrase` CLI is on `PATH`: `command -v phrase`.
   * A `.env` file exists at the repo root with a `PHRASE_ACCESS_TOKEN` line, or the env var is already exported.

   If either check fails, do not run the script. Tell the user to run setup once:

   ```bash
   ./scripts/phrase-setup.sh
   ```

   For only the CLI: `./scripts/phrase-setup.sh --phrase`. For only the token: `./scripts/phrase-setup.sh --token`. Stop and let the user run setup before re-invoking the skill.

4. **Build the command.** Construct the exact command line using the rules in [Command construction][]. Run from the repo root.
5. **Show plan and confirm.** Display the command verbatim plus a short summary (action, project, branch, flags). Ask one yes/no confirmation question. Do not run anything before the user confirms.
6. **Run the script.** Execute the command in the foreground so the user sees prompts (the push script prompts for delete confirmation, tag confirmation, and the final push confirmation interactively). Do not pipe stdin or wrap with `yes`.
7. **Report results.** When the script finishes, summarize: success or failure, branch, project(s), the `phrase-data.log` path the script printed, and any pulled/pushed file changes the user should review or commit.

[Command construction]: #command-construction


## Command construction

Default folder is `phrase-data/`. Default branch is `main`. Only pass `--branch` when the user asked for a non-default branch (the scripts treat `main` as the default already).


### Pull

```shell
./scripts/phrase-pull.sh \
  [--project PROJECT_NAME] \
  [--branch BRANCH] \
  [--folder DIR]
```

* Omit `--project` to pull every project in the CSV.
* Pass `--project PROJECT_NAME` (without the `.yaml` extension; the script appends it) for a single project.
* Pass `--branch BRANCH` only when the user requested a non-`main` branch.


### Push

```shell
./scripts/phrase-push.sh \
  --project PROJECT_NAME_OR_ALL \
  [--branch BRANCH] \
  [--delete] \
  [--tag TAG] \
  [--folder DIR]
```

* `--project` is required. Use `ALL` (uppercase) for every project in the CSV.
* Add `--delete` only when the user asks to remove remote keys not in local files. Warn the user that this deletes keys from Phrase. The push script will also prompt interactively.
* Add `--tag "<value>"` only when the user asks. Spaces in the tag are converted to dashes by the script. The push script will prompt interactively to confirm tagging.
* After a successful push, the script automatically runs `phrase-pull.sh` to sync local files back. No extra command needed.


### Examples

```shell
# Pull every project on main
./scripts/phrase-pull.sh

# Pull a single project on a feature branch
./scripts/phrase-pull.sh --project id --branch 600-ai-chat-layout

# Push a single project on main
./scripts/phrase-push.sh --project auth

# Push and delete remote-only keys on a cleanup branch
./scripts/phrase-push.sh --project id --branch cleanupOldKeys --delete

# Push all projects on a feature branch
./scripts/phrase-push.sh --project ALL --branch newFeature

# Push with a tag applied to every key
./scripts/phrase-push.sh --project general --branch 39-audit-logs --tag "39-audit-logs"
```


## Guardrails

* Always verify with the user before running phrase-push.sh since it modifies data on Phrase. The script has its own interactive confirmations; do not try to bypass them with `yes` or by piping stdin.
* Never invent a project name. Validate against `phrase-data/phrase-project-ids.csv`.
* Never run `phrase-push.sh --delete` without explicit user intent for that run. The script also enforces an interactive confirmation; do not try to suppress it.
* Never run `phrase-push.sh --project ALL` unless the user explicitly said "all" or "every project". Treat ambiguous requests as single-project.
* Never pass `PHRASE_ACCESS_TOKEN` on the command line or echo it.
* Never edit `.env`. If the token is missing, hand off to `phrase-setup.sh`.
* Do not run scripts from inside `scripts/` or a subfolder; always `cd` to the repo root first so default paths resolve.
* If `pnpm lint` style checks are needed afterwards (for example, the pull formatted HTML files), let the user decide whether to lint or commit.


## Output format

Before running, show one fenced block with the command and a short summary:

```markdown
Plan:

- Action: <pull|push>
- Project: <name|ALL|all from CSV>
- Branch: <branch or main>
- Flags: <none | --delete | --tag "..." | etc.>

Command:

    <exact command line>
```

Then ask: "Run this now? [y/N]".

After running, show one short summary block: success/failure, what changed under `phrase-data/`, the log path, and any next step the user should take (e.g., review the diff, commit the pulled files).
