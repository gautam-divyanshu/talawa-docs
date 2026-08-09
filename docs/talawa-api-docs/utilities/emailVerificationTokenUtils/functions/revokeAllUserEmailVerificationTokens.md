[**talawa-api**](../../../README.md)

***

# Function: revokeAllUserEmailVerificationTokens()

> **revokeAllUserEmailVerificationTokens**(`drizzleClient`, `userId`): `Promise`\<`number`\>

Defined in: [src/utilities/emailVerificationTokenUtils.ts:173](https://github.com/PalisadoesFoundation/talawa-api/blob/b9e6fcc765ae0106e0dfd5d4f4612eef0522df38/src/utilities/emailVerificationTokenUtils.ts#L173)

Revokes all email verification tokens for a user (marks them as used).
Useful when user successfully verifies email or requests a new token.

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
