## 此页面提供了 ZNPCsPlus 中所有可用 NPC 类型的列表，包括其支持的属性、默认值和版本兼容性。

### 通用属性
* **1.8+:** [`fire`](./Properties#fire), [`invisible`](./Properties#invisible), [`silent`](./Properties#silent), [`look`](./Properties#look), [`look_distance`](./Properties#look_distance), [`look_return`](./Properties#look_return), [`view_distance`](./Properties#view_distance), [`potion_color`](./Properties#potion_color), [`potion_ambient`](./Properties#potion_ambient), [`display_name`](./Properties#display_name), [`permission_required`](./Properties#permission_required), [`player_knockback`](./Properties#player_knockback), [`player_knockback_exempt_permission`](./Properties#player_knockback_exempt_permission), [`player_knockback_distance`](./Properties#player_knockback_distance), [`player_knockback_vertical`](./Properties#player_knockback_vertical), [`player_knockback_horizontal`](./Properties#player_knockback_horizontal), [`player_knockback_cooldown`](./Properties#player_knockback_cooldown), [`player_knockback_sound`](./Properties#player_knockback_sound), [`player_knockback_sound_name`](./Properties#player_knockback_sound_name), [`player_knockback_sound_volume`](./Properties#player_knockback_sound_volume), [`player_knockback_sound_pitch`](./Properties#player_knockback_sound_pitch)
* **1.9+:** [`glow`](./Properties#glow)
* **1.14+:** [`pose`](./Properties#pose)
* **1.17+:** [`shaking`](./Properties#shaking)
* **非 `player`:** [`dinnerbone`](./Properties#dinnerbone)
* **活体实体 (1.8+):** [`health`](./Properties#health), [`attribute_max_health`](./Properties#attribute_max_health)
* **可年龄化, [Zombie](#zombie) 和 [Zoglin](#zoglin):** [`baby`](./Properties#baby)
* **[Horse](#horse), [Donkey](#donkey), [Mule](#mule), [Llama](#llama), [Trader Llama](#trader_llama), [Skeleton Horse](#skeleton_horse), [Zombie Horse](#zombie_horse), [Camel](#camel):** [`is_saddled`](./Properties#is_saddled), [`is_eating`](./Properties#is_eating), [`is_rearing`](./Properties#is_rearing), [`has_mouth_open`](./Properties#has_mouth_open)

### `player`

* **插件版本起始：** v2.0.0
* **Minecraft 版本：** 1.8+
* **可用属性：** [`helmet`](./Properties#helmet), [`chestplate`](./Properties#chestplate), [`leggings`](./Properties#leggings), [`boots`](./Properties#boots), [`hand`](./Properties#hand), [`offhand`](./Properties#offhand), [`skin_cape`](./Properties#skin_cape), [`skin_jacket`](./Properties#skin_jacket), [`skin_left_sleeve`](./Properties#skin_left_sleeve), [`skin_right_sleeve`](./Properties#skin_right_sleeve), [`skin_left_leg`](./Properties#skin_left_leg), [`skin_right_leg`](./Properties#skin_right_leg), [`skin_hat`](./Properties#skin_hat), [`shoulder_entity_left`](./Properties#shoulder_entity_left), [`shoulder_entity_right`](./Properties#shoulder_entity_right), [`force_body_rotation`](./Properties#force_body_rotation), [`entity_sitting`](./Properties#entity_sitting)
* **默认属性：**
  * [`skin_cape`](./Properties#skin_cape) - `true`
  * [`skin_jacket`](./Properties#skin_jacket) - `true`
  * [`skin_left_sleeve`](./Properties#skin_left_sleeve) - `true`
  * [`skin_right_sleeve`](./Properties#skin_right_sleeve) - `true`
  * [`skin_left_leg`](./Properties#skin_left_leg) - `true`
  * [`skin_right_leg`](./Properties#skin_right_leg) - `true`
  * [`skin_hat`](./Properties#skin_hat) - `true`

### `armor_stand`

* **插件版本起始：** v2.0.0
* **Minecraft 版本：** 1.8+
* **可用属性：** [`helmet`](./Properties#helmet), [`chestplate`](./Properties#chestplate), [`leggings`](./Properties#leggings), [`boots`](./Properties#boots), [`hand`](./Properties#hand), [`offhand`](./Properties#offhand), [`small`](./Properties#small), [`arms`](./Properties#arms), [`base_plate`](./Properties#base_plate), [`head_rotation`](./Properties#head_rotation), [`body_rotation`](./Properties#body_rotation), [`left_arm_rotation`](./Properties#left_arm_rotation), [`right_arm_rotation`](./Properties#right_arm_rotation), [`left_leg_rotation`](./Properties#left_leg_rotation), [`right_leg_rotation`](./Properties#right_leg_rotation)
* **默认属性：** 无

### `bat`

* **插件版本起始：** v2.0.0
* **Minecraft 版本：** 1.8+
* **可用属性：** [`hanging`](./Properties#hanging)
* **默认属性：** 无

### `blaze`

* **插件版本起始：** v2.0.0
* **Minecraft 版本：** 1.8+
* **可用属性：** [`blaze_on_fire`](./Properties#blaze_on_fire)
* **默认属性：** 无

### `cave_spider`

* **插件版本起始：** v2.0.0
* **Minecraft 版本：** 1.8+
* **可用属性：** 无
* **默认属性：** 无

### `chicken`

* **插件版本起始：** v2.0.0
* **Minecraft 版本：** 1.8+
* **可用属性：** 无
* **默认属性：** 无

### `cow`

* **插件版本起始：** v2.0.0
* **Minecraft 版本：** 1.8+
* **可用属性：** 无
* **默认属性：** 无

### `creeper`

* **插件版本起始：** v2.0.0
* **Minecraft 版本：** 1.8+
* **可用属性：** [`creeper_state`](./Properties#creeper_state), [`creeper_charged`](./Properties#creeper_charged)
* **默认属性：** 无

### `end_crystal`

* **插件版本起始：** v2.0.0
* **Minecraft 版本：** 1.8+
* **可用属性：** [`beam_target`](./Properties#beam_target), [`show_base`](./Properties#show_base)
* **默认属性：** 无

### `ender_dragon`

* **插件版本起始：** v2.0.0
* **Minecraft 版本：** 1.8+
* **可用属性：** 无
* **默认属性：** 无

### `enderman`

* **插件版本起始：** v2.0.0
* **Minecraft 版本：** 1.8+
* **可用属性：** [`enderman_held_block`](./Properties#enderman_held_block), [`enderman_screaming`](./Properties#enderman_screaming), [`enderman_staring`](./Properties#enderman_staring), [`entity_sitting`](./Properties#entity_sitting)
* **默认属性：** 无

### `endermite`

* **插件版本起始：** v2.0.0
* **Minecraft 版本：** 1.8+
* **可用属性：** 无
* **默认属性：** 无

### `ghast`

* **插件版本起始：** v2.0.0
* **Minecraft 版本：** 1.8+
* **可用属性：** [`attacking`](./Properties#attacking)
* **默认属性：** 无

### `giant`

* **插件版本起始：** v2.0.0
* **Minecraft 版本：** 1.8+
* **可用属性：** [`helmet`](./Properties#helmet), [`chestplate`](./Properties#chestplate), [`leggings`](./Properties#leggings), [`boots`](./Properties#boots), [`hand`](./Properties#hand), [`offhand`](./Properties#offhand), [`entity_sitting`](./Properties#entity_sitting)
* **默认属性：** 无

### `guardian`

* **插件版本起始：** v2.0.0
* **Minecraft 版本：** 1.8+
* **可用属性：** [`is_elder`](./Properties#is_elder) (1.8-1.10), [`is_retracting_spikes`](./Properties#is_retracting_spikes)
* **默认属性：** 无

### `horse`

* **插件版本起始：** v2.0.0
* **Minecraft 版本：** 1.8+
* **可用属性：** [`horse_type`](./Properties#horse_type), [`horse_style`](./Properties#horse_style), [`horse_color`](./Properties#horse_color), [`horse_armor`](./Properties#horse_armor), [`horse_armor`](./Properties#horse_armor) (1.8-1.13), [`chestplate`](./Properties#chestplate) (1.14+)
* **默认属性：** 无

### `iron_golem`

* **插件版本起始：** v2.0.0
* **Minecraft 版本：** 1.8+
* **可用属性：** 无
* **默认属性：** 无

### `magma_cube`

* **插件版本起始：** v2.0.0
* **Minecraft 版本：** 1.8+
* **可用属性：** [`size`](./Properties#size)
* **默认属性：** 无

### `mooshroom`

* **插件版本起始：** v2.0.0
* **Minecraft 版本：** 1.8+
* **可用属性：** [`mooshroom_variant`](./Properties#mooshroom_variant)
* **默认属性：** 无

### `ocelot`

* **插件版本起始：** v2.0.0
* **Minecraft 版本：** 1.8+
* **可用属性：** [`ocelot_type`](./Properties#ocelot_type) (1.8-1.13), [`tamed`](./Properties#tamed) (1.8-1.13), [`sitting`](./Properties#sitting) (1.8-1.13)
* **默认属性：** 无

### `pig`

* **插件版本起始：** v2.0.0
* **Minecraft 版本：** 1.8+
* **可用属性：** [`pig_saddled`](./Properties#pig_saddled)
* **默认属性：** 无

### `rabbit`

* **插件版本起始：** v2.0.0
* **Minecraft 版本：** 1.8+
* **可用属性：** [`rabbit_type`](./Properties#rabbit_type)
* **默认属性：** 无

### `sheep`

* **插件版本起始：** v2.0.0
* **Minecraft 版本：** 1.8+
* **可用属性：** [`sheep_color`](./Properties#sheep_color), [`sheep_sheared`](./Properties#sheep_sheared)
* **默认属性：** 无

### `silverfish`

* **插件版本起始：** v2.0.0
* **Minecraft 版本：** 1.8+
* **可用属性：** 无
* **默认属性：** 无

### `skeleton`

* **插件版本起始：** v2.0.0
* **Minecraft 版本：** 1.8+
* **可用属性：** [`helmet`](./Properties#helmet), [`chestplate`](./Properties#chestplate), [`leggings`](./Properties#leggings), [`boots`](./Properties#boots), [`hand`](./Properties#hand), [`offhand`](./Properties#offhand), [`entity_sitting`](./Properties#entity_sitting), [`skeleton_type`](./Properties#skeleton_type) (1.8-1.10)
* **默认属性：** 无

### `skeleton_horse`

* **插件版本起始：** v2.0.0
* **Minecraft 版本：** 1.8+
* **可用属性：** 无
* **默认属性：** 无

### `slime`

* **插件版本起始：** v2.0.0
* **Minecraft 版本：** 1.8+
* **可用属性：** [`size`](./Properties#size)
* **默认属性：** 无

### `snow_golem`

* **插件版本起始：** v2.0.0
* **Minecraft 版本：** 1.8+
* **可用属性：** [`derpy_snowgolem`](./Properties#derpy_snowgolem)
* **默认属性：** 无

### `spider`

* **插件版本起始：** v2.0.0
* **Minecraft 版本：** 1.8+
* **可用属性：** 无
* **默认属性：** 无

### `squid`

* **插件版本起始：** v2.0.0
* **Minecraft 版本：** 1.8+
* **可用属性：** 无
* **默认属性：** 无

### `villager`

* **插件版本起始：** v2.0.0
* **Minecraft 版本：** 1.8+
* **可用属性：** [`hand`](./Properties#hand), [`villager_type`](./Properties#villager_type), [`villager_profession`](./Properties#villager_profession), [`villager_level`](./Properties#villager_level)
* **默认属性：** 无

### `witch`

* **插件版本起始：** v2.0.0
* **Minecraft 版本：** 1.8+
* **可用属性：** [`hand`](./Properties#hand)
* **默认属性：** 无

### `wither`

* **插件版本起始：** v2.0.0
* **Minecraft 版本：** 1.8+
* **可用属性：** [`invulnerable_time`](./Properties#invulnerable_time)
* **默认属性：** 无

### `wolf`

* **插件版本起始：** v2.0.0
* **Minecraft 版本：** 1.8+
* **可用属性：** [`wolf_begging`](./Properties#wolf_begging), [`wolf_collar`](./Properties#wolf_collar), [`wolf_angry`](./Properties#wolf_angry), [`tamed`](./Properties#tamed), [`sitting`](./Properties#sitting), [`wolf_variant`](./Properties#wolf_variant) (1.20.5+)
* **默认属性：** 无

### `zombie`

* **插件版本起始：** v2.0.0
* **Minecraft 版本：** 1.8+
* **可用属性：** [`helmet`](./Properties#helmet), [`chestplate`](./Properties#chestplate), [`leggings`](./Properties#leggings), [`boots`](./Properties#boots), [`hand`](./Properties#hand), [`offhand`](./Properties#offhand), [`entity_sitting`](./Properties#entity_sitting)
* **默认属性：** 无

### `zombie_horse`

* **插件版本起始：** v2.0.0
* **Minecraft 版本：** 1.8+
* **可用属性：** 无
* **默认属性：** 无

### `zombified_piglin`

* **插件版本起始：** v2.0.0
* **Minecraft 版本：** 1.8+
* **可用属性：** [`helmet`](./Properties#helmet), [`chestplate`](./Properties#chestplate), [`leggings`](./Properties#leggings), [`boots`](./Properties#boots), [`hand`](./Properties#hand), [`offhand`](./Properties#offhand), [`entity_sitting`](./Properties#entity_sitting)
* **默认属性：** 无

### `shulker`

* **插件版本起始：** v2.0.0
* **Minecraft 版本：** 1.9+
* **可用属性：** [`attach_direction`](./Properties#attach_direction), [`shield_height`](./Properties#shield_height), [`shulker_color`](./Properties#shulker_color)
* **默认属性：** 无

### `polar_bear`

* **插件版本起始：** v2.0.0
* **Minecraft 版本：** 1.10+
* **可用属性：** [`polar_bear_standing`](./Properties#polar_bear_standing)
* **默认属性：** 无

### `donkey`

* **插件版本起始：** v2.0.0
* **Minecraft 版本：** 1.11+
* **可用属性：** [`has_chest`](./Properties#has_chest)
* **默认属性：** 无

### `mule`

* **插件版本起始：** v2.0.0
* **Minecraft 版本：** 1.11+
* **可用属性：** [`has_chest`](./Properties#has_chest)
* **默认属性：** 无

### `elder_guardian`

* **插件版本起始：** v2.0.0
* **Minecraft 版本：** 1.11+
* **可用属性：** [`is_retracting_spikes`](./Properties#is_retracting_spikes)
* **默认属性：** 无

### `husk`

* **插件版本起始：** v2.0.0
* **Minecraft 版本：** 1.11+
* **可用属性：** [`helmet`](./Properties#helmet), [`chestplate`](./Properties#chestplate), [`leggings`](./Properties#leggings), [`boots`](./Properties#boots), [`hand`](./Properties#hand), [`offhand`](./Properties#offhand), [`entity_sitting`](./Properties#entity_sitting)
* **默认属性：** 无

### `stray`

* **插件版本起始：** v2.0.0
* **Minecraft 版本：** 1.11+
* **可用属性：** [`helmet`](./Properties#helmet), [`chestplate`](./Properties#chestplate), [`leggings`](./Properties#leggings), [`boots`](./Properties#boots), [`hand`](./Properties#hand), [`offhand`](./Properties#offhand), [`entity_sitting`](./Properties#entity_sitting)
* **默认属性：** 无

### `evoker`

* **插件版本起始：** v2.0.0
* **Minecraft 版本：** 1.11+
* **可用属性：** [`entity_sitting`](./Properties#entity_sitting), [`spell`](./Properties#spell)
* **默认属性：** 无

### `llama`

* **插件版本起始：** v2.0.0
* **Minecraft 版本：** 1.11+
* **可用属性：** [`carpet_color`](./Properties#carpet_color), [`llama_variant`](./Properties#llama_variant), [`body`](./Properties#body), [`has_chest`](./Properties#has_chest)
* **默认属性：** 无

### `vex`

* **插件版本起始：** v2.0.0
* **Minecraft 版本：** 1.11+
* **可用属性：** [`hand`](./Properties#hand), [`offhand`](./Properties#offhand)
* **默认属性：** 无

### `vindicator`

* **插件版本起始：** v2.0.0
* **Minecraft 版本：** 1.11+
* **可用属性：** [`celebrating`](./Properties#celebrating), [`entity_sitting`](./Properties#entity_sitting)
* **默认属性：** 无

### `wither_skeleton`

* **插件版本起始：** v2.0.0
* **Minecraft 版本：** 1.11+
* **可用属性：** [`helmet`](./Properties#helmet), [`chestplate`](./Properties#chestplate), [`leggings`](./Properties#leggings), [`boots`](./Properties#boots), [`hand`](./Properties#hand), [`offhand`](./Properties#offhand), [`entity_sitting`](./Properties#entity_sitting)
* **默认属性：** 无

### `zombie_villager`

* **插件版本起始：** v2.0.0
* **Minecraft 版本：** 1.11+
* **可用属性：** [`helmet`](./Properties#helmet), [`chestplate`](./Properties#chestplate), [`leggings`](./Properties#leggings), [`boots`](./Properties#boots), [`hand`](./Properties#hand), [`offhand`](./Properties#offhand), [`entity_sitting`](./Properties#entity_sitting)
* **默认属性：** 无

### `illusioner`

* **插件版本起始：** v2.0.0
* **Minecraft 版本：** 1.12+
* **可用属性：** [`entity_sitting`](./Properties#entity_sitting), [`spell`](./Properties#spell)
* **默认属性：** 无

### `parrot`

* **插件版本起始：** v2.0.0
* **Minecraft 版本：** 1.12+
* **可用属性：** [`parrot_variant`](./Properties#parrot_variant), [`tamed`](./Properties#tamed), [`sitting`](./Properties#sitting)
* **默认属性：** 无

### `cod`

* **插件版本起始：** v2.0.0
* **Minecraft 版本：** 1.13+
* **可用属性：** 无
* **默认属性：** 无

### `dolphin`

* **插件版本起始：** v2.0.0
* **Minecraft 版本：** 1.13+
* **可用属性：** [`hand`](./Properties#hand)
* **默认属性：** 无

### `drowned`

* **插件版本起始：** v2.0.0
* **Minecraft 版本：** 1.13+
* **可用属性：** [`helmet`](./Properties#helmet), [`chestplate`](./Properties#chestplate), [`leggings`](./Properties#leggings), [`boots`](./Properties#boots), [`hand`](./Properties#hand), [`offhand`](./Properties#offhand), [`entity_sitting`](./Properties#entity_sitting)
* **默认属性：** 无

### `phantom`

* **插件版本起始：** v2.0.0
* **Minecraft 版本：** 1.13+
* **可用属性：** [`size`](./Properties#size)
* **默认属性：** 无

### `pufferfish`

* **插件版本起始：** v2.0.0
* **Minecraft 版本：** 1.13+
* **可用属性：** [`puff_state`](./Properties#puff_state)
* **默认属性：** 无

### `salmon`

* **插件版本起始：** v2.0.0
* **Minecraft 版本：** 1.13+
* **可用属性：** 无
* **默认属性：** 无

### `tropical_fish`

* **插件版本起始：** v2.0.0
* **Minecraft 版本：** 1.13+
* **可用属性：** [`tropical_fish_pattern`](./Properties#tropical_fish_pattern), [`tropical_fish_body_color`](./Properties#tropical_fish_body_color), [`tropical_fish_pattern_color`](./Properties#tropical_fish_pattern_color)
* **默认属性：** 无

### `turtle`

* **插件版本起始：** v2.0.0
* **Minecraft 版本：** 1.13+
* **可用属性：** 无
* **默认属性：** 无

### `cat`

* **插件版本起始：** v2.0.0
* **Minecraft 版本：** 1.14+
* **可用属性：** [`cat_variant`](./Properties#cat_variant), [`cat_laying`](./Properties#cat_laying), [`cat_relaxed`](./Properties#cat_relaxed), [`cat_collar`](./Properties#cat_collar), [`tamed`](./Properties#tamed), [`sitting`](./Properties#sitting)
* **默认属性：** 无

### `fox`

* **插件版本起始：** v2.0.0
* **Minecraft 版本：** 1.14+
* **可用属性：** [`hand`](./Properties#hand), [`fox_variant`](./Properties#fox_variant), [`fox_sitting`](./Properties#fox_sitting), [`fox_crouching`](./Properties#fox_crouching), [`fox_sleeping`](./Properties#fox_sleeping), [`fox_faceplanted`](./Properties#fox_faceplanted)
* **默认属性：** 无

### `panda`

* **插件版本起始：** v2.0.0
* **Minecraft 版本：** 1.14+
* **可用属性：** [`panda_main_gene`](./Properties#panda_main_gene), [`panda_hidden_gene`](./Properties#panda_hidden_gene), [`panda_sneezing`](./Properties#panda_sneezing), [`panda_eating`](./Properties#panda_eating) (1.8-1.14), [`panda_rolling`](./Properties#panda_rolling) (1.15+), [`panda_sitting`](./Properties#panda_sitting) (1.15+), [`panda_on_back`](./Properties#panda_on_back) (1.15+), [`hand`](./Properties#hand) (1.15+)
* **默认属性：** 无

### `pillager`

* **插件版本起始：** v2.0.0
* **Minecraft 版本：** 1.14+
* **可用属性：** [`hand`](./Properties#hand), [`offhand`](./Properties#offhand), [`pillager_charging`](./Properties#pillager_charging), [`entity_sitting`](./Properties#entity_sitting)
* **默认属性：** 无

### `ravager`

* **插件版本起始：** v2.0.0
* **Minecraft 版本：** 1.14+
* **可用属性：** 无
* **默认属性：** 无

### `trader_llama`

* **插件版本起始：** v2.0.0
* **Minecraft 版本：** 1.14+
* **可用属性：** [`llama_variant`](./Properties#llama_variant), [`has_chest`](./Properties#has_chest)
* **默认属性：** 无

### `wandering_trader`

* **插件版本起始：** v2.0.0
* **Minecraft 版本：** 1.14+
* **可用属性：** [`hand`](./Properties#hand)
* **默认属性：** 无

### `bee`

* **插件版本起始：** v2.0.0
* **Minecraft 版本：** 1.15+
* **可用属性：** [`angry`](./Properties#angry), [`has_nectar`](./Properties#has_nectar)
* **默认属性：** 无

### `hoglin`

* **插件版本起始：** v2.0.0
* **Minecraft 版本：** 1.16+
* **可用属性：** [`hoglin_immune_to_zombification`](./Properties#hoglin_immune_to_zombification)
* **默认属性：** 无

### `piglin`

* **插件版本起始：** v2.0.0
* **Minecraft 版本：** 1.16+
* **可用属性：** [`helmet`](./Properties#helmet), [`chestplate`](./Properties#chestplate), [`leggings`](./Properties#leggings), [`boots`](./Properties#boots), [`hand`](./Properties#hand), [`offhand`](./Properties#offhand), [`piglin_baby`](./Properties#piglin_baby), [`piglin_charging_crossbow`](./Properties#piglin_charging_crossbow), [`piglin_dancing`](./Properties#piglin_dancing), [`entity_sitting`](./Properties#entity_sitting), [`piglin_immune_to_zombification`](./Properties#piglin_immune_to_zombification)
* **默认属性：** 无

### `piglin_brute`

* **插件版本起始：** v2.0.0
* **Minecraft 版本：** 1.16+
* **可用属性：** [`helmet`](./Properties#helmet), [`chestplate`](./Properties#chestplate), [`leggings`](./Properties#leggings), [`boots`](./Properties#boots), [`hand`](./Properties#hand), [`offhand`](./Properties#offhand), [`entity_sitting`](./Properties#entity_sitting), [`piglin_immune_to_zombification`](./Properties#piglin_immune_to_zombification)
* **默认属性：** 无

### `strider`

* **插件版本起始：** v2.0.0
* **Minecraft 版本：** 1.16+
* **可用属性：** [`strider_shaking`](./Properties#strider_shaking), [`strider_saddled`](./Properties#strider_saddled)
* **默认属性：** 无

### `zoglin`

* **插件版本起始：** v2.0.0
* **Minecraft 版本：** 1.16+
* **可用属性：** 无
* **默认属性：** 无

### `axolotl`

* **插件版本起始：** v2.0.0
* **Minecraft 版本：** 1.17+
* **可用属性：** [`axolotl_variant`](./Properties#axolotl_variant), [`playing_dead`](./Properties#playing_dead)
* **默认属性：** 无

### `glow_squid`

* **插件版本起始：** v2.0.0
* **Minecraft 版本：** 1.17+
* **可用属性：** 无
* **默认属性：** 无

### `goat`

* **插件版本起始：** v2.0.0
* **Minecraft 版本：** 1.17+
* **可用属性：** [`has_left_horn`](./Properties#has_left_horn), [`has_right_horn`](./Properties#has_right_horn)
* **默认属性：** 无

### `allay`

* **插件版本起始：** v2.0.0
* **Minecraft 版本：** 1.19+
* **可用属性：** [`hand`](./Properties#hand), [`offhand`](./Properties#offhand)
* **默认属性：** 无

### `frog`

* **插件版本起始：** v2.0.0
* **Minecraft 版本：** 1.19+
* **可用属性：** [`frog_variant`](./Properties#frog_variant), [`frog_target_npc`](./Properties#frog_target_npc)
* **默认属性：** 无

### `tadpole`

* **插件版本起始：** v2.0.0
* **Minecraft 版本：** 1.19+
* **可用属性：** 无
* **默认属性：** 无

### `warden`

* **插件版本起始：** v2.0.0
* **Minecraft 版本：** 1.19+
* **可用属性：** [`warden_anger`](./Properties#warden_anger)
* **默认属性：** 无

### `sniffer`

* **插件版本起始：** v2.0.0
* **Minecraft 版本：** 1.20+
* **可用属性：** [`sniffer_state`](./Properties#sniffer_state)
* **默认属性：** 无

### `camel`

* **插件版本起始：** v2.0.0
* **Minecraft 版本：** 1.20+
* **可用属性：** [`bashing`](./Properties#bashing), [`camel_sitting`](./Properties#camel_sitting)
* **默认属性：** 无

### `armadillo`

* **插件版本起始：** v2.0.0
* **Minecraft 版本：** 1.20.5+
* **可用属性：** [`armadillo_state`](./Properties#armadillo_state)
* **默认属性：** 无

### `bogged`

* **插件版本起始：** v2.0.0
* **Minecraft 版本：** 1.21+
* **可用属性：** [`bogged_sheared`](./Properties#bogged_sheared), [`entity_sitting`](./Properties#entity_sitting)
* **默认属性：** 无

### `breeze`

* **插件版本起始：** v2.0.0
* **Minecraft 版本：** 1.21+
* **可用属性：** 无
* **默认属性：** 无

### `creaking`

* **插件版本起始：** v2.0.0
* **Minecraft 版本：** 1.21.2+
* **可用属性：** [`creaking_active`](./Properties#creaking_active), [`creaking_crumbling`](./Properties#creaking_crumbling)(1.21.4+)
* **默认属性：** 无