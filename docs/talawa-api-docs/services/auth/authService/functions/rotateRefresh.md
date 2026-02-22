[**talawa-api**](../../../../README.md)

***

# Function: rotateRefresh()

> **rotateRefresh**(`db`, `log`, `token`): `Promise`\<[`RotateRefreshResult`](../type-aliases/RotateRefreshResult.md)\>

Defined in: [src/services/auth/authService.ts:197](https://github.com/PalisadoesFoundation/talawa-api/blob/e0c5d64d62f9cbd7e709b63db8cf19f32f235f61/src/services/auth/authService.ts#L197)

Rotates a refresh token: revokes the old one and issues new access and refresh tokens.

## Parameters

### db

[`DrizzleClient`](../../../../fastifyPlugins/drizzleClient/type-aliases/DrizzleClient.md)

Drizzle client for database access.

### log

`FastifyBaseLogger`

Logger for debug output (e.g. verification failures).

### token

`string`

Raw refresh JWT string; empty or whitespace-only is rejected without calling verifyToken.

## Returns

`Promise`\<[`RotateRefreshResult`](../type-aliases/RotateRefreshResult.md)\>

Promise resolving to RotateRefreshResult: either `{ access, refresh, userId }` with new tokens, or `{ error: "invalid_refresh" }` if the token is expired, invalid, wrong typ, not valid in DB, or the user is not found.
