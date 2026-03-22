[**talawa-api**](../../../../README.md)

***

# Variable: venuesTableInsertSchema

> `const` **venuesTableInsertSchema**: `BuildSchema`\<`"insert"`, \{ `capacity`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `createdAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `creatorId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `description`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `id`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `name`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `organizationId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `updatedAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `updaterId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; \}, \{ `capacity`: () => `ZodOptional`\<`ZodNullable`\<`ZodNumber`\>\>; `creatorId`: () => `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; `description`: () => `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; `id`: () => `ZodOptional`\<`ZodString`\>; `name`: () => `ZodString`; `organizationId`: () => `ZodString`; `updaterId`: () => `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; \}, `undefined`\>

Defined in: [src/drizzle/tables/venues.ts:136](https://github.com/PalisadoesFoundation/talawa-api/blob/4192946e517a94b573c8f323a0a5b2837aeccf3f/src/drizzle/tables/venues.ts#L136)
