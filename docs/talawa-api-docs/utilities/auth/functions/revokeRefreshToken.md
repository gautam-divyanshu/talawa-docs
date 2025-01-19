[**talawa-api**](../../../README.md)

***

[talawa-api](../../../modules.md) / [utilities/auth](../README.md) / revokeRefreshToken

# Function: revokeRefreshToken()

\> **revokeRefreshToken**(`userId`): `Promise`\<`void`\>

Defined in: [src/utilities/auth.ts:86](https://github.com/PalisadoesFoundation/talawa-api/blob/33412350fcbc7b376cab529f8a291f46d0165828/src/utilities/auth.ts#L86)

Revokes the refresh token for a user by removing the token from the user's profile.
This function searches for the user by their ID and unsets the token field in the user's document.

## Parameters

### userId

`string`

The ID of the user whose refresh token is to be revoked

## Returns

`Promise`\<`void`\>

A promise that resolves when the token has been revoked
