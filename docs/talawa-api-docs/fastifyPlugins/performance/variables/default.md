[**talawa-api**](../../../README.md)

***

# Variable: default()

> **default**: (`app`) => `Promise`\<`void`\>

Defined in: [src/fastifyPlugins/performance.ts:31](https://github.com/PalisadoesFoundation/talawa-api/blob/b24a30943e90218609bbe2cec77af89181bb6c56/src/fastifyPlugins/performance.ts#L31)

Fastify plugin that adds performance tracking to all requests.
- Attaches a performance tracker to each request
- Adds Server-Timing headers to responses
- Provides /metrics/perf endpoint for recent performance snapshots

## Parameters

### app

`FastifyInstance`

## Returns

`Promise`\<`void`\>
