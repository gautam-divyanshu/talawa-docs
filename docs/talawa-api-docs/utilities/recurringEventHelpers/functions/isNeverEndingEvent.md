[**talawa-api**](../../../README.md)

***

# Function: isNeverEndingEvent()

> **isNeverEndingEvent**(`rule`): `boolean`

Defined in: [src/utilities/recurringEventHelpers.ts:271](https://github.com/PalisadoesFoundation/talawa-api/blob/0e301aa1f701eb095149d8f0e8999317f84b9cd9/src/utilities/recurringEventHelpers.ts#L271)

Determines if a recurrence rule represents a never-ending event.
A never-ending event is one that has neither a `count` nor an `endDate`.

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

`true` if the event is never-ending, otherwise `false`.
