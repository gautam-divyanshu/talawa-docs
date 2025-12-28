[**talawa-api**](../../../README.md)

***

# Function: clearPluginModuleCache()

> **clearPluginModuleCache**(`pluginPath`, `_cacheObj?`): `void`

Defined in: [src/plugin/utils.ts:596](https://github.com/PalisadoesFoundation/talawa-api/blob/aa036083713a382be03ddad8b72207946e5ffeb4/src/plugin/utils.ts#L596)

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
