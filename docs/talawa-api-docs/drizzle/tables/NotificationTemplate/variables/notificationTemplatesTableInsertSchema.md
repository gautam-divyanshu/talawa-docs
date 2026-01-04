[**talawa-api**](../../../../README.md)

***

# Variable: notificationTemplatesTableInsertSchema

> `const` **notificationTemplatesTableInsertSchema**: `BuildSchema`\<`"insert"`, \{ `body`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `channelType`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `createdAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `creatorId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `eventType`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `id`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `linkedRouteName`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `name`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `title`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `updatedAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `updaterId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; \}, \{ `body`: (`schema`) => `ZodString`; `channelType`: (`schema`) => `ZodString`; `eventType`: (`schema`) => `ZodString`; `linkedRouteName`: (`schema`) => `ZodOptional`\<`ZodString`\>; `name`: (`schema`) => `ZodString`; `title`: (`schema`) => `ZodString`; \}\>

Defined in: [src/drizzle/tables/NotificationTemplate.ts:124](https://github.com/PalisadoesFoundation/talawa-api/blob/4fc4e12ad9f960600b3078451d438c08033538a9/src/drizzle/tables/NotificationTemplate.ts#L124)
