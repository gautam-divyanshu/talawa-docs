[**talawa-api**](../../../README.md)

***

# Function: revokeAllUserRefreshTokens()

> **revokeAllUserRefreshTokens**(`drizzleClient`, `userId`): `Promise`\<`number`\>

Defined in: [src/utilities/refreshTokenUtils.ts:129](https://github.com/PalisadoesFoundation/talawa-api/blob/f55b9babb4ee32c06104383cf8760b84f8143482/src/utilities/refreshTokenUtils.ts#L129)

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
