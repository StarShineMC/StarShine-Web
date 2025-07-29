# ZNPCsPlus API 文档

## Maven 仓库

要在项目中使用 ZNPCsPlus API，请将以下 Maven 仓库添加到您的 `pom.xml`：

```xml
<repository>
  <id>pyr-snapshots</id>
  <name>Pyr's Repo</name>
  <url>https://repo.pyr.lol/snapshots</url>
</repository>
```

将以下 Maven 依赖项添加到您的 `pom.xml`：

```xml
<dependency>
  <groupId>lol.pyr</groupId>
  <artifactId>znpcsplus-api</artifactId>
  <version>{version}</version>
  <scope>provided</scope>
</dependency>
```

将 `{version}` 替换为实际版本。

## Gradle 仓库

对于 Gradle 项目，请将以下仓库添加到您的 `build.gradle`：

```gradle
maven {
    name "pyrSnapshots"
    url "https://repo.pyr.lol/snapshots"
}
```

将以下依赖项添加到您的 `build.gradle`：

```gradle
compileOnly "lol.pyr:znpcsplus-api:{version}"
```

将 `{version}` 替换为实际版本。

## JavaDoc

通过参考[此处](https://repo.pyr.lol/javadoc/snapshots/lol/pyr/znpcsplus-api/2.0.0-SNAPSHOT)的简洁 JavaDoc 探索 ZNPCsPlus 的 API 结构。

## 基本实现

### 获取 `NpcApi` 实例

要开始使用 API，请获取 `NpcApi` 的实例：
```java
NpcApi npcApi = NpcApiProvider.get();
```

---

### 获取 NPC 类型

在创建 NPC 之前，请获取所需的 NPC 类型：
```java
NpcType playerNpcType = npcApi.getNpcTypeRegistry().getByName("player"); // 不区分大小写
if (playerNpcType == null) {
    System.out.println("NPC 类型在此服务器版本上不存在或不可用。");
    return;
}
```

---

### 创建和注册 NPC

使用所需的类型、位置和设置创建 NPC：
```java
NpcEntry playerNpc = npcApi.getNpcRegistry().create(
    "npc1", // NPC ID
    Bukkit.getWorlds().get(0), // 世界实例
    playerNpcType, // NPC 类型
    new NpcLocation(0, 100, 0, 0, 0) // x, y, z, yaw, pitch
);

// 启用 NPC 以由插件处理
playerNpc.setProcessed(true);
/*
 * 如果您需要为每个玩家自定义 NPC 可见性的逻辑，请保持"processed"禁用。
 * 注意：禁用"processed"将阻止某些属性（例如，外观行为、
 * 可见距离、基于权限的可见性和击退属性）正常工作。
 */

// 启用 NPC 以保存在插件存储中
playerNpc.setSave(true);

// 启用 NPC 以通过命令修改
playerNpc.setAllowCommandModification(true);

// 或者，您可以使用以下方法一次性启用以上所有功能
playerNpc.enableEverything();
```

---

### 通过 ID 获取 NPC

使用其 ID 检索已注册的 NPC：
```java
NpcEntry retrievedNpc = npcApi.getNpcRegistry().getById("npc1");
if (retrievedNpc != null) {
    System.out.println("找到 NPC: " + retrievedNpc.getId());
}
```

---

### 删除 NPC

从注册表中移除 NPC：
```java
npcApi.getNpcRegistry().delete("npc1");
```

---

### 将属性应用于 NPC

通过应用属性自定义 NPC：
```java
// 获取"dinnerbone"属性（使实体看起来倒置）
EntityProperty<Boolean> dinnerboneProperty = npcApi.getPropertyRegistry().getByName("dinnerbone", Boolean.class);

// 将属性应用于 NPC
NpcEntry zombieNpc = npcApi.getNpcRegistry().getById("zombie1");
if (zombieNpc != null) {
    zombieNpc.getNpc().setProperty(dinnerboneProperty, true);
}
```

---

### 注册虚拟属性

注册用于测试的虚拟属性：
```java
npcApi.getPropertyRegistry().registerDummy("my_property", Boolean.class);
```

---

### 创建和分配动作

创建 `MessageAction` 并将其分配给 NPC：
```java
// 创建在左键点击时发送消息的动作
InteractionAction action = npcApi.getActionFactory().createMessageAction(
    "Hello, world!", // 消息
    InteractionType.LEFT_CLICK, // 交互类型
    5, // 冷却时间（秒）
    0 // 延迟（刻）
);

// 将动作分配给 NPC
zombieNpc.getNpc().addAction(action);
```

---

### 设置 NPC 皮肤

皮肤仅适用于玩家 NPC 类型。以下是设置不同类型皮肤的方法：

#### 镜像玩家皮肤
```java
SkinDescriptor mirrorDescriptor = npcApi.getSkinDescriptorFactory().createMirrorDescriptor();
```

#### 静态皮肤（使用玩家名称）
```java
SkinDescriptor staticSteveDescriptor = npcApi.getSkinDescriptorFactory().createStaticDescriptor("steve");
```

#### 静态皮肤（使用纹理值和签名）
```java
SkinDescriptor staticTextureDescriptor = npcAPI.getSkinDescriptorFactory().createStaticDescriptor("ewogICJ0aW1lc3RhbXAiIDogMTczNTExNzEzNzY0MSwKICAicHJvZmlsZUlkIiA6ICIxNmQ4NjI4NzYzMWY0NDY2OGQ0NDM2ZTJlY2IwNTllNSIsCiAgInByb2ZpbGVOYW1lIiA6ICJSZXphVG91cm5leSIsCiAgInNpZ25hdHVyZVJlcXVpcmVkIiA6IHRydWUsCiAgInRleHR1cmVzIiA6IHsKICAgICJTS0lOIiA6IHsKICAgICAgInVybCIgOiAiaHR0cDovL3RleHR1cmVzLm1pbmVjcmFmdC5uZXQvdGV4dHVyZS81ODc0Nzk0OWMxOTUyMWEwYTAwOTgwYjNhMGVkODJjYzIzNmVkMjc5OWIzMGNiZDY4Nzk1ZGNiMDg5NTE5Y2NhIiwKICAgICAgIm1ldGFkYXRhIiA6IHsKICAgICAgICAibW9kZWwiIDogInNsaW0iCiAgICAgIH0KICAgIH0KICB9Cn0=", "ZzIpWZCCCT6H95QQk0SCwF8hWjWL+J764KqH8hhpmTl5SfCHnoj8W4wZnPevrO+q213NgzGmZVEVucR16stX/39+H+NmLFILOBh+FDbRQgEhheyZGYEIj+25gvKRHddHW5eLIS+fOrXDXFffktLR8ImEtFQzFNWVQ8YHb6jmth2OUJgVTxz76UYZ0RVo/8dYbARijWyypTc95+8rOImoJl2f77qiIsPptxeorHdJ6+i0LfFQnbQzGO9GDVjShso/B1UMdoFEITO4MVG8RYpV7F1Awd7891N2vdhIAPWptIADAK/VFU6HG5dyOJoB8FEjPK5vpV/qaH5MQ5JqO2tjT6re1BEeKamymRX+LsgNJYq360gJAsf93tR1Q7oI8GtJ/6KGymGNRH5X6dPVNAgIx6yRvqbBDFW12bYlWFGvdY3kTYn50xe5oFtm6gas5CHJdnGL86m4iunNVtE7GKvYrXtxcAEP2HzfZ5b4eOyK5LOi8A55Z2rNmCKn/5YPX50OjpooNsZivrOvu4+qrs7EMa7JOqqKeq8WE+duLykJr1qXoURY4cz7JDGqHLJrE7E2FaQf4JoMdzdxNZIfvwFzhIh9TcQ/6iSOf439lc54d6vJuGcXLXBjmSq7GNAawxNTy7d3V/Bo0bnrQEh1EKE1LlkUP3ubnw+CW7jJcx9pPd8=");
```

#### 动态/刷新皮肤（使用静态玩家名称）
```java
SkinDescriptor dynamicSteveDescriptor = npcAPI.getSkinDescriptorFactory().createRefreshingDescriptor("Steve");
```

#### 动态/刷新皮肤（使用占位符）
```java
SkinDescriptor dynamicPlaceholderDescriptor = npcAPI.getSkinDescriptorFactory().createRefreshingDescriptor("%top_player_1_name%");
```

#### URL 皮肤
```java
SkinDescriptor urlDescriptor = npcApi.getSkinDescriptorFactory().createUrlDescriptor(
    "https://www.minecraftskins.com/uploads/skins/2024/12/24/iceman-22953593.png?v737",
    "slim"
);
```

#### 文件皮肤
```java
SkinDescriptor fileDescriptor = npcAPI.getSkinDescriptorFactory().createFileDescriptor("skin2.png");
```
注意：文件应该在文件夹 `./plugins/ZNPCsPlus/skins` 中

#### 应用皮肤
```java
// 获取"skin"属性
EntityProperty<SkinDescriptor> skinProperty = npcApi.getPropertyRegistry().getByName("skin", SkinDescriptor.class);

// 将皮肤应用于 NPC
playerNpc.getNpc().setProperty(skinProperty, staticSteveDescriptor);
```

---

### 序列化 NPC

将 NPC 保存为 YAML 格式：
```java
NpcSerializer<YamlConfiguration> yamlSerializer = npcApi.getNpcSerializerRegistry().getSerializer(YamlConfiguration.class);
YamlConfiguration serializedPlayerNpc = yamlSerializer.serialize(playerNpc);
```

---

### 反序列化和注册 NPC

从 YAML 加载 NPC 并注册：
```java
NpcEntry deserializedPlayerNpc = yamlSerializer.deserialize(serializedPlayerNpc);
npcApi.getNpcRegistry().register(deserializedPlayerNpc);
```

如需指导，请加入我们的 [Discord](https://discord.gg/MAZz6XpPcg) 社区。