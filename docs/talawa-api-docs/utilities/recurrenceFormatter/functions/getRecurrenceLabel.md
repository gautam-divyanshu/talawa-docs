[**talawa-api**](../../../README.md)

***

# Function: getRecurrenceLabel()

> **getRecurrenceLabel**(`rule`): `string`

Defined in: [src/utilities/recurrenceFormatter.ts:221](https://github.com/PalisadoesFoundation/talawa-api/blob/76aaea1c502a129ba6c2cc20461d1a226e7b8cf3/src/utilities/recurrenceFormatter.ts#L221)

Gets a short recurrence label suitable for UI buttons or compact displays.

Examples:
- "Daily"
- "Weekly"
- "Monthly"
- "Every 2 weeks"
- "Every 3 months"

## Parameters

### rule

The recurrence rule from the database

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

## Returns

`string`

A short label describing the recurrence frequency
