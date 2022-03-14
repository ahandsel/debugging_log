# Debugging Log for SliDev

## Outline <!-- omit in toc -->
<!-- markdownlint-disable MD007 -->
* [`npm run export` not workign with an playwright install error?](#npm-run-export-not-workign-with-an-playwright-install-error)
* [Slidev build with base Error: Could not resolve entry module (index.html)](#slidev-build-with-base-error-could-not-resolve-entry-module-indexhtml)
  * [Issue: Bug Report - npm run build for a MD file in a subfolder leads to an `Error: Could not resolve entry module (index.html)`](#issue-bug-report---npm-run-build-for-a-md-file-in-a-subfolder-leads-to-an-error-could-not-resolve-entry-module-indexhtml)
<!-- markdownlint-enable MD007 -->

## `npm run export` not workign with an playwright install error?

```text
❯ npm run export

> export
> slidev export

  ●■▲
  Slidev  v0.19.9 

  theme   slidev-theme-light-icons
  entry   /Users/USERNAME/Documents/GitHub/Slidev_Cybozu/Discourse_URL/slides.md


browserType.launch: Executable doesn't exist at /Users/USERNAME/Library/Caches/ms-playwright/chromium-901522/chrome-mac/Chromium.app/Contents/MacOS/Chromium
╔═════════════════════════════════════════════════════════════════════════╗
║ Looks like Playwright Test or Playwright was just installed or updated. ║
║ Please run the following command to download new browsers:              ║
║                                                                         ║
║     npx playwright install                                              ║
║                                                                         ║
║ <3 Playwright Team                                                      ║
╚═════════════════════════════════════════════════════════════════════════╝
    at exportSlides (/Users/USERNAME/Documents/GitHub/Slidev_Cybozu/Discourse_URL/node_modules/@slidev/cli/dist/export-UU2AY26K.js:65:34)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async Object.handler (/Users/USERNAME/Documents/GitHub/Slidev_Cybozu/Discourse_URL/node_modules/@slidev/cli/dist/cli.js:257:12) {
  name: 'Error'
}
```

Attempts:
  * Removing the cache folder on `/Users/username/Library/Caches/ms-playwright`
  * `npm i -D @playwright/test`
  * `npx playwright install`
  * `yarn add playwright-chromium`
  * `npm add playwright-chromium`

Solution:
  * Clean install of slidev (do not duplicate old project)
  * `npm init slidev`
  * `npx slidev export`
  * `npm i playwright-chromium`
  * `npx slidev export`
  * --> exported to ./slides-export.pdf

## Slidev build with base Error: Could not resolve entry module (index.html)

Attempting Command:

`npx slidev build "./slides/slidev_template.md" "--base" "/slides/slidev_template/"`

```shell
# Attempting to build a SPA with slidev
❯ npx slidev build "./slides/slidev_template.md" "--base" "/slides/slidev_template/"

  ●■▲
  Slidev  v0.27.20 

  theme   @slidev/theme-seriph
  entry   /Users/USERNAME/Documents/GitHub/Talks/slides/slidev_template.md

vite v2.8.6 building for production...
✓ 0 modules transformed.
Could not resolve entry module (index.html).
Error: Could not resolve entry module (index.html).
    at error (/Users/USERNAME/Documents/GitHub/Talks/node_modules/rollup/dist/shared/rollup.js:198:30)
    at ModuleLoader.loadEntryModule (/Users/USERNAME/Documents/GitHub/Talks/node_modules/rollup/dist/shared/rollup.js:22436:20)
    at async Promise.all (index 0) {
  code: 'UNRESOLVED_ENTRY'
}
```

Test 1:
  * Moving slides.md to the root folder
  * `npx slidev build slides.md`
  * Works ✅

Test 2:
  * Renaming the slides.md to panda.md
  * `npx slidev build panda.md`
  * works ✅

Test 3:
  * Added the base option
  * `npx slidev build panda.md "--base" "/slides/slidev_template/"`
  * works ✅

Test 4:
  * Moved the panda.md to `slide_decks/panda.md`
  * `npx slidev build "slide_decks/panda.md" "--base" "/slides/slidev_template/"`
  * Error 😵

```shell
❯ npx slidev build "slide_decks/panda.md" "--base" "/slides/slidev_template/"


  ●■▲
  Slidev  v0.27.20

  theme   @slidev/theme-seriph
  entry   /Users/USERNAME/Documents/GitHub/Talks/slide_decks/panda.md


vite v2.8.6 building for production...
✓ 0 modules transformed.
Could not resolve entry module (index.html).
Error: Could not resolve entry module (index.html).
    at error (/Users/USERNAME/Documents/GitHub/Talks/node_modules/rollup/dist/shared/rollup.js:198:30)
    at ModuleLoader.loadEntryModule (/Users/USERNAME/Documents/GitHub/Talks/node_modules/rollup/dist/shared/rollup.js:22436:20)
    at async Promise.all (index 0) {
  code: 'UNRESOLVED_ENTRY'
}
```

### Issue: Bug Report - npm run build for a MD file in a subfolder leads to an `Error: Could not resolve entry module (index.html)`

#### Describe the bug <!-- omit in toc -->
When trying to run `npm run build` for a Slidev project where the `slides.md` is in a **subfolder** ends with an error.

**Attempted Command**  

```shell
npx slidev build "slide_decks/slides.md" "--base" "/slides/slidev_template/"
```

**Result**  

```shell
  ●■▲
  Slidev  v0.27.20

  theme   @slidev/theme-seriph
  entry   /Users/USERNAME/Documents/GitHub/Talks/slide_decks/slides.md


vite v2.8.6 building for production...
✓ 0 modules transformed.
Could not resolve entry module (index.html).
Error: Could not resolve entry module (index.html).
    at error (/Users/USERNAME/Documents/GitHub/Talks/node_modules/rollup/dist/shared/rollup.js:198:30)
    at ModuleLoader.loadEntryModule (/Users/USERNAME/Documents/GitHub/Talks/node_modules/rollup/dist/shared/rollup.js:22436:20)
    at async Promise.all (index 0) {
  code: 'UNRESOLVED_ENTRY'
}
```

#### Tests I have conducted <!-- omit in toc -->

Test 1:
  * Running the command when the slides.md is the root folder
  * `npx slidev build slides.md`
  * Works ✅

Test 2:
  * Renaming the slides.md to panda.md
  * `npx slidev build panda.md`
  * works ✅

Test 3:
  * Added the base option
  * `npx slidev build panda.md "--base" "/slides/slidev_template/"`
  * works ✅

Test 4:
  * Moved the panda.md to `slide_decks/panda.md`
  * `npx slidev build "slide_decks/panda.md" "--base" "/slides/slidev_template/"`
  * Error 😵

Test 5:
  * Attempt to run build command from a markdown file in a subfolder without `base` option
  * `npm run build slide_decks/panda.md`
  * Error 😵

  ```shell
  > build
  > slidev build "slide_decks/panda.md"

    ●■▲
    Slidev  v0.27.20

    theme   @slidev/theme-seriph
    entry   /Users/USERNAME/Downloads/test/slidev/slide_decks/panda.md

  vite v2.8.6 building for production...
  ✓ 0 modules transformed.
  Could not resolve entry module (index.html).
  Error: Could not resolve entry module (index.html).
      at error (/Users/USERNAME/Downloads/test/slidev/node_modules/rollup/dist/shared/rollup.js:198:30)
      at ModuleLoader.loadEntryModule (/Users/USERNAME/Downloads/test/slidev/node_modules/rollup/dist/shared/rollup.js:22436:20)
      at async Promise.all (index 0) {
    code: 'UNRESOLVED_ENTRY'
  }
  ```

#### To Reproduce <!-- omit in toc -->
Steps to reproduce the behavior:
1. Create a Slidev project: `npm init slidev`
2. Create a folder: `mkdir subfolder_test`
3. Move the `slides.md` into the folder
4. Attempt to run build: `npm run build subfolder_test/slides.md`
5. See error message in the terminal

#### Desktop / Environment <!-- omit in toc -->
  * OS: `macOS Monterey version 12.2.1`
  * Browser: `Google Chrome Version 99.0.4844.51 (Official Build) (x86_64)`
  * Slidev version: `Slidev v0.27.20`

Thank you for your time 🙇‍♂️