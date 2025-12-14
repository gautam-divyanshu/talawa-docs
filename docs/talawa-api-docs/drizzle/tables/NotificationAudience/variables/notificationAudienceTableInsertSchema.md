[**talawa-api**](../../../../README.md)

***

# Variable: notificationAudienceTableInsertSchema

> `const` **notificationAudienceTableInsertSchema**: `BuildSchema`\<`"insert"`, \{ `createdAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `isRead`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `notificationId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `readAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `userId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; \}, \{ `isRead`: (`schema`) => `ZodOptional`\<`ZodBoolean`\>; \}\>

Defined in: [src/drizzle/tables/NotificationAudience.ts:99](https://github.com/PalisadoesFoundation/talawa-api/blob/67117a2ce201913e54d3898319485470853d3074/src/drizzle/tables/NotificationAudience.ts#L99)
