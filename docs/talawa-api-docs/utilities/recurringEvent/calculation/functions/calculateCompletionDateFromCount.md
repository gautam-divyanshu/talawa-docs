[**talawa-api**](../../../../README.md)

***

# Function: calculateCompletionDateFromCount()

> **calculateCompletionDateFromCount**(`startDate`, `count`, `frequency`, `interval?`): `Date`

Defined in: [src/utilities/recurringEvent/calculation.ts:19](https://github.com/PalisadoesFoundation/talawa-api/blob/6cce37874af73f999b252e26ed745146024ad44c/src/utilities/recurringEvent/calculation.ts#L19)

Calculates the completion date of a recurrence that is defined by a `count`.
This function is used internally by `normalizeRecurrenceRule` to convert a count-based
recurrence into an end-date-based one. It can also be used for estimating the
duration of a recurring event.

## Parameters

### startDate

`Date`

The start date of the recurrence.

### count

`number`

The total number of occurrences.

### frequency

`string`

The frequency of the recurrence (e.g., "DAILY", "WEEKLY").

### interval?

`number` = `1`

The interval between occurrences (default is 1).

## Returns

`Date`

- The calculated date of the final occurrence.
