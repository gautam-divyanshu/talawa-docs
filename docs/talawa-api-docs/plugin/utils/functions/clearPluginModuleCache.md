[**talawa-api**](../../../README.md)

***

# Function: clearPluginModuleCache()

> **clearPluginModuleCache**(`pluginPath`, `cacheObj?`): `void`

Defined in: [src/plugin/utils.ts:596](https://github.com/PalisadoesFoundation/talawa-api/blob/d40e84d157d4bee564e5a066ea403df80b2fb3be/src/plugin/utils.ts#L596)

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
