import { basename } from 'node:path'
import { defineConfig } from 'vitepress'
import MarkdownPreview from 'vite-plugin-markdown-preview'

import { head, nav, sidebar } from './configs'

const APP_BASE_PATH = basename(process.env.GITHUB_REPOSITORY || '')

export default defineConfig({
  outDir: '../dist',
  base: APP_BASE_PATH ? `/${APP_BASE_PATH}/` : '/',

  lang: 'zh-CN',
  title: '星光StarShine',
  description: '专注于现代城市建筑与真实铁路交通规划，基于Fabric 1.20.1高优化环境运行。核心特色：深度整合MTR地铁模拟系统实现真实轨道规划，WorldEdit快速建造支持中国地标复刻。采用审核制社群管理，保障高质量建筑设计，提供标准化车站指南及建造资源包。加入中文玩家社区，参与城市联建计划与交通网络设计。',
  head,

  lastUpdated: true,
  cleanUrls: true,
  
  // 忽略死链接检查，避免构建失败
  ignoreDeadLinks: true,

  /* markdown 配置 */
  markdown: {
    lineNumbers: true,
  },

  /* 主题配置 */
  themeConfig: {
    i18nRouting: false,

    logo: '/logo.png',

    nav,
    sidebar,

    /* 右侧大纲配置 */
    outline: {
      level: 'deep',
      label: '目录',
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/Xk233a/StarShine-Web' }],

    footer: {
      message: '本站由StarShine工作室二次开发，经vitepress模板修改而来<br>致谢：<a href="https://github.com/Xk233a/StarShine-Web" target="_blank" rel="noopener">原源码</a>',
      copyright: 'Copyright © 2024-present StarShineMC',
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',

    /*** 自定义配置 ***/
    visitor: {
      badgeId: 'starshine.vitepress-web',
    },

    comment: {
      repo: 'Xk233a/StarShine-Web',
      repoId: 'R_kgDOOoDDWw',
      category: 'General',
      categoryId: 'DIC_kwDOOoDDW84Cr1gl',
    },
  },

  vite: {
    plugins: [MarkdownPreview()],
  },
})
