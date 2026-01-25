[**talawa-api**](../../../README.md)

***

# Function: startBackgroundWorkers()

> **startBackgroundWorkers**(`drizzleClient`, `logger`, `getMetricsSnapshots?`): `Promise`\<`void`\>

Defined in: [src/workers/backgroundWorkerService.ts:31](https://github.com/PalisadoesFoundation/talawa-api/blob/f55b9babb4ee32c06104383cf8760b84f8143482/src/workers/backgroundWorkerService.ts#L31)

Initializes and starts all background workers, scheduling them to run at their configured intervals.

## Parameters

### drizzleClient

`NodePgDatabase`\<[`drizzle/schema`](../../../drizzle/schema/README.md)\>

Drizzle database client

### logger

`FastifyBaseLogger`

Fastify logger instance

### getMetricsSnapshots?

(`windowMinutes?`) => [`PerfSnapshot`](../../../utilities/metrics/performanceTracker/type-aliases/PerfSnapshot.md)[]

Optional function to retrieve performance snapshots for metrics aggregation

## Returns

`Promise`\<`void`\>
