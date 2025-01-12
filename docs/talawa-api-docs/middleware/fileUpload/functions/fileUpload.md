[**talawa-api**](../../../README.md)

***

[talawa-api](../../../modules.md) / [middleware/fileUpload](../README.md) / fileUpload

# Function: fileUpload()

\> **fileUpload**(`fieldName`): `RequestHandler`

Defined in: [src/middleware/fileUpload.ts:22](https://github.com/PalisadoesFoundation/talawa-api/blob/25207c53554ba20e613226862dea483f0b67a696/src/middleware/fileUpload.ts#L22)

A middleware for handling optional file uploads.
All data must be sent as multipart/form-data, but the file field is optional.

## Parameters

### fieldName

`string`

The name of the file field in the form

## Returns

`RequestHandler`

Express middleware for handling file upload
