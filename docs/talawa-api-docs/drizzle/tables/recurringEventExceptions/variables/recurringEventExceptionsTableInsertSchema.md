[**talawa-api**](../../../../README.md)

***

# Variable: recurringEventExceptionsTableInsertSchema

> `const` **recurringEventExceptionsTableInsertSchema**: `BuildSchema`\<`"insert"`, \{ `createdAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `creatorId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `exceptionData`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `id`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `organizationId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `recurringEventInstanceId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `updatedAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `updaterId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; \}, \{ `creatorId`: `ZodString`; `exceptionData`: `ZodRecord`\<`ZodString`, `ZodAny`\>; `organizationId`: `ZodString`; `recurringEventInstanceId`: `ZodString`; `updaterId`: `ZodOptional`\<`ZodString`\>; \}\>

Defined in: [src/drizzle/tables/recurringEventExceptions.ts:152](https://github.com/PalisadoesFoundation/talawa-api/blob/b24a30943e90218609bbe2cec77af89181bb6c56/src/drizzle/tables/recurringEventExceptions.ts#L152)
