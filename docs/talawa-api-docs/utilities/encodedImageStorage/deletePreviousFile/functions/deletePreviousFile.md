[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [utilities/encodedImageStorage/deletePreviousFile](../README.md) / deletePreviousFile

# Function: deletePreviousFile()

\> **deletePreviousFile**(`fileId`, `objectKey`): `Promise`\<`void`\>

Defined in: [src/utilities/encodedImageStorage/deletePreviousFile.ts:13](https://github.com/PalisadoesFoundation/talawa-api/blob/25207c53554ba20e613226862dea483f0b67a696/src/utilities/encodedImageStorage/deletePreviousFile.ts#L13)

Deletes a file from the storage and database if its reference count is 1.
Otherwise, decrements the reference count in the database by 1.

## Parameters

### fileId

`string`

The ID of the file to be deleted or updated.

### objectKey

`string`

The object key in the storage bucket associated with the file.

## Returns

`Promise`\<`void`\>

A promise that resolves when the file is either deleted or its reference count is updated.
