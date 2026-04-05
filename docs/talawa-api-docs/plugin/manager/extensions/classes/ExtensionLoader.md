[**talawa-api**](../../../../README.md)

***

# Class: ExtensionLoader

Defined in: [src/plugin/manager/extensions.ts:22](https://github.com/PalisadoesFoundation/talawa-api/blob/ba020be1455b363dacbc8141230aeacb45671626/src/plugin/manager/extensions.ts#L22)

## Constructors

### Constructor

> **new ExtensionLoader**(`pluginsDirectory`, `loadedPlugins`, `extensionRegistry`): `ExtensionLoader`

Defined in: [src/plugin/manager/extensions.ts:23](https://github.com/PalisadoesFoundation/talawa-api/blob/ba020be1455b363dacbc8141230aeacb45671626/src/plugin/manager/extensions.ts#L23)

#### Parameters

##### pluginsDirectory

`string`

##### loadedPlugins

`Map`\<`string`, [`ILoadedPlugin`](../../../types/interfaces/ILoadedPlugin.md)\>

##### extensionRegistry

[`IExtensionRegistry`](../../../types/interfaces/IExtensionRegistry.md)

#### Returns

`ExtensionLoader`

## Methods

### loadExtensionPoints()

> **loadExtensionPoints**(`pluginId`, `manifest`, `pluginModule`): `Promise`\<`void`\>

Defined in: [src/plugin/manager/extensions.ts:32](https://github.com/PalisadoesFoundation/talawa-api/blob/ba020be1455b363dacbc8141230aeacb45671626/src/plugin/manager/extensions.ts#L32)

Load extension points for a plugin

#### Parameters

##### pluginId

`string`

##### manifest

[`IPluginManifest`](../../../types/interfaces/IPluginManifest.md)

##### pluginModule

`Record`\<`string`, `unknown`\>

#### Returns

`Promise`\<`void`\>
