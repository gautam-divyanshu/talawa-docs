[**talawa-api**](../../../README.md)

***

# Function: hashPasswordResetToken()

> **hashPasswordResetToken**(`token`): `string`

Defined in: [src/utilities/passwordResetTokenUtils.ts:53](https://github.com/PalisadoesFoundation/talawa-api/blob/36d1ea832b10d1e9883eff7a03104362b71079bd/src/utilities/passwordResetTokenUtils.ts#L53)

Creates a HMAC-SHA-256 hash of a password reset token for secure storage.

Note: HMAC-SHA-256 is appropriate here (not argon2/bcrypt) because:
- The token is cryptographically random (256 bits of entropy)
- Brute-force attacks are computationally infeasible
- This matches the pattern used for refresh tokens in this codebase

## Parameters

### token

`string`

The raw password reset token

## Returns

`string`

- The hashed token
