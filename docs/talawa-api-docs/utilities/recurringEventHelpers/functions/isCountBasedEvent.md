[**talawa-api**](../../../README.md)

***

# Function: isCountBasedEvent()

> **isCountBasedEvent**(`rule`): `boolean`

Defined in: [src/utilities/recurringEventHelpers.ts:284](https://github.com/PalisadoesFoundation/talawa-api/blob/e96fa5edb6be6453765d6ab160fe5a845f75f0e8/src/utilities/recurringEventHelpers.ts#L284)

Determines if a recurrence rule is count-based.
A count-based event is defined by a `count` of occurrences and does not have an `endDate`.

## Parameters

### rule

The recurrence rule to check.

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

`boolean`

`true` if the event is count-based, otherwise `false`.
