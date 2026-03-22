[**talawa-api**](../../../../README.md)

***

# Variable: notificationLogsTableInsertSchema

> `const` **notificationLogsTableInsertSchema**: `BuildSchema`\<`"insert"`, \{ `channel`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `createdAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `eventType`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `id`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `navigation`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `renderedContent`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `sender`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `status`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `templateId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `variables`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; \}, \{ `channel`: (`schema`) => `ZodString`; `eventType`: (`schema`) => `ZodString`; `navigation`: (`schema`) => `ZodOptional`\<`ZodString`\>; `status`: (`schema`) => `ZodString`; \}, `undefined`\>

Defined in: [src/drizzle/tables/NotificationLog.ts:125](https://github.com/PalisadoesFoundation/talawa-api/blob/4192946e517a94b573c8f323a0a5b2837aeccf3f/src/drizzle/tables/NotificationLog.ts#L125)
