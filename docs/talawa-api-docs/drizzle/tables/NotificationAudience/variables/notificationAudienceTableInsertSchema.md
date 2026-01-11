[**talawa-api**](../../../../README.md)

***

# Variable: notificationAudienceTableInsertSchema

> `const` **notificationAudienceTableInsertSchema**: `BuildSchema`\<`"insert"`, \{ `createdAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `isRead`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `notificationId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `readAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `userId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; \}, \{ `isRead`: (`schema`) => `ZodOptional`\<`ZodBoolean`\>; \}\>

Defined in: [src/drizzle/tables/NotificationAudience.ts:99](https://github.com/PalisadoesFoundation/talawa-api/blob/b24a30943e90218609bbe2cec77af89181bb6c56/src/drizzle/tables/NotificationAudience.ts#L99)
