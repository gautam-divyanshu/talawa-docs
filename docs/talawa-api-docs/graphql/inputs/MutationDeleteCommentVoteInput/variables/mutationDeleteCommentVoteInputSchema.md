[**talawa-api**](../../../../README.md)

***

# Variable: mutationDeleteCommentVoteInputSchema

> `const` **mutationDeleteCommentVoteInputSchema**: `ZodObject`\<`Pick`\<\{ `commentId`: `ZodString`; `createdAt`: `ZodOptional`\<`ZodDate`\>; `creatorId`: `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; `id`: `ZodOptional`\<`ZodString`\>; `type`: `ZodEnum`\<\[`"down_vote"`, `"up_vote"`\]\>; `updatedAt`: `ZodOptional`\<`ZodNullable`\<`ZodDate`\>\>; \}, `"commentId"`\> & `object`, `"strip"`, `ZodTypeAny`, \{ `commentId`: `string`; `creatorId`: `string`; \}, \{ `commentId`: `string`; `creatorId`: `string`; \}\>

Defined in: [src/graphql/inputs/MutationDeleteCommentVoteInput.ts:5](https://github.com/PalisadoesFoundation/talawa-api/blob/0377c9a8043a9da5396efd550b28f87bf54a723a/src/graphql/inputs/MutationDeleteCommentVoteInput.ts#L5)
