[**talawa-api**](../../../../README.md)

***

# Variable: emailVerificationTokensTableInsertSchema

> `const` **emailVerificationTokensTableInsertSchema**: `BuildSchema`\<`"insert"`, \{ `createdAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `expiresAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `id`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `tokenHash`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `usedAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `userId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; \}, \{ `expiresAt`: (`schema`) => `ZodDate`; `tokenHash`: (`schema`) => `ZodString`; `userId`: (`schema`) => `ZodUUID`; \}, `undefined`\>

Defined in: [src/drizzle/tables/emailVerificationTokens.ts:73](https://github.com/PalisadoesFoundation/talawa-api/blob/bac950e699f25975d58faf99422a1af81bd3b461/src/drizzle/tables/emailVerificationTokens.ts#L73)
