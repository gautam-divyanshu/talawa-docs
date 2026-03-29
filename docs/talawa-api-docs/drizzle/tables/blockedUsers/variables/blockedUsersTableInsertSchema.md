[**talawa-api**](../../../../README.md)

***

# Variable: blockedUsersTableInsertSchema

> `const` **blockedUsersTableInsertSchema**: `BuildSchema`\<`"insert"`, \{ `createdAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `id`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `organizationId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `userId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; \}, \{ `organizationId`: (`schema`) => `ZodUUID`; `userId`: (`schema`) => `ZodUUID`; \}, `undefined`\>

Defined in: [src/drizzle/tables/blockedUsers.ts:58](https://github.com/PalisadoesFoundation/talawa-api/blob/6cce37874af73f999b252e26ed745146024ad44c/src/drizzle/tables/blockedUsers.ts#L58)
