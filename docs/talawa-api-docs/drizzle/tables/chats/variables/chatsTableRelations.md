[**talawa-api**](../../../../README.md)

***

# Variable: chatsTableRelations

> `const` **chatsTableRelations**: `Relations`\<`"chats"`, \{ `chatMembershipsWhereChat`: `Many`\<`"chat_memberships"`\>; `chatMessagesWhereChat`: `Many`\<`"chat_messages"`\>; `creator`: `One`\<`"users"`, `false`\>; `organization`: `One`\<`"organizations"`, `true`\>; `updater`: `One`\<`"users"`, `false`\>; \}\>

Defined in: [src/drizzle/tables/chats.ts:92](https://github.com/PalisadoesFoundation/talawa-api/blob/6cce37874af73f999b252e26ed745146024ad44c/src/drizzle/tables/chats.ts#L92)
