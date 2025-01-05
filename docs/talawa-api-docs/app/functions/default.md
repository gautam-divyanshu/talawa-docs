[**talawa-api**](../../README.md)

***

[talawa-api](../../modules.md) / [app](../README.md) / default

# Function: default()

## Call Signature

\> **default**(`req`, `res`): `any`

Defined in: [src/app.ts:21](https://github.com/PalisadoesFoundation/talawa-api/blob/3600eaaf2193496324ea8e78d75780839e27cae4/src/app.ts#L21)

Express instance itself is a request handler, which could be invoked without
third argument.

### Parameters

#### req

`IncomingMessage` | `Request`

#### res

`ServerResponse` | `Response`

### Returns

`any`

## Call Signature

\> **default**(`req`, `res`, `next`): `void`

Defined in: [src/app.ts:21](https://github.com/PalisadoesFoundation/talawa-api/blob/3600eaaf2193496324ea8e78d75780839e27cae4/src/app.ts#L21)

### Parameters

#### req

`Request`

#### res

`Response`

#### next

`NextFunction`

### Returns

`void`
