[**talawa-api**](../../../../README.md)

***

# Variable: notificationAudienceTableInsertSchema

> `const` **notificationAudienceTableInsertSchema**: `BuildSchema`\<`"insert"`, \{ `createdAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `isRead`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `notificationId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `readAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `userId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; \}, \{ `isRead`: (`schema`) => `ZodOptional`\<`ZodBoolean`\>; \}\>

Defined in: [src/drizzle/tables/NotificationAudience.ts:99](https://github.com/PalisadoesFoundation/talawa-api/blob/aa036083713a382be03ddad8b72207946e5ffeb4/src/drizzle/tables/NotificationAudience.ts#L99)
