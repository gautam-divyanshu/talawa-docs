[**talawa-api**](../../../../README.md)

***

# Function: shouldGenerateInstanceAtDate()

> **shouldGenerateInstanceAtDate**(`date`, `recurrenceRule`, `startDate`): `boolean`

Defined in: [src/services/eventGeneration/occurrenceCalculator.ts:253](https://github.com/PalisadoesFoundation/talawa-api/blob/0e301aa1f701eb095149d8f0e8999317f84b9cd9/src/services/eventGeneration/occurrenceCalculator.ts#L253)

Determines whether a recurring event instance should be generated on a specific date,
based on the recurrence rule and its frequency-specific constraints.

## Parameters

### date

`Date`

The date to check.

### recurrenceRule

The recurrence rule to apply.

#### baseRecurringEventId

`string`

#### byDay

`string`[]

#### byMonth

`number`[]

#### byMonthDay

`number`[]

#### count

`number`

#### createdAt

`Date`

#### creatorId

`string`

#### frequency

`"DAILY"` \| `"WEEKLY"` \| `"MONTHLY"` \| `"YEARLY"`

#### id

`string`

#### interval

`number`

#### latestInstanceDate

`Date`

#### organizationId

`string`

#### originalSeriesId

`string`

#### recurrenceEndDate

`Date`

#### recurrenceRuleString

`string`

#### recurrenceStartDate

`Date`

#### updatedAt

`Date`

#### updaterId

`string`

### startDate

`Date`

The start date of the base event.

## Returns

`boolean`

`true` if an instance should be generated on the given date, otherwise `false`.
