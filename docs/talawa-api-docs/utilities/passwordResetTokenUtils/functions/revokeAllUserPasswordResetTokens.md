[**talawa-api**](../../../README.md)

***

# Function: revokeAllUserPasswordResetTokens()

> **revokeAllUserPasswordResetTokens**(`drizzleClient`, `userId`): `Promise`\<`number`\>

Defined in: [src/utilities/passwordResetTokenUtils.ts:177](https://github.com/PalisadoesFoundation/talawa-api/blob/b9e6fcc765ae0106e0dfd5d4f4612eef0522df38/src/utilities/passwordResetTokenUtils.ts#L177)

Revokes all password reset tokens for a user (marks them as used).
Useful when user successfully resets password or requests a new token.

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
