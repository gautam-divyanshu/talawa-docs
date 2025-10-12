[**talawa-api**](../../../../README.md)

***

# Variable: recurringEventInstancesTableInsertSchema

> `const` **recurringEventInstancesTableInsertSchema**: `BuildSchema`\<`"insert"`, \{ `actualEndTime`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `actualStartTime`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `baseRecurringEventId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `generatedAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `id`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `isCancelled`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `lastUpdatedAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `organizationId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `originalInstanceStartTime`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `originalSeriesId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `recurrenceRuleId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `sequenceNumber`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `totalCount`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `version`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; \}, \{ `actualEndTime`: `ZodDate`; `actualStartTime`: `ZodDate`; `baseRecurringEventId`: `ZodString`; `isCancelled`: `ZodOptional`\<`ZodBoolean`\>; `organizationId`: `ZodString`; `originalInstanceStartTime`: `ZodDate`; `originalSeriesId`: `ZodString`; `recurrenceRuleId`: `ZodString`; `sequenceNumber`: `ZodNumber`; `totalCount`: `ZodOptional`\<`ZodNullable`\<`ZodNumber`\>\>; `version`: `ZodOptional`\<`ZodString`\>; \}\>

Defined in: [src/drizzle/tables/recurringEventInstances.ts:287](https://github.com/PalisadoesFoundation/talawa-api/blob/e96fa5edb6be6453765d6ab160fe5a845f75f0e8/src/drizzle/tables/recurringEventInstances.ts#L287)
