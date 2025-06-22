[**talawa-api**](../../../../README.md)

***

# Variable: chatsTableRelations

> `const` **chatsTableRelations**: `Relations`\<`"chats"`, \{ `chatMembershipsWhereChat`: `Many`\<`"chat_memberships"`\>; `chatMessagesWhereChat`: `Many`\<`"chat_messages"`\>; `creator`: `One`\<`"users"`, `false`\>; `organization`: `One`\<`"organizations"`, `true`\>; `updater`: `One`\<`"users"`, `false`\>; \}\>

Defined in: [src/drizzle/tables/chats.ts:91](https://github.com/PalisadoesFoundation/talawa-api/blob/38f66e7bf6477f824ec6304308f4c8fdc8e4e79b/src/drizzle/tables/chats.ts#L91)
