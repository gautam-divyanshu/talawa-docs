[**talawa-api**](../../../README.md)

***

# Variable: graphql()

> `const` **graphql**: (`fastify`) => `Promise`\<`void`\>

Defined in: [src/routes/graphql.ts:203](https://github.com/PalisadoesFoundation/talawa-api/blob/b24a30943e90218609bbe2cec77af89181bb6c56/src/routes/graphql.ts#L203)

This fastify route plugin function is initializes mercurius on the fastify instance and directs incoming requests on the `/graphql` route to it.

## Parameters

### fastify

`FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `FastifyTypeProviderDefault`\>

## Returns

`Promise`\<`void`\>
