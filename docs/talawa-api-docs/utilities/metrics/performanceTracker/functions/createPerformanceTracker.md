[**talawa-api**](../../../../README.md)

***

# Function: createPerformanceTracker()

> **createPerformanceTracker**(`opts?`): [`PerformanceTracker`](../interfaces/PerformanceTracker.md)

Defined in: [src/utilities/metrics/performanceTracker.ts:118](https://github.com/PalisadoesFoundation/talawa-api/blob/5786ae4f6a720dac990dcd3c8ac65cc65d4a7aa7/src/utilities/metrics/performanceTracker.ts#L118)

Creates a performance tracker for request-level metrics.
Tracks operations, cache hits/misses, and provides snapshots.

## Parameters

### opts?

[`PerformanceTrackerOptions`](../interfaces/PerformanceTrackerOptions.md)

Optional configuration for the tracker

## Returns

[`PerformanceTracker`](../interfaces/PerformanceTracker.md)

A new performance tracker instance
