[**talawa-api**](../../../../README.md)

***

# Variable: MutationUpdateAgendaItemInputSchema

> `const` **MutationUpdateAgendaItemInputSchema**: `ZodObject`\<\{ `attachments`: `ZodOptional`\<`ZodArray`\<`ZodObject`\<\{ `fileHash`: `ZodString`; `mimeType`: `ZodEnum`\<\{ `image/avif`: `"image/avif"`; `image/jpeg`: `"image/jpeg"`; `image/png`: `"image/png"`; `image/webp`: `"image/webp"`; `video/mp4`: `"video/mp4"`; `video/quicktime`: `"video/quicktime"`; `video/webm`: `"video/webm"`; \}\>; `name`: `ZodString`; `objectName`: `ZodString`; \}, `$strip`\>\>\>; `categoryId`: `ZodOptional`\<`ZodUUID`\>; `description`: `ZodOptional`\<`ZodString`\>; `duration`: `ZodOptional`\<`ZodOptional`\<`ZodNullable`\<`ZodString`\>\>\>; `folderId`: `ZodOptional`\<`ZodUUID`\>; `id`: `ZodUUID`; `key`: `ZodOptional`\<`ZodOptional`\<`ZodNullable`\<`ZodString`\>\>\>; `name`: `ZodOptional`\<`ZodString`\>; `notes`: `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; `url`: `ZodOptional`\<`ZodArray`\<`ZodObject`\<\{ `url`: `ZodString`; \}, `$strip`\>\>\>; \}, \{ \}\>

Defined in: [src/graphql/inputs/MutationUpdateAgendaItemInput.ts:15](https://github.com/PalisadoesFoundation/talawa-api/blob/bac950e699f25975d58faf99422a1af81bd3b461/src/graphql/inputs/MutationUpdateAgendaItemInput.ts#L15)
