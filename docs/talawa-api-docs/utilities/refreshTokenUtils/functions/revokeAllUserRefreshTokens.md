[**talawa-api**](../../../README.md)

***

# Function: revokeAllUserRefreshTokens()

> **revokeAllUserRefreshTokens**(`drizzleClient`, `userId`): `Promise`\<`number`\>

Defined in: [src/utilities/refreshTokenUtils.ts:129](https://github.com/PalisadoesFoundation/talawa-api/blob/bac950e699f25975d58faf99422a1af81bd3b461/src/utilities/refreshTokenUtils.ts#L129)

Revokes all refresh tokens for a user (useful for logout from all devices).

## Parameters

### drizzleClient

`PostgresJsDatabase`\<[`drizzle/schema`](../../../drizzle/schema/README.md)\>

The Drizzle database client

### userId

`string`

The user ID whose tokens should be revoked

## Returns

`Promise`\<`number`\>

- The number of tokens revoked
