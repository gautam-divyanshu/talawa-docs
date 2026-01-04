[**talawa-api**](../../../README.md)

***

# Function: getClearAccessTokenCookieOptions()

> **getClearAccessTokenCookieOptions**(`options`): `CookieSerializeOptions`

Defined in: [src/utilities/cookieConfig.ts:92](https://github.com/PalisadoesFoundation/talawa-api/blob/4fc4e12ad9f960600b3078451d438c08033538a9/src/utilities/cookieConfig.ts#L92)

Generates cookie options for clearing/removing access token cookies.
Used during logout to invalidate the access token cookie.
Uses sameSite: "lax" to match getAccessTokenCookieOptions().

## Parameters

### options

[`CookieConfigOptions`](../interfaces/CookieConfigOptions.md)

Configuration options for the cookie

## Returns

`CookieSerializeOptions`

- Cookie serialization options that will clear the cookie
