[**talawa-api**](../../../README.md)

***

# Function: installPluginDependencies()

> **installPluginDependencies**(`pluginId`, `logger?`): `Promise`\<[`DependencyInstallationResult`](../interfaces/DependencyInstallationResult.md)\>

Defined in: [src/utilities/pluginDependencyInstaller.ts:26](https://github.com/PalisadoesFoundation/talawa-api/blob/36d1ea832b10d1e9883eff7a03104362b71079bd/src/utilities/pluginDependencyInstaller.ts#L26)

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
