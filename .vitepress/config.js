module.exports = {
  title: 'StarShineMC Server',
  description: '星创StarShineMC服务器公告区',
  base: '/',
  // 移除 ignoreDeadLinks: true 配置，以便正确检测和修复所有死链接
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '公告', link: '/公告目录' }
    ]
  }
}