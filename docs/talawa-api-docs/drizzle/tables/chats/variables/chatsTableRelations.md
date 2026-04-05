[**talawa-api**](../../../../README.md)

***

# Variable: chatsTableRelations

> `const` **chatsTableRelations**: `Relations`\<`"chats"`, \{ `chatMembershipsWhereChat`: `Many`\<`"chat_memberships"`\>; `chatMessagesWhereChat`: `Many`\<`"chat_messages"`\>; `creator`: `One`\<`"users"`, `false`\>; `organization`: `One`\<`"organizations"`, `true`\>; `updater`: `One`\<`"users"`, `false`\>; \}\>

Defined in: [src/drizzle/tables/chats.ts:92](https://github.com/PalisadoesFoundation/talawa-api/blob/ba020be1455b363dacbc8141230aeacb45671626/src/drizzle/tables/chats.ts#L92)
