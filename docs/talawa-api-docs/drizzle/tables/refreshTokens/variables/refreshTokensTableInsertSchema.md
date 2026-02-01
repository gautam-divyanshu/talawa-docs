[**talawa-api**](../../../../README.md)

***

# Variable: refreshTokensTableInsertSchema

> `const` **refreshTokensTableInsertSchema**: `BuildSchema`\<`"insert"`, \{ `createdAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `expiresAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `id`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `revokedAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `tokenHash`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `userId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; \}, \{ `expiresAt`: (`schema`) => `ZodDate`; `tokenHash`: (`schema`) => `ZodString`; `userId`: (`schema`) => `ZodUUID`; \}, `undefined`\>

Defined in: [src/drizzle/tables/refreshTokens.ts:73](https://github.com/PalisadoesFoundation/talawa-api/blob/1ed05dfbd5f8b040258a6172cdf4d8be325f6225/src/drizzle/tables/refreshTokens.ts#L73)
