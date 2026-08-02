[**talawa-api**](../../../README.md)

***

# Function: installPluginDependencies()

> **installPluginDependencies**(`pluginId`, `logger?`): `Promise`\<[`DependencyInstallationResult`](../interfaces/DependencyInstallationResult.md)\>

Defined in: [src/utilities/pluginDependencyInstaller.ts:26](https://github.com/PalisadoesFoundation/talawa-api/blob/5786ae4f6a720dac990dcd3c8ac65cc65d4a7aa7/src/utilities/pluginDependencyInstaller.ts#L26)

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
