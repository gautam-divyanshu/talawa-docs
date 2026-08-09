[**talawa-api**](../../../../README.md)

***

# Variable: organizationMembershipsTableInsertSchema

> `const` **organizationMembershipsTableInsertSchema**: `BuildSchema`\<`"insert"`, \{ `createdAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `creatorId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `memberId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `organizationId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `role`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `updatedAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `updaterId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; \}, \{ `creatorId`: (`_schema`) => `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; `memberId`: (`_schema`) => `ZodString`; `organizationId`: (`_schema`) => `ZodString`; `updaterId`: (`_schema`) => `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; \}, `undefined`\>

Defined in: [src/drizzle/tables/organizationMemberships.ts:131](https://github.com/PalisadoesFoundation/talawa-api/blob/b9e6fcc765ae0106e0dfd5d4f4612eef0522df38/src/drizzle/tables/organizationMemberships.ts#L131)
