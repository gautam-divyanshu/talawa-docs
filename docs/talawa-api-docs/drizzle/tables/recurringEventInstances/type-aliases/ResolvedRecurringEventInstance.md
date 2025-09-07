[**talawa-api**](../../../../README.md)

***

# Type Alias: ResolvedRecurringEventInstance

> **ResolvedRecurringEventInstance** = `object`

Defined in: [src/drizzle/tables/recurringEventInstances.ts:308](https://github.com/PalisadoesFoundation/talawa-api/blob/0e301aa1f701eb095149d8f0e8999317f84b9cd9/src/drizzle/tables/recurringEventInstances.ts#L308)

Type representing a fully resolved recurring event event instance.
This includes all inherited properties from the template plus any exceptions applied.

## Properties

### actualEndTime

> **actualEndTime**: `Date`

Defined in: [src/drizzle/tables/recurringEventInstances.ts:316](https://github.com/PalisadoesFoundation/talawa-api/blob/0e301aa1f701eb095149d8f0e8999317f84b9cd9/src/drizzle/tables/recurringEventInstances.ts#L316)

***

### actualStartTime

> **actualStartTime**: `Date`

Defined in: [src/drizzle/tables/recurringEventInstances.ts:315](https://github.com/PalisadoesFoundation/talawa-api/blob/0e301aa1f701eb095149d8f0e8999317f84b9cd9/src/drizzle/tables/recurringEventInstances.ts#L315)

***

### allDay

> **allDay**: `boolean`

Defined in: [src/drizzle/tables/recurringEventInstances.ts:331](https://github.com/PalisadoesFoundation/talawa-api/blob/0e301aa1f701eb095149d8f0e8999317f84b9cd9/src/drizzle/tables/recurringEventInstances.ts#L331)

***

### appliedExceptionData

> **appliedExceptionData**: `Record`\<`string`, `unknown`\> \| `null`

Defined in: [src/drizzle/tables/recurringEventInstances.ts:341](https://github.com/PalisadoesFoundation/talawa-api/blob/0e301aa1f701eb095149d8f0e8999317f84b9cd9/src/drizzle/tables/recurringEventInstances.ts#L341)

***

### baseRecurringEventId

> **baseRecurringEventId**: `string`

Defined in: [src/drizzle/tables/recurringEventInstances.ts:311](https://github.com/PalisadoesFoundation/talawa-api/blob/0e301aa1f701eb095149d8f0e8999317f84b9cd9/src/drizzle/tables/recurringEventInstances.ts#L311)

***

### createdAt

> **createdAt**: `Date`

Defined in: [src/drizzle/tables/recurringEventInstances.ts:336](https://github.com/PalisadoesFoundation/talawa-api/blob/0e301aa1f701eb095149d8f0e8999317f84b9cd9/src/drizzle/tables/recurringEventInstances.ts#L336)

***

### creatorId

> **creatorId**: `string` \| `null`

Defined in: [src/drizzle/tables/recurringEventInstances.ts:334](https://github.com/PalisadoesFoundation/talawa-api/blob/0e301aa1f701eb095149d8f0e8999317f84b9cd9/src/drizzle/tables/recurringEventInstances.ts#L334)

***

### description

> **description**: `string` \| `null`

Defined in: [src/drizzle/tables/recurringEventInstances.ts:329](https://github.com/PalisadoesFoundation/talawa-api/blob/0e301aa1f701eb095149d8f0e8999317f84b9cd9/src/drizzle/tables/recurringEventInstances.ts#L329)

***

### exceptionCreatedAt

> **exceptionCreatedAt**: `Date` \| `null`

Defined in: [src/drizzle/tables/recurringEventInstances.ts:343](https://github.com/PalisadoesFoundation/talawa-api/blob/0e301aa1f701eb095149d8f0e8999317f84b9cd9/src/drizzle/tables/recurringEventInstances.ts#L343)

***

### exceptionCreatedBy

> **exceptionCreatedBy**: `string` \| `null`

Defined in: [src/drizzle/tables/recurringEventInstances.ts:342](https://github.com/PalisadoesFoundation/talawa-api/blob/0e301aa1f701eb095149d8f0e8999317f84b9cd9/src/drizzle/tables/recurringEventInstances.ts#L342)

***

### generatedAt

> **generatedAt**: `Date`

Defined in: [src/drizzle/tables/recurringEventInstances.ts:319](https://github.com/PalisadoesFoundation/talawa-api/blob/0e301aa1f701eb095149d8f0e8999317f84b9cd9/src/drizzle/tables/recurringEventInstances.ts#L319)

***

### hasExceptions

> **hasExceptions**: `boolean`

Defined in: [src/drizzle/tables/recurringEventInstances.ts:340](https://github.com/PalisadoesFoundation/talawa-api/blob/0e301aa1f701eb095149d8f0e8999317f84b9cd9/src/drizzle/tables/recurringEventInstances.ts#L340)

***

### id

> **id**: `string`

Defined in: [src/drizzle/tables/recurringEventInstances.ts:310](https://github.com/PalisadoesFoundation/talawa-api/blob/0e301aa1f701eb095149d8f0e8999317f84b9cd9/src/drizzle/tables/recurringEventInstances.ts#L310)

***

### isCancelled

> **isCancelled**: `boolean`

Defined in: [src/drizzle/tables/recurringEventInstances.ts:317](https://github.com/PalisadoesFoundation/talawa-api/blob/0e301aa1f701eb095149d8f0e8999317f84b9cd9/src/drizzle/tables/recurringEventInstances.ts#L317)

***

### isPublic

> **isPublic**: `boolean`

Defined in: [src/drizzle/tables/recurringEventInstances.ts:332](https://github.com/PalisadoesFoundation/talawa-api/blob/0e301aa1f701eb095149d8f0e8999317f84b9cd9/src/drizzle/tables/recurringEventInstances.ts#L332)

***

### isRegisterable

> **isRegisterable**: `boolean`

Defined in: [src/drizzle/tables/recurringEventInstances.ts:333](https://github.com/PalisadoesFoundation/talawa-api/blob/0e301aa1f701eb095149d8f0e8999317f84b9cd9/src/drizzle/tables/recurringEventInstances.ts#L333)

***

### lastUpdatedAt

> **lastUpdatedAt**: `Date` \| `null`

Defined in: [src/drizzle/tables/recurringEventInstances.ts:320](https://github.com/PalisadoesFoundation/talawa-api/blob/0e301aa1f701eb095149d8f0e8999317f84b9cd9/src/drizzle/tables/recurringEventInstances.ts#L320)

***

### location

> **location**: `string` \| `null`

Defined in: [src/drizzle/tables/recurringEventInstances.ts:330](https://github.com/PalisadoesFoundation/talawa-api/blob/0e301aa1f701eb095149d8f0e8999317f84b9cd9/src/drizzle/tables/recurringEventInstances.ts#L330)

***

### name

> **name**: `string`

Defined in: [src/drizzle/tables/recurringEventInstances.ts:328](https://github.com/PalisadoesFoundation/talawa-api/blob/0e301aa1f701eb095149d8f0e8999317f84b9cd9/src/drizzle/tables/recurringEventInstances.ts#L328)

***

### organizationId

> **organizationId**: `string`

Defined in: [src/drizzle/tables/recurringEventInstances.ts:318](https://github.com/PalisadoesFoundation/talawa-api/blob/0e301aa1f701eb095149d8f0e8999317f84b9cd9/src/drizzle/tables/recurringEventInstances.ts#L318)

***

### originalInstanceStartTime

> **originalInstanceStartTime**: `Date`

Defined in: [src/drizzle/tables/recurringEventInstances.ts:314](https://github.com/PalisadoesFoundation/talawa-api/blob/0e301aa1f701eb095149d8f0e8999317f84b9cd9/src/drizzle/tables/recurringEventInstances.ts#L314)

***

### originalSeriesId

> **originalSeriesId**: `string`

Defined in: [src/drizzle/tables/recurringEventInstances.ts:313](https://github.com/PalisadoesFoundation/talawa-api/blob/0e301aa1f701eb095149d8f0e8999317f84b9cd9/src/drizzle/tables/recurringEventInstances.ts#L313)

***

### recurrenceRuleId

> **recurrenceRuleId**: `string`

Defined in: [src/drizzle/tables/recurringEventInstances.ts:312](https://github.com/PalisadoesFoundation/talawa-api/blob/0e301aa1f701eb095149d8f0e8999317f84b9cd9/src/drizzle/tables/recurringEventInstances.ts#L312)

***

### sequenceNumber

> **sequenceNumber**: `number`

Defined in: [src/drizzle/tables/recurringEventInstances.ts:324](https://github.com/PalisadoesFoundation/talawa-api/blob/0e301aa1f701eb095149d8f0e8999317f84b9cd9/src/drizzle/tables/recurringEventInstances.ts#L324)

***

### totalCount

> **totalCount**: `number` \| `null`

Defined in: [src/drizzle/tables/recurringEventInstances.ts:325](https://github.com/PalisadoesFoundation/talawa-api/blob/0e301aa1f701eb095149d8f0e8999317f84b9cd9/src/drizzle/tables/recurringEventInstances.ts#L325)

***

### updatedAt

> **updatedAt**: `Date` \| `null`

Defined in: [src/drizzle/tables/recurringEventInstances.ts:337](https://github.com/PalisadoesFoundation/talawa-api/blob/0e301aa1f701eb095149d8f0e8999317f84b9cd9/src/drizzle/tables/recurringEventInstances.ts#L337)

***

### updaterId

> **updaterId**: `string` \| `null`

Defined in: [src/drizzle/tables/recurringEventInstances.ts:335](https://github.com/PalisadoesFoundation/talawa-api/blob/0e301aa1f701eb095149d8f0e8999317f84b9cd9/src/drizzle/tables/recurringEventInstances.ts#L335)

***

### version

> **version**: `string`

Defined in: [src/drizzle/tables/recurringEventInstances.ts:321](https://github.com/PalisadoesFoundation/talawa-api/blob/0e301aa1f701eb095149d8f0e8999317f84b9cd9/src/drizzle/tables/recurringEventInstances.ts#L321)
