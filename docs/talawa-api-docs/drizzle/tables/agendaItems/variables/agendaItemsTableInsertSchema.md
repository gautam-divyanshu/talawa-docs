[**talawa-api**](../../../../README.md)

***

# Variable: agendaItemsTableInsertSchema

> `const` **agendaItemsTableInsertSchema**: `BuildSchema`\<`"insert"`, \{ `categoryId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `createdAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `creatorId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `description`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `duration`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `eventId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `folderId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `id`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `key`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `name`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `notes`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `sequence`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `type`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `updatedAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `updaterId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; \}, \{ `description`: (`schema`) => `ZodOptional`\<`ZodString`\>; `name`: (`schema`) => `ZodString`; `notes`: (`schema`) => `ZodOptional`\<`ZodString`\>; `sequence`: (`schema`) => `ZodInt`; \}, `undefined`\>

Defined in: [src/drizzle/tables/agendaItems.ts:195](https://github.com/PalisadoesFoundation/talawa-api/blob/bac950e699f25975d58faf99422a1af81bd3b461/src/drizzle/tables/agendaItems.ts#L195)
