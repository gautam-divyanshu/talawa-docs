[**talawa-api**](../../../README.md)

***

# Variable: FILE\_UPLOAD\_CONFIG

> `const` **FILE\_UPLOAD\_CONFIG**: `object`

Defined in: [src/routes/graphql.ts:262](https://github.com/PalisadoesFoundation/talawa-api/blob/36d1ea832b10d1e9883eff7a03104362b71079bd/src/routes/graphql.ts#L262)

File upload configuration for GraphQL multipart requests.
These limits are enforced by mercurius-upload and are exported for use in tests.

## Type Declaration

### maxFieldSize

> `readonly` **maxFieldSize**: `1048576` = `1048576`

Maximum allowed non-file multipart form field size in bytes.
This is the size of the actual graphql document excluding file uploads.
1024 * 1024 = 1MB

### maxFiles

> `readonly` **maxFiles**: `20` = `20`

Maximum allowed number of files in a single graphql operation.

### maxFileSize

> `readonly` **maxFileSize**: `10485760` = `10485760`

Maximum allowed file size in bytes.
1024 * 1024 * 10 = 10MB
