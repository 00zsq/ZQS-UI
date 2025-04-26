import { defineConfig } from 'vitepress'
import path from 'path' // 引入 path 模块

export default defineConfig({
  title: "ZQS-UI",
  description: "a vue2 and vue3 ui",
  head: [
    ['link', { rel: 'icon', href: '/images/logo.png'}]
  ],
  themeConfig: {
    logo: '/images/logo.png', 
    nav: [
      { text: '首页', link: '/' },
      { text: 'zqs-ui2组件', link: '/components/zqs-ui2/zqs-button' },
      { text: 'zqs-ui3组件', link: '/components/zqs-ui3/zqs-button' },
    ],

    sidebar: {
      '/guide/zqs-ui2/': [
        {
          text: 'ZQS-UI2 指南',
          items: [
            { text: '安装', link: '/guide/zqs-ui2/install' },
            { text: '快速开始', link: '/guide/zqs-ui2/use' }
          ]
        }
      ],
      '/guide/zqs-ui3/': [
        {
          text: 'ZQS-UI3 指南',
          items: [
            { text: '安装', link: '/guide/zqs-ui3/install' },
            { text: '快速开始', link: '/guide/zqs-ui3/use' }
          ]
        }
      ],
      '/components/zqs-ui2/': [
        {
          text: '基础组件',
          items: [
            { text: 'zqs-button', link: '/components/zqs-ui2/zqs-button' }
          ]
        },
        {
          text: '表单组件',
          items: [
            { text: 'zqs-checkbox', link: '/components/zqs-ui2/zqs-checkbox' },
            { text: 'zqs-input', link: '/components/zqs-ui2/zqs-input' },
            { text: 'zqs-select', link: '/components/zqs-ui2/zqs-select' }
          ]
        },
        {
          text: '数据展示',
          items: [
            { text: 'zqs-table', link: '/components/zqs-ui2/zqs-table' }
          ]
        },
        {
          text: '导航组件',
          items: [
            { text: 'zqs-backTop', link: '/components/zqs-ui2/zqs-backTop' },
            { text: 'zqs-header', link: '/components/zqs-ui2/zqs-header' }
          ]
        },
        {
          text: '反馈组件',
          items: [
            { text: 'zqs-alert', link: '/components/zqs-ui2/zqs-alert' }
          ]
        }
      ],
      '/components/zqs-ui3/': [
        {
          text: '基础组件',
          items: [
            { text: 'zqs-button', link: '/components/zqs-ui3/zqs-button' }
          ]
        },
        {
          text: '表单组件',
          items: [
            { text: 'zqs-checkbox', link: '/components/zqs-ui3/zqs-checkbox' },
            { text: 'zqs-input', link: '/components/zqs-ui3/zqs-input' },
            { text: 'zqs-select', link: '/components/zqs-ui3/zqs-select' }
          ]
        },
        {
          text: '数据展示',
          items: [
            { text: 'zqs-table', link: '/components/zqs-ui3/zqs-table' },
            { text: 'zqs-card', link: '/components/zqs-ui3/zqs-card' },
          ]
        },
        {
          text: '导航组件',
          items: [
            { text: 'zqs-backTop', link: '/components/zqs-ui3/zqs-backTop' },
            { text: 'zqs-header', link: '/components/zqs-ui3/zqs-header' },
            { text: 'zqs-menu', link: '/components/zqs-ui3/zqs-menu' }
          ]
        },
        {
          text: '反馈组件',
          items: [
            { text: 'zqs-alert', link: '/components/zqs-ui3/zqs-alert' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/00zsq/ZQS-UI' }
    ]
  },
  vite: {
    resolve: {
      alias: {
        '@packages': path.resolve(__dirname, '../../packages') // 根据实际路径调整
      }
    },
    css: {
      css: {
        minify: false,
      },
    }
  },
  base: '/ZQS-UI/'
})
