[**talawa-api**](../../../README.md)

***

[talawa-api](../../../modules.md) / [libraries/dbLogger](../README.md) / TransactionLogInfo

# Type Alias: TransactionLogInfo

\> **TransactionLogInfo**: `object`

Defined in: [src/libraries/dbLogger.ts:8](https://github.com/PalisadoesFoundation/talawa-api/blob/33412350fcbc7b376cab529f8a291f46d0165828/src/libraries/dbLogger.ts#L8)

The structure of a transaction log entry.

## Type declaration

### model

\> **model**: `string`

The name of the model associated with the log entry

### query?

\> `optional` **query**: `string`

The query executed (optional)

### timestamp

\> **timestamp**: `string`

The timestamp when the log entry was created

### type

\> **type**: `string`

The type of transaction (e.g., create, update, delete)

### update?

\> `optional` **update**: `string`

The update performed (optional)
