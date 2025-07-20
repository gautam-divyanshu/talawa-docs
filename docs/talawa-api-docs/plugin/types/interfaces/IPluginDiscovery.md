[**talawa-api**](../../../README.md)

***

# Interface: IPluginDiscovery

Defined in: [src/plugin/types.ts:114](https://github.com/PalisadoesFoundation/talawa-api/blob/85295bc0a41036287eacb0bf29a66d8022826bb4/src/plugin/types.ts#L114)

## Methods

### loadManifest()

> **loadManifest**(`pluginId`): `Promise`\<[`IPluginManifest`](IPluginManifest.md)\>

Defined in: [src/plugin/types.ts:117](https://github.com/PalisadoesFoundation/talawa-api/blob/85295bc0a41036287eacb0bf29a66d8022826bb4/src/plugin/types.ts#L117)

#### Parameters

##### pluginId

`string`

#### Returns

`Promise`\<[`IPluginManifest`](IPluginManifest.md)\>

***

### scanDirectory()

> **scanDirectory**(`path`): `Promise`\<`string`[]\>

Defined in: [src/plugin/types.ts:115](https://github.com/PalisadoesFoundation/talawa-api/blob/85295bc0a41036287eacb0bf29a66d8022826bb4/src/plugin/types.ts#L115)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`string`[]\>

***

### validateManifest()

> **validateManifest**(`manifest`): `boolean`

Defined in: [src/plugin/types.ts:116](https://github.com/PalisadoesFoundation/talawa-api/blob/85295bc0a41036287eacb0bf29a66d8022826bb4/src/plugin/types.ts#L116)

#### Parameters

##### manifest

[`IPluginManifest`](IPluginManifest.md)

#### Returns

`boolean`
