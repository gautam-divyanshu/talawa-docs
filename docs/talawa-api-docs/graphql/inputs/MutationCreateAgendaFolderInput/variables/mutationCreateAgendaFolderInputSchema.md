[**talawa-api**](../../../../README.md)

***

# Variable: mutationCreateAgendaFolderInputSchema

> `const` **mutationCreateAgendaFolderInputSchema**: `ZodObject`\<`Pick`\<\{ `createdAt`: `ZodOptional`\<`ZodDate`\>; `creatorId`: `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; `description`: `ZodNullable`\<`ZodOptional`\<`ZodString`\>\>; `eventId`: `ZodString`; `id`: `ZodOptional`\<`ZodString`\>; `isDefaultFolder`: `ZodOptional`\<`ZodBoolean`\>; `name`: `ZodString`; `organizationId`: `ZodString`; `sequence`: `ZodNullable`\<`ZodOptional`\<`ZodNumber`\>\>; `updatedAt`: `ZodOptional`\<`ZodNullable`\<`ZodDate`\>\>; `updaterId`: `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; \}, `"description"` \| `"name"` \| `"organizationId"` \| `"eventId"` \| `"sequence"`\>, `"strip"`, `ZodTypeAny`, \{ `description?`: `string` \| `null`; `eventId`: `string`; `name`: `string`; `organizationId`: `string`; `sequence?`: `number` \| `null`; \}, \{ `description?`: `string` \| `null`; `eventId`: `string`; `name`: `string`; `organizationId`: `string`; `sequence?`: `number` \| `null`; \}\>

Defined in: [src/graphql/inputs/MutationCreateAgendaFolderInput.ts:5](https://github.com/PalisadoesFoundation/talawa-api/blob/86c684402120721d2151d1e28feb0b6d2f345849/src/graphql/inputs/MutationCreateAgendaFolderInput.ts#L5)
