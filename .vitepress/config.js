module.exports = {
  title: 'StarShineMC Server',
  description: '星创StarShineMC服务器公告区',
  base: '/',
  // 添加忽略死链接配置，但在修复所有死链接后应该移除此配置
  ignoreDeadLinks: true,
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '公告', link: '/docs/news/' }
    ]
  }
}