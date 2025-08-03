[**talawa-api**](../../../../README.md)

***

# Variable: recurringEventExceptionsTableInsertSchema

> `const` **recurringEventExceptionsTableInsertSchema**: `BuildSchema`\<`"insert"`, \{ `baseRecurringEventId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `createdAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `creatorId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `eventInstanceId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `exceptionData`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `exceptionType`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `id`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `instanceStartTime`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `organizationId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `updatedAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `updaterId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; \}, \{ `exceptionData`: `ZodRecord`\<`ZodString`, `ZodAny`\>; `instanceStartTime`: `ZodDate`; \}\>

Defined in: [src/drizzle/tables/recurringEventExceptions.ts:208](https://github.com/PalisadoesFoundation/talawa-api/blob/1b4a5964fc61cbcbec1a297ce4f71a2a2c39b04f/src/drizzle/tables/recurringEventExceptions.ts#L208)
