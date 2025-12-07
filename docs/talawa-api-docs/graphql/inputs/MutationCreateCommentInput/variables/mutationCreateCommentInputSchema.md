[**talawa-api**](../../../../README.md)

***

# Variable: mutationCreateCommentInputSchema

> `const` **mutationCreateCommentInputSchema**: `ZodObject`\<`Pick`\<\{ `body`: `ZodString`; `createdAt`: `ZodOptional`\<`ZodDate`\>; `creatorId`: `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; `id`: `ZodOptional`\<`ZodString`\>; `postId`: `ZodString`; `updatedAt`: `ZodOptional`\<`ZodNullable`\<`ZodDate`\>\>; \}, `"body"` \| `"postId"`\>, `"strip"`, `ZodTypeAny`, \{ `body`: `string`; `postId`: `string`; \}, \{ `body`: `string`; `postId`: `string`; \}\>

Defined in: [src/graphql/inputs/MutationCreateCommentInput.ts:5](https://github.com/PalisadoesFoundation/talawa-api/blob/d40e84d157d4bee564e5a066ea403df80b2fb3be/src/graphql/inputs/MutationCreateCommentInput.ts#L5)
