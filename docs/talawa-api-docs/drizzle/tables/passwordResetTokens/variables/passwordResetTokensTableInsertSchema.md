[**talawa-api**](../../../../README.md)

***

# Variable: passwordResetTokensTableInsertSchema

> `const` **passwordResetTokensTableInsertSchema**: `BuildSchema`\<`"insert"`, \{ `createdAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `expiresAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `id`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `tokenHash`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `usedAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `userId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; \}, \{ `expiresAt`: (`schema`) => `ZodDate`; `tokenHash`: (`schema`) => `ZodString`; `userId`: (`schema`) => `ZodUUID`; \}, `undefined`\>

Defined in: [src/drizzle/tables/passwordResetTokens.ts:74](https://github.com/PalisadoesFoundation/talawa-api/blob/ba020be1455b363dacbc8141230aeacb45671626/src/drizzle/tables/passwordResetTokens.ts#L74)
