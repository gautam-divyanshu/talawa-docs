[**talawa-api**](../../../../README.md)

***

# Variable: mutationCreatePostVoteInputSchema

> `const` **mutationCreatePostVoteInputSchema**: `ZodObject`\<`Pick`\<\{ `createdAt`: `ZodOptional`\<`ZodDate`\>; `creatorId`: `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; `id`: `ZodOptional`\<`ZodString`\>; `postId`: `ZodString`; `type`: `ZodEnum`\<\[`"down_vote"`, `"up_vote"`\]\>; `updatedAt`: `ZodOptional`\<`ZodNullable`\<`ZodDate`\>\>; \}, `"type"` \| `"postId"`\>, `"strip"`, `ZodTypeAny`, \{ `postId`: `string`; `type`: `"down_vote"` \| `"up_vote"`; \}, \{ `postId`: `string`; `type`: `"down_vote"` \| `"up_vote"`; \}\>

Defined in: [src/graphql/inputs/MutationCreatePostVoteInput.ts:6](https://github.com/PalisadoesFoundation/talawa-api/blob/3cff0028f235a062c461ef9b6aa80f244182c2ef/src/graphql/inputs/MutationCreatePostVoteInput.ts#L6)
