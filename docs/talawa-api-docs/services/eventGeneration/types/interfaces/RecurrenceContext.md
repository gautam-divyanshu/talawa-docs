[**talawa-api**](../../../../README.md)

***

# Interface: RecurrenceContext

Defined in: [src/services/eventGeneration/types.ts:92](https://github.com/PalisadoesFoundation/talawa-api/blob/1ed05dfbd5f8b040258a6172cdf4d8be325f6225/src/services/eventGeneration/types.ts#L92)

Recurrence calculation context

## Properties

### eventDuration

> **eventDuration**: `number`

Defined in: [src/services/eventGeneration/types.ts:93](https://github.com/PalisadoesFoundation/talawa-api/blob/1ed05dfbd5f8b040258a6172cdf4d8be325f6225/src/services/eventGeneration/types.ts#L93)

***

### exceptionsByTime

> **exceptionsByTime**: `Map`\<`string`, \{ `createdAt`: `Date`; `creatorId`: `string` \| `null`; `exceptionData`: `unknown`; `id`: `string`; `organizationId`: `string`; `recurringEventInstanceId`: `string`; `updatedAt`: `Date` \| `null`; `updaterId`: `string` \| `null`; \}\>

Defined in: [src/services/eventGeneration/types.ts:97](https://github.com/PalisadoesFoundation/talawa-api/blob/1ed05dfbd5f8b040258a6172cdf4d8be325f6225/src/services/eventGeneration/types.ts#L97)

***

### isNeverEnding

> **isNeverEnding**: `boolean`

Defined in: [src/services/eventGeneration/types.ts:96](https://github.com/PalisadoesFoundation/talawa-api/blob/1ed05dfbd5f8b040258a6172cdf4d8be325f6225/src/services/eventGeneration/types.ts#L96)

***

### maxIterations

> **maxIterations**: `number`

Defined in: [src/services/eventGeneration/types.ts:98](https://github.com/PalisadoesFoundation/talawa-api/blob/1ed05dfbd5f8b040258a6172cdf4d8be325f6225/src/services/eventGeneration/types.ts#L98)

***

### shouldCalculateTotalCount

> **shouldCalculateTotalCount**: `boolean`

Defined in: [src/services/eventGeneration/types.ts:95](https://github.com/PalisadoesFoundation/talawa-api/blob/1ed05dfbd5f8b040258a6172cdf4d8be325f6225/src/services/eventGeneration/types.ts#L95)

***

### totalCount

> **totalCount**: `number` \| `null`

Defined in: [src/services/eventGeneration/types.ts:94](https://github.com/PalisadoesFoundation/talawa-api/blob/1ed05dfbd5f8b040258a6172cdf4d8be325f6225/src/services/eventGeneration/types.ts#L94)
