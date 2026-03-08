[**talawa-api**](../../../../README.md)

***

# Function: withFields()

> **withFields**(`logger`, `fields`): [`AppLogger`](../type-aliases/AppLogger.md)

Defined in: [src/utilities/logging/logger.ts:52](https://github.com/PalisadoesFoundation/talawa-api/blob/bac950e699f25975d58faf99422a1af81bd3b461/src/utilities/logging/logger.ts#L52)

Creates a child logger with additional fields

## Parameters

### logger

[`AppLogger`](../type-aliases/AppLogger.md)

The parent logger

### fields

`Record`\<`string`, `unknown`\>

Additional fields to include in all logs

## Returns

[`AppLogger`](../type-aliases/AppLogger.md)

A new logger instance
