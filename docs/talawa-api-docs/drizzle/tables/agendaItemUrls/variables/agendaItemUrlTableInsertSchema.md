[**talawa-api**](../../../../README.md)

***

# Variable: agendaItemUrlTableInsertSchema

> `const` **agendaItemUrlTableInsertSchema**: `BuildSchema`\<`"insert"`, \{ `agendaItemId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `createdAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `creatorId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `id`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `updatedAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `updaterId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `url`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; \}, \{ `agendaItemId`: `ZodString`; `creatorId`: `ZodNullable`\<`ZodOptional`\<`ZodString`\>\>; `updaterId`: `ZodNullable`\<`ZodOptional`\<`ZodString`\>\>; `url`: (`schema`) => `ZodString`; \}, `undefined`\>

Defined in: [src/drizzle/tables/agendaItemUrls.ts:111](https://github.com/PalisadoesFoundation/talawa-api/blob/39075e3ba8206f4ccaf60cdb809b4cedd12c8a45/src/drizzle/tables/agendaItemUrls.ts#L111)
