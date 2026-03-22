[**talawa-api**](../../../README.md)

***

# Function: installPluginDependencies()

> **installPluginDependencies**(`pluginId`, `logger?`): `Promise`\<[`DependencyInstallationResult`](../interfaces/DependencyInstallationResult.md)\>

Defined in: [src/utilities/pluginDependencyInstaller.ts:26](https://github.com/PalisadoesFoundation/talawa-api/blob/4192946e517a94b573c8f323a0a5b2837aeccf3f/src/utilities/pluginDependencyInstaller.ts#L26)

Install dependencies for a plugin using pnpm

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

`Promise`\<[`DependencyInstallationResult`](../interfaces/DependencyInstallationResult.md)\>

- Promise<DependencyInstallationResult>
