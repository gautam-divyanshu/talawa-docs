[**talawa-api**](../../../README.md)

***

# Function: validateRecurrenceRule()

> **validateRecurrenceRule**(`rule`): `object`

Defined in: [src/utilities/recurringEventHelpers.ts:477](https://github.com/PalisadoesFoundation/talawa-api/blob/23e0bb700f97fadee92f29a65e8b272e5b164152/src/utilities/recurringEventHelpers.ts#L477)

Validates a recurrence rule from the database to ensure its configuration is valid.
This function checks for the presence of a valid frequency, ensures that the interval
and count are positive integers if they exist, and verifies that the end date is
after the start date.

## Parameters

### rule

The recurrence rule to validate.

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

`object`

An object with a boolean `isValid` and an array of error strings.

### errors

> **errors**: `string`[]

### isValid

> **isValid**: `boolean`
