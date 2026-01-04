[**talawa-api**](../../../../README.md)

***

# Function: createEventGenerationJobs()

> **createEventGenerationJobs**(`workloads`): [`EventGenerationJob`](../../executionEngine/interfaces/EventGenerationJob.md)[]

Defined in: [src/workers/eventGeneration/jobDiscovery.ts:118](https://github.com/PalisadoesFoundation/talawa-api/blob/4fc4e12ad9f960600b3078451d438c08033538a9/src/workers/eventGeneration/jobDiscovery.ts#L118)

Converts a list of discovered workloads into an array of executable EventGeneration jobs.
This function uses a unified, date-based approach by normalizing recurrence rules.

## Parameters

### workloads

[`DiscoveredWorkload`](../interfaces/DiscoveredWorkload.md)[]

An array of discovered workloads to be converted.

## Returns

[`EventGenerationJob`](../../executionEngine/interfaces/EventGenerationJob.md)[]

- An array of EventGeneration jobs ready for execution.
