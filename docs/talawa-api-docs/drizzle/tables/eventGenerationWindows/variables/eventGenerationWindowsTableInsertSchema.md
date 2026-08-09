[**talawa-api**](../../../../README.md)

***

# Variable: eventGenerationWindowsTableInsertSchema

> `const` **eventGenerationWindowsTableInsertSchema**: `BuildSchema`\<`"insert"`, \{ `configurationNotes`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `createdAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `createdById`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `currentWindowEndDate`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `historyRetentionMonths`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `hotWindowMonthsAhead`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `id`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `isEnabled`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `lastProcessedAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `lastProcessedInstanceCount`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `lastUpdatedById`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `maxInstancesPerRun`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `organizationId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `processingPriority`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `retentionStartDate`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `updatedAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; \}, \{ `configurationNotes`: `ZodOptional`\<`ZodString`\>; `createdById`: `ZodString`; `currentWindowEndDate`: `ZodDate`; `historyRetentionMonths`: `ZodNumber`; `hotWindowMonthsAhead`: `ZodNumber`; `isEnabled`: `ZodOptional`\<`ZodBoolean`\>; `lastProcessedInstanceCount`: `ZodNumber`; `lastUpdatedById`: `ZodOptional`\<`ZodString`\>; `maxInstancesPerRun`: `ZodNumber`; `organizationId`: `ZodString`; `processingPriority`: `ZodNumber`; `retentionStartDate`: `ZodDate`; \}, `undefined`\>

Defined in: [src/drizzle/tables/eventGenerationWindows.ts:231](https://github.com/PalisadoesFoundation/talawa-api/blob/b9e6fcc765ae0106e0dfd5d4f4612eef0522df38/src/drizzle/tables/eventGenerationWindows.ts#L231)
