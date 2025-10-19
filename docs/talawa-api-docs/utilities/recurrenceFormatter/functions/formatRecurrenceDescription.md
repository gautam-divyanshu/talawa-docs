[**talawa-api**](../../../README.md)

***

# Function: formatRecurrenceDescription()

> **formatRecurrenceDescription**(`rule`): `string`

Defined in: [src/utilities/recurrenceFormatter.ts:17](https://github.com/PalisadoesFoundation/talawa-api/blob/b1cda9d27e687af9cb4781360219969632134078/src/utilities/recurrenceFormatter.ts#L17)

Converts a recurrence rule into a human-readable description.

Examples:
- "Daily"
- "Weekly on Monday"
- "Weekly on Monday, Wednesday, Friday"
- "Monthly on the 15th"
- "Monthly on the first Monday"
- "Yearly on January 1st"

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

A human-readable description of the recurrence pattern
