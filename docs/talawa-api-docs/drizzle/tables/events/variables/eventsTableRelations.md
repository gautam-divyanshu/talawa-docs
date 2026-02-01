[**talawa-api**](../../../../README.md)

***

# Variable: eventsTableRelations

> `const` **eventsTableRelations**: `Relations`\<`"events"`, \{ `agendaFoldersWhereEvent`: `Many`\<`"agenda_folders"`\>; `attachmentsWhereEvent`: `Many`\<`"event_attachments"`\>; `creator`: `One`\<`"users"`, `false`\>; `organization`: `One`\<`"organizations"`, `true`\>; `updater`: `One`\<`"users"`, `false`\>; `venueBookingsWhereEvent`: `Many`\<`"venue_bookings"`\>; \}\>

Defined in: [src/drizzle/tables/events.ts:150](https://github.com/PalisadoesFoundation/talawa-api/blob/1ed05dfbd5f8b040258a6172cdf4d8be325f6225/src/drizzle/tables/events.ts#L150)
