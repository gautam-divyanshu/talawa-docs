[**talawa-api**](../../../../README.md)

***

# Function: verifyPassword()

> **verifyPassword**(`hashStr`, `plain`): `Promise`\<`boolean`\>

Defined in: [src/services/auth/password.ts:36](https://github.com/PalisadoesFoundation/talawa-api/blob/bac950e699f25975d58faf99422a1af81bd3b461/src/services/auth/password.ts#L36)

Verifies a plain-text password against an argon2id hash.

## Parameters

### hashStr

`string`

Stored hash string (e.g. from database).

### plain

`string`

Plain-text password to check.

## Returns

`Promise`\<`boolean`\>

True if the password matches; false on wrong password or invalid hash (never throws).
