[**talawa-api**](../../../README.md)

***

# Function: getBackgroundWorkerStatus()

> **getBackgroundWorkerStatus**(): `object`

Defined in: [src/workers/backgroundWorkerService.ts:325](https://github.com/PalisadoesFoundation/talawa-api/blob/f55b9babb4ee32c06104383cf8760b84f8143482/src/workers/backgroundWorkerService.ts#L325)

Retrieves the current status of the background worker service, including scheduling information.

## Returns

`object`

- An object containing the current status of the service.

### cleanupSchedule

> **cleanupSchedule**: `string`

### isRunning

> **isRunning**: `boolean`

### materializationSchedule

> **materializationSchedule**: `string`

### metricsEnabled?

> `optional` **metricsEnabled**: `boolean`

### metricsSchedule?

> `optional` **metricsSchedule**: `string`

### nextCleanupRun?

> `optional` **nextCleanupRun**: `Date`

### nextMaterializationRun?

> `optional` **nextMaterializationRun**: `Date`
