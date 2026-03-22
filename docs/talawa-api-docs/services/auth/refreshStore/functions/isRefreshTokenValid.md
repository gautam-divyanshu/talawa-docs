[**talawa-api**](../../../../README.md)

***

# Function: isRefreshTokenValid()

> **isRefreshTokenValid**(`db`, `token`, `userId`): `Promise`\<`boolean`\>

Defined in: [src/services/auth/refreshStore.ts:95](https://github.com/PalisadoesFoundation/talawa-api/blob/4192946e517a94b573c8f323a0a5b2837aeccf3f/src/services/auth/refreshStore.ts#L95)

Returns true only if a row exists for the given userId and token hash,
and it is not revoked and not expired.

## Parameters

### db

[`DrizzleClient`](../../../../fastifyPlugins/drizzleClient/type-aliases/DrizzleClient.md)

Drizzle client.

### token

`string`

Raw refresh token (will be hashed for lookup).

### userId

`string`

User ID to match.

## Returns

`Promise`\<`boolean`\>

Promise resolving to true when the token is valid and not expired.
