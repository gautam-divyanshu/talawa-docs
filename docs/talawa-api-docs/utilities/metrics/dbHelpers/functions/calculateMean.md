[**talawa-api**](../../../../README.md)

***

# Function: calculateMean()

> **calculateMean**(`values`): `number`

Defined in: [src/utilities/metrics/dbHelpers.ts:20](https://github.com/PalisadoesFoundation/talawa-api/blob/6cce37874af73f999b252e26ed745146024ad44c/src/utilities/metrics/dbHelpers.ts#L20)

Calculates the mean (average) of an array of numbers.

## Parameters

### values

`number`[]

Array of numeric values

## Returns

`number`

The mean value, or 0 if the array is empty

## Throws

If values array is null or undefined

## Example

```typescript
const avg = calculateMean([10, 20, 30, 40, 50]);
// Returns: 30
```
