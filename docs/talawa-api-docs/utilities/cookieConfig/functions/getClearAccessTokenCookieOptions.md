[**talawa-api**](../../../README.md)

***

# Function: getClearAccessTokenCookieOptions()

> **getClearAccessTokenCookieOptions**(`options`): `CookieSerializeOptions`

Defined in: [src/utilities/cookieConfig.ts:92](https://github.com/PalisadoesFoundation/talawa-api/blob/39075e3ba8206f4ccaf60cdb809b4cedd12c8a45/src/utilities/cookieConfig.ts#L92)

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
