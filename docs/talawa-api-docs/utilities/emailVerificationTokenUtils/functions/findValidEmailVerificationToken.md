[**talawa-api**](../../../README.md)

***

# Function: findValidEmailVerificationToken()

> **findValidEmailVerificationToken**(`db`, `tokenHash`): `Promise`\<\{ `expiresAt`: `Date`; `id`: `string`; `userId`: `string`; \} \| `undefined`\>

Defined in: [src/utilities/emailVerificationTokenUtils.ts:99](https://github.com/PalisadoesFoundation/talawa-api/blob/e5257a859e980c4157b048d478eb38a347def32f/src/utilities/emailVerificationTokenUtils.ts#L99)

Finds a valid (non-expired, non-used) email verification token by its hash.

Note: All conditions (hash match, not expired, not used) are combined in a single
database query for defense-in-depth against timing attacks. While the 256-bit
token entropy makes timing attacks impractical, this approach returns consistent
timing regardless of token state.

## Parameters

### db

`PostgresJsDatabase`\<[`drizzle/schema`](../../../drizzle/schema/README.md)\>

### tokenHash

`string`

The hashed email verification token to look up

## Returns

`Promise`\<\{ `expiresAt`: `Date`; `id`: `string`; `userId`: `string`; \} \| `undefined`\>

- The email verification token record if found and valid, undefined otherwise
