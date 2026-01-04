[**talawa-api**](../../../../README.md)

***

# Variable: mutationCreateChatMessageInputSchema

> `const` **mutationCreateChatMessageInputSchema**: `ZodObject`\<`Pick`\<\{ `body`: `ZodString`; `chatId`: `ZodString`; `createdAt`: `ZodOptional`\<`ZodDate`\>; `creatorId`: `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; `id`: `ZodOptional`\<`ZodString`\>; `parentMessageId`: `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; `updatedAt`: `ZodOptional`\<`ZodNullable`\<`ZodDate`\>\>; \}, `"body"` \| `"chatId"`\> & `object`, `"strip"`, `ZodTypeAny`, \{ `body`: `string`; `chatId`: `string`; `parentMessageId?`: `string`; \}, \{ `body`: `string`; `chatId`: `string`; `parentMessageId?`: `string`; \}\>

Defined in: [src/graphql/inputs/MutationCreateChatMessageInput.ts:5](https://github.com/PalisadoesFoundation/talawa-api/blob/4fc4e12ad9f960600b3078451d438c08033538a9/src/graphql/inputs/MutationCreateChatMessageInput.ts#L5)
