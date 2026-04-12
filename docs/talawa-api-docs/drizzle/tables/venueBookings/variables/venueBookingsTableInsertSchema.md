[**talawa-api**](../../../../README.md)

***

# Variable: venueBookingsTableInsertSchema

> `const` **venueBookingsTableInsertSchema**: `BuildSchema`\<`"insert"`, \{ `createdAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `creatorId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `eventId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `venueId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; \}, \{ `createdAt`: () => `ZodOptional`\<`ZodDate`\>; `creatorId`: () => `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; `eventId`: () => `ZodString`; `venueId`: () => `ZodString`; \}, `undefined`\>

Defined in: [src/drizzle/tables/venueBookings.ts:101](https://github.com/PalisadoesFoundation/talawa-api/blob/164e192ab45bfadc8f9212fcf7495afd6ad24351/src/drizzle/tables/venueBookings.ts#L101)
