[**talawa-api**](../../../../README.md)

***

# Variable: agendaFoldersTableInsertSchema

> `const` **agendaFoldersTableInsertSchema**: `BuildSchema`\<`"insert"`, \{ `createdAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `creatorId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `description`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `eventId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `id`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `isDefaultFolder`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `name`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `organizationId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `sequence`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `updatedAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `updaterId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; \}, \{ `description`: (`schema`) => `ZodOptional`\<`ZodString`\>; `name`: (`schema`) => `ZodString`; `sequence`: (`schema`) => `ZodOptional`\<`ZodInt`\>; \}, `undefined`\>

Defined in: [src/drizzle/tables/agendaFolders.ts:147](https://github.com/PalisadoesFoundation/talawa-api/blob/36d1ea832b10d1e9883eff7a03104362b71079bd/src/drizzle/tables/agendaFolders.ts#L147)
