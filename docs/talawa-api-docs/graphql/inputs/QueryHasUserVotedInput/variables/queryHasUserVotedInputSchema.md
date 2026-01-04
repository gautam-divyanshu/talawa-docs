[**talawa-api**](../../../../README.md)

***

# Variable: queryHasUserVotedInputSchema

> `const` **queryHasUserVotedInputSchema**: `ZodObject`\<`Pick`\<\{ `createdAt`: `ZodOptional`\<`ZodDate`\>; `creatorId`: `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; `id`: `ZodOptional`\<`ZodString`\>; `postId`: `ZodString`; `type`: `ZodEnum`\<\[`"down_vote"`, `"up_vote"`\]\>; `updatedAt`: `ZodOptional`\<`ZodNullable`\<`ZodDate`\>\>; \}, `"postId"`\>, `"strip"`, `ZodTypeAny`, \{ `postId`: `string`; \}, \{ `postId`: `string`; \}\>

Defined in: [src/graphql/inputs/QueryHasUserVotedInput.ts:5](https://github.com/PalisadoesFoundation/talawa-api/blob/4fc4e12ad9f960600b3078451d438c08033538a9/src/graphql/inputs/QueryHasUserVotedInput.ts#L5)
