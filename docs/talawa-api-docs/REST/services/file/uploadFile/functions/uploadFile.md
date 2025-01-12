[**talawa-api**](../../../../../README.md)

***

[talawa-api](../../../../../modules.md) / [REST/services/file/uploadFile](../README.md) / uploadFile

# Function: uploadFile()

\> **uploadFile**(`req`, `res`): `Promise`\<[`InterfaceUploadedFileResponse`](../interfaces/InterfaceUploadedFileResponse.md)\>

Defined in: [src/REST/services/file/uploadFile.ts:28](https://github.com/PalisadoesFoundation/talawa-api/blob/25207c53554ba20e613226862dea483f0b67a696/src/REST/services/file/uploadFile.ts#L28)

Handles file upload.

## Parameters

### req

`Request`

The HTTP request object containing the file.

### res

`Response`

The HTTP response object used to send the response.

## Returns

`Promise`\<[`InterfaceUploadedFileResponse`](../interfaces/InterfaceUploadedFileResponse.md)\>

UploadedFileResponse - The response containing file ID and object key.

## Throws

Error - Throws an error if no file is uploaded or if the file type is invalid.
