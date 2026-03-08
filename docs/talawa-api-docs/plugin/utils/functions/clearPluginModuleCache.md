[**talawa-api**](../../../README.md)

***

# Function: clearPluginModuleCache()

> **clearPluginModuleCache**(`pluginPath`, `_cacheObj?`): `void`

Defined in: [src/plugin/utils.ts:623](https://github.com/PalisadoesFoundation/talawa-api/blob/bac950e699f25975d58faf99422a1af81bd3b461/src/plugin/utils.ts#L623)

Clear module cache entries for a plugin to prevent memory leaks
Note: In ES modules, we cannot directly access the module cache like in CommonJS
This function is kept for compatibility but does not perform cache clearing in ES modules

## Parameters

### pluginPath

`string`

### \_cacheObj?

`Record`\<`string`, `unknown`\>

## Returns

`void`
