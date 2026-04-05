[**talawa-api**](../../../README.md)

***

# Function: runMetricsAggregationWorkerSafely()

> **runMetricsAggregationWorkerSafely**(`getMetricsSnapshots`, `windowMinutes`, `logger`): `Promise`\<`void`\>

Defined in: [src/workers/backgroundWorkerService.ts:268](https://github.com/PalisadoesFoundation/talawa-api/blob/ba020be1455b363dacbc8141230aeacb45671626/src/workers/backgroundWorkerService.ts#L268)

Executes the metrics aggregation worker with robust error handling to prevent crashes.

## Parameters

### getMetricsSnapshots

(`windowMinutes?`) => [`PerfSnapshot`](../../../utilities/metrics/performanceTracker/type-aliases/PerfSnapshot.md)[]

### windowMinutes

`number`

### logger

`FastifyBaseLogger`

## Returns

`Promise`\<`void`\>
