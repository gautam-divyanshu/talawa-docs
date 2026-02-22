[**talawa-api**](../../../../README.md)

***

# Function: createEventGenerationJobs()

> **createEventGenerationJobs**(`workloads`): [`EventGenerationJob`](../../executionEngine/interfaces/EventGenerationJob.md)[]

Defined in: [src/workers/eventGeneration/jobDiscovery.ts:118](https://github.com/PalisadoesFoundation/talawa-api/blob/e0c5d64d62f9cbd7e709b63db8cf19f32f235f61/src/workers/eventGeneration/jobDiscovery.ts#L118)

Converts a list of discovered workloads into an array of executable EventGeneration jobs.
This function uses a unified, date-based approach by normalizing recurrence rules.

## Parameters

### workloads

[`DiscoveredWorkload`](../interfaces/DiscoveredWorkload.md)[]

An array of discovered workloads to be converted.

## Returns

[`EventGenerationJob`](../../executionEngine/interfaces/EventGenerationJob.md)[]

- An array of EventGeneration jobs ready for execution.
