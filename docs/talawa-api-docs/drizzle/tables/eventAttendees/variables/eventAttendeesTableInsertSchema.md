[**talawa-api**](../../../../README.md)

***

# Variable: eventAttendeesTableInsertSchema

> `const` **eventAttendeesTableInsertSchema**: `BuildSchema`\<`"insert"`, \{ `checkinTime`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `checkoutTime`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `createdAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `eventId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `feedbackSubmitted`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `id`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `isCheckedIn`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `isCheckedOut`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `isInvited`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `isRegistered`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `recurringEventInstanceId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `updatedAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `userId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; \}, \{ `checkinTime`: `ZodOptional`\<`ZodDate`\>; `checkoutTime`: `ZodOptional`\<`ZodDate`\>; `eventId`: `ZodOptional`\<`ZodString`\>; `feedbackSubmitted`: `ZodOptional`\<`ZodBoolean`\>; `isCheckedIn`: `ZodOptional`\<`ZodBoolean`\>; `isCheckedOut`: `ZodOptional`\<`ZodBoolean`\>; `isInvited`: `ZodOptional`\<`ZodBoolean`\>; `isRegistered`: `ZodOptional`\<`ZodBoolean`\>; `recurringEventInstanceId`: `ZodOptional`\<`ZodString`\>; `userId`: `ZodString`; \}\>

Defined in: [src/drizzle/tables/eventAttendees.ts:206](https://github.com/PalisadoesFoundation/talawa-api/blob/d40e84d157d4bee564e5a066ea403df80b2fb3be/src/drizzle/tables/eventAttendees.ts#L206)
