[**talawa-api**](../../../../README.md)

***

# Class: PluginRegistry

Defined in: [src/plugin/manager/registry.ts:13](https://github.com/PalisadoesFoundation/talawa-api/blob/4192946e517a94b573c8f323a0a5b2837aeccf3f/src/plugin/manager/registry.ts#L13)

## Constructors

### Constructor

> **new PluginRegistry**(`pluginContext`): `PluginRegistry`

Defined in: [src/plugin/manager/registry.ts:14](https://github.com/PalisadoesFoundation/talawa-api/blob/4192946e517a94b573c8f323a0a5b2837aeccf3f/src/plugin/manager/registry.ts#L14)

#### Parameters

##### pluginContext

[`IPluginContext`](../../../types/interfaces/IPluginContext.md)

#### Returns

`PluginRegistry`

## Methods

### getPluginFromDatabase()

> **getPluginFromDatabase**(`pluginId`): `Promise`\<\{ `backup`: `boolean`; `createdAt`: `Date`; `id`: `string`; `isActivated`: `boolean`; `isInstalled`: `boolean`; `pluginId`: `string`; `updatedAt`: `Date` \| `null`; \} \| `null`\>

Defined in: [src/plugin/manager/registry.ts:19](https://github.com/PalisadoesFoundation/talawa-api/blob/4192946e517a94b573c8f323a0a5b2837aeccf3f/src/plugin/manager/registry.ts#L19)

Get plugin from database

#### Parameters

##### pluginId

`string`

#### Returns

`Promise`\<\{ `backup`: `boolean`; `createdAt`: `Date`; `id`: `string`; `isActivated`: `boolean`; `isInstalled`: `boolean`; `pluginId`: `string`; `updatedAt`: `Date` \| `null`; \} \| `null`\>

***

### updatePluginInDatabase()

> **updatePluginInDatabase**(`pluginId`, `updates`): `Promise`\<`void`\>

Defined in: [src/plugin/manager/registry.ts:43](https://github.com/PalisadoesFoundation/talawa-api/blob/4192946e517a94b573c8f323a0a5b2837aeccf3f/src/plugin/manager/registry.ts#L43)

Update plugin in database

#### Parameters

##### pluginId

`string`

##### updates

`Partial`\<*typeof* `pluginsTable.$inferInsert`\>

#### Returns

`Promise`\<`void`\>
