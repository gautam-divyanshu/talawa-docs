[**talawa-api**](../../../../README.md)

***

# Variable: eventAttendeesTableInsertSchema

> `const` **eventAttendeesTableInsertSchema**: `BuildSchema`\<`"insert"`, \{ `checkinTime`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `checkoutTime`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `createdAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `eventId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `feedbackSubmitted`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `id`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `isCheckedIn`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `isCheckedOut`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `isInvited`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `isRegistered`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `recurringEventInstanceId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `updatedAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `userId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; \}, \{ `checkinTime`: `ZodOptional`\<`ZodDate`\>; `checkoutTime`: `ZodOptional`\<`ZodDate`\>; `eventId`: `ZodOptional`\<`ZodString`\>; `feedbackSubmitted`: `ZodOptional`\<`ZodBoolean`\>; `isCheckedIn`: `ZodOptional`\<`ZodBoolean`\>; `isCheckedOut`: `ZodOptional`\<`ZodBoolean`\>; `isInvited`: `ZodOptional`\<`ZodBoolean`\>; `isRegistered`: `ZodOptional`\<`ZodBoolean`\>; `recurringEventInstanceId`: `ZodOptional`\<`ZodString`\>; `userId`: `ZodString`; \}\>

Defined in: [src/drizzle/tables/eventAttendees.ts:232](https://github.com/PalisadoesFoundation/talawa-api/blob/86c684402120721d2151d1e28feb0b6d2f345849/src/drizzle/tables/eventAttendees.ts#L232)
