[**talawa-api**](../../../../README.md)

***

# Variable: agendaItemUrlTableInsertSchema

> `const` **agendaItemUrlTableInsertSchema**: `BuildSchema`\<`"insert"`, \{ `agendaItemId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `createdAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `creatorId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `id`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `updatedAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `updaterId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `url`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; \}, \{ `agendaItemId`: `ZodString`; `creatorId`: `ZodNullable`\<`ZodOptional`\<`ZodString`\>\>; `updaterId`: `ZodNullable`\<`ZodOptional`\<`ZodString`\>\>; `url`: (`schema`) => `ZodString`; \}, `undefined`\>

Defined in: [src/drizzle/tables/agendaItemUrls.ts:111](https://github.com/PalisadoesFoundation/talawa-api/blob/b9e6fcc765ae0106e0dfd5d4f4612eef0522df38/src/drizzle/tables/agendaItemUrls.ts#L111)
