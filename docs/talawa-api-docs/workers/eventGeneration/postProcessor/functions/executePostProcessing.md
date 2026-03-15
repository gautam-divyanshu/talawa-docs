[**talawa-api**](../../../../README.md)

***

# Function: executePostProcessing()

> **executePostProcessing**(`executionResults`, `_metrics`, `config`, `deps`): `Promise`\<[`PostProcessingResult`](../interfaces/PostProcessingResult.md)\>

Defined in: [src/workers/eventGeneration/postProcessor.ts:30](https://github.com/PalisadoesFoundation/talawa-api/blob/e5257a859e980c4157b048d478eb38a347def32f/src/workers/eventGeneration/postProcessor.ts#L30)

Executes post-processing tasks after the materialization of event instances is complete.
This includes operations like cleaning up old data and logging final statistics.

## Parameters

### executionResults

[`EventGenerationExecutionResult`](../../executionEngine/interfaces/EventGenerationExecutionResult.md)[]

An array of results from the materialization execution.

### \_metrics

[`ProcessingMetrics`](../../types/interfaces/ProcessingMetrics.md)

### config

[`PostProcessingConfig`](../interfaces/PostProcessingConfig.md)

The configuration for post-processing.

### deps

[`WorkerDependencies`](../../types/interfaces/WorkerDependencies.md)

The dependencies required for the worker.

## Returns

`Promise`\<[`PostProcessingResult`](../interfaces/PostProcessingResult.md)\>

- A promise that resolves to the result of the post-processing operations.
