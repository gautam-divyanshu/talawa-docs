[**talawa-api**](../../../README.md)

***

# Function: createPluginTables()

> **createPluginTables**(`db`, `pluginId`, `tableDefinitions`, `logger?`): `Promise`\<`void`\>

Defined in: [src/plugin/utils.ts:425](https://github.com/PalisadoesFoundation/talawa-api/blob/3e735f62cd978db04c1ff58ca33667aba6f9eeef/src/plugin/utils.ts#L425)

Dynamically creates database tables from plugin table definitions

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
