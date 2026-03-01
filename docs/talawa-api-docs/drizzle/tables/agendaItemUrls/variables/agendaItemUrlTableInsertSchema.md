[**talawa-api**](../../../../README.md)

***

# Variable: agendaItemUrlTableInsertSchema

> `const` **agendaItemUrlTableInsertSchema**: `BuildSchema`\<`"insert"`, \{ `agendaItemId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `createdAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `creatorId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `id`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `updatedAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `updaterId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `url`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; \}, \{ `agendaItemId`: `ZodString`; `creatorId`: `ZodNullable`\<`ZodOptional`\<`ZodString`\>\>; `updaterId`: `ZodNullable`\<`ZodOptional`\<`ZodString`\>\>; `url`: (`schema`) => `ZodString`; \}, `undefined`\>

Defined in: [src/drizzle/tables/agendaItemUrls.ts:111](https://github.com/PalisadoesFoundation/talawa-api/blob/29f85325b75d0f277ef992b07c6afd8761e3db6a/src/drizzle/tables/agendaItemUrls.ts#L111)
