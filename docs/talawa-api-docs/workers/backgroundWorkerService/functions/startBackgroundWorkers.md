[**talawa-api**](../../../README.md)

***

# Function: startBackgroundWorkers()

> **startBackgroundWorkers**(`drizzleClient`, `logger`, `getMetricsSnapshots?`): `Promise`\<`void`\>

Defined in: [src/workers/backgroundWorkerService.ts:39](https://github.com/PalisadoesFoundation/talawa-api/blob/e5257a859e980c4157b048d478eb38a347def32f/src/workers/backgroundWorkerService.ts#L39)

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
