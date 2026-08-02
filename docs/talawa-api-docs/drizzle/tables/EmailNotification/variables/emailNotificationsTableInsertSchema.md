[**talawa-api**](../../../../README.md)

***

# Variable: emailNotificationsTableInsertSchema

> `const` **emailNotificationsTableInsertSchema**: `BuildSchema`\<`"insert"`, \{ `createdAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `email`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `errorMessage`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `failedAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `htmlBody`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `id`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `maxRetries`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `notificationLogId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `retryCount`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `sentAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `sesMessageId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `status`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `subject`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `updatedAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `userId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; \}, \{ `email`: (`schema`) => `ZodString`; `htmlBody`: (`schema`) => `ZodString`; `maxRetries`: (`schema`) => `ZodOptional`\<`ZodInt`\>; `retryCount`: (`schema`) => `ZodOptional`\<`ZodInt`\>; `status`: (`schema`) => `ZodOptional`\<`ZodEnum`\<\{ `bounced`: `"bounced"`; `delivered`: `"delivered"`; `failed`: `"failed"`; `pending`: `"pending"`; `sent`: `"sent"`; \}\>\>; `subject`: (`schema`) => `ZodString`; \}, `undefined`\>

Defined in: [src/drizzle/tables/EmailNotification.ts:162](https://github.com/PalisadoesFoundation/talawa-api/blob/5786ae4f6a720dac990dcd3c8ac65cc65d4a7aa7/src/drizzle/tables/EmailNotification.ts#L162)
