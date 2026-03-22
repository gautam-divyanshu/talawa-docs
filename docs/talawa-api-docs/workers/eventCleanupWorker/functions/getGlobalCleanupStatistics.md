[**talawa-api**](../../../README.md)

***

# Function: getGlobalCleanupStatistics()

> **getGlobalCleanupStatistics**(`drizzleClient`): `Promise`\<\{ `averageInstancesPerOrganization`: `number`; `newestInstanceDate`: `Date` \| `null`; `oldestInstanceDate`: `Date` \| `null`; `totalInstances`: `number`; `totalInstancesEligibleForCleanup`: `number`; `totalOrganizations`: `number`; \}\>

Defined in: [src/workers/eventCleanupWorker.ts:411](https://github.com/PalisadoesFoundation/talawa-api/blob/4192946e517a94b573c8f323a0a5b2837aeccf3f/src/workers/eventCleanupWorker.ts#L411)

Retrieves global statistics about the cleanup process across all organizations,
including total instance counts and eligibility for cleanup.

## Parameters

### drizzleClient

`NodePgDatabase`\<[`drizzle/schema`](../../../drizzle/schema/README.md)\>

## Returns

`Promise`\<\{ `averageInstancesPerOrganization`: `number`; `newestInstanceDate`: `Date` \| `null`; `oldestInstanceDate`: `Date` \| `null`; `totalInstances`: `number`; `totalInstancesEligibleForCleanup`: `number`; `totalOrganizations`: `number`; \}\>

- A promise that resolves to an object with the global cleanup statistics.
