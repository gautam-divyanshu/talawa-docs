[**talawa-api**](../../../../README.md)

***

# Function: getCleanupStats()

> **getCleanupStats**(`organizationId`, `drizzleClient`): `Promise`\<\{ `instancesEligibleForCleanup`: `number`; `instancesInRetentionWindow`: `number`; `retentionStartDate`: `Date`; `totalInstances`: `number`; \}\>

Defined in: [src/services/eventGeneration/windowManager.ts:216](https://github.com/PalisadoesFoundation/talawa-api/blob/3e735f62cd978db04c1ff58ca33667aba6f9eeef/src/services/eventGeneration/windowManager.ts#L216)

Retrieves cleanup statistics for an organization, including the total number of instances,
the number of instances within the retention window, and the number eligible for cleanup.

## Parameters

### organizationId

`string`

The ID of the organization to get stats for.

### drizzleClient

`NodePgDatabase`\<[`drizzle/schema`](../../../../drizzle/schema/README.md)\>

The Drizzle ORM client for database access.

## Returns

`Promise`\<\{ `instancesEligibleForCleanup`: `number`; `instancesInRetentionWindow`: `number`; `retentionStartDate`: `Date`; `totalInstances`: `number`; \}\>

A promise that resolves to an object containing the cleanup statistics.
