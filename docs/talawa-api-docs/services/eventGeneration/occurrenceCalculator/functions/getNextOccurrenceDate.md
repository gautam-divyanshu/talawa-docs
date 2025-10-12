[**talawa-api**](../../../../README.md)

***

# Function: getNextOccurrenceDate()

> **getNextOccurrenceDate**(`currentDate`, `recurrenceRule`): `Date`

Defined in: [src/services/eventGeneration/occurrenceCalculator.ts:404](https://github.com/PalisadoesFoundation/talawa-api/blob/e96fa5edb6be6453765d6ab160fe5a845f75f0e8/src/services/eventGeneration/occurrenceCalculator.ts#L404)

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

`Date`

The date of the next potential occurrence.
