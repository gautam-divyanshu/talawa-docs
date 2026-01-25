[**talawa-api**](../../../README.md)

***

# Function: getRefreshTokenCookieOptions()

> **getRefreshTokenCookieOptions**(`options`, `maxAgeMs`): `CookieSerializeOptions`

Defined in: [src/utilities/cookieConfig.ts:70](https://github.com/PalisadoesFoundation/talawa-api/blob/f55b9babb4ee32c06104383cf8760b84f8143482/src/utilities/cookieConfig.ts#L70)

Generates cookie options for refresh tokens.
Refresh tokens are long-lived and used to obtain new access tokens.

## Parameters

### options

[`CookieConfigOptions`](../interfaces/CookieConfigOptions.md)

Configuration options for the cookie

### maxAgeMs

`number`

Maximum age of the cookie in milliseconds (should match refresh token expiry)

## Returns

`CookieSerializeOptions`

- Cookie serialization options
