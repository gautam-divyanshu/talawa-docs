[**talawa-api**](../../../../README.md)

***

# Variable: mutationCreateAgendaCategoryInputSchema

> `const` **mutationCreateAgendaCategoryInputSchema**: `ZodObject`\<`Pick`\<\{ `createdAt`: `ZodOptional`\<`ZodDate`\>; `creatorId`: `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; `description`: `ZodNullable`\<`ZodOptional`\<`ZodString`\>\>; `eventId`: `ZodString`; `id`: `ZodOptional`\<`ZodString`\>; `isDefaultCategory`: `ZodOptional`\<`ZodBoolean`\>; `name`: `ZodString`; `organizationId`: `ZodString`; `updatedAt`: `ZodOptional`\<`ZodNullable`\<`ZodDate`\>\>; `updaterId`: `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; \}, `"description"` \| `"name"` \| `"eventId"`\>, `"strip"`, `ZodTypeAny`, \{ `description?`: `string` \| `null`; `eventId`: `string`; `name`: `string`; \}, \{ `description?`: `string` \| `null`; `eventId`: `string`; `name`: `string`; \}\>

Defined in: [src/graphql/inputs/MutationCreateAgendaCategoryInput.ts:5](https://github.com/PalisadoesFoundation/talawa-api/blob/86c684402120721d2151d1e28feb0b6d2f345849/src/graphql/inputs/MutationCreateAgendaCategoryInput.ts#L5)
