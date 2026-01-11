[**talawa-api**](../../../../README.md)

***

# Variable: mutationDeletePostVoteInputSchema

> `const` **mutationDeletePostVoteInputSchema**: `ZodObject`\<`Pick`\<\{ `createdAt`: `ZodOptional`\<`ZodDate`\>; `creatorId`: `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; `id`: `ZodOptional`\<`ZodString`\>; `postId`: `ZodString`; `type`: `ZodEnum`\<\[`"down_vote"`, `"up_vote"`\]\>; `updatedAt`: `ZodOptional`\<`ZodNullable`\<`ZodDate`\>\>; \}, `"postId"`\> & `object`, `"strip"`, `ZodTypeAny`, \{ `creatorId`: `string`; `postId`: `string`; \}, \{ `creatorId`: `string`; `postId`: `string`; \}\>

Defined in: [src/graphql/inputs/MutationDeletePostVoteInput.ts:5](https://github.com/PalisadoesFoundation/talawa-api/blob/b24a30943e90218609bbe2cec77af89181bb6c56/src/graphql/inputs/MutationDeletePostVoteInput.ts#L5)
