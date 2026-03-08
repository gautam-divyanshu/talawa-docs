[**talawa-api**](../../../../README.md)

***

# Variable: fundsTableInsertSchema

> `const` **fundsTableInsertSchema**: `BuildSchema`\<`"insert"`, \{ `createdAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `creatorId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `id`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `isArchived`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `isDefault`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `isTaxDeductible`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `name`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `organizationId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `referenceNumber`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `updatedAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `updaterId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; \}, \{ `createdAt`: () => `ZodOptional`\<`ZodDate`\>; `creatorId`: () => `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; `id`: () => `ZodOptional`\<`ZodString`\>; `isArchived`: () => `ZodOptional`\<`ZodBoolean`\>; `isDefault`: () => `ZodOptional`\<`ZodBoolean`\>; `isTaxDeductible`: () => `ZodBoolean`; `name`: () => `ZodString`; `organizationId`: () => `ZodString`; `referenceNumber`: () => `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; `updatedAt`: () => `ZodOptional`\<`ZodDate`\>; `updaterId`: () => `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; \}, `undefined`\>

Defined in: [src/drizzle/tables/funds.ts:138](https://github.com/PalisadoesFoundation/talawa-api/blob/bac950e699f25975d58faf99422a1af81bd3b461/src/drizzle/tables/funds.ts#L138)
