[**talawa-api**](../../../../README.md)

***

# Function: initializeGenerationWindow()

> **initializeGenerationWindow**(`input`, `drizzleClient`, `logger`): `Promise`\<\{ `configurationNotes`: `string` \| `null`; `createdAt`: `Date`; `createdById`: `string`; `currentWindowEndDate`: `Date`; `historyRetentionMonths`: `number`; `hotWindowMonthsAhead`: `number`; `id`: `string`; `isEnabled`: `boolean`; `lastProcessedAt`: `Date`; `lastProcessedInstanceCount`: `number`; `lastUpdatedById`: `string` \| `null`; `maxInstancesPerRun`: `number`; `organizationId`: `string`; `processingPriority`: `number`; `retentionStartDate`: `Date`; `updatedAt`: `Date` \| `null`; \}\>

Defined in: [src/services/eventGeneration/windowManager.ts:16](https://github.com/PalisadoesFoundation/talawa-api/blob/86c684402120721d2151d1e28feb0b6d2f345849/src/services/eventGeneration/windowManager.ts#L16)

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

`Promise`\<\{ `configurationNotes`: `string` \| `null`; `createdAt`: `Date`; `createdById`: `string`; `currentWindowEndDate`: `Date`; `historyRetentionMonths`: `number`; `hotWindowMonthsAhead`: `number`; `id`: `string`; `isEnabled`: `boolean`; `lastProcessedAt`: `Date`; `lastProcessedInstanceCount`: `number`; `lastUpdatedById`: `string` \| `null`; `maxInstancesPerRun`: `number`; `organizationId`: `string`; `processingPriority`: `number`; `retentionStartDate`: `Date`; `updatedAt`: `Date` \| `null`; \}\>

- A promise that resolves to the newly created Generation window configuration.
