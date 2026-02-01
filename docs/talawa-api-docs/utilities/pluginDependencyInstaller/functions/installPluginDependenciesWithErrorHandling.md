[**talawa-api**](../../../README.md)

***

# Function: installPluginDependenciesWithErrorHandling()

> **installPluginDependenciesWithErrorHandling**(`pluginId`, `logger?`): `Promise`\<`void`\>

Defined in: [src/utilities/pluginDependencyInstaller.ts:248](https://github.com/PalisadoesFoundation/talawa-api/blob/1ed05dfbd5f8b040258a6172cdf4d8be325f6225/src/utilities/pluginDependencyInstaller.ts#L248)

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
