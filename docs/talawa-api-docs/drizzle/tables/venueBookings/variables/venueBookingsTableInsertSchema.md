[**talawa-api**](../../../../README.md)

***

# Variable: venueBookingsTableInsertSchema

> `const` **venueBookingsTableInsertSchema**: `BuildSchema`\<`"insert"`, \{ `createdAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `creatorId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `eventId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `venueId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; \}, \{ `createdAt`: () => `ZodOptional`\<`ZodDate`\>; `creatorId`: () => `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; `eventId`: () => `ZodString`; `venueId`: () => `ZodString`; \}, `undefined`\>

Defined in: [src/drizzle/tables/venueBookings.ts:101](https://github.com/PalisadoesFoundation/talawa-api/blob/39075e3ba8206f4ccaf60cdb809b4cedd12c8a45/src/drizzle/tables/venueBookings.ts#L101)
