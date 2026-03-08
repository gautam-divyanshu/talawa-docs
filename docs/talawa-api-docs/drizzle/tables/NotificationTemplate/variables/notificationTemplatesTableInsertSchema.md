[**talawa-api**](../../../../README.md)

***

# Variable: notificationTemplatesTableInsertSchema

> `const` **notificationTemplatesTableInsertSchema**: `BuildSchema`\<`"insert"`, \{ `body`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `channelType`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `createdAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `creatorId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `eventType`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `id`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `linkedRouteName`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `name`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `title`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `updatedAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `updaterId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; \}, \{ `body`: (`schema`) => `ZodString`; `channelType`: (`schema`) => `ZodString`; `eventType`: (`schema`) => `ZodString`; `linkedRouteName`: (`schema`) => `ZodOptional`\<`ZodString`\>; `name`: (`schema`) => `ZodString`; `title`: (`schema`) => `ZodString`; \}, `undefined`\>

Defined in: [src/drizzle/tables/NotificationTemplate.ts:124](https://github.com/PalisadoesFoundation/talawa-api/blob/bac950e699f25975d58faf99422a1af81bd3b461/src/drizzle/tables/NotificationTemplate.ts#L124)
