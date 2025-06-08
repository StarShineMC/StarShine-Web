---
layout: home
layoutClass: 'm-home-layout'

hero:
  name: 星创StarShineMC
  text: StarShineMC 服务器官网
  tagline: 加入属于你的 Minecraft 世界，体验创造与冒险的乐趣！
  image:
    src: /logo.png
    alt: 星创StarShineMC
  actions:
    - text: 立即加入服务器
      link: https://qm.qq.com/q/yCemxvimCQ
    - text: 资源下载中心
      link: https://pan.1fu.top/
features:
  - icon: 🏰
    title: 服务器介绍
    details: 星创StarShineMC 致力于打造自由、开放、友好的 Minecraft 社区，欢迎每一位玩家加入！
    link: /about
    linkText: 了解详情
  - icon: ⚔️
    title: 玩法特色
    details: 多样化玩法与独特内容，生存、创造、活动、任务应有尽有，等你探索！
    link: /features
    linkText: 玩法一览
  - icon: 👥
    title: 玩家社区
    details: 参与社区讨论、活动与分享，结识志同道合的伙伴，畅聊游戏与生活。
    link: /community
    linkText: 加入社区
  - icon: 🛠️
    title: 资源下载
    details: 提供客户端、补丁、材质包等相关资源，助你畅玩服务器。
    link: /downloads
    linkText: 资源中心
  - icon: 📢
    title: 最新公告
    details: 获取服务器最新动态、活动与维护公告，第一时间掌握重要信息。
    link: /news
    linkText: 查看公告
  - icon: 💬
    title: 联系与反馈
    details: 有问题或建议？欢迎通过社区或联系方式与我们交流。
    link: /contact
    linkText: 联系我们
  - icon: ⭐
    title: 加入星创StarShineMC
    details: '<small class="bottom-small">用心打造属于你的 Minecraft 世界，期待你的加入！</small>'
    link: /about
---

<!-- 贡献者区域 -->

<div class="contributors unified-style">
  <div class="contributor-group">
    <h3><span class="contributor-icon">💰</span> 赞助者</h3>
    <ul>
      <li><div class="avatar"></div>小明</li>
      <li><div class="avatar"></div>小红</li>
      <li><div class="avatar"></div>匿名玩家A</li>
    </ul>
  </div>
  <div class="contributor-group">
    <h3><span class="contributor-icon">🛠️</span> 技术支持</h3>
    <ul>
      <li><div class="avatar"></div>技术员Tom</li>
      <li><div class="avatar"></div>开发者Jerry</li>
    </ul>
  </div>
  <div class="contributor-group">
    <h3><span class="contributor-icon">🏗️</span> 建筑师</h3>
    <ul>
      <li><div class="avatar"></div>建筑师Alice</li>
      <li><div class="avatar"></div>建筑团队StarBuild</li>
    </ul>
  </div>
</div>

<style>
.contributors.unified-style {
  display: flex;
  flex-wrap: wrap;
  gap: 2em;
  margin: 2.5em 0 1.5em 0;
  justify-content: center;
  background: var(--vp-c-bg-soft);
  border-radius: 18px;
  box-shadow: 0 6px 24px 0 #0001;
  padding: 2em 1em 1.5em 1em;
}
.contributor-group {
  background: var(--vp-c-bg);
  border-radius: 14px;
  padding: 1.2em 2.2em 1.5em 2.2em;
  min-width: 210px;
  box-shadow: 0 4px 18px 0 #0002;
  transition: box-shadow 0.2s;
  margin-bottom: 1em;
}
.contributor-group:hover {
  box-shadow: 0 8px 32px 0 #0003;
}
.contributor-group h3 {
  margin-top: 0;
  font-size: 1.18em;
color: var(--vp-c-text);
letter-spacing: 0.02em;
display: flex;
align-items: center;
gap: 0.4em;
border-bottom: 1.5px solid var(--vp-c-divider);
padding-bottom: 0.3em;
margin-bottom: 0.7em;
}
.contributor-icon {
    font-size: 1.3em;
}
.contributor-group ul {
    margin: 0.5em 0 0 0;
    padding: 0;
    list-style: none;
}
.contributor-group li {
    display: flex;
    align-items: center;
    gap: 0.7em;
    margin-bottom: 0.5em;
    font-size: 1em;
    color: var(--vp-c-text-light);
    padding-left: 0.2em;
}
.avatar {
    width: 2em;
    height: 2em;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--vp-c-bg-soft) 60%, var(--vp-c-bg) 100%);
    display: inline-block;
    margin-right: 0.1em;
    box-shadow: 0 1px 4px var(--vp-c-shadow);
}
@media (max-width: 900px) {
    .contributors.unified-style {
        flex-direction: column;
        align-items: stretch;
        padding: 1.2em 0.5em 1em 0.5em;
    }
    .contributor-group {
        min-width: unset;
        width: 100%;
    }
}

/*爱的魔力转圈圈*/
.m-home-layout .image-src:hover {
  transform: translate(-50%, -50%) rotate(666turn);
  transition: transform 59s 1s cubic-bezier(0.3, 0, 0.8, 1);
}

.m-home-layout .details small {
  opacity: 0.8;
}

.m-home-layout .bottom-small {
  display: block;
  margin-top: 2em;
  text-align: right;
}
</style>
