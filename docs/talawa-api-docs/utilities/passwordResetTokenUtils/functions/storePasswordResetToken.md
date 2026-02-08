[**talawa-api**](../../../README.md)

***

# Function: storePasswordResetToken()

> **storePasswordResetToken**(`drizzleClient`, `userId`, `tokenHash`, `expiresAt`): `Promise`\<\{ `id`: `string`; \}\>

Defined in: [src/utilities/passwordResetTokenUtils.ts:72](https://github.com/PalisadoesFoundation/talawa-api/blob/36d1ea832b10d1e9883eff7a03104362b71079bd/src/utilities/passwordResetTokenUtils.ts#L72)

Stores a password reset token in the database.

## Parameters

### drizzleClient

`PostgresJsDatabase`\<[`drizzle/schema`](../../../drizzle/schema/README.md)\>

The Drizzle database client

### userId

`string`

The user ID to associate with the token

### tokenHash

`string`

The hashed password reset token

### expiresAt

The expiration date of the token, or null for tokens that never expire

`Date` | `null`

## Returns

`Promise`\<\{ `id`: `string`; \}\>

- The created password reset token record
