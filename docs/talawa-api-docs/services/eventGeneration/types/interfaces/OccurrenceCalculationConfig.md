[**talawa-api**](../../../../README.md)

***

# Interface: OccurrenceCalculationConfig

Defined in: [src/services/eventGeneration/types.ts:33](https://github.com/PalisadoesFoundation/talawa-api/blob/76aaea1c502a129ba6c2cc20461d1a226e7b8cf3/src/services/eventGeneration/types.ts#L33)

Configuration for occurrence calculation

## Properties

### baseEvent

> **baseEvent**: `object`

Defined in: [src/services/eventGeneration/types.ts:35](https://github.com/PalisadoesFoundation/talawa-api/blob/76aaea1c502a129ba6c2cc20461d1a226e7b8cf3/src/services/eventGeneration/types.ts#L35)

#### allDay

> **allDay**: `boolean`

#### createdAt

> **createdAt**: `Date`

#### creatorId

> **creatorId**: `string`

#### description

> **description**: `string`

#### endAt

> **endAt**: `Date`

#### id

> **id**: `string`

#### isPublic

> **isPublic**: `boolean`

#### isRecurringEventTemplate

> **isRecurringEventTemplate**: `boolean`

#### isRegisterable

> **isRegisterable**: `boolean`

#### location

> **location**: `string`

#### name

> **name**: `string`

#### organizationId

> **organizationId**: `string`

#### startAt

> **startAt**: `Date`

#### updatedAt

> **updatedAt**: `Date`

#### updaterId

> **updaterId**: `string`

***

### exceptions

> **exceptions**: `object`[]

Defined in: [src/services/eventGeneration/types.ts:38](https://github.com/PalisadoesFoundation/talawa-api/blob/76aaea1c502a129ba6c2cc20461d1a226e7b8cf3/src/services/eventGeneration/types.ts#L38)

#### createdAt

> **createdAt**: `Date`

#### creatorId

> **creatorId**: `string`

#### exceptionData

> **exceptionData**: `unknown`

#### id

> **id**: `string`

#### organizationId

> **organizationId**: `string`

#### recurringEventInstanceId

> **recurringEventInstanceId**: `string`

#### updatedAt

> **updatedAt**: `Date`

#### updaterId

> **updaterId**: `string`

***

### recurrenceRule

> **recurrenceRule**: `object`

Defined in: [src/services/eventGeneration/types.ts:34](https://github.com/PalisadoesFoundation/talawa-api/blob/76aaea1c502a129ba6c2cc20461d1a226e7b8cf3/src/services/eventGeneration/types.ts#L34)

#### baseRecurringEventId

> **baseRecurringEventId**: `string`

#### byDay

> **byDay**: `string`[]

#### byMonth

> **byMonth**: `number`[]

#### byMonthDay

> **byMonthDay**: `number`[]

#### count

> **count**: `number`

#### createdAt

> **createdAt**: `Date`

#### creatorId

> **creatorId**: `string`

#### frequency

> **frequency**: `"DAILY"` \| `"WEEKLY"` \| `"MONTHLY"` \| `"YEARLY"`

#### id

> **id**: `string`

#### interval

> **interval**: `number`

#### latestInstanceDate

> **latestInstanceDate**: `Date`

#### organizationId

> **organizationId**: `string`

#### originalSeriesId

> **originalSeriesId**: `string`

#### recurrenceEndDate

> **recurrenceEndDate**: `Date`

#### recurrenceRuleString

> **recurrenceRuleString**: `string`

#### recurrenceStartDate

> **recurrenceStartDate**: `Date`

#### updatedAt

> **updatedAt**: `Date`

#### updaterId

> **updaterId**: `string`

***

### windowEnd

> **windowEnd**: `Date`

Defined in: [src/services/eventGeneration/types.ts:37](https://github.com/PalisadoesFoundation/talawa-api/blob/76aaea1c502a129ba6c2cc20461d1a226e7b8cf3/src/services/eventGeneration/types.ts#L37)

***

### windowStart

> **windowStart**: `Date`

Defined in: [src/services/eventGeneration/types.ts:36](https://github.com/PalisadoesFoundation/talawa-api/blob/76aaea1c502a129ba6c2cc20461d1a226e7b8cf3/src/services/eventGeneration/types.ts#L36)
