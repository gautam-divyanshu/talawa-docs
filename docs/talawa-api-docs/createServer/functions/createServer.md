[**talawa-api**](../../README.md)

***

# Function: createServer()

> **createServer**(`options?`): `Promise`\<`FastifyInstance`\<`Server`\<*typeof* `IncomingMessage`, *typeof* `ServerResponse`\>, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `TypeBoxTypeProvider`\>\>

Defined in: [src/createServer.ts:30](https://github.com/PalisadoesFoundation/talawa-api/blob/d13be3cb0cfe1a6d40c90655bd50eb2eae8eb9fc/src/createServer.ts#L30)

This function is used to set up the fastify server.

## Parameters

### options?

#### envConfig?

`Partial`\<[`EnvConfig`](../../envConfigSchema/type-aliases/EnvConfig.md)\>

Optional custom configuration environment variables that would merge or override the default configuration environment variables used by talawa api.

## Returns

`Promise`\<`FastifyInstance`\<`Server`\<*typeof* `IncomingMessage`, *typeof* `ServerResponse`\>, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `TypeBoxTypeProvider`\>\>
