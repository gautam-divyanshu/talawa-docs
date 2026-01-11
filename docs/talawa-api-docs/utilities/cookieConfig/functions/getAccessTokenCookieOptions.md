[**talawa-api**](../../../README.md)

***

# Function: getAccessTokenCookieOptions()

> **getAccessTokenCookieOptions**(`options`, `maxAgeMs`): `CookieSerializeOptions`

Defined in: [src/utilities/cookieConfig.ts:48](https://github.com/PalisadoesFoundation/talawa-api/blob/b24a30943e90218609bbe2cec77af89181bb6c56/src/utilities/cookieConfig.ts#L48)

Generates cookie options for access tokens.
Access tokens are short-lived and used for API authentication.

## Parameters

### options

[`CookieConfigOptions`](../interfaces/CookieConfigOptions.md)

Configuration options for the cookie

### maxAgeMs

`number`

Maximum age of the cookie in milliseconds (should match JWT expiry)

## Returns

`CookieSerializeOptions`

- Cookie serialization options
