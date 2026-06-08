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
    'SliDev_LightVue/SliDev_Basic/**',
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
          { text: 'Mac Setup', link: '/Mac_Setup' },
          { text: 'macOS Commands', link: '/MacOS_Commads' },
          { text: 'Hello Mac', link: '/Hello_Mac' },
          { text: 'Alfred App Setup', link: '/AlfredApp_Setup' },
          { text: 'Brew List', link: '/brew_list' },
          { text: 'US Apps', link: '/US_Apps' },
          { text: 'Japan Apps', link: '/Japan_Apps' },
          { text: 'Santa Cruz / UCSC', link: '/SantaCruz_UCSC' },
        ],
      },
      {
        text: 'Dev Tools',
        collapsed: false,
        items: [
          { text: 'VS Code Notes', link: '/VS_Code/VS_Code_Notes' },
          { text: 'VS Code Notes (JP)', link: '/VS_Code/VS_Code_Notes_JP' },
          { text: 'VS Code Start', link: '/VS_Code/VS_Code_Start' },
          {
            text: 'Open in VS Code from Finder (Mac)',
            link: '/VS_Code/Open in VS Code from Finder (Mac)',
          },
          { text: 'Chrome', link: '/Chrome' },
          { text: 'GitHub Actions', link: '/GitHub_Actions' },
          { text: 'Install Node', link: '/Install_Node' },
          { text: 'npm log', link: '/npm_log' },
        ],
      },
      {
        text: 'Markdown & Writing',
        collapsed: false,
        items: [
          { text: 'Markdown', link: '/Markdown' },
          { text: 'Markdown Tree', link: '/MarkdownTree' },
          { text: 'Markdown ESLint', link: '/Markdown ESLint/MarkdownESLint' },
          { text: 'PDF to Markdown', link: '/PDF_To_MD' },
          { text: 'Pandoc', link: '/Pandoc' },
          { text: 'NotePlan Template', link: '/NotePlan_Template' },
        ],
      },
      {
        text: 'Kintone & Cybozu',
        collapsed: false,
        items: [
          { text: 'Cybozu', link: '/Cybozu' },
          { text: 'Kintone Debugging', link: '/Kintone_Debugging' },
          {
            text: 'Kintone Translate',
            link: '/Kintone_Scripts/Kintone_Translate',
          },
        ],
      },
      {
        text: 'Zoom & Meetings',
        collapsed: false,
        items: [
          { text: 'Zoom', link: '/Zoom' },
          { text: 'Zoom CheatSheet', link: '/Zoom_CheatSheet' },
          { text: 'Zoom (JP)', link: '/Zoom_JP' },
          { text: 'Shokz OpenComm + Zoom', link: '/Shokz_OpenComm_Zoom' },
        ],
      },
      {
        text: 'Japanese & Translation',
        collapsed: false,
        items: [
          { text: 'Japanese Unicode', link: '/Japanese_Unicode' },
          {
            text: 'Google Translate API',
            link: '/GoogleTranslateAPI/GoogleTranslateAPI',
          },
        ],
      },
      {
        text: 'Languages & Tools',
        collapsed: false,
        items: [
          { text: 'Ruby', link: '/Ruby' },
          { text: 'Learning Ruby', link: '/Learning_Ruby/Ruby' },
          {
            text: 'Docker Debugging',
            link: '/Learning_Docker/Docker_Debugging',
          },
          {
            text: 'Docker Mac Commands',
            link: '/Learning_Docker/Docker_Mac_Commands',
          },
          {
            text: 'Docker Tutorial A',
            link: '/Learning_Docker/Tutorial_A_Notes',
          },
          { text: 'gulp.js + React', link: '/gulpjs_react/gulpjs_react' },
          { text: 'RegEx', link: '/RegEx' },
          { text: 'CentOS 7', link: '/centos7' },
        ],
      },
      {
        text: 'Web & Sheets',
        collapsed: false,
        items: [
          {
            text: 'Getting Started: Website',
            link: '/Getting_Started_Website',
          },
          { text: 'Google Sheet', link: '/GoogleSheet' },
          {
            text: 'GSheets Web Scraper',
            link: '/GSheets_WebScrapper/GSheets_WebScrapper',
          },
          { text: 'Random GSheet', link: '/Random_GSheet' },
        ],
      },
      {
        text: 'Slides & Media',
        collapsed: false,
        items: [
          { text: 'DaVinci Resolve', link: '/DaVinchi_Resolve' },
          { text: 'Slide Backgrounds', link: '/Slide_Backgrounds' },
          {
            text: 'SliDev + LightVue',
            link: '/SliDev_LightVue/SliDev_LightVue',
          },
          { text: 'SliDev Basic', link: '/SliDev_LightVue/SliDev_Basic' },
          { text: 'SliDev Help', link: '/SliDev_LightVue/SliDev_Help' },
          {
            text: 'SliDev Debugging Log',
            link: '/SliDev_LightVue/SliDev_Debugging_Log',
          },
        ],
      },
      {
        text: 'Miscellaneous',
        collapsed: false,
        items: [
          { text: 'Keyboard Notes', link: '/keyboard-notes/keyboard-notes' },
          { text: 'Dev Doc Project', link: '/dev-doc-project' },
          { text: 'Random', link: '/Random' },
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
