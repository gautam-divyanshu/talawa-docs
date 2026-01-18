[**talawa-api**](../../../../README.md)

***

# Function: buildRRuleString()

> **buildRRuleString**(`recurrence`, `_startDate`): `string`

Defined in: [src/utilities/recurringEvent/formatting.ts:13](https://github.com/PalisadoesFoundation/talawa-api/blob/86c684402120721d2151d1e28feb0b6d2f345849/src/utilities/recurringEvent/formatting.ts#L13)

Converts a recurrence input object into an RRULE string compliant with RFC 5545.
This function constructs a recurrence rule string based on the provided frequency,
interval, end date, count, and other recurrence properties.

## Parameters

### recurrence

The recurrence input object, conforming to the recurrenceInputSchema.

#### byDay?

`string`[] = `...`

#### byMonth?

`number`[] = `...`

#### byMonthDay?

`number`[] = `...`

#### count?

`number` = `...`

#### endDate?

`Date` = `...`

#### frequency

`"DAILY"` \| `"WEEKLY"` \| `"MONTHLY"` \| `"YEARLY"` = `recurrenceFrequencyEnum`

#### interval?

`number` = `...`

#### never?

`boolean` = `...`

### \_startDate

`Date`

Reserved for future use; currently unused but maintained for API compatibility.

## Returns

`string`

- A full RRULE string, e.g., "RRULE:FREQ=WEEKLY;INTERVAL=2;BYDAY=MO,FR".
