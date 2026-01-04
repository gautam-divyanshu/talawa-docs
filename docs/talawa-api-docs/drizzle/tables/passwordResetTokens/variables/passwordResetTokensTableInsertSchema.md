[**talawa-api**](../../../../README.md)

***

# Variable: passwordResetTokensTableInsertSchema

> `const` **passwordResetTokensTableInsertSchema**: `BuildSchema`\<`"insert"`, \{ `createdAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `expiresAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `id`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `tokenHash`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `usedAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `userId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; \}, \{ `expiresAt`: (`schema`) => `ZodDate`; `tokenHash`: (`schema`) => `ZodString`; `userId`: (`schema`) => `ZodString`; \}\>

Defined in: [src/drizzle/tables/passwordResetTokens.ts:74](https://github.com/PalisadoesFoundation/talawa-api/blob/4fc4e12ad9f960600b3078451d438c08033538a9/src/drizzle/tables/passwordResetTokens.ts#L74)
