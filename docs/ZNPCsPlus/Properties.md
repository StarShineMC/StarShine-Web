## 此页面提供了可用于自定义 ZNPCsPlus 中 NPC 的所有属性列表。

并非所有属性都适用于所有版本和所有 NPC 类型。例如，`is_elder` 属性仅在 1.8.8-1.10 版本中适用于 `guardian`。

### helmet
用于为 NPC 装备头盔。  
用法：`/npc property set <id> helmet` - 手持物品  
默认值：`none`  
版本：所有  
类型：`player`,`armor_stand`,`giant`,`skeleton`,`zombie`,`zombified_piglin`,`husk`,`stray`,  
`wither_skeleton`,`zombie_villager`,`drowned`,`piglin`,`piglin_brute`

### chestplate
用于为 NPC 装备胸甲。  
用法：`/npc property set <id> chestplate` - 手持物品  
默认值：`none`  
版本：所有  
类型：`player`,`armor_stand`,`giant`,`skeleton`,`zombie`,`zombified_piglin`,`husk`,`stray`,  
`wither_skeleton`,`zombie_villager`,`drowned`,`piglin`,`piglin_brute`

### leggings
用于为 NPC 装备护腿。  
用法：`/npc property set <id> leggings` - 手持物品  
默认值：`none`  
版本：所有  
类型：`player`,`armor_stand`,`giant`,`skeleton`,`zombie`,`zombified_piglin`,`husk`,`stray`,  
`wither_skeleton`,`zombie_villager`,`drowned`,`piglin`,`piglin_brute`

### boots
用于为 NPC 装备靴子。  
用法：`/npc property set <id> boots` - 手持物品。  
默认值：`none`  
版本：所有  
类型：`player`,`armor_stand`,`giant`,`skeleton`,`zombie`,`zombified_piglin`,`husk`,`stray`,  
`wither_skeleton`,`zombie_villager`,`drowned`,`piglin`,`piglin_brute`

### hand
用于为 NPC 主手装备物品。  
用法：`/npc property set <id> hand` - 手持物品  
默认值：`none`  
版本：所有  
类型：`player`,`armor_stand`,`giant`,`skeleton`,`zombie`,`zombified_piglin`,`husk`,`stray`,  
`wither_skeleton`,`zombie_villager`,`drowned`,`piglin`,`piglin_brute`,`vex`,`pillager`,`allay`

### offhand
用于为 NPC 副手装备物品。  
用法：`/npc property set <id> offhand` - 手持物品  
默认值：`none`  
版本：1.9+  
类型：`player`,`armor_stand`,`giant`,`skeleton`,`zombie`,`zombified_piglin`,`husk`,`stray`,  
`wither_skeleton`,`zombie_villager`,`drowned`,`piglin`,`piglin_brute`,`vex`,`pillager`,`allay`

### dinnerbone
NPC 像使用 Dinnerbone 命名牌一样倒置。  
用法：`/npc property set <id> dinnerbone <true/false>`  
默认值：`false`  
版本：所有  
类型：所有 (**除了** `ender_dragon`)

### look
更改 NPC 的外观，即头部旋转。  
用法：`/npc property set <id> look <FIXED/CLOSEST_PLAYER/PER_PLAYER>`  
默认值：`FIXED`  
示例：`/npc property set 1 look CLOSEST_PLAYER`  
FIXED - NPC 不会移动头部  
CLOSEST_PLAYER - NPC 会看向最近的玩家  
PER_PLAYER - NPC 会看向正在看它的玩家  
版本：所有  
类型：所有

### look_distance
用于设置 NPC 看向玩家的距离。  
用法：`/npc property set <id> look_distance <distance>`  
默认值：`10`  
示例：`/npc property set 1 look_distance 20.5`  
版本：所有  
类型：所有

### view_distance
用于设置 NPC 对玩家可见的距离。  
用法：`/npc property set <id> view_distance <distance>`  
默认值：`32`  
示例：`/npc property set 1 view_distance 50`  
版本：所有  
类型：所有

### permission_required
如果为 true，只有具有权限 `znpcsplus.npc.<id>` 的玩家才能查看 NPC。  
用法：`/npc property set <id> permission_required <true/false>`  
默认值：`false`  
版本：所有  
类型：所有

