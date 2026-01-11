[**talawa-api**](../../../../README.md)

***

# Variable: emailNotificationsTableInsertSchema

> `const` **emailNotificationsTableInsertSchema**: `BuildSchema`\<`"insert"`, \{ `createdAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `email`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `errorMessage`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `failedAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `htmlBody`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `id`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `maxRetries`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `notificationLogId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `retryCount`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `sentAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `sesMessageId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `status`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `subject`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `updatedAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `userId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; \}, \{ `email`: (`schema`) => `ZodString`; `htmlBody`: (`schema`) => `ZodString`; `maxRetries`: (`schema`) => `ZodOptional`\<`ZodNumber`\>; `retryCount`: (`schema`) => `ZodOptional`\<`ZodNumber`\>; `status`: (`schema`) => `ZodOptional`\<`ZodEnum`\<\[`"pending"`, `"sent"`, `"delivered"`, `"bounced"`, `"failed"`\]\>\>; `subject`: (`schema`) => `ZodString`; \}\>

Defined in: [src/drizzle/tables/EmailNotification.ts:162](https://github.com/PalisadoesFoundation/talawa-api/blob/b24a30943e90218609bbe2cec77af89181bb6c56/src/drizzle/tables/EmailNotification.ts#L162)
