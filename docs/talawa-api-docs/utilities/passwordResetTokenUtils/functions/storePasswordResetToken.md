[**talawa-api**](../../../README.md)

***

# Function: storePasswordResetToken()

> **storePasswordResetToken**(`drizzleClient`, `userId`, `tokenHash`, `expiresAt`): `Promise`\<\{ `id`: `string`; \}\>

Defined in: [src/utilities/passwordResetTokenUtils.ts:72](https://github.com/PalisadoesFoundation/talawa-api/blob/5786ae4f6a720dac990dcd3c8ac65cc65d4a7aa7/src/utilities/passwordResetTokenUtils.ts#L72)

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

`Date` \| `null`

The expiration date of the token, or null for tokens that never expire

## Returns

`Promise`\<\{ `id`: `string`; \}\>

- The created password reset token record
