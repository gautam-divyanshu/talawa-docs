[**talawa-api**](../../../../README.md)

***

# Variable: venueBookingsTableInsertSchema

> `const` **venueBookingsTableInsertSchema**: `BuildSchema`\<`"insert"`, \{ `createdAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `creatorId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `eventId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `venueId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; \}, \{ `createdAt`: () => `ZodOptional`\<`ZodDate`\>; `creatorId`: () => `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; `eventId`: () => `ZodString`; `venueId`: () => `ZodString`; \}, `undefined`\>

Defined in: [src/drizzle/tables/venueBookings.ts:101](https://github.com/PalisadoesFoundation/talawa-api/blob/e0c5d64d62f9cbd7e709b63db8cf19f32f235f61/src/drizzle/tables/venueBookings.ts#L101)
