[**talawa-api**](../../../../README.md)

***

# Function: signRefreshToken()

> **signRefreshToken**(`userId`, `jti`): `Promise`\<`string`\>

Defined in: [src/services/auth/tokens.ts:121](https://github.com/PalisadoesFoundation/talawa-api/blob/bac950e699f25975d58faf99422a1af81bd3b461/src/services/auth/tokens.ts#L121)

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
