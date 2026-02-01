[**talawa-api**](../../../../README.md)

***

# Variable: eventsTableInsertSchema

> `const` **eventsTableInsertSchema**: `BuildSchema`\<`"insert"`, \{ `allDay`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `createdAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `creatorId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `description`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `endAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `id`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `isInviteOnly`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `isPublic`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `isRecurringEventTemplate`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `isRegisterable`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `location`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `name`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `organizationId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `startAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `updatedAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `updaterId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; \}, \{ `allDay`: (`schema`) => `ZodOptional`\<`ZodBoolean`\>; `description`: (`schema`) => `ZodOptional`\<`ZodString`\>; `isInviteOnly`: (`schema`) => `ZodOptional`\<`ZodBoolean`\>; `isPublic`: (`schema`) => `ZodOptional`\<`ZodBoolean`\>; `isRecurringEventTemplate`: `ZodOptional`\<`ZodBoolean`\>; `isRegisterable`: (`schema`) => `ZodOptional`\<`ZodBoolean`\>; `location`: (`schema`) => `ZodOptional`\<`ZodString`\>; `name`: (`schema`) => `ZodString`; \}, `undefined`\>

Defined in: [src/drizzle/tables/events.ts:200](https://github.com/PalisadoesFoundation/talawa-api/blob/1ed05dfbd5f8b040258a6172cdf4d8be325f6225/src/drizzle/tables/events.ts#L200)
