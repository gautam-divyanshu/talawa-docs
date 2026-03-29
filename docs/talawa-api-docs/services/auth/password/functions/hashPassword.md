[**talawa-api**](../../../../README.md)

***

# Function: hashPassword()

> **hashPassword**(`plain`): `Promise`\<`string`\>

Defined in: [src/services/auth/password.ts:26](https://github.com/PalisadoesFoundation/talawa-api/blob/6cce37874af73f999b252e26ed745146024ad44c/src/services/auth/password.ts#L26)

Hashes a plain-text password using Argon2id.

## Parameters

### plain

`string`

Plain-text password to hash.

## Returns

`Promise`\<`string`\>

The argon2id hash string.
