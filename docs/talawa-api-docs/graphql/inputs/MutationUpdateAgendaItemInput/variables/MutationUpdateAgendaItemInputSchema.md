[**talawa-api**](../../../../README.md)

***

# Variable: MutationUpdateAgendaItemInputSchema

> `const` **MutationUpdateAgendaItemInputSchema**: `ZodObject`\<\{ `attachments`: `ZodOptional`\<`ZodArray`\<`ZodObject`\<\{ `fileHash`: `ZodString`; `mimeType`: `ZodEnum`\<\{ `image/avif`: `"image/avif"`; `image/jpeg`: `"image/jpeg"`; `image/png`: `"image/png"`; `image/webp`: `"image/webp"`; `video/mp4`: `"video/mp4"`; `video/quicktime`: `"video/quicktime"`; `video/webm`: `"video/webm"`; \}\>; `name`: `ZodString`; `objectName`: `ZodString`; \}, `$strip`\>\>\>; `description`: `ZodOptional`\<`ZodString`\>; `duration`: `ZodOptional`\<`ZodOptional`\<`ZodNullable`\<`ZodString`\>\>\>; `folderId`: `ZodOptional`\<`ZodUUID`\>; `id`: `ZodUUID`; `key`: `ZodOptional`\<`ZodOptional`\<`ZodNullable`\<`ZodString`\>\>\>; `name`: `ZodOptional`\<`ZodString`\>; `url`: `ZodOptional`\<`ZodArray`\<`ZodObject`\<\{ `url`: `ZodString`; \}, `$strip`\>\>\>; \}, \{ \}\>

Defined in: [src/graphql/inputs/MutationUpdateAgendaItemInput.ts:14](https://github.com/PalisadoesFoundation/talawa-api/blob/1ed05dfbd5f8b040258a6172cdf4d8be325f6225/src/graphql/inputs/MutationUpdateAgendaItemInput.ts#L14)
