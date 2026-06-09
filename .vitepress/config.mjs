import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Debugging Log',
  description:
    'A personal grab-bag of debugging notes and tutorial walkthroughs.',
  base: '/debugging_log/',
  cleanUrls: true,
  lastUpdated: true,
  ignoreDeadLinks: true,

  head: [
    [
      'link',
      { rel: 'icon', type: 'image/png', href: '/debugging_log/duck.png' },
    ],
  ],

  srcExclude: [
    'AGENTS.md',
    'LICENSE',
    'README.md',
    'node_modules/**',
    'skills/**',
    'slidev-lightvue/slidev-basic/**',
  ],

  markdown: {
    attrs: { disable: true },
  },

  themeConfig: {
    nav: [
      { text: 'Home  ✍️', link: '/' },
      {
        text: 'Tokyo-Geek  🗼',
        link: 'https://ahandsel.github.io/tokyo-geek/',
      },
      {
        text: 'Tokyo Hiker  🥾',
        link: 'https://ahandsel.github.io/Tokyo_Hiker/',
      },
      { text: 'Feeling lucky? 🎲', link: '/donate' },
    ],

    sidebar: [
      {
        text: 'Was this helpful?',
        items: [
          {
            text: 'Want to gift me a cup of coffee ☕',
            link: 'https://ko-fi.com/ahandsel',
          },
        ],
      },
      {
        text: 'macOS & Setup',
        collapsed: false,
        items: [
          { text: 'Mac Setup', link: '/mac-setup' },
          { text: 'macOS Commands', link: '/macos-commands' },
          { text: 'Hello Mac', link: '/hello-mac' },
          { text: 'Alfred App Setup', link: '/alfred-app-setup' },
          { text: 'Brew List', link: '/brew-list' },
          { text: 'US Apps', link: '/us-apps' },
          { text: 'Japan Apps', link: '/japan-apps' },
          { text: 'Santa Cruz / UCSC', link: '/santa-cruz-ucsc' },
        ],
      },
      {
        text: 'Dev Tools',
        collapsed: false,
        items: [
          { text: 'VS Code Notes', link: '/vs-code/vs-code-notes' },
          { text: 'VS Code Notes (JP)', link: '/vs-code/vs-code-notes-jp' },
          { text: 'VS Code Start', link: '/vs-code/vs-code-start' },
          {
            text: 'Open in VS Code from Finder (Mac)',
            link: '/vs-code/open-in-vs-code-from-finder-mac',
          },
          { text: 'Chrome', link: '/chrome' },
          { text: 'GitHub Actions', link: '/github-actions' },
          { text: 'Install Node', link: '/install-node' },
          { text: 'npm log', link: '/npm-log' },
        ],
      },
      {
        text: 'Markdown & Writing',
        collapsed: false,
        items: [
          { text: 'Markdown', link: '/markdown' },
          { text: 'Markdown Tree', link: '/markdown-tree' },
          { text: 'Markdown ESLint', link: '/markdown-eslint/markdown-eslint' },
          { text: 'PDF to Markdown', link: '/pdf-to-md' },
          { text: 'Pandoc', link: '/pandoc' },
          { text: 'NotePlan Template', link: '/noteplan-template' },
        ],
      },
      {
        text: 'Kintone & Cybozu',
        collapsed: false,
        items: [
          { text: 'Cybozu', link: '/cybozu' },
          { text: 'Kintone Debugging', link: '/kintone-debugging' },
          {
            text: 'Kintone Translate',
            link: '/kintone-scripts/kintone-translate',
          },
        ],
      },
      {
        text: 'Zoom & Meetings',
        collapsed: false,
        items: [
          { text: 'Zoom', link: '/zoom' },
          { text: 'Zoom CheatSheet', link: '/zoom-cheat-sheet' },
          { text: 'Zoom (JP)', link: '/zoom-jp' },
          { text: 'Shokz OpenComm + Zoom', link: '/shokz-opencomm-zoom' },
        ],
      },
      {
        text: 'Japanese & Translation',
        collapsed: false,
        items: [
          { text: 'Japanese Unicode', link: '/japanese-unicode' },
          {
            text: 'Google Translate API',
            link: '/google-translate-api/google-translate-api',
          },
        ],
      },
      {
        text: 'Languages & Tools',
        collapsed: false,
        items: [
          { text: 'Ruby', link: '/ruby' },
          { text: 'Learning Ruby', link: '/learning-ruby/ruby' },
          {
            text: 'Docker Debugging',
            link: '/learning-docker/docker-debugging',
          },
          {
            text: 'Docker Mac Commands',
            link: '/learning-docker/docker-mac-commands',
          },
          {
            text: 'Docker Tutorial A',
            link: '/learning-docker/tutorial-a-notes',
          },
          { text: 'gulp.js + React', link: '/gulpjs-react/gulpjs-react' },
          { text: 'RegEx', link: '/regex' },
          { text: 'CentOS 7', link: '/centos7' },
        ],
      },
      {
        text: 'Web & Sheets',
        collapsed: false,
        items: [
          {
            text: 'Getting Started: Website',
            link: '/getting-started-website',
          },
          { text: 'Google Sheet', link: '/google-sheet' },
          {
            text: 'GSheets Web Scraper',
            link: '/gsheets-web-scraper/gsheets-web-scraper',
          },
          { text: 'Random GSheet', link: '/random-gsheet' },
        ],
      },
      {
        text: 'Slides & Media',
        collapsed: false,
        items: [
          { text: 'DaVinci Resolve', link: '/davinci-resolve' },
          { text: 'Slide Backgrounds', link: '/slide-backgrounds' },
          {
            text: 'SliDev + LightVue',
            link: '/slidev-lightvue/slidev-lightvue',
          },
          { text: 'SliDev Basic', link: '/slidev-lightvue/slidev-basic' },
          { text: 'SliDev Help', link: '/slidev-lightvue/slidev-help' },
          {
            text: 'SliDev Debugging Log',
            link: '/slidev-lightvue/slidev-debugging-log',
          },
        ],
      },
      {
        text: 'Miscellaneous',
        collapsed: false,
        items: [
          { text: 'Keyboard Notes', link: '/keyboard-notes/keyboard-notes' },
          { text: 'Dev Doc Project', link: '/dev-doc-project' },
          { text: 'Random', link: '/random' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ahandsel/debugging_log' },
      {
        icon: {
          svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-coffee"><path d="M10 2v2"/><path d="M14 2v2"/><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"/><path d="M6 2v2"/></svg>`,
        },
        link: 'https://ko-fi.com/ahandsel',
      },
    ],

    editLink: {
      pattern: 'https://github.com/ahandsel/debugging_log/edit/master/:path',
      text: 'Edit this page on GitHub',
    },

    search: {
      provider: 'local',
    },

    outline: {
      level: [2, 3],
    },
  },
});
