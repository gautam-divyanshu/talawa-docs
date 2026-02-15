[**talawa-api**](../../../README.md)

***

# Function: checkEmailVerificationRateLimit()

> **checkEmailVerificationRateLimit**(`userId`): `boolean`

Defined in: [src/utilities/emailVerificationRateLimit.ts:28](https://github.com/PalisadoesFoundation/talawa-api/blob/39075e3ba8206f4ccaf60cdb809b4cedd12c8a45/src/utilities/emailVerificationRateLimit.ts#L28)

Checks if a user has exceeded the rate limit for email verification requests.
Uses a fixed window approach (entire window resets when it expires).

## Parameters

### userId

`string`

The user ID to check

## Returns

`boolean`

true if request is allowed, false if rate limit exceeded
