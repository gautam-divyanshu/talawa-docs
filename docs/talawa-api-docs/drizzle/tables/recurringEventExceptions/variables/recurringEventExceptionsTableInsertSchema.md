[**talawa-api**](../../../../README.md)

***

# Variable: recurringEventExceptionsTableInsertSchema

> `const` **recurringEventExceptionsTableInsertSchema**: `BuildSchema`\<`"insert"`, \{ `createdAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `creatorId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `exceptionData`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `id`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `organizationId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `recurringEventInstanceId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `updatedAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `updaterId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; \}, \{ `creatorId`: `ZodString`; `exceptionData`: `ZodRecord`\<`ZodString`, `ZodAny`\>; `organizationId`: `ZodString`; `recurringEventInstanceId`: `ZodString`; `updaterId`: `ZodOptional`\<`ZodString`\>; \}\>

Defined in: [src/drizzle/tables/recurringEventExceptions.ts:152](https://github.com/PalisadoesFoundation/talawa-api/blob/4fc4e12ad9f960600b3078451d438c08033538a9/src/drizzle/tables/recurringEventExceptions.ts#L152)
