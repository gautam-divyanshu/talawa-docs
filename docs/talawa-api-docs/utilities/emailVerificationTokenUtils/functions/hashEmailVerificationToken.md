[**talawa-api**](../../../README.md)

***

# Function: hashEmailVerificationToken()

> **hashEmailVerificationToken**(`token`): `string`

Defined in: [src/utilities/emailVerificationTokenUtils.ts:46](https://github.com/PalisadoesFoundation/talawa-api/blob/4192946e517a94b573c8f323a0a5b2837aeccf3f/src/utilities/emailVerificationTokenUtils.ts#L46)

Creates a HMAC-SHA-256 hash of an email verification token for secure storage.

Note: HMAC-SHA-256 is appropriate here (not argon2/bcrypt) because:
- The token is cryptographically random (256 bits of entropy)
- Brute-force attacks are computationally infeasible
- This matches the pattern used for password reset tokens in this codebase

## Parameters

### token

`string`

The raw email verification token

## Returns

`string`

- The hashed token
