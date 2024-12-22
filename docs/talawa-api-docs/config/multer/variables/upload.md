[**talawa-api**](../../../README.md)

***

[talawa-api](../../../modules.md) / [config/multer](../README.md) / upload

# Variable: upload

\> `const` **upload**: `Multer`

Multer upload configuration.

This configuration sets up multer to use memory storage, applies the file filter,
and sets a file size limit for uploads.

## Returns

A multer instance configured for handling uploads.

## Example

```typescript
const uploadMiddleware = upload.single("file");
app.post("/upload", uploadMiddleware, (req, res) =\> \{
  res.send("File uploaded successfully!");
\});
```

## Defined in

[src/config/multer/index.ts:63](https://github.com/PalisadoesFoundation/talawa-api/blob/039b0f127fb8caa46d57186ab4b3bb27fe150903/src/config/multer/index.ts#L63)
