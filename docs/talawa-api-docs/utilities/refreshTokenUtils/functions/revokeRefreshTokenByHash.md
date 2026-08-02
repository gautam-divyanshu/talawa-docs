[**talawa-api**](../../../README.md)

***

# Function: revokeRefreshTokenByHash()

> **revokeRefreshTokenByHash**(`drizzleClient`, `tokenHash`): `Promise`\<`boolean`\>

Defined in: [src/utilities/refreshTokenUtils.ts:105](https://github.com/PalisadoesFoundation/talawa-api/blob/5786ae4f6a720dac990dcd3c8ac65cc65d4a7aa7/src/utilities/refreshTokenUtils.ts#L105)

Revokes a refresh token by setting its revokedAt timestamp.

## Parameters

### drizzleClient

`PostgresJsDatabase`\<[`drizzle/schema`](../../../drizzle/schema/README.md)\>

The Drizzle database client

### tokenHash

`string`

The hashed refresh token to revoke

## Returns

`Promise`\<`boolean`\>

- True if token was revoked, false if not found or already revoked
