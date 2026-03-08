[**talawa-api**](../../README.md)

***

# Function: install()

> **install**(`config?`): `Promise`\<[`InstallResult`](../types/interfaces/InstallResult.md)\>

Defined in: [src/install/index.ts:148](https://github.com/PalisadoesFoundation/talawa-api/blob/bac950e699f25975d58faf99422a1af81bd3b461/src/install/index.ts#L148)

Main installation function.

This function checks prerequisites and provides setup guidance.
Actual package installation is handled by the shell scripts
(install.sh, install-linux.sh, install-macos.sh, install.ps1).

## Parameters

### config?

`Partial`\<[`InstallConfig`](../types/interfaces/InstallConfig.md)\>

Partial configuration options

## Returns

`Promise`\<[`InstallResult`](../types/interfaces/InstallResult.md)\>

Installation result with success status and duration.
         Note: packagesInstalled will be empty as this module
         only validates prerequisites, not installs packages.
