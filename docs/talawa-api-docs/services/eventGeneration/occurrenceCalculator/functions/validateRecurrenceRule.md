[**talawa-api**](../../../../README.md)

***

# Function: validateRecurrenceRule()

> **validateRecurrenceRule**(`recurrenceRule`): `boolean`

Defined in: [src/services/eventGeneration/occurrenceCalculator.ts:498](https://github.com/PalisadoesFoundation/talawa-api/blob/86c684402120721d2151d1e28feb0b6d2f345849/src/services/eventGeneration/occurrenceCalculator.ts#L498)

Validates the configuration of a recurrence rule to ensure it has a valid frequency
and a positive interval.

## Parameters

### recurrenceRule

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

`boolean`

`true` if the recurrence rule is valid, otherwise `false`.
