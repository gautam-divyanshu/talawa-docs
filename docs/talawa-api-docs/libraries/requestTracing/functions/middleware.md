[**talawa-api**](../../../README.md)

***

[talawa-api](../../../modules.md) / [libraries/requestTracing](../README.md) / middleware

# Function: middleware()

\> **middleware**(): (`req`, `res`, `next`) =\> `void`

Middleware to handle request tracing. It generates or retrieves a tracing ID,
sets it in the headers of the request and response, and stores it in the namespace context.

## Returns

`Function`

A middleware function.

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

[src/libraries/requestTracing.ts:57](https://github.com/PalisadoesFoundation/talawa-api/blob/6bd0fecc1032af2aa70d925c85724d9fec2350f9/src/libraries/requestTracing.ts#L57)
