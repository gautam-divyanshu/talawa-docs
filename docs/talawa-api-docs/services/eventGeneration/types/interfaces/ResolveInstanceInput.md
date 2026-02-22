[**talawa-api**](../../../../README.md)

***

# Interface: ResolveInstanceInput

Defined in: [src/services/eventGeneration/types.ts:65](https://github.com/PalisadoesFoundation/talawa-api/blob/e0c5d64d62f9cbd7e709b63db8cf19f32f235f61/src/services/eventGeneration/types.ts#L65)

Input for resolving instance with inheritance

## Properties

### baseTemplate

> **baseTemplate**: [`EventTemplateWithAttachments`](../type-aliases/EventTemplateWithAttachments.md)

Defined in: [src/services/eventGeneration/types.ts:67](https://github.com/PalisadoesFoundation/talawa-api/blob/e0c5d64d62f9cbd7e709b63db8cf19f32f235f61/src/services/eventGeneration/types.ts#L67)

***

### exception?

> `optional` **exception**: `object`

Defined in: [src/services/eventGeneration/types.ts:68](https://github.com/PalisadoesFoundation/talawa-api/blob/e0c5d64d62f9cbd7e709b63db8cf19f32f235f61/src/services/eventGeneration/types.ts#L68)

#### createdAt

> **createdAt**: `Date`

#### creatorId

> **creatorId**: `string` \| `null`

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

Defined in: [src/services/eventGeneration/types.ts:66](https://github.com/PalisadoesFoundation/talawa-api/blob/e0c5d64d62f9cbd7e709b63db8cf19f32f235f61/src/services/eventGeneration/types.ts#L66)

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
