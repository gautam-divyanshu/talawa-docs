[**talawa-api**](../../../../README.md)

***

# Function: initializeGenerationWindow()

> **initializeGenerationWindow**(`input`, `drizzleClient`, `logger`): `Promise`\<\{ `configurationNotes`: `string`; `createdAt`: `Date`; `createdById`: `string`; `currentWindowEndDate`: `Date`; `historyRetentionMonths`: `number`; `hotWindowMonthsAhead`: `number`; `id`: `string`; `isEnabled`: `boolean`; `lastProcessedAt`: `Date`; `lastProcessedInstanceCount`: `number`; `lastUpdatedById`: `string`; `maxInstancesPerRun`: `number`; `organizationId`: `string`; `processingPriority`: `number`; `retentionStartDate`: `Date`; `updatedAt`: `Date`; \}\>

Defined in: [src/services/eventGeneration/windowManager.ts:16](https://github.com/PalisadoesFoundation/talawa-api/blob/e96fa5edb6be6453765d6ab160fe5a845f75f0e8/src/services/eventGeneration/windowManager.ts#L16)

Initializes the Generation window for a given organization, setting up the time frame
for which event instances will be generated and retained.

## Parameters

### input

[`CreateGenerationWindowInput`](../../../../drizzle/tables/eventGenerationWindows/type-aliases/CreateGenerationWindowInput.md)

The input object containing the organization ID.

### drizzleClient

`NodePgDatabase`\<[`drizzle/schema`](../../../../drizzle/schema/README.md)\>

The Drizzle ORM client for database access.

### logger

`FastifyBaseLogger`

The logger for logging debug and error messages.

## Returns

`Promise`\<\{ `configurationNotes`: `string`; `createdAt`: `Date`; `createdById`: `string`; `currentWindowEndDate`: `Date`; `historyRetentionMonths`: `number`; `hotWindowMonthsAhead`: `number`; `id`: `string`; `isEnabled`: `boolean`; `lastProcessedAt`: `Date`; `lastProcessedInstanceCount`: `number`; `lastUpdatedById`: `string`; `maxInstancesPerRun`: `number`; `organizationId`: `string`; `processingPriority`: `number`; `retentionStartDate`: `Date`; `updatedAt`: `Date`; \}\>

A promise that resolves to the newly created Generation window configuration.
