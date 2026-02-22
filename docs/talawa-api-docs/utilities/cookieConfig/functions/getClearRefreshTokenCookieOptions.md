[**talawa-api**](../../../README.md)

***

# Function: getClearRefreshTokenCookieOptions()

> **getClearRefreshTokenCookieOptions**(`options`): `CookieSerializeOptions`

Defined in: [src/utilities/cookieConfig.ts:113](https://github.com/PalisadoesFoundation/talawa-api/blob/e0c5d64d62f9cbd7e709b63db8cf19f32f235f61/src/utilities/cookieConfig.ts#L113)

Generates cookie options for clearing/removing refresh token cookies.
Used during logout to invalidate the refresh token cookie.
Uses sameSite: "lax" to match getRefreshTokenCookieOptions().

## Parameters

### options

[`CookieConfigOptions`](../interfaces/CookieConfigOptions.md)

Configuration options for the cookie

## Returns

`CookieSerializeOptions`

- Cookie serialization options that will clear the cookie
