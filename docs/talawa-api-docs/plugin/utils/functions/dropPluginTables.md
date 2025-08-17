[**talawa-api**](../../../README.md)

***

# Function: dropPluginTables()

> **dropPluginTables**(`db`, `pluginId`, `tableDefinitions`, `logger?`): `Promise`\<`void`\>

Defined in: [src/plugin/utils.ts:479](https://github.com/PalisadoesFoundation/talawa-api/blob/3e735f62cd978db04c1ff58ca33667aba6f9eeef/src/plugin/utils.ts#L479)

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

#### info?

(`message`) => `void`

## Returns

`Promise`\<`void`\>
