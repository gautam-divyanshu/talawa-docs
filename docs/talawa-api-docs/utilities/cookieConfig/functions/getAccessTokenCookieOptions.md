[**talawa-api**](../../../README.md)

***

# Function: getAccessTokenCookieOptions()

> **getAccessTokenCookieOptions**(`options`, `maxAgeMs`): `CookieSerializeOptions`

Defined in: [src/utilities/cookieConfig.ts:48](https://github.com/PalisadoesFoundation/talawa-api/blob/aa036083713a382be03ddad8b72207946e5ffeb4/src/utilities/cookieConfig.ts#L48)

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

Cookie serialization options
