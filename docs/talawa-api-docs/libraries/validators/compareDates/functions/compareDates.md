[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [libraries/validators/compareDates](../README.md) / compareDates

# Function: compareDates()

\> **compareDates**(`date1`, `date2`): `string`

Defined in: [src/libraries/validators/compareDates.ts:8](https://github.com/PalisadoesFoundation/talawa-api/blob/33412350fcbc7b376cab529f8a291f46d0165828/src/libraries/validators/compareDates.ts#L8)

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
