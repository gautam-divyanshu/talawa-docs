[**talawa-api**](../../../../README.md)

***

# Variable: mutationCreateAgendaItemInputSchema

> `const` **mutationCreateAgendaItemInputSchema**: `ZodObject`\<\{ `attachments`: `ZodOptional`\<`ZodArray`\<`ZodObject`\<\{ `fileHash`: `ZodString`; `mimeType`: `ZodEnum`\<\{ `image/avif`: `"image/avif"`; `image/jpeg`: `"image/jpeg"`; `image/png`: `"image/png"`; `image/webp`: `"image/webp"`; `video/mp4`: `"video/mp4"`; `video/quicktime`: `"video/quicktime"`; `video/webm`: `"video/webm"`; \}\>; `name`: `ZodString`; `objectName`: `ZodString`; \}, `$strip`\>\>\>; `categoryId`: `ZodOptional`\<`ZodString`\>; `description`: `ZodNullable`\<`ZodOptional`\<`ZodString`\>\>; `duration`: `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; `eventId`: `ZodUUID`; `folderId`: `ZodOptional`\<`ZodString`\>; `key`: `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; `name`: `ZodString`; `notes`: `ZodNullable`\<`ZodOptional`\<`ZodString`\>\>; `sequence`: `ZodInt`; `type`: `ZodString`; `url`: `ZodOptional`\<`ZodArray`\<`ZodObject`\<\{ `url`: `ZodString`; \}, `$strip`\>\>\>; \}, \{ \}\>

Defined in: [src/graphql/inputs/MutationCreateAgendaItemInput.ts:8](https://github.com/PalisadoesFoundation/talawa-api/blob/4192946e517a94b573c8f323a0a5b2837aeccf3f/src/graphql/inputs/MutationCreateAgendaItemInput.ts#L8)
