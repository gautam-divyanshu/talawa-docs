[**talawa-api**](../../../README.md)

***

# Function: getClearRefreshTokenCookieOptions()

> **getClearRefreshTokenCookieOptions**(`options`): `CookieSerializeOptions`

Defined in: [src/utilities/cookieConfig.ts:113](https://github.com/PalisadoesFoundation/talawa-api/blob/39075e3ba8206f4ccaf60cdb809b4cedd12c8a45/src/utilities/cookieConfig.ts#L113)

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
