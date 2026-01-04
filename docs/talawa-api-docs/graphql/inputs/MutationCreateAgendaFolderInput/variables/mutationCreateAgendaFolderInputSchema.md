[**talawa-api**](../../../../README.md)

***

# Variable: mutationCreateAgendaFolderInputSchema

> `const` **mutationCreateAgendaFolderInputSchema**: `ZodObject`\<`Pick`\<\{ `createdAt`: `ZodOptional`\<`ZodDate`\>; `creatorId`: `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; `eventId`: `ZodString`; `id`: `ZodOptional`\<`ZodString`\>; `isAgendaItemFolder`: `ZodBoolean`; `name`: `ZodString`; `parentFolderId`: `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; `updatedAt`: `ZodOptional`\<`ZodNullable`\<`ZodDate`\>\>; `updaterId`: `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; \}, `"name"` \| `"eventId"` \| `"isAgendaItemFolder"` \| `"parentFolderId"`\>, `"strip"`, `ZodTypeAny`, \{ `eventId`: `string`; `isAgendaItemFolder`: `boolean`; `name`: `string`; `parentFolderId?`: `string` \| `null`; \}, \{ `eventId`: `string`; `isAgendaItemFolder`: `boolean`; `name`: `string`; `parentFolderId?`: `string` \| `null`; \}\>

Defined in: [src/graphql/inputs/MutationCreateAgendaFolderInput.ts:5](https://github.com/PalisadoesFoundation/talawa-api/blob/4fc4e12ad9f960600b3078451d438c08033538a9/src/graphql/inputs/MutationCreateAgendaFolderInput.ts#L5)
