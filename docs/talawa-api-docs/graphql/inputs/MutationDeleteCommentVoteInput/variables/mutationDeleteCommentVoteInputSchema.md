[**talawa-api**](../../../../README.md)

***

# Variable: mutationDeleteCommentVoteInputSchema

> `const` **mutationDeleteCommentVoteInputSchema**: `ZodObject`\<`Pick`\<\{ `commentId`: `ZodString`; `createdAt`: `ZodOptional`\<`ZodDate`\>; `creatorId`: `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; `id`: `ZodOptional`\<`ZodString`\>; `type`: `ZodEnum`\<\[`"down_vote"`, `"up_vote"`\]\>; `updatedAt`: `ZodOptional`\<`ZodNullable`\<`ZodDate`\>\>; \}, `"commentId"`\> & `object`, `"strip"`, `ZodTypeAny`, \{ `commentId`: `string`; `creatorId`: `string`; \}, \{ `commentId`: `string`; `creatorId`: `string`; \}\>

Defined in: [src/graphql/inputs/MutationDeleteCommentVoteInput.ts:5](https://github.com/PalisadoesFoundation/talawa-api/blob/b24a30943e90218609bbe2cec77af89181bb6c56/src/graphql/inputs/MutationDeleteCommentVoteInput.ts#L5)
