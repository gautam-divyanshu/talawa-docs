[**talawa-api**](../../../../README.md)

***

# Variable: venueBookingsTableInsertSchema

> `const` **venueBookingsTableInsertSchema**: `BuildSchema`\<`"insert"`, \{ `createdAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `creatorId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `eventId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `venueId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; \}, \{ `createdAt`: () => `ZodOptional`\<`ZodDate`\>; `creatorId`: () => `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; `eventId`: () => `ZodString`; `venueId`: () => `ZodString`; \}, `undefined`\>

Defined in: [src/drizzle/tables/venueBookings.ts:101](https://github.com/PalisadoesFoundation/talawa-api/blob/5246239edff12106460ef2c69cc54e98da4dedcf/src/drizzle/tables/venueBookings.ts#L101)
