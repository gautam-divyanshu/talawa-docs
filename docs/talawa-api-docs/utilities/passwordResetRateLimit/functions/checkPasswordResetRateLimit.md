[**talawa-api**](../../../README.md)

***

# Function: checkPasswordResetRateLimit()

> **checkPasswordResetRateLimit**(`email`): `boolean`

Defined in: [src/utilities/passwordResetRateLimit.ts:28](https://github.com/PalisadoesFoundation/talawa-api/blob/bac950e699f25975d58faf99422a1af81bd3b461/src/utilities/passwordResetRateLimit.ts#L28)

Checks if an email address has exceeded the rate limit for password reset requests.
Uses a fixed window approach (entire window resets when it expires).

## Parameters

### email

`string`

The email address to check

## Returns

`boolean`

true if request is allowed, false if rate limit exceeded
