[**talawa-api**](../../../README.md)

***

# Function: dropPluginTables()

> **dropPluginTables**(`db`, `pluginId`, `tableDefinitions`, `logger?`): `Promise`\<`void`\>

Defined in: [src/plugin/utils.ts:533](https://github.com/PalisadoesFoundation/talawa-api/blob/bac950e699f25975d58faf99422a1af81bd3b461/src/plugin/utils.ts#L533)

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
