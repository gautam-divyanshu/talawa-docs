[**talawa-api**](../../../README.md)

***

# Function: getEventType()

> **getEventType**(`rule`): `"NEVER_ENDING"` \| `"COUNT_BASED"` \| `"END_DATE_BASED"` \| `"HYBRID"`

Defined in: [src/utilities/recurringEventHelpers.ts:312](https://github.com/PalisadoesFoundation/talawa-api/blob/e96fa5edb6be6453765d6ab160fe5a845f75f0e8/src/utilities/recurringEventHelpers.ts#L312)

Classifies a recurrence rule into one of four types: "NEVER_ENDING", "COUNT_BASED",
"END_DATE_BASED", or "HYBRID". This helps in understanding how the recurrence
is defined and constrained.

## Parameters

### rule

The recurrence rule to classify.

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

`"NEVER_ENDING"` \| `"COUNT_BASED"` \| `"END_DATE_BASED"` \| `"HYBRID"`

The classification of the event type as a string literal.
