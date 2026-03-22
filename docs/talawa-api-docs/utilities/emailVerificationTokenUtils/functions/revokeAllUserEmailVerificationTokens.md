[**talawa-api**](../../../README.md)

***

# Function: revokeAllUserEmailVerificationTokens()

> **revokeAllUserEmailVerificationTokens**(`drizzleClient`, `userId`): `Promise`\<`number`\>

Defined in: [src/utilities/emailVerificationTokenUtils.ts:173](https://github.com/PalisadoesFoundation/talawa-api/blob/4192946e517a94b573c8f323a0a5b2837aeccf3f/src/utilities/emailVerificationTokenUtils.ts#L173)

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
