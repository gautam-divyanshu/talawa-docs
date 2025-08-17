[**talawa-api**](../../../../README.md)

***

# Interface: RecurrenceContext

Defined in: [src/services/eventGeneration/types.ts:84](https://github.com/PalisadoesFoundation/talawa-api/blob/3e735f62cd978db04c1ff58ca33667aba6f9eeef/src/services/eventGeneration/types.ts#L84)

Recurrence calculation context

## Properties

### eventDuration

> **eventDuration**: `number`

Defined in: [src/services/eventGeneration/types.ts:85](https://github.com/PalisadoesFoundation/talawa-api/blob/3e735f62cd978db04c1ff58ca33667aba6f9eeef/src/services/eventGeneration/types.ts#L85)

***

### exceptionsByTime

> **exceptionsByTime**: `Map`\<`string`, \{ `baseRecurringEventId`: `string`; `createdAt`: `Date`; `creatorId`: `string`; `eventInstanceId`: `string`; `exceptionData`: `unknown`; `exceptionType`: `"SINGLE_INSTANCE"` \| `"THIS_AND_FUTURE"`; `id`: `string`; `instanceStartTime`: `Date`; `organizationId`: `string`; `updatedAt`: `Date`; `updaterId`: `string`; \}\>

Defined in: [src/services/eventGeneration/types.ts:89](https://github.com/PalisadoesFoundation/talawa-api/blob/3e735f62cd978db04c1ff58ca33667aba6f9eeef/src/services/eventGeneration/types.ts#L89)

***

### isNeverEnding

> **isNeverEnding**: `boolean`

Defined in: [src/services/eventGeneration/types.ts:88](https://github.com/PalisadoesFoundation/talawa-api/blob/3e735f62cd978db04c1ff58ca33667aba6f9eeef/src/services/eventGeneration/types.ts#L88)

***

### maxIterations

> **maxIterations**: `number`

Defined in: [src/services/eventGeneration/types.ts:90](https://github.com/PalisadoesFoundation/talawa-api/blob/3e735f62cd978db04c1ff58ca33667aba6f9eeef/src/services/eventGeneration/types.ts#L90)

***

### shouldCalculateTotalCount

> **shouldCalculateTotalCount**: `boolean`

Defined in: [src/services/eventGeneration/types.ts:87](https://github.com/PalisadoesFoundation/talawa-api/blob/3e735f62cd978db04c1ff58ca33667aba6f9eeef/src/services/eventGeneration/types.ts#L87)

***

### totalCount

> **totalCount**: `number`

Defined in: [src/services/eventGeneration/types.ts:86](https://github.com/PalisadoesFoundation/talawa-api/blob/3e735f62cd978db04c1ff58ca33667aba6f9eeef/src/services/eventGeneration/types.ts#L86)
