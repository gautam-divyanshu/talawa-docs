[**talawa-api**](../../../README.md)

***

# Function: calculateInstancesPerMonth()

> **calculateInstancesPerMonth**(`frequency`, `interval`): `number`

Defined in: [src/utilities/recurringEventHelpers.ts:450](https://github.com/PalisadoesFoundation/talawa-api/blob/aa036083713a382be03ddad8b72207946e5ffeb4/src/utilities/recurringEventHelpers.ts#L450)

Calculates the estimated number of instances per month for a given frequency and interval.
This is useful for resource planning, performance estimations, and other calculations
where an average monthly occurrence rate is needed.

## Parameters

### frequency

`string`

The frequency of the recurrence (e.g., "DAILY", "WEEKLY").

### interval

`number` = `1`

The interval between occurrences (default is 1).

## Returns

`number`

The average number of instances expected in a month.
