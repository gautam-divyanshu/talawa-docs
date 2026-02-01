[**talawa-api**](../../../README.md)

***

# Function: runMetricsAggregationWorkerSafely()

> **runMetricsAggregationWorkerSafely**(`getMetricsSnapshots`, `windowMinutes`, `logger`): `Promise`\<`void`\>

Defined in: [src/workers/backgroundWorkerService.ts:255](https://github.com/PalisadoesFoundation/talawa-api/blob/1ed05dfbd5f8b040258a6172cdf4d8be325f6225/src/workers/backgroundWorkerService.ts#L255)

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
