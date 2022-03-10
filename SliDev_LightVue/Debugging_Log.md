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
