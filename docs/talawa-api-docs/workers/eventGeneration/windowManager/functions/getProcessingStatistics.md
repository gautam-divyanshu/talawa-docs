[**talawa-api**](../../../../README.md)

***

# Function: getProcessingStatistics()

> **getProcessingStatistics**(`deps`): `Promise`\<\{ `averageInstancesPerRun`: `number`; `enabledOrganizations`: `number`; `lastProcessingRun`: `Date` \| `null`; `organizationsNeedingProcessing`: `number`; `totalOrganizations`: `number`; \}\>

Defined in: [src/workers/eventGeneration/windowManager.ts:280](https://github.com/PalisadoesFoundation/talawa-api/blob/39075e3ba8206f4ccaf60cdb809b4cedd12c8a45/src/workers/eventGeneration/windowManager.ts#L280)

Gets processing statistics for all organizations

## Parameters

### deps

[`WorkerDependencies`](../interfaces/WorkerDependencies.md)

## Returns

`Promise`\<\{ `averageInstancesPerRun`: `number`; `enabledOrganizations`: `number`; `lastProcessingRun`: `Date` \| `null`; `organizationsNeedingProcessing`: `number`; `totalOrganizations`: `number`; \}\>
