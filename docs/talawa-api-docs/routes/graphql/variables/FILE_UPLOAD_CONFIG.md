[**talawa-api**](../../../README.md)

***

# Variable: FILE\_UPLOAD\_CONFIG

> `const` **FILE\_UPLOAD\_CONFIG**: `object`

Defined in: [src/routes/graphql.ts:169](https://github.com/PalisadoesFoundation/talawa-api/blob/aa036083713a382be03ddad8b72207946e5ffeb4/src/routes/graphql.ts#L169)

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
