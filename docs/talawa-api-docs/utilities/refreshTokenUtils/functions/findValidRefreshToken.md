[**talawa-api**](../../../README.md)

***

# Function: findValidRefreshToken()

> **findValidRefreshToken**(`drizzleClient`, `tokenHash`): `Promise`\<\{ `expiresAt`: `Date`; `id`: `string`; `revokedAt`: `Date` \| `null`; `userId`: `string`; \} \| `undefined`\>

Defined in: [src/utilities/refreshTokenUtils.ts:66](https://github.com/PalisadoesFoundation/talawa-api/blob/36d1ea832b10d1e9883eff7a03104362b71079bd/src/utilities/refreshTokenUtils.ts#L66)

Finds a valid (non-expired, non-revoked) refresh token by its hash.

## Parameters

### drizzleClient

`PostgresJsDatabase`\<[`drizzle/schema`](../../../drizzle/schema/README.md)\>

The Drizzle database client

### tokenHash

`string`

The hashed refresh token to look up

## Returns

`Promise`\<\{ `expiresAt`: `Date`; `id`: `string`; `revokedAt`: `Date` \| `null`; `userId`: `string`; \} \| `undefined`\>

- The refresh token record if found and valid, undefined otherwise
