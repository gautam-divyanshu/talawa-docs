[**talawa-api**](../../../../README.md)

***

# Variable: mutationCreateVenueInputSchema

> `const` **mutationCreateVenueInputSchema**: `ZodObject`\<\{ `attachments`: `ZodOptional`\<`ZodArray`\<`ZodObject`\<\{ `fileHash`: `ZodString`; `mimeType`: `ZodEnum`\<\{ `image/avif`: `"image/avif"`; `image/jpeg`: `"image/jpeg"`; `image/png`: `"image/png"`; `image/webp`: `"image/webp"`; `video/mp4`: `"video/mp4"`; `video/quicktime`: `"video/quicktime"`; `video/webm`: `"video/webm"`; \}\>; `name`: `ZodString`; `objectName`: `ZodString`; \}, `$strip`\>\>\>; `capacity`: `ZodNullable`\<`ZodOptional`\<`ZodNullable`\<`ZodNumber`\>\>\>; `description`: `ZodNullable`\<`ZodOptional`\<`ZodNullable`\<`ZodString`\>\>\>; `name`: `ZodString`; `organizationId`: `ZodString`; \}, \{ \}\>

Defined in: [src/graphql/inputs/MutationCreateVenueInput.ts:9](https://github.com/PalisadoesFoundation/talawa-api/blob/ba020be1455b363dacbc8141230aeacb45671626/src/graphql/inputs/MutationCreateVenueInput.ts#L9)
