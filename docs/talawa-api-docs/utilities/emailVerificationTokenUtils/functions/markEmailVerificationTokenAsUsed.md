[**talawa-api**](../../../README.md)

***

# Function: markEmailVerificationTokenAsUsed()

> **markEmailVerificationTokenAsUsed**(`drizzleClient`, `tokenHash`): `Promise`\<`boolean`\>

Defined in: [src/utilities/emailVerificationTokenUtils.ts:148](https://github.com/PalisadoesFoundation/talawa-api/blob/86c684402120721d2151d1e28feb0b6d2f345849/src/utilities/emailVerificationTokenUtils.ts#L148)

Marks an email verification token as used by setting its usedAt timestamp.

## Parameters

### drizzleClient

`PostgresJsDatabase`\<[`drizzle/schema`](../../../drizzle/schema/README.md)\>

The Drizzle database client

### tokenHash

`string`

The hashed email verification token to mark as used

## Returns

`Promise`\<`boolean`\>

- True if token was marked as used, false if not found or already used
