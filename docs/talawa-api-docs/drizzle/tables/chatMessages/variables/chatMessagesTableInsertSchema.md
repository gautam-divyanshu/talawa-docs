[**talawa-api**](../../../../README.md)

***

# Variable: chatMessagesTableInsertSchema

> `const` **chatMessagesTableInsertSchema**: `BuildSchema`\<`"insert"`, \{ `body`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `chatId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `createdAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `creatorId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `id`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `parentMessageId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `updatedAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; \}, \{ `body`: (`schema`) => `ZodString`; `chatId`: (`_schema`) => `ZodString`; `creatorId`: (`_schema`) => `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; `id`: (`_schema`) => `ZodOptional`\<`ZodString`\>; `parentMessageId`: (`_schema`) => `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; \}, `undefined`\>

Defined in: [src/drizzle/tables/chatMessages.ts:121](https://github.com/PalisadoesFoundation/talawa-api/blob/36d1ea832b10d1e9883eff7a03104362b71079bd/src/drizzle/tables/chatMessages.ts#L121)
