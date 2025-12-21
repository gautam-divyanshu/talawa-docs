[**talawa-api**](../../../../README.md)

***

# Variable: eventInvitationsTableInsertSchema

> `const` **eventInvitationsTableInsertSchema**: `BuildSchema`\<`"insert"`, \{ `createdAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `eventId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `expiresAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `id`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `invitationToken`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `invitedBy`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `inviteeEmail`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `inviteeName`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `metadata`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `recurringEventInstanceId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `respondedAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `status`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `updatedAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `userId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; \}, \{ `eventId`: `ZodOptional`\<`ZodString`\>; `expiresAt`: `ZodDate`; `invitationToken`: `ZodOptional`\<`ZodString`\>; `inviteeEmail`: `ZodString`; `inviteeName`: `ZodOptional`\<`ZodString`\>; `metadata`: `ZodOptional`\<`ZodAny`\>; `recurringEventInstanceId`: `ZodOptional`\<`ZodString`\>; `status`: `ZodOptional`\<`ZodString`\>; `userId`: `ZodOptional`\<`ZodString`\>; \}\>

Defined in: [src/drizzle/tables/eventInvitations.ts:136](https://github.com/PalisadoesFoundation/talawa-api/blob/0377c9a8043a9da5396efd550b28f87bf54a723a/src/drizzle/tables/eventInvitations.ts#L136)
