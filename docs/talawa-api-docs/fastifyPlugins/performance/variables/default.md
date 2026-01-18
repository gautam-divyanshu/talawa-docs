[**talawa-api**](../../../README.md)

***

# Variable: default()

> **default**: (`app`) => `Promise`\<`void`\>

Defined in: [src/fastifyPlugins/performance.ts:57](https://github.com/PalisadoesFoundation/talawa-api/blob/86c684402120721d2151d1e28feb0b6d2f345849/src/fastifyPlugins/performance.ts#L57)

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
