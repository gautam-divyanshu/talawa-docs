[**talawa-api**](../../../../README.md)

***

# Variable: notificationAudienceTableInsertSchema

> `const` **notificationAudienceTableInsertSchema**: `BuildSchema`\<`"insert"`, \{ `createdAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `isRead`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `notificationId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `readAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `userId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; \}, \{ `isRead`: (`schema`) => `ZodOptional`\<`ZodBoolean`\>; \}, `undefined`\>

Defined in: [src/drizzle/tables/NotificationAudience.ts:99](https://github.com/PalisadoesFoundation/talawa-api/blob/e0c5d64d62f9cbd7e709b63db8cf19f32f235f61/src/drizzle/tables/NotificationAudience.ts#L99)
