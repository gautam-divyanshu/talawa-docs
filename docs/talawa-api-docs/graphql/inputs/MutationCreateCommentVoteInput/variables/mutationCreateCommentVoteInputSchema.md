[**talawa-api**](../../../../README.md)

***

# Variable: mutationCreateCommentVoteInputSchema

> `const` **mutationCreateCommentVoteInputSchema**: `ZodObject`\<`Pick`\<\{ `commentId`: `ZodString`; `createdAt`: `ZodOptional`\<`ZodDate`\>; `creatorId`: `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; `id`: `ZodOptional`\<`ZodString`\>; `type`: `ZodEnum`\<\[`"down_vote"`, `"up_vote"`\]\>; `updatedAt`: `ZodOptional`\<`ZodNullable`\<`ZodDate`\>\>; \}, `"type"` \| `"commentId"`\>, `"strip"`, `ZodTypeAny`, \{ `commentId`: `string`; `type`: `"down_vote"` \| `"up_vote"`; \}, \{ `commentId`: `string`; `type`: `"down_vote"` \| `"up_vote"`; \}\>

Defined in: [src/graphql/inputs/MutationCreateCommentVoteInput.ts:6](https://github.com/PalisadoesFoundation/talawa-api/blob/d40e84d157d4bee564e5a066ea403df80b2fb3be/src/graphql/inputs/MutationCreateCommentVoteInput.ts#L6)
