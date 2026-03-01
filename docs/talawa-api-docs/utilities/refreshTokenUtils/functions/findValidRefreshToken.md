[**talawa-api**](../../../README.md)

***

# Function: findValidRefreshToken()

> **findValidRefreshToken**(`drizzleClient`, `tokenHash`): `Promise`\<\{ `expiresAt`: `Date`; `id`: `string`; `revokedAt`: `Date` \| `null`; `userId`: `string`; \} \| `undefined`\>

Defined in: [src/utilities/refreshTokenUtils.ts:66](https://github.com/PalisadoesFoundation/talawa-api/blob/29f85325b75d0f277ef992b07c6afd8761e3db6a/src/utilities/refreshTokenUtils.ts#L66)

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
