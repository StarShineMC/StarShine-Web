# ZNPCsPlus 命令

该页面提供了 ZNPCsPlus 中可用命令的完整列表，以及每个命令的详细说明和示例。

## 基本命令

### `/npc create <id> <type>`

使用指定的 ID 和类型创建 NPC。[所有 NPC 类型](NPC-Types)列表

**示例：**
- `/npc create my_npc zombie`
- `/npc create npc1 player`
- `/npc create shop_npc villager`

### `/npc delete <id>`

删除具有指定 ID 的 NPC。此命令将从世界中永久移除指定的 NPC。

**示例：**
- `/npc delete my_npc`
- `/npc delete npc1`

### `/npc changeid <old> <new>`

更改现有 NPC 的 ID。此命令允许您更新 NPC 的标识符。

**示例：**
- `/npc changeid old_npc new_npc`
- `/npc changeid villager_npc trader_npc`

### `/npc toggle <id>`

切换 NPC 的状态，使其可见或不可见。此命令在 NPC 的活动和非活动状态之间切换可见性。

**示例：**
- `/npc toggle my_npc`
- `/npc toggle npc1`

### `/npc list`

列出所有现有的 NPC。

**用法：**
- `/npc list`

### `/npc type <id> <type>`

更改 NPC 的类型。[所有 NPC 类型](NPC-Types)列表

**示例：**
- `/npc type my_npc skeleton`
- `/npc type npc1 cow`

### `/npc clone <id> <npc id>`

克隆现有 NPC。此命令在与玩家相同的位置创建具有新 ID 的指定 NPC 副本。

**示例：**
- `/npc clone my_npc new_npc`
- `/npc clone npc1 cloned_npc`

### `/npc reloadconfig`

重新加载配置文件。此命令刷新 ZNPCsPlus 的配置设置。

**用法：**
- `/npc reloadconfig`

### `/npc version`

显示当前 ZNPCsPlus 的版本和构建信息。

**用法：**
- `/npc version`

## 位置和移动命令

### `/npc near <distance>`

列出指定距离内的 NPC。此命令显示位于玩家指定范围内的 NPC 列表。

**示例：**
- `/npc near 10`
- `/npc near 5`

### `/npc center <id>`

将 NPC 移动到方块的中心（X 和 Z 轴），不改变其高度

**示例：**
- `/npc center my_npc`
- `/npc center npc1`

### `/npc lookatme <id>`

使 NPC 看向玩家。此命令调整 NPC 的方向以面向玩家。

**示例：**
- `/npc lookatme my_npc`
- `/npc lookatme npc1`

### `/npc setlocation <id> <x> <y> <z>`

设置 NPC 的位置。此命令允许您指定 NPC 应该放置的确切坐标（x, y, z）。

**示例：**
- `/npc setlocation my_npc 100 64 200`
- `/npc setlocation npc1 50.5 70 -30.5`

### `/npc setrotation <id> <yaw> <pitch>`

设置 NPC 的旋转。此命令调整指定 NPC 的偏航角和俯仰角。

**示例：**
- `/npc setrotation my_npc 180 45`
- `/npc setrotation npc1 90 0`

调整旋转对于在游戏内定向 NPC 很有用。

### `/npc move <id>`

将 NPC 移动到玩家的位置。

**示例：**
- `/npc move my_npc`
- `/npc move npc1`

### `/npc teleport <id>`

将玩家传送到指定 NPC 的位置。

**示例：**
- `/npc teleport my_npc`
- `/npc teleport npc1`

## 皮肤命令

### `/npc skin <id> <type> <args>`

更改 NPC 的皮肤。此命令允许您使用不同类型的皮肤和附加参数自定义指定 NPC 的外观。

`/npc skin` 命令有四种皮肤类型可用：

1) **Static（静态）：**
    - 用于使用玩家用户名设置皮肤。
    - 即使玩家更改了皮肤，皮肤也保持不变。
    - 不允许使用占位符。
    - 示例：`/npc skin my_npc static D3v1s0m`

