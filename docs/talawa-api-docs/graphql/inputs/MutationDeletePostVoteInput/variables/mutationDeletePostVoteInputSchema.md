[**talawa-api**](../../../../README.md)

***

# Variable: mutationDeletePostVoteInputSchema

> `const` **mutationDeletePostVoteInputSchema**: `ZodObject`\<`Pick`\<\{ `createdAt`: `ZodOptional`\<`ZodDate`\>; `creatorId`: `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; `id`: `ZodOptional`\<`ZodString`\>; `postId`: `ZodString`; `type`: `ZodEnum`\<\[`"down_vote"`, `"up_vote"`\]\>; `updatedAt`: `ZodOptional`\<`ZodNullable`\<`ZodDate`\>\>; \}, `"postId"`\> & `object`, `"strip"`, `ZodTypeAny`, \{ `creatorId`: `string`; `postId`: `string`; \}, \{ `creatorId`: `string`; `postId`: `string`; \}\>

Defined in: [src/graphql/inputs/MutationDeletePostVoteInput.ts:5](https://github.com/PalisadoesFoundation/talawa-api/blob/86c684402120721d2151d1e28feb0b6d2f345849/src/graphql/inputs/MutationDeletePostVoteInput.ts#L5)
