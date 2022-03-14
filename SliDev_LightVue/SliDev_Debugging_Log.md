# Debugging Log fro SliDev

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

```shell
# Attempting to build a SPA with slidev
❯ npx slidev build "./slides/slidev_template.md" "--base" "/slides/slidev_template/"

  ●■▲
  Slidev  v0.27.20 

  theme   @slidev/theme-seriph
  entry   /Users/g001494/Documents/GitHub/Talks/slides/slidev_template.md

vite v2.8.6 building for production...
✓ 0 modules transformed.
Could not resolve entry module (index.html).
Error: Could not resolve entry module (index.html).
    at error (/Users/g001494/Documents/GitHub/Talks/node_modules/rollup/dist/shared/rollup.js:198:30)
    at ModuleLoader.loadEntryModule (/Users/g001494/Documents/GitHub/Talks/node_modules/rollup/dist/shared/rollup.js:22436:20)
    at async Promise.all (index 0) {
  code: 'UNRESOLVED_ENTRY'
}
```

