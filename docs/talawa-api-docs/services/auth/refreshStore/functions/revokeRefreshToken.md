[**talawa-api**](../../../../README.md)

***

# Function: revokeRefreshToken()

> **revokeRefreshToken**(`db`, `token`): `Promise`\<`boolean`\>

Defined in: [src/services/auth/refreshStore.ts:74](https://github.com/PalisadoesFoundation/talawa-api/blob/29f85325b75d0f277ef992b07c6afd8761e3db6a/src/services/auth/refreshStore.ts#L74)

Revokes a refresh token by setting revokedAt.
Callers can use the return value to detect whether a row was affected (e.g. token existed).

## Parameters

### db

[`DrizzleClient`](../../../../fastifyPlugins/drizzleClient/type-aliases/DrizzleClient.md)

Drizzle client.

### token

`string`

Raw refresh token (will be hashed for lookup).

## Returns

`Promise`\<`boolean`\>

Promise resolving to true if a row was updated, false if no row matched.
