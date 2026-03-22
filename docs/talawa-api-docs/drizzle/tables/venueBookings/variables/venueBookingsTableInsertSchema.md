[**talawa-api**](../../../../README.md)

***

# Variable: venueBookingsTableInsertSchema

> `const` **venueBookingsTableInsertSchema**: `BuildSchema`\<`"insert"`, \{ `createdAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `creatorId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `eventId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `venueId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; \}, \{ `createdAt`: () => `ZodOptional`\<`ZodDate`\>; `creatorId`: () => `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; `eventId`: () => `ZodString`; `venueId`: () => `ZodString`; \}, `undefined`\>

Defined in: [src/drizzle/tables/venueBookings.ts:101](https://github.com/PalisadoesFoundation/talawa-api/blob/4192946e517a94b573c8f323a0a5b2837aeccf3f/src/drizzle/tables/venueBookings.ts#L101)
