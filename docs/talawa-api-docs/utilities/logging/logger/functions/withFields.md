[**talawa-api**](../../../../README.md)

***

# Function: withFields()

> **withFields**(`logger`, `fields`): [`AppLogger`](../type-aliases/AppLogger.md)

Defined in: [src/utilities/logging/logger.ts:52](https://github.com/PalisadoesFoundation/talawa-api/blob/4192946e517a94b573c8f323a0a5b2837aeccf3f/src/utilities/logging/logger.ts#L52)

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
