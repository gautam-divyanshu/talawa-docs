[**talawa-api**](../../../README.md)

***

# Function: getGlobalCleanupStatistics()

> **getGlobalCleanupStatistics**(`drizzleClient`): `Promise`\<\{ `averageInstancesPerOrganization`: `number`; `newestInstanceDate`: `Date` \| `null`; `oldestInstanceDate`: `Date` \| `null`; `totalInstances`: `number`; `totalInstancesEligibleForCleanup`: `number`; `totalOrganizations`: `number`; \}\>

Defined in: [src/workers/eventCleanupWorker.ts:332](https://github.com/PalisadoesFoundation/talawa-api/blob/3cff0028f235a062c461ef9b6aa80f244182c2ef/src/workers/eventCleanupWorker.ts#L332)

Retrieves global statistics about the cleanup process across all organizations,
including total instance counts and eligibility for cleanup.

## Parameters

### drizzleClient

`NodePgDatabase`\<[`drizzle/schema`](../../../drizzle/schema/README.md)\>

## Returns

`Promise`\<\{ `averageInstancesPerOrganization`: `number`; `newestInstanceDate`: `Date` \| `null`; `oldestInstanceDate`: `Date` \| `null`; `totalInstances`: `number`; `totalInstancesEligibleForCleanup`: `number`; `totalOrganizations`: `number`; \}\>

A promise that resolves to an object with the global cleanup statistics.
