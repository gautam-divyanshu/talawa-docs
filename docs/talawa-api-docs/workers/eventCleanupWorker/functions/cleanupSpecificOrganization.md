[**talawa-api**](../../../README.md)

***

# Function: cleanupSpecificOrganization()

> **cleanupSpecificOrganization**(`organizationId`, `drizzleClient`, `logger`): `Promise`\<\{ `instancesDeleted`: `number`; `retentionCutoffDate`: `Date`; \}\>

Defined in: [src/workers/eventCleanupWorker.ts:167](https://github.com/PalisadoesFoundation/talawa-api/blob/1ed05dfbd5f8b040258a6172cdf4d8be325f6225/src/workers/eventCleanupWorker.ts#L167)

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