### glow
使 NPC 发光。  
用法：`/npc property set <id> glow [<GlowColor>]` <!-- TODO: Make this link to javadoc when available -->  
默认值：`false`  
示例：`/npc property set 1 glow RED`  
版本：1.9+  
类型：所有

### fire
使 NPC 着火。  
用法：`/npc property set <id> fire <true/false>`  
默认值：`false`  
版本：所有  
类型：所有

### invisible
使 NPC 隐身。这就像隐身药水效果一样。  
用法：`/npc property set <id> invisible <true/false>`  
默认值：`false`  
版本：所有  
类型：所有 (**除了** `ender_dragon`)

### silent
使 NPC 静音。就像命令中的 `silent` 标签一样。  
用法：`/npc property set <id> silent <true/false>`  
默认值：`false`  
版本：所有  
类型：所有

### sitting
使 NPC 坐下。  
用法：`/npc property set <id> sitting <true/false>`  
默认值：`false`  
版本：所有  
类型：`cat`, `parrot`, `wolf`

### tamed
驯服 NPC。需要此功能才能使项圈颜色生效。  
用法：`/npc property set <id> tamed <true/false>`  
默认值：`false`  
版本：所有  
类型：`cat`, `parrot`, `wolf`

### potion_color
设置 NPC 的药水颜色。  
用法：`/npc property set <id> potion_color [<Color>]`  
默认值：`none`  
示例：`/npc property set 1 potion_color #FFFF00` - 将药水颜色设置为黄色  
版本：所有  
类型：所有 (**除了** `ender_dragon`)

### potion_ambient
设置药水效果为环境效果。  
用法：`/npc property set <id> potion_ambient <true/false>`  
默认值：`false`  
版本：所有  
类型：所有 (**除了** `ender_dragon`)

### baby
使 NPC 成为幼体。  
用法：`/npc property set <id> baby <true/false>`  
默认值：`false`  
版本：所有  
类型：所有可年龄化的生物、僵尸、猪灵、僵尸疣猪兽

### small
如果为 true，盔甲架 NPC 将变小。  
用法：`/npc property set <id> small <true/false>`  
默认值：`false`  
版本：所有  
类型：`armor_stand`

### arms
如果为 true，盔甲架 NPC 将有手臂。  
用法：`/npc property set <id> arms <true/false>`  
默认值：`false`  
版本：所有  
类型：`armor_stand`

### base_plate
如果为 false，盔甲架 NPC 将没有底座。  
用法：`/npc property set <id> base_plate <true/false>`  
默认值：`true`  
版本：所有  
类型：`armor_stand`

### head_rotation
用于设置盔甲架 NPC 头部的旋转。  
用法：`/npc property set <id> head_rotation <x> <y> <z>`  
默认值：`0 0 0`  
示例：`/npc property set 1 head_rotation 0 90 0`  
版本：所有  
类型：`armor_stand`

### body_rotation
用于设置盔甲架 NPC 身体的旋转。  
用法：`/npc property set <id> body_rotation <x> <y> <z>`  
默认值：`0 0 0`  
示例：`/npc property set 1 body_rotation 0 90 0`  
版本：所有  
类型：`armor_stand`

### left_arm_rotation
用于设置盔甲架 NPC 左臂的旋转。  
用法：`/npc property set <id> left_arm_rotation <x> <y> <z>`  
默认值：`-10 0 -10`  
示例：`/npc property set 1 left_arm_rotation 0 0 -5`  
版本：所有  
类型：`armor_stand`

### right_arm_rotation
用于设置盔甲架 NPC 右臂的旋转。  
用法：`/npc property set <id> right_arm_rotation <x> <y> <z>`  
默认值：`-15 0 10`  
示例：`/npc property set 1 right_arm_rotation -105 0 100`  
版本：所有  
类型：`armor_stand`

### left_leg_rotation
用于设置盔甲架 NPC 左腿的旋转。  
用法：`/npc property set <id> left_leg_rotation <x> <y> <z>`  
默认值：`-1 0 -1`  
示例：`/npc property set 1 left_leg_rotation 40 0 0`  
版本：所有  
类型：`armor_stand`

### right_leg_rotation
用于设置盔甲架 NPC 右腿的旋转。  
用法：`/npc property set <id> right_leg_rotation <x> <y> <z>`  
默认值：`1 0 1`  
示例：`/npc property set 1 right_leg_rotation -40 0 0`  
版本：所有  
类型：`armor_stand`

