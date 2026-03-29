[**talawa-api**](../../../../README.md)

***

# Variable: chatMessagesTableInsertSchema

> `const` **chatMessagesTableInsertSchema**: `BuildSchema`\<`"insert"`, \{ `body`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `chatId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `createdAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `creatorId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `id`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `parentMessageId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `updatedAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; \}, \{ `body`: (`schema`) => `ZodString`; `chatId`: (`_schema`) => `ZodString`; `creatorId`: (`_schema`) => `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; `id`: (`_schema`) => `ZodOptional`\<`ZodString`\>; `parentMessageId`: (`_schema`) => `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; \}, `undefined`\>

Defined in: [src/drizzle/tables/chatMessages.ts:121](https://github.com/PalisadoesFoundation/talawa-api/blob/6cce37874af73f999b252e26ed745146024ad44c/src/drizzle/tables/chatMessages.ts#L121)
