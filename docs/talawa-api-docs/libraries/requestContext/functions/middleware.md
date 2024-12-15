[**talawa-api**](../../../README.md)

***

[talawa-api](../../../modules.md) / [libraries/requestContext](../README.md) / middleware

# Function: middleware()

\> **middleware**(): (`req`, `res`, `next`) =\> `void`

Middleware to bind the request and response to the request context namespace.

## Returns

`Function`

### Parameters

#### req

`Request`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`\<`string`, `any`\>\>

#### res

`Response`\<`any`, `Record`\<`string`, `any`\>\>

#### next

`NextFunction`

### Returns

`void`

## Defined in

[src/libraries/requestContext.ts:42](https://github.com/PalisadoesFoundation/talawa-api/blob/6bd0fecc1032af2aa70d925c85724d9fec2350f9/src/libraries/requestContext.ts#L42)
