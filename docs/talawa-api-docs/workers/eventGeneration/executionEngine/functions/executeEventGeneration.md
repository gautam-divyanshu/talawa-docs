[**talawa-api**](../../../../README.md)

***

# Function: executeEventGeneration()

> **executeEventGeneration**(`job`, `deps`): `Promise`\<[`ProcessingResult`](../../types/interfaces/ProcessingResult.md)\<[`EventGenerationExecutionResult`](../interfaces/EventGenerationExecutionResult.md)\>\>

Defined in: [src/workers/eventGeneration/executionEngine.ts:37](https://github.com/PalisadoesFoundation/talawa-api/blob/29f85325b75d0f277ef992b07c6afd8761e3db6a/src/workers/eventGeneration/executionEngine.ts#L37)

Executes the Generation process for a single recurring event job.
This function is the core of the execution engine, handling the creation of event instances.

## Parameters

### job

[`EventGenerationJob`](../interfaces/EventGenerationJob.md)

The Generation job to execute.

### deps

[`WorkerDependencies`](../../types/interfaces/WorkerDependencies.md)

The dependencies required for the worker, such as the database client and logger.

## Returns

`Promise`\<[`ProcessingResult`](../../types/interfaces/ProcessingResult.md)\<[`EventGenerationExecutionResult`](../interfaces/EventGenerationExecutionResult.md)\>\>

- A promise that resolves to a processing result, including metrics and resource usage.
