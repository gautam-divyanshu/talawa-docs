[**talawa-api**](../../../../README.md)

***

# Type Alias: AccessClaims

> **AccessClaims** = `JWTPayload` & `object`

Defined in: [src/services/auth/tokens.ts:78](https://github.com/PalisadoesFoundation/talawa-api/blob/ba020be1455b363dacbc8141230aeacb45671626/src/services/auth/tokens.ts#L78)

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
