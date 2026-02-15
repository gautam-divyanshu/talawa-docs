[**talawa-api**](../../../../README.md)

***

# Type Alias: AccessClaims

> **AccessClaims** = `JWTPayload` & `object`

Defined in: [src/services/auth/tokens.ts:78](https://github.com/PalisadoesFoundation/talawa-api/blob/39075e3ba8206f4ccaf60cdb809b4cedd12c8a45/src/services/auth/tokens.ts#L78)

Payload shape for access tokens. Extends jose JWTPayload so callers see iss, iat, exp.

## Type Declaration

### email

> **email**: `string`

### sub

> **sub**: `string`

### typ

> **typ**: `"access"`

### ver

> **ver**: `1`
