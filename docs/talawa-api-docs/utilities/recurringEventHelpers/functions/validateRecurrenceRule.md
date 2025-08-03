[**talawa-api**](../../../README.md)

***

# Function: validateRecurrenceRule()

> **validateRecurrenceRule**(`rule`): `object`

Defined in: [src/utilities/recurringEventHelpers.ts:363](https://github.com/PalisadoesFoundation/talawa-api/blob/1b4a5964fc61cbcbec1a297ce4f71a2a2c39b04f/src/utilities/recurringEventHelpers.ts#L363)

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

`object`

An object with a boolean `isValid` and an array of error strings.

### errors

> **errors**: `string`[]

### isValid

> **isValid**: `boolean`
