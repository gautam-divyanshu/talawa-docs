[**talawa-api**](../../../../README.md)

***

# Function: calculatePercentile()

> **calculatePercentile**(`sortedValues`, `percentile`): `number`

Defined in: [src/workers/metrics/metricsAggregationWorker.ts:16](https://github.com/PalisadoesFoundation/talawa-api/blob/86c684402120721d2151d1e28feb0b6d2f345849/src/workers/metrics/metricsAggregationWorker.ts#L16)

Calculates percentile value from a sorted array of numbers.

## Parameters

### sortedValues

`number`[]

Array of numbers sorted in ascending order

### percentile

`number`

Percentile to calculate (0-100)

## Returns

`number`

The percentile value
