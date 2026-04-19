[**talawa-api**](../../../README.md)

***

# Function: getBackgroundWorkerStatus()

> **getBackgroundWorkerStatus**(): `object`

Defined in: [src/workers/backgroundWorkerService.ts:344](https://github.com/PalisadoesFoundation/talawa-api/blob/5246239edff12106460ef2c69cc54e98da4dedcf/src/workers/backgroundWorkerService.ts#L344)

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

> `optional` **metricsEnabled?**: `boolean`

### metricsSchedule?

> `optional` **metricsSchedule?**: `string`

### nextCleanupRun?

> `optional` **nextCleanupRun?**: `Date`

### nextMaterializationRun?

> `optional` **nextMaterializationRun?**: `Date`
