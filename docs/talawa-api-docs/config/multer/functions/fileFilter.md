[**talawa-api**](../../../README.md)

***

[talawa-api](../../../modules.md) / [config/multer](../README.md) / fileFilter

# Function: fileFilter()

\> **fileFilter**(`req`, `file`, `cb`): `void`

Defined in: [src/config/multer/index.ts:27](https://github.com/PalisadoesFoundation/talawa-api/blob/33412350fcbc7b376cab529f8a291f46d0165828/src/config/multer/index.ts#L27)

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
