[**talawa-api**](../../../../README.md)

***

# Function: clearAuthCookies()

> **clearAuthCookies**(`reply`, `cookieOptions?`): `void`

Defined in: [src/services/auth/authService.ts:304](https://github.com/PalisadoesFoundation/talawa-api/blob/ba020be1455b363dacbc8141230aeacb45671626/src/services/auth/authService.ts#L304)

Clears auth cookies on the reply.

## Parameters

### reply

`FastifyReply`

Fastify reply instance to clear cookies on.

### cookieOptions?

[`CookieConfigOptions`](../../../../utilities/cookieConfig/interfaces/CookieConfigOptions.md)

Optional CookieConfigOptions; when omitted, built from process.env so path/domain match setAuthCookies.

## Returns

`void`

void
