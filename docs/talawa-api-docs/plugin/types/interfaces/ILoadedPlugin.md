[**talawa-api**](../../../README.md)

***

# Interface: ILoadedPlugin

Defined in: [src/plugin/types.ts:59](https://github.com/PalisadoesFoundation/talawa-api/blob/8d297f60dc1691c65743cbe7bf8fda727ed61654/src/plugin/types.ts#L59)

## Properties

### databaseTables

> **databaseTables**: `Record`\<`string`, `Record`\<`string`, `unknown`\>\>

Defined in: [src/plugin/types.ts:63](https://github.com/PalisadoesFoundation/talawa-api/blob/8d297f60dc1691c65743cbe7bf8fda727ed61654/src/plugin/types.ts#L63)

***

### errorMessage?

> `optional` **errorMessage**: `string`

Defined in: [src/plugin/types.ts:70](https://github.com/PalisadoesFoundation/talawa-api/blob/8d297f60dc1691c65743cbe7bf8fda727ed61654/src/plugin/types.ts#L70)

***

### graphqlResolvers

> **graphqlResolvers**: `Record`\<`string`, `unknown`\>

Defined in: [src/plugin/types.ts:62](https://github.com/PalisadoesFoundation/talawa-api/blob/8d297f60dc1691c65743cbe7bf8fda727ed61654/src/plugin/types.ts#L62)

***

### hooks

> **hooks**: `Record`\<`string`, (...`args`) => `unknown`\>

Defined in: [src/plugin/types.ts:64](https://github.com/PalisadoesFoundation/talawa-api/blob/8d297f60dc1691c65743cbe7bf8fda727ed61654/src/plugin/types.ts#L64)

***

### id

> **id**: `string`

Defined in: [src/plugin/types.ts:60](https://github.com/PalisadoesFoundation/talawa-api/blob/8d297f60dc1691c65743cbe7bf8fda727ed61654/src/plugin/types.ts#L60)

***

### manifest

> **manifest**: [`IPluginManifest`](IPluginManifest.md)

Defined in: [src/plugin/types.ts:61](https://github.com/PalisadoesFoundation/talawa-api/blob/8d297f60dc1691c65743cbe7bf8fda727ed61654/src/plugin/types.ts#L61)

***

### status

> **status**: [`PluginStatus`](../enumerations/PluginStatus.md)

Defined in: [src/plugin/types.ts:69](https://github.com/PalisadoesFoundation/talawa-api/blob/8d297f60dc1691c65743cbe7bf8fda727ed61654/src/plugin/types.ts#L69)

***

### webhooks

> **webhooks**: `Record`\<`string`, (`request`, `reply`) => `Promise`\<`unknown`\>\>

Defined in: [src/plugin/types.ts:65](https://github.com/PalisadoesFoundation/talawa-api/blob/8d297f60dc1691c65743cbe7bf8fda727ed61654/src/plugin/types.ts#L65)
