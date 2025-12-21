[**talawa-api**](../../../../README.md)

***

# Variable: notificationLogsTableInsertSchema

> `const` **notificationLogsTableInsertSchema**: `BuildSchema`\<`"insert"`, \{ `channel`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `createdAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `eventType`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `id`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `navigation`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `renderedContent`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `sender`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `status`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `templateId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `variables`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; \}, \{ `channel`: (`schema`) => `ZodString`; `eventType`: (`schema`) => `ZodString`; `navigation`: (`schema`) => `ZodOptional`\<`ZodString`\>; `status`: (`schema`) => `ZodString`; \}\>

Defined in: [src/drizzle/tables/NotificationLog.ts:125](https://github.com/PalisadoesFoundation/talawa-api/blob/0377c9a8043a9da5396efd550b28f87bf54a723a/src/drizzle/tables/NotificationLog.ts#L125)
