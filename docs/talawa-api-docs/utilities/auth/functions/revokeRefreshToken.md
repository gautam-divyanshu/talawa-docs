[**talawa-api**](../../../README.md)

***

[talawa-api](../../../modules.md) / [utilities/auth](../README.md) / revokeRefreshToken

# Function: revokeRefreshToken()

\> **revokeRefreshToken**(`userId`): `Promise`\<`void`\>

Defined in: [src/utilities/auth.ts:86](https://github.com/PalisadoesFoundation/talawa-api/blob/25207c53554ba20e613226862dea483f0b67a696/src/utilities/auth.ts#L86)

Revokes the refresh token for a user by removing the token from the user's profile.
This function searches for the user by their ID and unsets the token field in the user's document.

## Parameters

### userId

`string`

The ID of the user whose refresh token is to be revoked

## Returns

`Promise`\<`void`\>

A promise that resolves when the token has been revoked
