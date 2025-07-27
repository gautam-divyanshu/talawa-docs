[**talawa-api**](../../../../README.md)

***

# Interface: ResolveInstanceInput

Defined in: [src/services/eventGeneration/types.ts:56](https://github.com/PalisadoesFoundation/talawa-api/blob/683c972995b645053f41c76c01368003402b250c/src/services/eventGeneration/types.ts#L56)

Input for resolving instance with inheritance

## Properties

### baseTemplate

> **baseTemplate**: `object`

Defined in: [src/services/eventGeneration/types.ts:58](https://github.com/PalisadoesFoundation/talawa-api/blob/683c972995b645053f41c76c01368003402b250c/src/services/eventGeneration/types.ts#L58)

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

#### instanceStartTime

> **instanceStartTime**: `Date`

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

#### recurringEventId

> **recurringEventId**: `string`

#### startAt

> **startAt**: `Date`

#### updatedAt

> **updatedAt**: `Date`

#### updaterId

> **updaterId**: `string`

***

### exception?

> `optional` **exception**: `object`

Defined in: [src/services/eventGeneration/types.ts:59](https://github.com/PalisadoesFoundation/talawa-api/blob/683c972995b645053f41c76c01368003402b250c/src/services/eventGeneration/types.ts#L59)

#### baseRecurringEventId

> **baseRecurringEventId**: `string`

#### createdAt

> **createdAt**: `Date`

#### creatorId

> **creatorId**: `string`

#### eventInstanceId

> **eventInstanceId**: `string`

#### exceptionData

> **exceptionData**: `unknown`

#### exceptionType

> **exceptionType**: `"SINGLE_INSTANCE"` \| `"THIS_AND_FUTURE"`

#### id

> **id**: `string`

#### instanceStartTime

> **instanceStartTime**: `Date`

#### organizationId

> **organizationId**: `string`

#### updatedAt

> **updatedAt**: `Date`

#### updaterId

> **updaterId**: `string`

***

### generatedInstance

> **generatedInstance**: `object`

Defined in: [src/services/eventGeneration/types.ts:57](https://github.com/PalisadoesFoundation/talawa-api/blob/683c972995b645053f41c76c01368003402b250c/src/services/eventGeneration/types.ts#L57)

#### actualEndTime

> **actualEndTime**: `Date`

#### actualStartTime

> **actualStartTime**: `Date`

#### baseRecurringEventId

> **baseRecurringEventId**: `string`

#### generatedAt

> **generatedAt**: `Date`

#### id

> **id**: `string`

#### isCancelled

> **isCancelled**: `boolean`

#### lastUpdatedAt

> **lastUpdatedAt**: `Date`

#### organizationId

> **organizationId**: `string`

#### originalInstanceStartTime

> **originalInstanceStartTime**: `Date`

#### recurrenceRuleId

> **recurrenceRuleId**: `string`

#### sequenceNumber

> **sequenceNumber**: `number`

#### totalCount

> **totalCount**: `number`

#### version

> **version**: `string`
