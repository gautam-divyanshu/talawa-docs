[**talawa-api**](../../../../README.md)

***

# Variable: eventInvitationsTableInsertSchema

> `const` **eventInvitationsTableInsertSchema**: `BuildSchema`\<`"insert"`, \{ `createdAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `eventId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `expiresAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `id`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `invitationToken`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `invitedBy`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `inviteeEmail`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `inviteeName`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `metadata`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `recurringEventInstanceId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `respondedAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `status`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `updatedAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `userId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; \}, \{ `eventId`: `ZodOptional`\<`ZodString`\>; `expiresAt`: `ZodDate`; `invitationToken`: `ZodOptional`\<`ZodString`\>; `inviteeEmail`: `ZodString`; `inviteeName`: `ZodOptional`\<`ZodString`\>; `metadata`: `ZodOptional`\<`ZodAny`\>; `recurringEventInstanceId`: `ZodOptional`\<`ZodString`\>; `status`: `ZodOptional`\<`ZodString`\>; `userId`: `ZodOptional`\<`ZodString`\>; \}\>

Defined in: [src/drizzle/tables/eventInvitations.ts:136](https://github.com/PalisadoesFoundation/talawa-api/blob/86c684402120721d2151d1e28feb0b6d2f345849/src/drizzle/tables/eventInvitations.ts#L136)
