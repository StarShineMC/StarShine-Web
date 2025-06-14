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
    link: https://qm.qq.com/q/yCemxvimCQ
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

## 服务器内容展示（预留）

![主城全景](/images/placeholder1.png)
![活动现场](/images/placeholder2.png)
<!-- 可继续添加图片 -->

---

<style>

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

.server-gallery {
  margin: 3em 0 2em 0;
  padding: 1.5em 1em 1em 1em;
  background: linear-gradient(135deg, #f3f4f6 80%, #e0e7ef 100%);
  border-radius: 18px;
  box-shadow: 0 6px 24px 0 #0001;
  text-align: center;
}
.server-gallery h2 {
  font-size: 1.5em;
  margin-bottom: 1.2em;
  color: #2c3e50;
}
.gallery-list {
  display: flex;
  flex-wrap: wrap;
  gap: 2em;
  justify-content: center;
}
.gallery-item {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 10px #0001;
  padding: 0.7em 0.7em 0.5em 0.7em;
  width: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: box-shadow 0.2s;
}
.gallery-item:hover {
  box-shadow: 0 6px 24px #0002;
}
.gallery-item img {
  width: 160px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 0.5em;
}
.gallery-item span {
  font-size: 0.98em;
  color: #555;
}
@media (max-width: 700px) {
  .gallery-list {
    flex-direction: column;
    gap: 1.2em;
  }
  .gallery-item {
    width: 98%;
    max-width: 320px;
    margin: 0 auto;
  }
  .gallery-item img {
    width: 96%;
    height: 120px;
  }
}
</style>
