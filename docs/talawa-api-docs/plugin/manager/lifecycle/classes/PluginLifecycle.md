[**talawa-api**](../../../../README.md)

***

# Class: PluginLifecycle

Defined in: [src/plugin/manager/lifecycle.ts:27](https://github.com/PalisadoesFoundation/talawa-api/blob/3e735f62cd978db04c1ff58ca33667aba6f9eeef/src/plugin/manager/lifecycle.ts#L27)

## Constructors

### Constructor

> **new PluginLifecycle**(`pluginContext`, `loadedPlugins`, `extensionRegistry`): `PluginLifecycle`

Defined in: [src/plugin/manager/lifecycle.ts:28](https://github.com/PalisadoesFoundation/talawa-api/blob/3e735f62cd978db04c1ff58ca33667aba6f9eeef/src/plugin/manager/lifecycle.ts#L28)

#### Parameters

##### pluginContext

[`IPluginContext`](../../../types/interfaces/IPluginContext.md)

##### loadedPlugins

`Map`\<`string`, [`ILoadedPlugin`](../../../types/interfaces/ILoadedPlugin.md)\>

##### extensionRegistry

[`IExtensionRegistry`](../../../types/interfaces/IExtensionRegistry.md)

#### Returns

`PluginLifecycle`

## Methods

### activatePlugin()

> **activatePlugin**(`pluginId`, `pluginManager`): `Promise`\<`boolean`\>

Defined in: [src/plugin/manager/lifecycle.ts:37](https://github.com/PalisadoesFoundation/talawa-api/blob/3e735f62cd978db04c1ff58ca33667aba6f9eeef/src/plugin/manager/lifecycle.ts#L37)

Activate a plugin

#### Parameters

##### pluginId

`string`

##### pluginManager

`IPluginManager`

#### Returns

`Promise`\<`boolean`\>

***

### deactivatePlugin()

> **deactivatePlugin**(`pluginId`, `pluginManager`, `dropTables`): `Promise`\<`boolean`\>

Defined in: [src/plugin/manager/lifecycle.ts:90](https://github.com/PalisadoesFoundation/talawa-api/blob/3e735f62cd978db04c1ff58ca33667aba6f9eeef/src/plugin/manager/lifecycle.ts#L90)

Deactivate a plugin

#### Parameters

##### pluginId

`string`

##### pluginManager

`IPluginManager`

##### dropTables

`boolean` = `false`

#### Returns

`Promise`\<`boolean`\>

***

### unloadPlugin()

> **unloadPlugin**(`pluginId`, `pluginManager`): `Promise`\<`boolean`\>

Defined in: [src/plugin/manager/lifecycle.ts:147](https://github.com/PalisadoesFoundation/talawa-api/blob/3e735f62cd978db04c1ff58ca33667aba6f9eeef/src/plugin/manager/lifecycle.ts#L147)

Unload a plugin

#### Parameters

##### pluginId

`string`

##### pluginManager

`IPluginManager`

#### Returns

`Promise`\<`boolean`\>
