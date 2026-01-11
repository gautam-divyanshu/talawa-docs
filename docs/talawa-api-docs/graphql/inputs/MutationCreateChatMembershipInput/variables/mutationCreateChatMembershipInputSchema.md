[**talawa-api**](../../../../README.md)

***

# Variable: mutationCreateChatMembershipInputSchema

> `const` **mutationCreateChatMembershipInputSchema**: `ZodObject`\<`Pick`\<\{ `chatId`: `ZodString`; `createdAt`: `ZodOptional`\<`ZodDate`\>; `creatorId`: `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; `lastReadAt`: `ZodOptional`\<`ZodNullable`\<`ZodDate`\>\>; `memberId`: `ZodString`; `role`: `ZodEnum`\<\[`"administrator"`, `"regular"`\]\>; `updatedAt`: `ZodOptional`\<`ZodNullable`\<`ZodDate`\>\>; `updaterId`: `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; \}, `"chatId"` \| `"memberId"`\> & `object`, `"strip"`, `ZodTypeAny`, \{ `chatId`: `string`; `memberId`: `string`; `role?`: `"administrator"` \| `"regular"`; \}, \{ `chatId`: `string`; `memberId`: `string`; `role?`: `"administrator"` \| `"regular"`; \}\>

Defined in: [src/graphql/inputs/MutationCreateChatMembershipInput.ts:6](https://github.com/PalisadoesFoundation/talawa-api/blob/b24a30943e90218609bbe2cec77af89181bb6c56/src/graphql/inputs/MutationCreateChatMembershipInput.ts#L6)
