[**talawa-api**](../../../../README.md)

***

# Function: getNextOccurrenceDate()

> **getNextOccurrenceDate**(`currentDate`, `recurrenceRule`): `Date`

Defined in: [src/services/eventGeneration/occurrenceCalculator.ts:396](https://github.com/PalisadoesFoundation/talawa-api/blob/3e735f62cd978db04c1ff58ca33667aba6f9eeef/src/services/eventGeneration/occurrenceCalculator.ts#L396)

Calculates the next potential occurrence date based on the event's frequency and interval.
This function correctly handles advancing the date for all supported frequency types.

## Parameters

### currentDate

`Date`

The current occurrence date.

### recurrenceRule

The recurrence rule for the event.

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

`Date`

The date of the next potential occurrence.
