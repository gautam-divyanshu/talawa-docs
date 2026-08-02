[**talawa-api**](../../../../README.md)

***

# Function: clearAuthCookies()

> **clearAuthCookies**(`reply`, `cookieOptions?`): `void`

Defined in: [src/services/auth/authService.ts:304](https://github.com/PalisadoesFoundation/talawa-api/blob/5786ae4f6a720dac990dcd3c8ac65cc65d4a7aa7/src/services/auth/authService.ts#L304)

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
