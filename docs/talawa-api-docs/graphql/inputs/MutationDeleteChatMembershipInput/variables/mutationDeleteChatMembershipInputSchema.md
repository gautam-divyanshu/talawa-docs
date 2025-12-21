[**talawa-api**](../../../../README.md)

***

# Variable: mutationDeleteChatMembershipInputSchema

> `const` **mutationDeleteChatMembershipInputSchema**: `ZodObject`\<`Pick`\<\{ `chatId`: `ZodString`; `createdAt`: `ZodOptional`\<`ZodDate`\>; `creatorId`: `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; `lastReadAt`: `ZodOptional`\<`ZodNullable`\<`ZodDate`\>\>; `memberId`: `ZodString`; `role`: `ZodEnum`\<\[`"administrator"`, `"regular"`\]\>; `updatedAt`: `ZodOptional`\<`ZodNullable`\<`ZodDate`\>\>; `updaterId`: `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; \}, `"chatId"` \| `"memberId"`\>, `"strip"`, `ZodTypeAny`, \{ `chatId`: `string`; `memberId`: `string`; \}, \{ `chatId`: `string`; `memberId`: `string`; \}\>

Defined in: [src/graphql/inputs/MutationDeleteChatMembershipInput.ts:5](https://github.com/PalisadoesFoundation/talawa-api/blob/0377c9a8043a9da5396efd550b28f87bf54a723a/src/graphql/inputs/MutationDeleteChatMembershipInput.ts#L5)
