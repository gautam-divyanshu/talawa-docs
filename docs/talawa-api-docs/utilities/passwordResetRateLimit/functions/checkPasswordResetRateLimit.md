[**talawa-api**](../../../README.md)

***

# Function: checkPasswordResetRateLimit()

> **checkPasswordResetRateLimit**(`email`): `boolean`

Defined in: [src/utilities/passwordResetRateLimit.ts:28](https://github.com/PalisadoesFoundation/talawa-api/blob/29f85325b75d0f277ef992b07c6afd8761e3db6a/src/utilities/passwordResetRateLimit.ts#L28)

Checks if an email address has exceeded the rate limit for password reset requests.
Uses a fixed window approach (entire window resets when it expires).

## Parameters

### email

`string`

The email address to check

## Returns

`boolean`

true if request is allowed, false if rate limit exceeded
