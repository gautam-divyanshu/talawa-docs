[**talawa-api**](../../README.md)

***

# Function: createServer()

> **createServer**(`options?`): `Promise`\<`FastifyInstance`\<`Server`\<*typeof* `IncomingMessage`, *typeof* `ServerResponse`\>, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `TypeBoxTypeProvider`\>\>

Defined in: [src/createServer.ts:30](https://github.com/PalisadoesFoundation/talawa-api/blob/050ed2813122ca02570a32383d1ba852ab349e4e/src/createServer.ts#L30)

This function is used to set up the fastify server.

## Parameters

### options?

#### envConfig?

`Partial`\<[`EnvConfig`](../../envConfigSchema/type-aliases/EnvConfig.md)\>

Optional custom configuration environment variables that would merge or override the default configuration environment variables used by talawa api.

## Returns

`Promise`\<`FastifyInstance`\<`Server`\<*typeof* `IncomingMessage`, *typeof* `ServerResponse`\>, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `TypeBoxTypeProvider`\>\>
