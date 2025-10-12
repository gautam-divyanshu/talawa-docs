[**talawa-api**](../../../README.md)

***

# Function: createPluginTables()

> **createPluginTables**(`db`, `pluginId`, `tableDefinitions`, `logger?`): `Promise`\<`void`\>

Defined in: [src/plugin/utils.ts:455](https://github.com/PalisadoesFoundation/talawa-api/blob/e96fa5edb6be6453765d6ab160fe5a845f75f0e8/src/plugin/utils.ts#L455)

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
