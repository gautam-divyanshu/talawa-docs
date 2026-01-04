[**talawa-api**](../../../../README.md)

***

# Function: calculateInstancesPerMonth()

> **calculateInstancesPerMonth**(`frequency`, `interval`): `number`

Defined in: [src/utilities/recurringEvent/calculation.ts:118](https://github.com/PalisadoesFoundation/talawa-api/blob/4fc4e12ad9f960600b3078451d438c08033538a9/src/utilities/recurringEvent/calculation.ts#L118)

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

- The average number of instances expected in a month.
