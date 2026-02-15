[**talawa-api**](../../../../README.md)

***

# Function: signRefreshToken()

> **signRefreshToken**(`userId`, `jti`): `Promise`\<`string`\>

Defined in: [src/services/auth/tokens.ts:121](https://github.com/PalisadoesFoundation/talawa-api/blob/39075e3ba8206f4ccaf60cdb809b4cedd12c8a45/src/services/auth/tokens.ts#L121)

Signs a refresh JWT for a user with a unique token id.

## Parameters

### userId

`string`

User id (sub claim).

### jti

`string`

Unique token id (e.g. for revocation).

## Returns

`Promise`\<`string`\>

Signed JWT string.
