# ZNPCsPlus 转换

您可以将其他插件的 NPC 数据导入到 ZNPCsPlus 中。

## 可用的转换

### ZNPCs:
```markdown
/npc storage import znpcs
```
将 ZNPCs 插件中的 NPC 导入到 ZNPCsPlus 中。  
数据从 `plugins/ServersNPC/data.json` 导入。

### ZNPCsPlus 旧版:
**注意：数据应该已自动导入；请仅在由于某种原因未导入数据时使用此功能。**
```markdown
/npc storage import znpcsplus_legacy
```
将 ZNPCsPlus 旧版本（1.0.8 及以下）的 NPC 导入到当前版本。  
数据从 `plugins/ZNPCsPlusLegacy/data.json` 导入。

### Citizens:
```markdown
/npc storage import citizens
```
将 Citizens 插件中的 NPC 导入到 ZNPCsPlus 中。  
数据从 `plugins/Citizens/saves.yml` 导入。

## 请求

如果您希望支持从任何其他 NPC 插件转换 NPC 数据，请在我们的 [Discord 社区](https://discord.gg/MAZz6XpPcg) 告诉我们。我们重视您的反馈，并愿意根据用户请求扩展转换选项。