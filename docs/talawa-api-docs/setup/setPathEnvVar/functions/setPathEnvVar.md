[**talawa-api**](../../../README.md) • **Docs**

***

[talawa-api](../../../modules.md) / [setup/setPathEnvVar](../README.md) / setPathEnvVar

# Function: setPathEnvVar()

\> **setPathEnvVar**(`installDir`): `void`

Sets the PATH environment variable to include the directory where MinIO is installed.

This function modifies the PATH environment variable to include the specified installation directory.
It handles different platforms:
- On Windows, it uses `setx` to update the system PATH variable.
- On Unix-based systems (macOS and Linux), it appends the directory to the PATH in the current shell session
  and writes the update to the shell configuration file (`~/.bashrc` for Linux, `~/.zshrc` for macOS).

**Assumption:**
This function assumes that the shell configuration file (`.bashrc` or `.zshrc`) already exists. In most typical
development environments, these files are present. If the file does not exist, users may need to create it manually
to ensure the PATH update is applied in future shell sessions.

## Parameters

• **installDir**: `string`

The directory where MinIO is installed.

## Returns

`void`

## Throws

Error If updating the PATH environment variable fails.

## Defined in

[src/setup/setPathEnvVar.ts:24](https://github.com/PalisadoesFoundation/talawa-api/blob/f9e8275b1ddff2d3edcec79ee3b37c07998f6cc3/src/setup/setPathEnvVar.ts#L24)
