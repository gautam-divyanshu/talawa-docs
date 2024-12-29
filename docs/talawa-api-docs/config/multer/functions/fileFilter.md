[**talawa-api**](../../../README.md)

***

[talawa-api](../../../modules.md) / [config/multer](../README.md) / fileFilter

# Function: fileFilter()

\> **fileFilter**(`req`, `file`, `cb`): `void`

File filter function for multer.

This function checks the MIME type of the uploaded file against allowed image and video types.
If the file type is valid, it calls the callback with `true`. Otherwise, it calls the callback
with an error message.

## Parameters

### req

`Request`

The Express request object.

### file

`File`

The file being uploaded.

### cb

`FileFilterCallback`

The callback function to indicate if the file is accepted or rejected.

## Returns

`void`

## Example

```typescript
fileFilter(req, file, cb);
```

## Defined in

[src/config/multer/index.ts:27](https://github.com/PalisadoesFoundation/talawa-api/blob/3a5276aff43f5de4f7fab3ec9683a420dcdc7a06/src/config/multer/index.ts#L27)
