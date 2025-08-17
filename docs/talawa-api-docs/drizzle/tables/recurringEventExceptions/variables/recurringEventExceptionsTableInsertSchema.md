[**talawa-api**](../../../../README.md)

***

# Variable: recurringEventExceptionsTableInsertSchema

> `const` **recurringEventExceptionsTableInsertSchema**: `BuildSchema`\<`"insert"`, \{ `baseRecurringEventId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `createdAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `creatorId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `eventInstanceId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `exceptionData`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `exceptionType`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `id`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `instanceStartTime`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `organizationId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `updatedAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `updaterId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; \}, \{ `exceptionData`: `ZodRecord`\<`ZodString`, `ZodAny`\>; `instanceStartTime`: `ZodDate`; \}\>

Defined in: [src/drizzle/tables/recurringEventExceptions.ts:208](https://github.com/PalisadoesFoundation/talawa-api/blob/3e735f62cd978db04c1ff58ca33667aba6f9eeef/src/drizzle/tables/recurringEventExceptions.ts#L208)
