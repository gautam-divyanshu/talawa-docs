[**talawa-api**](../../../README.md)

***

# Function: emergencyCleanupBefore()

> **emergencyCleanupBefore**(`cutoffDate`, `drizzleClient`, `logger`): `Promise`\<\{ `instancesDeleted`: `number`; `organizationsAffected`: `number`; \}\>

Defined in: [src/workers/eventCleanupWorker.ts:285](https://github.com/PalisadoesFoundation/talawa-api/blob/d40e84d157d4bee564e5a066ea403df80b2fb3be/src/workers/eventCleanupWorker.ts#L285)

Performs an emergency cleanup of all materialized instances older than a specified
cutoff date, across all organizations. This method should be used with caution as it
bypasses individual retention settings.

## Parameters

### cutoffDate

`Date`

The date before which all instances will be deleted.

### drizzleClient

`NodePgDatabase`\<[`drizzle/schema`](../../../drizzle/schema/README.md)\>

### logger

`FastifyBaseLogger`

## Returns

`Promise`\<\{ `instancesDeleted`: `number`; `organizationsAffected`: `number`; \}\>

A promise that resolves to an object with the number of deleted instances
         and the number of affected organizations.
