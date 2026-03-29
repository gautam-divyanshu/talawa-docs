[**talawa-api**](../../../../README.md)

***

# Function: isCountBasedEvent()

> **isCountBasedEvent**(`rule`): `boolean`

Defined in: [src/utilities/recurringEvent/types.ts:23](https://github.com/PalisadoesFoundation/talawa-api/blob/6cce37874af73f999b252e26ed745146024ad44c/src/utilities/recurringEvent/types.ts#L23)

Determines if a recurrence rule is count-based.
A count-based event is defined by a `count` of occurrences and does not have an `endDate`.

## Parameters

### rule

The recurrence rule to check.

#### baseRecurringEventId

`string`

#### byDay

`string`[] \| `null`

#### byMonth

`number`[] \| `null`

#### byMonthDay

`number`[] \| `null`

#### count

`number` \| `null`

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

`string` \| `null`

#### recurrenceEndDate

`Date` \| `null`

#### recurrenceRuleString

`string`

#### recurrenceStartDate

`Date`

#### updatedAt

`Date` \| `null`

#### updaterId

`string` \| `null`

## Returns

`boolean`

`true` if the event is count-based, otherwise `false`.
