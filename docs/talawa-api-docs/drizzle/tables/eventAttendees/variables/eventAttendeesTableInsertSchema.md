[**talawa-api**](../../../../README.md)

***

# Variable: eventAttendeesTableInsertSchema

> `const` **eventAttendeesTableInsertSchema**: `BuildSchema`\<`"insert"`, \{ `checkinTime`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `checkoutTime`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `createdAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `eventId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `feedbackSubmitted`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `id`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `isCheckedIn`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `isCheckedOut`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `isInvited`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `isRegistered`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `recurringEventInstanceId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `updatedAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `userId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; \}, \{ `checkinTime`: `ZodOptional`\<`ZodDate`\>; `checkoutTime`: `ZodOptional`\<`ZodDate`\>; `eventId`: `ZodOptional`\<`ZodString`\>; `feedbackSubmitted`: `ZodOptional`\<`ZodBoolean`\>; `isCheckedIn`: `ZodOptional`\<`ZodBoolean`\>; `isCheckedOut`: `ZodOptional`\<`ZodBoolean`\>; `isInvited`: `ZodOptional`\<`ZodBoolean`\>; `isRegistered`: `ZodOptional`\<`ZodBoolean`\>; `recurringEventInstanceId`: `ZodOptional`\<`ZodString`\>; `userId`: `ZodString`; \}, `undefined`\>

Defined in: [src/drizzle/tables/eventAttendees.ts:232](https://github.com/PalisadoesFoundation/talawa-api/blob/5786ae4f6a720dac990dcd3c8ac65cc65d4a7aa7/src/drizzle/tables/eventAttendees.ts#L232)
