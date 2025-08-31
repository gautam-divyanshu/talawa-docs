[**talawa-api**](../../../../README.md)

***

# Function: validateRecurrenceRule()

> **validateRecurrenceRule**(`recurrenceRule`): `boolean`

Defined in: [src/services/eventGeneration/occurrenceCalculator.ts:489](https://github.com/PalisadoesFoundation/talawa-api/blob/d13be3cb0cfe1a6d40c90655bd50eb2eae8eb9fc/src/services/eventGeneration/occurrenceCalculator.ts#L489)

Validates the configuration of a recurrence rule to ensure it has a valid frequency
and a positive interval.

## Parameters

### recurrenceRule

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

`true` if the recurrence rule is valid, otherwise `false`.
