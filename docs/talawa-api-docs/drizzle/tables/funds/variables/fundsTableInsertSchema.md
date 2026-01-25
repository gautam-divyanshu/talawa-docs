[**talawa-api**](../../../../README.md)

***

# Variable: fundsTableInsertSchema

> `const` **fundsTableInsertSchema**: `BuildSchema`\<`"insert"`, \{ `createdAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `creatorId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `id`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `isArchived`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `isDefault`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `isTaxDeductible`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `name`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `organizationId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `referenceNumber`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `updatedAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `updaterId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; \}, \{ `createdAt`: () => `ZodOptional`\<`ZodDate`\>; `creatorId`: () => `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; `id`: () => `ZodOptional`\<`ZodString`\>; `isArchived`: () => `ZodOptional`\<`ZodBoolean`\>; `isDefault`: () => `ZodOptional`\<`ZodBoolean`\>; `isTaxDeductible`: () => `ZodBoolean`; `name`: () => `ZodString`; `organizationId`: () => `ZodString`; `referenceNumber`: () => `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; `updatedAt`: () => `ZodOptional`\<`ZodDate`\>; `updaterId`: () => `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; \}, `undefined`\>

Defined in: [src/drizzle/tables/funds.ts:138](https://github.com/PalisadoesFoundation/talawa-api/blob/f55b9babb4ee32c06104383cf8760b84f8143482/src/drizzle/tables/funds.ts#L138)
