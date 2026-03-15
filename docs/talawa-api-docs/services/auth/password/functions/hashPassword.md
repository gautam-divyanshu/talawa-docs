[**talawa-api**](../../../../README.md)

***

# Function: hashPassword()

> **hashPassword**(`plain`): `Promise`\<`string`\>

Defined in: [src/services/auth/password.ts:26](https://github.com/PalisadoesFoundation/talawa-api/blob/e5257a859e980c4157b048d478eb38a347def32f/src/services/auth/password.ts#L26)

Hashes a plain-text password using Argon2id.

## Parameters

### plain

`string`

Plain-text password to hash.

## Returns

`Promise`\<`string`\>

The argon2id hash string.
