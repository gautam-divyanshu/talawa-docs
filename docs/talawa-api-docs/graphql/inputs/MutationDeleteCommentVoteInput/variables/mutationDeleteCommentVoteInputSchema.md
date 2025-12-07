[**talawa-api**](../../../../README.md)

***

# Variable: mutationDeleteCommentVoteInputSchema

> `const` **mutationDeleteCommentVoteInputSchema**: `ZodObject`\<`Pick`\<\{ `commentId`: `ZodString`; `createdAt`: `ZodOptional`\<`ZodDate`\>; `creatorId`: `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; `id`: `ZodOptional`\<`ZodString`\>; `type`: `ZodEnum`\<\[`"down_vote"`, `"up_vote"`\]\>; `updatedAt`: `ZodOptional`\<`ZodNullable`\<`ZodDate`\>\>; \}, `"commentId"`\> & `object`, `"strip"`, `ZodTypeAny`, \{ `commentId`: `string`; `creatorId`: `string`; \}, \{ `commentId`: `string`; `creatorId`: `string`; \}\>

Defined in: [src/graphql/inputs/MutationDeleteCommentVoteInput.ts:5](https://github.com/PalisadoesFoundation/talawa-api/blob/d40e84d157d4bee564e5a066ea403df80b2fb3be/src/graphql/inputs/MutationDeleteCommentVoteInput.ts#L5)
