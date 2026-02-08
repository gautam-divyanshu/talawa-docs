[**talawa-api**](../../../../README.md)

***

# Variable: chatMessagesTableRelations

> `const` **chatMessagesTableRelations**: `Relations`\<`"chat_messages"`, \{ `chat`: `One`\<`"chats"`, `true`\>; `chatMessagesWhereParentMessage`: `Many`\<`"chat_messages"`\>; `creator`: `One`\<`"users"`, `false`\>; `parentMessage`: `One`\<`"chat_messages"`, `false`\>; \}\>

Defined in: [src/drizzle/tables/chatMessages.ts:85](https://github.com/PalisadoesFoundation/talawa-api/blob/36d1ea832b10d1e9883eff7a03104362b71079bd/src/drizzle/tables/chatMessages.ts#L85)
