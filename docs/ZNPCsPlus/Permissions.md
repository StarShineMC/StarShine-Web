# ZNPCsPlus - 权限

此页面提供了与 ZNPCsPlus 相关联的权限列表及其说明。

| 权限                        | 描述 |
| --------------------------- | ---- |
| `znpcsplus.command`         | 允许使用 `/npc` 命令创建和管理 NPC。 |
| `znpcsplus.updates`         | 如果有新的 ZNPCsPlus 更新可用，通知玩家。 |
| `znpcsplus.npc.<npc id>`    | 如果 NPC 的 `permission_required` 属性设置为 true，则允许与特定 NPC 交互。只有具有相应权限（`znpcsplus.npc.<npc id>`）的玩家才能看到并与 NPC 交互。将 `<npc id>` 替换为 NPC 的实际 ID。 |

## 权限详情

### `znpcsplus.command`

此权限允许玩家使用主要的 `/npc` 命令来创建和管理 NPC。

### `znpcsplus.updates`

具有此权限的玩家将在插件有新更新时收到通知。随时了解最新功能和改进！

### `znpcsplus.npc.<npc id>`

如果 NPC 的 `permission_required` 属性设置为 true，则只有具有此特定权限（`znpcsplus.npc.<npc id>`）的玩家才能看到并与 NPC 交互。将 `<npc id>` 替换为 NPC 的实际 ID。

**使用示例：**
- 如果 ID 为 "my_npc" 的 NPC 将 `permission_required` 属性设置为 true，则玩家需要权限 `znpcsplus.npc.my_npc` 才能与其交互。