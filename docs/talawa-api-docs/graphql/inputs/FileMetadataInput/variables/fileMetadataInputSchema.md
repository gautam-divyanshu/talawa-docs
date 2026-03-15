[**talawa-api**](../../../../README.md)

***

# Variable: fileMetadataInputSchema

> `const` **fileMetadataInputSchema**: `ZodObject`\<\{ `fileHash`: `ZodString`; `mimeType`: `ZodEnum`\<\{ `image/avif`: `"image/avif"`; `image/jpeg`: `"image/jpeg"`; `image/png`: `"image/png"`; `image/webp`: `"image/webp"`; `video/mp4`: `"video/mp4"`; `video/quicktime`: `"video/quicktime"`; `video/webm`: `"video/webm"`; \}\>; `name`: `ZodString`; `objectName`: `ZodString`; \}, `$strip`\>

Defined in: [src/graphql/inputs/FileMetadataInput.ts:9](https://github.com/PalisadoesFoundation/talawa-api/blob/e5257a859e980c4157b048d478eb38a347def32f/src/graphql/inputs/FileMetadataInput.ts#L9)

Zod schema for validating file metadata input submitted after MinIO presigned URL upload.
