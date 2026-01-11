[**talawa-api**](../../../../README.md)

***

# Variable: recurrenceRulesTableInsertSchema

> `const` **recurrenceRulesTableInsertSchema**: `BuildSchema`\<`"insert"`, \{ `baseRecurringEventId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `byDay`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `byMonth`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `byMonthDay`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `count`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `createdAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `creatorId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `frequency`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `id`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `interval`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `latestInstanceDate`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `organizationId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `originalSeriesId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `recurrenceEndDate`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `recurrenceRuleString`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `recurrenceStartDate`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `updatedAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `updaterId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; \}, \{ `byDay`: `ZodOptional`\<`ZodArray`\<`ZodString`, `"many"`\>\>; `byMonth`: `ZodOptional`\<`ZodArray`\<`ZodNumber`, `"many"`\>\>; `byMonthDay`: `ZodOptional`\<`ZodArray`\<`ZodNumber`, `"many"`\>\>; `frequency`: `ZodEnum`\<\[`"DAILY"`, `"WEEKLY"`, `"MONTHLY"`, `"YEARLY"`\]\>; `interval`: (`schema`) => `ZodNumber`; `recurrenceRuleString`: (`schema`) => `ZodString`; \}\>

Defined in: [src/drizzle/tables/recurrenceRules.ts:241](https://github.com/PalisadoesFoundation/talawa-api/blob/b24a30943e90218609bbe2cec77af89181bb6c56/src/drizzle/tables/recurrenceRules.ts#L241)
