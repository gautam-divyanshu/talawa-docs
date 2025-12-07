[**talawa-api**](../../../../README.md)

***

# Function: getProcessingStatistics()

> **getProcessingStatistics**(`deps`): `Promise`\<\{ `averageInstancesPerRun`: `number`; `enabledOrganizations`: `number`; `lastProcessingRun`: `Date` \| `null`; `organizationsNeedingProcessing`: `number`; `totalOrganizations`: `number`; \}\>

Defined in: [src/workers/eventGeneration/windowManager.ts:280](https://github.com/PalisadoesFoundation/talawa-api/blob/d40e84d157d4bee564e5a066ea403df80b2fb3be/src/workers/eventGeneration/windowManager.ts#L280)

Gets processing statistics for all organizations

## Parameters

### deps

[`WorkerDependencies`](../interfaces/WorkerDependencies.md)

## Returns

`Promise`\<\{ `averageInstancesPerRun`: `number`; `enabledOrganizations`: `number`; `lastProcessingRun`: `Date` \| `null`; `organizationsNeedingProcessing`: `number`; `totalOrganizations`: `number`; \}\>
