[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [libraries/validators/compareDates](../README.md) / compareDates

# Function: compareDates()

\> **compareDates**(`date1`, `date2`): `string`

Defined in: [src/libraries/validators/compareDates.ts:8](https://github.com/PalisadoesFoundation/talawa-api/blob/25207c53554ba20e613226862dea483f0b67a696/src/libraries/validators/compareDates.ts#L8)

Compares two dates and returns a message if the first date is later than the second date.

## Parameters

### date1

`string`

The first date as a string.

### date2

`string`

The second date as a string.

## Returns

`string`

A message indicating that the start date must be earlier than the end date, or an empty string if the dates are in the correct order.
