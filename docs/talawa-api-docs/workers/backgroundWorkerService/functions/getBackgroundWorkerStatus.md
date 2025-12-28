[**talawa-api**](../../../README.md)

***

# Function: getBackgroundWorkerStatus()

> **getBackgroundWorkerStatus**(): `object`

Defined in: [src/workers/backgroundWorkerService.ts:219](https://github.com/PalisadoesFoundation/talawa-api/blob/aa036083713a382be03ddad8b72207946e5ffeb4/src/workers/backgroundWorkerService.ts#L219)

Retrieves the current status of the background worker service, including scheduling information.

## Returns

`object`

An object containing the current status of the service.

### cleanupSchedule

> **cleanupSchedule**: `string`

### isRunning

> **isRunning**: `boolean`

### materializationSchedule

> **materializationSchedule**: `string`

### nextCleanupRun?

> `optional` **nextCleanupRun**: `Date`

### nextMaterializationRun?

> `optional` **nextMaterializationRun**: `Date`
