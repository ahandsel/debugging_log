import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Debugging Log',
  description: 'A personal grab-bag of debugging notes and tutorial walkthroughs.',
  base: '/debugging_log/',
  cleanUrls: true,
  lastUpdated: true,
  ignoreDeadLinks: true,

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
      { text: 'Home', link: '/' },
      { text: 'GitHub', link: 'https://github.com/ahandsel/debugging_log' },
    ],

    sidebar: [
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
        collapsed: true,
        items: [
          { text: 'VS Code Notes', link: '/VS_Code/VS_Code_Notes' },
          { text: 'VS Code Notes (JP)', link: '/VS_Code/VS_Code_Notes_JP' },
          { text: 'VS Code Start', link: '/VS_Code/VS_Code_Start' },
          { text: 'Open in VS Code from Finder (Mac)', link: '/VS_Code/Open in VS Code from Finder (Mac)' },
          { text: 'Chrome', link: '/Chrome' },
          { text: 'GitHub Actions', link: '/GitHub_Actions' },
          { text: 'Install Node', link: '/Install_Node' },
          { text: 'npm log', link: '/npm_log' },
        ],
      },
      {
        text: 'Markdown & Writing',
        collapsed: true,
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
        collapsed: true,
        items: [
          { text: 'Cybozu', link: '/Cybozu' },
          { text: 'Kintone Debugging', link: '/Kintone_Debugging' },
          { text: 'Kintone Translate', link: '/Kintone_Scripts/Kintone_Translate' },
        ],
      },
      {
        text: 'Zoom & Meetings',
        collapsed: true,
        items: [
          { text: 'Zoom', link: '/Zoom' },
          { text: 'Zoom CheatSheet', link: '/Zoom_CheatSheet' },
          { text: 'Zoom (JP)', link: '/Zoom_JP' },
          { text: 'Shokz OpenComm + Zoom', link: '/Shokz_OpenComm_Zoom' },
        ],
      },
      {
        text: 'Japanese & Translation',
        collapsed: true,
        items: [
          { text: 'Japanese Unicode', link: '/Japanese_Unicode' },
          { text: 'Google Translate API', link: '/GoogleTranslateAPI/GoogleTranslateAPI' },
          { text: 'VS Translator Voice Guide', link: '/RandomPosts/VS_Translator_Voice_Guide' },
        ],
      },
      {
        text: 'Languages & Tools',
        collapsed: true,
        items: [
          { text: 'Ruby', link: '/Ruby' },
          { text: 'Learning Ruby', link: '/Learning_Ruby/Ruby' },
          { text: 'Docker Debugging', link: '/Learning_Docker/Docker_Debugging' },
          { text: 'Docker Mac Commands', link: '/Learning_Docker/Docker_Mac_Commands' },
          { text: 'Docker Tutorial A', link: '/Learning_Docker/Tutorial_A_Notes' },
          { text: 'gulp.js + React', link: '/gulpjs_react/gulpjs_react' },
          { text: 'RegEx', link: '/RegEx' },
          { text: 'CentOS 7', link: '/centos7' },
        ],
      },
      {
        text: 'Web & Sheets',
        collapsed: true,
        items: [
          { text: 'Getting Started: Website', link: '/Getting_Started_Website' },
          { text: 'Google Sheet', link: '/GoogleSheet' },
          { text: 'GSheets Web Scraper', link: '/GSheets_WebScrapper/GSheets_WebScrapper' },
          { text: 'Random GSheet', link: '/Random_GSheet' },
        ],
      },
      {
        text: 'Slides & Media',
        collapsed: true,
        items: [
          { text: 'DaVinci Resolve', link: '/DaVinchi_Resolve' },
          { text: 'Slide Backgrounds', link: '/Slide_Backgrounds' },
          { text: 'SliDev + LightVue', link: '/SliDev_LightVue/SliDev_LightVue' },
          { text: 'SliDev Basic', link: '/SliDev_LightVue/SliDev_Basic' },
          { text: 'SliDev Help', link: '/SliDev_LightVue/SliDev_Help' },
          { text: 'SliDev Debugging Log', link: '/SliDev_LightVue/SliDev_Debugging_Log' },
        ],
      },
      {
        text: 'Miscellaneous',
        collapsed: true,
        items: [
          { text: 'Keyboard Notes', link: '/keyboard-notes/keyboard-notes' },
          { text: 'Dev Doc Project', link: '/dev-doc-project' },
          { text: 'Random', link: '/Random' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ahandsel/debugging_log' },
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
})
