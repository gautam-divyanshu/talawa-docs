[**talawa-api**](../../README.md)

***

[talawa-api](../../modules.md) / [app](../README.md) / default

# Function: default()

## Call Signature

\> **default**(`req`, `res`): `any`

Express instance itself is a request handler, which could be invoked without
third argument.

### Parameters

#### req

`IncomingMessage` | `Request`

#### res

`ServerResponse` | `Response`

### Returns

`any`

### Defined in

[src/app.ts:21](https://github.com/PalisadoesFoundation/talawa-api/blob/3a5276aff43f5de4f7fab3ec9683a420dcdc7a06/src/app.ts#L21)

## Call Signature

\> **default**(`req`, `res`, `next`): `void`

### Parameters

#### req

`Request`

#### res

`Response`

#### next

`NextFunction`

### Returns

`void`

### Defined in

[src/app.ts:21](https://github.com/PalisadoesFoundation/talawa-api/blob/3a5276aff43f5de4f7fab3ec9683a420dcdc7a06/src/app.ts#L21)
