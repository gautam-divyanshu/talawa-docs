[**talawa-api**](../../../../README.md)

***

# Function: createEventGenerationJobs()

> **createEventGenerationJobs**(`workloads`): [`EventGenerationJob`](../../executionEngine/interfaces/EventGenerationJob.md)[]

Defined in: [src/workers/eventGeneration/jobDiscovery.ts:118](https://github.com/PalisadoesFoundation/talawa-api/blob/39075e3ba8206f4ccaf60cdb809b4cedd12c8a45/src/workers/eventGeneration/jobDiscovery.ts#L118)

Converts a list of discovered workloads into an array of executable EventGeneration jobs.
This function uses a unified, date-based approach by normalizing recurrence rules.

## Parameters

### workloads

[`DiscoveredWorkload`](../interfaces/DiscoveredWorkload.md)[]

An array of discovered workloads to be converted.

## Returns

[`EventGenerationJob`](../../executionEngine/interfaces/EventGenerationJob.md)[]

- An array of EventGeneration jobs ready for execution.