2) **Dynamic（动态）：**
    - 用于使用玩家用户名设置皮肤。
    - 皮肤根据输入进行更新。
    - 允许使用占位符；如果玩家更改皮肤或基于指定占位符，它会更新。
    - 示例：`/npc skin my_npc dynamic Notch`
    - 示例：`/npc skin my_npc dynamic %player_name%`

3) **Mirror（镜像）：**
    - 使 NPC 拥有查看它的玩家的相同皮肤。
    - 对于每个玩家，它显示他们自己的皮肤。
    - 示例：`/npc skin my_npc mirror`

4) **URL：**
    - 使用皮肤文件的 URL 设置皮肤。
    - 有两种皮肤变体：Classic（4像素皮肤）和 Slim（3像素皮肤或 Alex 瘦身）。
    - 示例：`/npc skin my_npc url classic http://textures.minecraft.net/texture/5d6f51d459e743fc87cf61f1ca6d312e46270847c5ce293a0744be3e73d26751`
    - 示例：`/npc skin my_npc url slim https://imgur.com/VZ8Yo58`

## 全息图命令

### `/npc holo add <id> <text>`

向指定 NPC 添加全息图行。

**示例：**
- `/npc holo add my_npc Hello, I am an NPC`
- `/npc holo add npc1 &6Welcome to the server`

注意：要添加空的全息图行，请使用 `%blank%` 作为文本。

### `/npc holo additem <id>`

向指定 NPC 添加物品全息图。此命令允许您在 NPC 的全息图中显示物品。

**示例：**
- `/npc holo additem my_npc` (手持物品)

### `/npc holo delete <id> <line>`

从指定 NPC 删除全息图行。

**示例：**
- `/npc holo delete my_npc 1`
- `/npc holo delete npc1 2`

### `/npc holo info <id>`

显示指定 NPC 全息图的信息。

**示例：**
- `/npc holo info my_npc`

### `/npc holo insert <id> <line> <text>`

在指定位置为指定 NPC 插入新的全息图行。

**示例：**
- `/npc holo insert my_npc 1 Welcome`
- `/npc holo insert npc1 2 Goodbye`

注意：要插入空的全息图行，请使用 `%blank%` 作为文本。

### `/npc holo insertitem <id> <line>`

在指定位置为指定 NPC 插入物品全息图。

**示例：**
- `/npc holo insertitem my_npc 1` (手持物品)
- `/npc holo insertitem npc1 2` (手持物品)

### `/npc holo set <id> <line> <text>`

设置指定 NPC 全息图行的文本。

**示例：**
- `/npc holo set my_npc 1 Hello`
- `/npc holo set npc1 2 Welcome`

注意：要设置空的全息图行，请使用 `%blank%` 作为文本。

### `/npc holo setitem <id> <line>`

设置指定 NPC 的物品全息图。

**示例：**
- `/npc holo setitem my_npc 1` (手持物品)
- `/npc holo setitem npc1 2` (手持物品)

### `/npc holo offset <id> <offset>`

设置指定 NPC 全息图的偏移量。此命令允许您调整全息图的垂直位置。  
0 是默认值，全息图放置在 NPC 的头部。

**示例：**
- `/npc holo offset my_npc 1` (将全息图向上移动 1 个方块)
- `/npc holo offset npc1 -0.5` (将全息图向下移动 0.5 个方块)

### `/npc holo refreshdelay <id> <delay>`

设置指定 NPC 全息图的刷新延迟。此命令允许您调整全息图的刷新率。  
刷新延迟是全息图每次更新之间的时间（以秒为单位）。这对于占位符很有用。  
-1 是默认值，表示全息图不会刷新。

**示例：**
- `/npc holo refreshdelay my_npc 5` (将刷新延迟设置为 5 秒)

## 属性命令

### `/npc property set <id> <property> <value>`

将属性设置为指定 NPC 的指定值。所有属性都在[属性](Properties)页面中列出
#### 注意：不同的 NPC 类型具有不同的可用属性。

