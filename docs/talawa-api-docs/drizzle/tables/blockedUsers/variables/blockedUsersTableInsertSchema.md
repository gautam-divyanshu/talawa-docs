[**talawa-api**](../../../../README.md)

***

# Variable: blockedUsersTableInsertSchema

> `const` **blockedUsersTableInsertSchema**: `BuildSchema`\<`"insert"`, \{ `createdAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `id`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `organizationId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `userId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; \}, \{ `organizationId`: (`schema`) => `ZodString`; `userId`: (`schema`) => `ZodString`; \}\>

Defined in: [src/drizzle/tables/blockedUsers.ts:58](https://github.com/PalisadoesFoundation/talawa-api/blob/4fc4e12ad9f960600b3078451d438c08033538a9/src/drizzle/tables/blockedUsers.ts#L58)
