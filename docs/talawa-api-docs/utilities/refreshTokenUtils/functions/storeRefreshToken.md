[**talawa-api**](../../../README.md)

***

# Function: storeRefreshToken()

> **storeRefreshToken**(`drizzleClient`, `userId`, `tokenHash`, `expiresAt`): `Promise`\<\{ `id`: `string`; \}\>

Defined in: [src/utilities/refreshTokenUtils.ts:38](https://github.com/PalisadoesFoundation/talawa-api/blob/4192946e517a94b573c8f323a0a5b2837aeccf3f/src/utilities/refreshTokenUtils.ts#L38)

Stores a refresh token in the database.

## Parameters

### drizzleClient

`PostgresJsDatabase`\<[`drizzle/schema`](../../../drizzle/schema/README.md)\>

The Drizzle database client

### userId

`string`

The user ID to associate with the token

### tokenHash

`string`

The hashed refresh token

### expiresAt

`Date`

The expiration date of the token

## Returns

`Promise`\<\{ `id`: `string`; \}\>

- The created refresh token record
