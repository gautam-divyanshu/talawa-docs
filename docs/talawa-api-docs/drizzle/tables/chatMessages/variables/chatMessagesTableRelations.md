[**talawa-api**](../../../../README.md)

***

# Variable: chatMessagesTableRelations

> `const` **chatMessagesTableRelations**: `Relations`\<`"chat_messages"`, \{ `chat`: `One`\<`"chats"`, `true`\>; `chatMessagesWhereParentMessage`: `Many`\<`"chat_messages"`\>; `creator`: `One`\<`"users"`, `false`\>; `parentMessage`: `One`\<`"chat_messages"`, `false`\>; \}\>

Defined in: [src/drizzle/tables/chatMessages.ts:84](https://github.com/PalisadoesFoundation/talawa-api/blob/d40e84d157d4bee564e5a066ea403df80b2fb3be/src/drizzle/tables/chatMessages.ts#L84)
