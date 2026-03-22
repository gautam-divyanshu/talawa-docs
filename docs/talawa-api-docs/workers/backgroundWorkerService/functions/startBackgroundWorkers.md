[**talawa-api**](../../../README.md)

***

# Function: startBackgroundWorkers()

> **startBackgroundWorkers**(`drizzleClient`, `logger`, `getMetricsSnapshots?`): `Promise`\<`void`\>

Defined in: [src/workers/backgroundWorkerService.ts:39](https://github.com/PalisadoesFoundation/talawa-api/blob/4192946e517a94b573c8f323a0a5b2837aeccf3f/src/workers/backgroundWorkerService.ts#L39)

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