### attacking
使恶魂 NPC 看起来像在攻击。  
用法：`/npc property set <id> attacking <true/false>`  
默认值：`false`  
版本：所有  
类型：`ghast`

### hanging
使蝙蝠 NPC 倒挂。  
用法：`/npc property set <id> hanging <true/false>`  
默认值：`false`  
版本：所有  
类型：`bat`

### blaze_on_fire
使烈焰人 NPC 着火。  
用法：`/npc property set <id> blaze_on_fire <true/false>`  
默认值：`false`  
版本：所有  
类型：`blaze`

### creeper_state
设置苦力怕 NPC 的状态。  
用法：`/npc property set <id> creeper_state <IDLE/FUSE>`  
默认值：`IDLE`  
版本：所有  
类型：`creeper`

### creeper_charged
使苦力怕 NPC 充能。  
用法：`/npc property set <id> creeper_charged <true/false>`  
默认值：`false`  
版本：所有  
类型：`creeper`

### is_saddled
使马 NPC 装上鞍。  
用法：`/npc property set <id> is_saddled <true/false>`  
默认值：`false`  
版本：所有  
类型：`horse`, `donkey`, `mule`, `skeleton_horse`, `zombie_horse`

### is_eating
使马 NPC 吃东西。  
用法：`/npc property set <id> is_eating <true/false>`  
默认值：`false`  
版本：所有  
类型：`horse`, `donkey`, `mule`, `skeleton_horse`, `zombie_horse`

### is_rearing
使马 NPC 站立。  
用法：`/npc property set <id> is_rearing <true/false>`  
默认值：`false`  
版本：所有  
类型：`horse`, `donkey`, `mule`, `skeleton_horse`, `zombie_horse`

### has_mouth_open
使马 NPC 张嘴。  
用法：`/npc property set <id> has_mouth_open <true/false>`  
默认值：`false`  
版本：所有  
类型：`horse`, `donkey`, `mule`, `skeleton_horse`, `zombie_horse`

### beam_target
设置末影水晶 NPC 光束的目标。  
用法：`/npc property set <id> beam_target <x> <y> <z>`  
默认值：`none`  
示例：`/npc property set 1 beam_target 0 100 0`  
版本：1.9+  
类型：`ender_crystal`

### show_base
如果为 false，末影水晶 NPC 将没有像放置的末影水晶一样的底座。  
用法：`/npc property set <id> show_base <true/false>`  
默认值：`true`  
版本：1.9+  
类型：`ender_crystal`

### is_elder
使守卫者 NPC 成为远古守卫者。  
用法：`/npc property set <id> is_elder <true/false>`  
默认值：`false`  
版本：1.8.8-1.10  
类型：`guardian`

### is_retracting_spikes
使守卫者 NPC 收回尖刺。  
用法：`/npc property set <id> is_retracting_spikes <true/false>`  
默认值：`false`  
版本：所有  
类型：`guardian`, `elder_guardian`

### horse_type
设置马 NPC 的类型。  
用法：`/npc property set <id> horse_type <HORSE/DONKEY/MULE/SKELETON/ZOMBIE>`  
默认值：`HORSE`  
版本：1.8.8-1.10  
类型：`horse`

### horse_style
设置马 NPC 的样式。  
用法：`/npc property set <id> horse_style <NONE/WHITE/WHITEFIELD/WHITE_DOTS/BLACK_DOTS>`  
默认值：`HORSE`  
版本：所有  
类型：`horse`

### horse_color
设置马 NPC 的颜色。     
用法：`/npc property set <id> horse_color <WHITE/CREAMY/CHESTNUT/BROWN/BLACK/GRAY/DARK_BROWN>`    
默认值：`HORSE`  
版本：所有  
类型：`horse`

### horse_armor
设置马 NPC 的马铠。  
用法：`/npc property set <id> horse_armor <NONE/IRON/GOLD/DIAMOND>`  
默认值：`NONE`  
版本：1.8.8-1.13  
类型：`horse`

### has_chest
如果为 true，NPC 将有箱子。  
用法：`/npc property set <id> has_chest <true/false>`  
默认值：`false`  
版本：所有  
类型：`horse`(仅 1.8.8-1.13), `donkey`, `mule`, `llama`