[**talawa-api**](../../../../README.md)

***

# Variable: mutationCreateChatMembershipInputSchema

> `const` **mutationCreateChatMembershipInputSchema**: `ZodObject`\<`Pick`\<\{ `chatId`: `ZodString`; `createdAt`: `ZodOptional`\<`ZodDate`\>; `creatorId`: `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; `lastReadAt`: `ZodOptional`\<`ZodNullable`\<`ZodDate`\>\>; `memberId`: `ZodString`; `role`: `ZodEnum`\<\[`"administrator"`, `"regular"`\]\>; `updatedAt`: `ZodOptional`\<`ZodNullable`\<`ZodDate`\>\>; `updaterId`: `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; \}, `"chatId"` \| `"memberId"`\> & `object`, `"strip"`, `ZodTypeAny`, \{ `chatId`: `string`; `memberId`: `string`; `role?`: `"administrator"` \| `"regular"`; \}, \{ `chatId`: `string`; `memberId`: `string`; `role?`: `"administrator"` \| `"regular"`; \}\>

Defined in: [src/graphql/inputs/MutationCreateChatMembershipInput.ts:6](https://github.com/PalisadoesFoundation/talawa-api/blob/23e0bb700f97fadee92f29a65e8b272e5b164152/src/graphql/inputs/MutationCreateChatMembershipInput.ts#L6)
