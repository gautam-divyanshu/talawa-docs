[**talawa-api**](../../../../README.md)

***

# Variable: chatsTableInsertSchema

> `const` **chatsTableInsertSchema**: `BuildSchema`\<`"insert"`, \{ `avatarMimeType`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `avatarName`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `createdAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `creatorId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `description`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `id`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `name`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `organizationId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `updatedAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `updaterId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; \}, \{ `avatarName`: (`schema`) => `ZodOptional`\<`ZodString`\>; `creatorId`: (`_schema`) => `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; `description`: (`schema`) => `ZodOptional`\<`ZodString`\>; `id`: (`_schema`) => `ZodOptional`\<`ZodString`\>; `name`: (`schema`) => `ZodString`; `organizationId`: (`_schema`) => `ZodString`; `updaterId`: (`_schema`) => `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; \}, `undefined`\>

Defined in: [src/drizzle/tables/chats.ts:131](https://github.com/PalisadoesFoundation/talawa-api/blob/e5257a859e980c4157b048d478eb38a347def32f/src/drizzle/tables/chats.ts#L131)
