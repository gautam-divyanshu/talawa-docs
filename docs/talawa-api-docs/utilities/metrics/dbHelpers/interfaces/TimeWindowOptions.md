[**talawa-api**](../../../../README.md)

***

# Interface: TimeWindowOptions

Defined in: [src/utilities/metrics/dbHelpers.ts:192](https://github.com/PalisadoesFoundation/talawa-api/blob/1ed05dfbd5f8b040258a6172cdf4d8be325f6225/src/utilities/metrics/dbHelpers.ts#L192)

Options for generating time windows.

## Properties

### alignToBoundaries?

> `optional` **alignToBoundaries**: `boolean`

Defined in: [src/utilities/metrics/dbHelpers.ts:202](https://github.com/PalisadoesFoundation/talawa-api/blob/1ed05dfbd5f8b040258a6172cdf4d8be325f6225/src/utilities/metrics/dbHelpers.ts#L202)

Whether to align windows to boundaries (e.g., minute boundaries).
Defaults to false.

***

### windowSizeMs?

> `optional` **windowSizeMs**: `number`

Defined in: [src/utilities/metrics/dbHelpers.ts:197](https://github.com/PalisadoesFoundation/talawa-api/blob/1ed05dfbd5f8b040258a6172cdf4d8be325f6225/src/utilities/metrics/dbHelpers.ts#L197)

Size of each time window in milliseconds.
Defaults to 60000 (1 minute).
