[**talawa-api**](../../../../README.md)

***

# Variable: mutationCreateTagInputSchema

> `const` **mutationCreateTagInputSchema**: `ZodObject`\<`Pick`\<\{ `createdAt`: `ZodOptional`\<`ZodDate`\>; `creatorId`: `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; `folderId`: `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; `id`: `ZodOptional`\<`ZodString`\>; `name`: `ZodString`; `organizationId`: `ZodString`; `updatedAt`: `ZodOptional`\<`ZodNullable`\<`ZodDate`\>\>; `updaterId`: `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; \}, `"name"` \| `"organizationId"` \| `"folderId"`\>, `"strip"`, `ZodTypeAny`, \{ `folderId?`: `string` \| `null`; `name`: `string`; `organizationId`: `string`; \}, \{ `folderId?`: `string` \| `null`; `name`: `string`; `organizationId`: `string`; \}\>

Defined in: [src/graphql/inputs/MutationCreateTagInput.ts:5](https://github.com/PalisadoesFoundation/talawa-api/blob/86c684402120721d2151d1e28feb0b6d2f345849/src/graphql/inputs/MutationCreateTagInput.ts#L5)
