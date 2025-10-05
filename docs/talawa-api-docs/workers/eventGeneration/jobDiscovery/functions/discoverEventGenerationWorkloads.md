[**talawa-api**](../../../../README.md)

***

# Function: discoverEventGenerationWorkloads()

> **discoverEventGenerationWorkloads**(`config`, `deps`): `Promise`\<[`DiscoveredWorkload`](../interfaces/DiscoveredWorkload.md)[]\>

Defined in: [src/workers/eventGeneration/jobDiscovery.ts:48](https://github.com/PalisadoesFoundation/talawa-api/blob/8d297f60dc1691c65743cbe7bf8fda727ed61654/src/workers/eventGeneration/jobDiscovery.ts#L48)

Discovers organizations and their recurring events that require EventGeneration,
creating a prioritized list of workloads.

## Parameters

### config

[`JobDiscoveryConfig`](../interfaces/JobDiscoveryConfig.md)

The configuration for the job discovery process.

### deps

[`WorkerDependencies`](../../types/interfaces/WorkerDependencies.md)

The dependencies required for the worker, such as the database client and logger.

## Returns

`Promise`\<[`DiscoveredWorkload`](../interfaces/DiscoveredWorkload.md)[]\>

A promise that resolves to an array of discovered workloads, sorted by priority.
