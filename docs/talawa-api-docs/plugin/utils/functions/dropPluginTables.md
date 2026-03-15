[**talawa-api**](../../../README.md)

***

# Function: dropPluginTables()

> **dropPluginTables**(`db`, `pluginId`, `tableDefinitions`, `logger?`): `Promise`\<`void`\>

Defined in: [src/plugin/utils.ts:533](https://github.com/PalisadoesFoundation/talawa-api/blob/e5257a859e980c4157b048d478eb38a347def32f/src/plugin/utils.ts#L533)

Dynamically drops database tables for a plugin

## Parameters

### db

#### execute

(`sql`) => `Promise`\<`unknown`\>

### pluginId

`string`

### tableDefinitions

`Record`\<`string`, `Record`\<`string`, `unknown`\>\>

### logger?

[`ILogger`](../../types/interfaces/ILogger.md)

## Returns

`Promise`\<`void`\>
