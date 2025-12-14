[**talawa-api**](../../../../README.md)

***

# Variable: mutationUpdateChatMembershipInputSchema

> `const` **mutationUpdateChatMembershipInputSchema**: `ZodObject`\<`Pick`\<\{ `chatId`: `ZodString`; `createdAt`: `ZodOptional`\<`ZodDate`\>; `creatorId`: `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; `lastReadAt`: `ZodOptional`\<`ZodNullable`\<`ZodDate`\>\>; `memberId`: `ZodString`; `role`: `ZodEnum`\<\[`"administrator"`, `"regular"`\]\>; `updatedAt`: `ZodOptional`\<`ZodNullable`\<`ZodDate`\>\>; `updaterId`: `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; \}, `"role"` \| `"chatId"` \| `"memberId"`\>, `"strip"`, `ZodTypeAny`, \{ `chatId`: `string`; `memberId`: `string`; `role`: `"administrator"` \| `"regular"`; \}, \{ `chatId`: `string`; `memberId`: `string`; `role`: `"administrator"` \| `"regular"`; \}\>

Defined in: [src/graphql/inputs/MutationUpdateChatMembershipInput.ts:6](https://github.com/PalisadoesFoundation/talawa-api/blob/67117a2ce201913e54d3898319485470853d3074/src/graphql/inputs/MutationUpdateChatMembershipInput.ts#L6)
