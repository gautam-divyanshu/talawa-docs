[**talawa-api**](../../../README.md)

***

# Variable: default

> **default**: (`app`) => `Promise`\<`void`\>

Defined in: [src/fastifyPlugins/performance.ts:57](https://github.com/PalisadoesFoundation/talawa-api/blob/4192946e517a94b573c8f323a0a5b2837aeccf3f/src/fastifyPlugins/performance.ts#L57)

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
