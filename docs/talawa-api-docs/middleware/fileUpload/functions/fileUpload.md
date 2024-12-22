[**talawa-api**](../../../README.md)

***

[talawa-api](../../../modules.md) / [middleware/fileUpload](../README.md) / fileUpload

# Function: fileUpload()

\> **fileUpload**(`fieldName`): `RequestHandler`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`\<`string`, `any`\>\>

A middleware for handling optional file uploads.
All data must be sent as multipart/form-data, but the file field is optional.

## Parameters

### fieldName

`string`

The name of the file field in the form

## Returns

`RequestHandler`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`\<`string`, `any`\>\>

Express middleware for handling file upload

## Defined in

[src/middleware/fileUpload.ts:22](https://github.com/PalisadoesFoundation/talawa-api/blob/039b0f127fb8caa46d57186ab4b3bb27fe150903/src/middleware/fileUpload.ts#L22)
