[**talawa-api**](../../../../README.md)

***

# Variable: chatMessagesTableRelations

> `const` **chatMessagesTableRelations**: `Relations`\<`"chat_messages"`, \{ `chat`: `One`\<`"chats"`, `true`\>; `chatMessagesWhereParentMessage`: `Many`\<`"chat_messages"`\>; `creator`: `One`\<`"users"`, `false`\>; `parentMessage`: `One`\<`"chat_messages"`, `false`\>; \}\>

Defined in: [src/drizzle/tables/chatMessages.ts:84](https://github.com/PalisadoesFoundation/talawa-api/blob/d13be3cb0cfe1a6d40c90655bd50eb2eae8eb9fc/src/drizzle/tables/chatMessages.ts#L84)
