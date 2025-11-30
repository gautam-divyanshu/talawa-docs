[**talawa-api**](../../../../README.md)

***

# Interface: ResolveInstanceInput

Defined in: [src/services/eventGeneration/types.ts:56](https://github.com/PalisadoesFoundation/talawa-api/blob/23e0bb700f97fadee92f29a65e8b272e5b164152/src/services/eventGeneration/types.ts#L56)

Input for resolving instance with inheritance

## Properties

### baseTemplate

> **baseTemplate**: `object`

Defined in: [src/services/eventGeneration/types.ts:58](https://github.com/PalisadoesFoundation/talawa-api/blob/23e0bb700f97fadee92f29a65e8b272e5b164152/src/services/eventGeneration/types.ts#L58)

#### allDay

> **allDay**: `boolean`

#### createdAt

> **createdAt**: `Date`

#### creatorId

> **creatorId**: `string` \| `null`

#### description

> **description**: `string` \| `null`

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

> **location**: `string` \| `null`

#### name

> **name**: `string`

#### organizationId

> **organizationId**: `string`

#### startAt

> **startAt**: `Date`

#### updatedAt

> **updatedAt**: `Date` \| `null`

#### updaterId

> **updaterId**: `string` \| `null`

***

### exception?

> `optional` **exception**: `object`

Defined in: [src/services/eventGeneration/types.ts:59](https://github.com/PalisadoesFoundation/talawa-api/blob/23e0bb700f97fadee92f29a65e8b272e5b164152/src/services/eventGeneration/types.ts#L59)

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

> **updatedAt**: `Date` \| `null`

#### updaterId

> **updaterId**: `string` \| `null`

***

### generatedInstance

> **generatedInstance**: `object`

Defined in: [src/services/eventGeneration/types.ts:57](https://github.com/PalisadoesFoundation/talawa-api/blob/23e0bb700f97fadee92f29a65e8b272e5b164152/src/services/eventGeneration/types.ts#L57)

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

> **lastUpdatedAt**: `Date` \| `null`

#### organizationId

> **organizationId**: `string`

#### originalInstanceStartTime

> **originalInstanceStartTime**: `Date`

#### originalSeriesId

> **originalSeriesId**: `string`

#### recurrenceRuleId

> **recurrenceRuleId**: `string`

#### sequenceNumber

> **sequenceNumber**: `number`

#### totalCount

> **totalCount**: `number` \| `null`

#### version

> **version**: `string`
