[**talawa-api**](../../../README.md)

***

# Function: findValidEmailVerificationToken()

> **findValidEmailVerificationToken**(`db`, `tokenHash`): `Promise`\<\{ `expiresAt`: `Date`; `id`: `string`; `userId`: `string`; \} \| `undefined`\>

Defined in: [src/utilities/emailVerificationTokenUtils.ts:99](https://github.com/PalisadoesFoundation/talawa-api/blob/e0c5d64d62f9cbd7e709b63db8cf19f32f235f61/src/utilities/emailVerificationTokenUtils.ts#L99)

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
