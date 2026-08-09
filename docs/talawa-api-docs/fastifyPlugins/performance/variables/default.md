[**talawa-api**](../../../README.md)

***

# Variable: default

> **default**: (`app`) => `Promise`\<`void`\>

Defined in: [src/fastifyPlugins/performance.ts:57](https://github.com/PalisadoesFoundation/talawa-api/blob/b9e6fcc765ae0106e0dfd5d4f4612eef0522df38/src/fastifyPlugins/performance.ts#L57)

Fastify plugin that adds performance tracking to all requests.
- Attaches a performance tracker to each request
- Adds Server-Timing headers to responses
- Provides /metrics/perf endpoint for recent performance snapshots (requires authentication)
- Exposes getMetricsSnapshots for background worker metrics aggregation

## Parameters

### app

`FastifyInstance`

## Returns

`Promise`\<`void`\>
