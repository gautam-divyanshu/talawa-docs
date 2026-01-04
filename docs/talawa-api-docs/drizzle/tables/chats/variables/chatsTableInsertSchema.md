[**talawa-api**](../../../../README.md)

***

# Variable: chatsTableInsertSchema

> `const` **chatsTableInsertSchema**: `BuildSchema`\<`"insert"`, \{ `avatarMimeType`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `avatarName`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `createdAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `creatorId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `description`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `id`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `name`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `organizationId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `updatedAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `updaterId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; \}, \{ `avatarName`: (`schema`) => `ZodOptional`\<`ZodString`\>; `description`: (`schema`) => `ZodOptional`\<`ZodString`\>; `name`: (`schema`) => `ZodString`; \}\>

Defined in: [src/drizzle/tables/chats.ts:130](https://github.com/PalisadoesFoundation/talawa-api/blob/4fc4e12ad9f960600b3078451d438c08033538a9/src/drizzle/tables/chats.ts#L130)
