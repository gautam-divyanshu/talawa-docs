[**talawa-api**](../../../../README.md)

***

# Function: getOrganizationMaterializationStatus()

> **getOrganizationMaterializationStatus**(`organizationId`, `deps`): `Promise`\<\{ `lastProcessedAt`: `Date`; `materializedInstancesCount`: `number`; `needsProcessing`: `boolean`; `processingPriority`: `number`; `recurringEventsCount`: `number`; `windowConfig`: \{ `configurationNotes`: `string`; `createdAt`: `Date`; `createdById`: `string`; `currentWindowEndDate`: `Date`; `historyRetentionMonths`: `number`; `hotWindowMonthsAhead`: `number`; `id`: `string`; `isEnabled`: `boolean`; `lastProcessedAt`: `Date`; `lastProcessedInstanceCount`: `number`; `lastUpdatedById`: `string`; `maxInstancesPerRun`: `number`; `organizationId`: `string`; `processingPriority`: `number`; `retentionStartDate`: `Date`; `updatedAt`: `Date`; \}; \}\>

Defined in: [src/workers/eventGeneration/windowManager.ts:163](https://github.com/PalisadoesFoundation/talawa-api/blob/b1cda9d27e687af9cb4781360219969632134078/src/workers/eventGeneration/windowManager.ts#L163)

Gets materialization status for an organization.

## Parameters

### organizationId

`string`

### deps

[`WorkerDependencies`](../interfaces/WorkerDependencies.md)

## Returns

`Promise`\<\{ `lastProcessedAt`: `Date`; `materializedInstancesCount`: `number`; `needsProcessing`: `boolean`; `processingPriority`: `number`; `recurringEventsCount`: `number`; `windowConfig`: \{ `configurationNotes`: `string`; `createdAt`: `Date`; `createdById`: `string`; `currentWindowEndDate`: `Date`; `historyRetentionMonths`: `number`; `hotWindowMonthsAhead`: `number`; `id`: `string`; `isEnabled`: `boolean`; `lastProcessedAt`: `Date`; `lastProcessedInstanceCount`: `number`; `lastUpdatedById`: `string`; `maxInstancesPerRun`: `number`; `organizationId`: `string`; `processingPriority`: `number`; `retentionStartDate`: `Date`; `updatedAt`: `Date`; \}; \}\>
