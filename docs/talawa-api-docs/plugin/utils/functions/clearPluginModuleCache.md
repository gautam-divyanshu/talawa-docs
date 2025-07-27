[**talawa-api**](../../../README.md)

***

# Function: clearPluginModuleCache()

> **clearPluginModuleCache**(`pluginPath`, `cacheObj?`): `void`

Defined in: [src/plugin/utils.ts:566](https://github.com/PalisadoesFoundation/talawa-api/blob/683c972995b645053f41c76c01368003402b250c/src/plugin/utils.ts#L566)

Clear module cache entries for a plugin to prevent memory leaks
Note: In ES modules, we cannot directly access the module cache like in CommonJS
This function is kept for compatibility but does not perform cache clearing in ES modules

## Parameters

### pluginPath

`string`

### cacheObj?

`Record`\<`string`, `unknown`\>

## Returns

`void`
