[**talawa-api**](../../../../README.md)

***

# Variable: notificationAudienceTableInsertSchema

> `const` **notificationAudienceTableInsertSchema**: `BuildSchema`\<`"insert"`, \{ `createdAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `isRead`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `notificationId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `readAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `userId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; \}, \{ `isRead`: (`schema`) => `ZodOptional`\<`ZodBoolean`\>; \}, `undefined`\>

Defined in: [src/drizzle/tables/NotificationAudience.ts:99](https://github.com/PalisadoesFoundation/talawa-api/blob/5246239edff12106460ef2c69cc54e98da4dedcf/src/drizzle/tables/NotificationAudience.ts#L99)
