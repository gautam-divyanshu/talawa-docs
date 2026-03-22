[**talawa-api**](../../../../../README.md)

***

# Variable: mutationCreateAdvertisementArgumentsSchema

> `const` **mutationCreateAdvertisementArgumentsSchema**: `ZodObject`\<\{ `input`: `ZodObject`\<\{ `attachments`: `ZodOptional`\<`ZodArray`\<`ZodObject`\<\{ `fileHash`: `ZodString`; `mimeType`: `ZodEnum`\<\{ `image/avif`: `"image/avif"`; `image/jpeg`: `"image/jpeg"`; `image/png`: `"image/png"`; `image/webp`: `"image/webp"`; `video/mp4`: `"video/mp4"`; `video/quicktime`: `"video/quicktime"`; `video/webm`: `"video/webm"`; \}\>; `name`: `ZodString`; `objectName`: `ZodString`; \}, `$strip`\>\>\>; `description`: `ZodNullable`\<`ZodOptional`\<`ZodString`\>\>; `endAt`: `ZodDate`; `name`: `ZodString`; `organizationId`: `ZodUUID`; `startAt`: `ZodDate`; `type`: `ZodString`; \}, \{ \}\>; \}, `$strip`\>

Defined in: [src/graphql/types/Mutation/createAdvertisement.ts:13](https://github.com/PalisadoesFoundation/talawa-api/blob/4192946e517a94b573c8f323a0a5b2837aeccf3f/src/graphql/types/Mutation/createAdvertisement.ts#L13)
