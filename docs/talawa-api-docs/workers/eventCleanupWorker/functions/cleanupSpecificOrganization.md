[**talawa-api**](../../../README.md)

***

# Function: cleanupSpecificOrganization()

> **cleanupSpecificOrganization**(`organizationId`, `drizzleClient`, `logger`): `Promise`\<\{ `instancesDeleted`: `number`; `retentionCutoffDate`: `Date`; \}\>

Defined in: [src/workers/eventCleanupWorker.ts:167](https://github.com/PalisadoesFoundation/talawa-api/blob/b24a30943e90218609bbe2cec77af89181bb6c56/src/workers/eventCleanupWorker.ts#L167)

Manually triggers a cleanup of old instances for a specific organization.

## Parameters

### organizationId

`string`

The ID of the organization to clean up.

### drizzleClient

`NodePgDatabase`\<[`drizzle/schema`](../../../drizzle/schema/README.md)\>

### logger

`FastifyBaseLogger`

## Returns

`Promise`\<\{ `instancesDeleted`: `number`; `retentionCutoffDate`: `Date`; \}\>

- A promise that resolves to an object containing the number of deleted instances
         and the retention cutoff date used.