**示例：**
- `/npc property set my_npc dinnerbone true` (适用于除 Player 和 Ender Dragon 之外的所有 NPC)
- `/npc property set zombie1 baby true` (适用于可年龄化的 NPC)
- `/npc property set farm_shop villager_profession farmer` (适用于村民 NPC)

### `/npc property remove <id> <property>`

从指定 NPC 中移除属性。

**示例：**
- `/npc property remove my_npc dinnerbone`
- `/npc property remove zombie1 baby`
- `/npc property remove farm_shop villager_profession`

## 动作命令

### `/npc action add <action> <id> <click type> <cooldown seconds> <delay ticks> <value>`

向指定 NPC 添加动作。此命令允许您向 NPC 添加动作，当玩家与 NPC 交互时触发该动作。
    
`<action>` 可以是以下之一：
- `consolecommand` - 以控制台身份执行命令。
- `message` - 向玩家发送消息。
- `playerchat` - 以玩家身份发送消息。
- `playercommand` - 以玩家身份执行命令。
- `switchserver` - 将玩家移动到另一个服务器。(仅限 BungeeCord)

`<click type>` 可以是以下之一：
- `ANY_CLICK` - 在任何点击（左键或右键）时触发动作
- `LEFT_CLICK` - 仅在左键点击（攻击）时触发动作 
- `RIGHT_CLICK` - 仅在右键点击（交互）时触发动作

`<cooldown seconds>` 是动作的冷却时间（以秒为单位）。如果在冷却时间结束前玩家与 NPC 交互，则不会触发动作。

`<delay ticks>` 是触发动作前的延迟（以刻为单位）。这对于在玩家与 NPC 交互后延迟动作很有用。

`<value>` 是动作的值。这可以是命令、消息或服务器名称，具体取决于动作类型。

**示例：**
- `/npc action add consolecommand my_npc ANY_CLICK 5 0 say Hello, I am an NPC` (在任何点击时执行命令 `say Hello, I am an NPC`)
- `/npc action add message npc1 LEFT_CLICK 10 20 Welcome to the server!` (在左键点击 NPC 时向玩家发送消息 `Welcome to the server!`)
- `/npc action add playercommand shop_warp RIGHT_CLICK 5 0 warp shop` (在右键点击 NPC 时执行命令 `warp shop`)

### `/npc action clear <id>`

清除指定 NPC 的所有动作。

**示例：**
- `/npc action clear my_npc`

### `/npc action delete <id> <index>`

从指定 NPC 删除指定索引处的动作。索引是动作在动作列表中的位置（使用列表命令查看索引）。

**示例：**
- `/npc action delete my_npc 1`
- `/npc action delete npc1 2`

### `/npc action edit <id> <index> <action> <click type> <cooldown seconds> <delay ticks> <value>`

编辑指定 NPC 的指定索引处的动作。此命令允许您修改现有动作的属性。

**示例：**
- `/npc action edit my_npc 1 consolecommand ANY_CLICK 5 0 msg %player_name% Hello, I am an NPC`
- `/npc action edit npc1 2 message LEFT_CLICK 10 20 Welcome to the server!`
- `/npc action edit shop_npc 3 playercommand ANY_CLICK 5 0 warp shop`

### `/npc action list <id>`

列出指定 NPC 的所有动作。

**示例：**
- `/npc action list my_npc`
- `/npc action list npc1`

## 存储命令

### `/npc storage save`

保存所有 NPC

**用法：**
- `/npc storage save`

### `/npc storage reload`

重新加载所有 NPC

**用法：**
- `/npc storage reload`

### `/npc storage import <importer>`

从指定的导入器导入 NPC。  
**注意：请参考[转换](Converting)页面获取更多信息。**

### `/npc storage migrate <from> <to> [force]`

将 NPC 从一种存储类型迁移到另一种。此命令允许您将 NPC 从一种存储格式转换为另一种。

**示例：**
- `/npc storage migrate YAML SQLITE`
- `/npc storage migrate SQLITE YAML true` (强制迁移以覆盖具有相同 ID 的现有 NPC)