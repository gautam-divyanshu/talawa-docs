[**talawa-api**](../../../../README.md)

***

# Variable: mutationCreateCommentInputSchema

> `const` **mutationCreateCommentInputSchema**: `ZodObject`\<`Pick`\<\{ `body`: `ZodString`; `createdAt`: `ZodOptional`\<`ZodDate`\>; `creatorId`: `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; `id`: `ZodOptional`\<`ZodString`\>; `postId`: `ZodString`; `updatedAt`: `ZodOptional`\<`ZodNullable`\<`ZodDate`\>\>; \}, `"body"` \| `"postId"`\>, `"strip"`, `ZodTypeAny`, \{ `body`: `string`; `postId`: `string`; \}, \{ `body`: `string`; `postId`: `string`; \}\>

Defined in: [src/graphql/inputs/MutationCreateCommentInput.ts:5](https://github.com/PalisadoesFoundation/talawa-api/blob/3cff0028f235a062c461ef9b6aa80f244182c2ef/src/graphql/inputs/MutationCreateCommentInput.ts#L5)
