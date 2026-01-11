[**talawa-api**](../../../../README.md)

***

# Function: getOrganizationMaterializationStatus()

> **getOrganizationMaterializationStatus**(`organizationId`, `deps`): `Promise`\<\{ `lastProcessedAt`: `Date` \| `null`; `materializedInstancesCount`: `number`; `needsProcessing`: `boolean`; `processingPriority`: `number`; `recurringEventsCount`: `number`; `windowConfig`: \{ `configurationNotes`: `string` \| `null`; `createdAt`: `Date`; `createdById`: `string`; `currentWindowEndDate`: `Date`; `historyRetentionMonths`: `number`; `hotWindowMonthsAhead`: `number`; `id`: `string`; `isEnabled`: `boolean`; `lastProcessedAt`: `Date`; `lastProcessedInstanceCount`: `number`; `lastUpdatedById`: `string` \| `null`; `maxInstancesPerRun`: `number`; `organizationId`: `string`; `processingPriority`: `number`; `retentionStartDate`: `Date`; `updatedAt`: `Date` \| `null`; \} \| `null`; \}\>

Defined in: [src/workers/eventGeneration/windowManager.ts:169](https://github.com/PalisadoesFoundation/talawa-api/blob/b24a30943e90218609bbe2cec77af89181bb6c56/src/workers/eventGeneration/windowManager.ts#L169)

Gets materialization status for an organization.

## Parameters

### organizationId

`string`

### deps

[`WorkerDependencies`](../interfaces/WorkerDependencies.md)

## Returns

`Promise`\<\{ `lastProcessedAt`: `Date` \| `null`; `materializedInstancesCount`: `number`; `needsProcessing`: `boolean`; `processingPriority`: `number`; `recurringEventsCount`: `number`; `windowConfig`: \{ `configurationNotes`: `string` \| `null`; `createdAt`: `Date`; `createdById`: `string`; `currentWindowEndDate`: `Date`; `historyRetentionMonths`: `number`; `hotWindowMonthsAhead`: `number`; `id`: `string`; `isEnabled`: `boolean`; `lastProcessedAt`: `Date`; `lastProcessedInstanceCount`: `number`; `lastUpdatedById`: `string` \| `null`; `maxInstancesPerRun`: `number`; `organizationId`: `string`; `processingPriority`: `number`; `retentionStartDate`: `Date`; `updatedAt`: `Date` \| `null`; \} \| `null`; \}\>
