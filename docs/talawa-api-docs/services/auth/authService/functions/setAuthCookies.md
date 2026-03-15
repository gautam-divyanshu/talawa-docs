[**talawa-api**](../../../../README.md)

***

# Function: setAuthCookies()

> **setAuthCookies**(`reply`, `tokens`, `cookieOptions?`): `void`

Defined in: [src/services/auth/authService.ts:276](https://github.com/PalisadoesFoundation/talawa-api/blob/e5257a859e980c4157b048d478eb38a347def32f/src/services/auth/authService.ts#L276)

Sets HTTP-only auth cookies on the reply.

## Parameters

### reply

`FastifyReply`

Fastify reply instance to set cookies on.

### tokens

[`SetAuthCookiesTokens`](../interfaces/SetAuthCookiesTokens.md)

SetAuthCookiesTokens; may contain access and/or refresh token strings; only present keys are set.

### cookieOptions?

[`CookieConfigOptions`](../../../../utilities/cookieConfig/interfaces/CookieConfigOptions.md)

Optional CookieConfigOptions (domain, isSecure, path); when omitted, built from process.env.

## Returns

`void`

void
