[**talawa-api**](../../../README.md)

***

# Function: installPluginDependenciesWithErrorHandling()

> **installPluginDependenciesWithErrorHandling**(`pluginId`, `logger?`): `Promise`\<`void`\>

Defined in: [src/utilities/pluginDependencyInstaller.ts:248](https://github.com/PalisadoesFoundation/talawa-api/blob/b24a30943e90218609bbe2cec77af89181bb6c56/src/utilities/pluginDependencyInstaller.ts#L248)

Install dependencies for a plugin with error handling that throws TalawaGraphQLError

## Parameters

### pluginId

`string`

The ID of the plugin

### logger?

Optional logger for output

#### error?

(`message`) => `void`

#### info?

(`message`) => `void`

## Returns

`Promise`\<`void`\>

## Throws

TalawaGraphQLError if installation fails
