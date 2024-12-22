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

`IncomingMessage` | `Request`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`\<`string`, `any`\>\>

#### res

`ServerResponse`\<`IncomingMessage`\> | `Response`\<`any`, `Record`\<`string`, `any`\>, `number`\>

### Returns

`any`

### Defined in

[src/app.ts:19](https://github.com/PalisadoesFoundation/talawa-api/blob/039b0f127fb8caa46d57186ab4b3bb27fe150903/src/app.ts#L19)

## Call Signature

\> **default**(`req`, `res`, `next`): `void`

### Parameters

#### req

`Request`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`\<`string`, `any`\>\>

#### res

`Response`\<`any`, `Record`\<`string`, `any`\>, `number`\>

#### next

`NextFunction`

### Returns

`void`

### Defined in

[src/app.ts:19](https://github.com/PalisadoesFoundation/talawa-api/blob/039b0f127fb8caa46d57186ab4b3bb27fe150903/src/app.ts#L19)
