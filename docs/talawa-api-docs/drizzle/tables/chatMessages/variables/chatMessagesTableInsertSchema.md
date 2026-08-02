[**talawa-api**](../../../../README.md)

***

# Variable: chatMessagesTableInsertSchema

> `const` **chatMessagesTableInsertSchema**: `BuildSchema`\<`"insert"`, \{ `body`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `chatId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `createdAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `creatorId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `id`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `parentMessageId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `updatedAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; \}, \{ `body`: (`schema`) => `ZodString`; `chatId`: (`_schema`) => `ZodString`; `creatorId`: (`_schema`) => `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; `id`: (`_schema`) => `ZodOptional`\<`ZodString`\>; `parentMessageId`: (`_schema`) => `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; \}, `undefined`\>

Defined in: [src/drizzle/tables/chatMessages.ts:121](https://github.com/PalisadoesFoundation/talawa-api/blob/5786ae4f6a720dac990dcd3c8ac65cc65d4a7aa7/src/drizzle/tables/chatMessages.ts#L121)
