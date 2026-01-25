[**talawa-api**](../../../../README.md)

***

# Variable: recurringEventInstancesTableRelations

> `const` **recurringEventInstancesTableRelations**: `Relations`\<`"recurring_event_instances"`, \{ `attachmentsForRecurringEventInstance`: `Many`\<`"event_attachments"`\>; `baseRecurringEvent`: `One`\<`"events"`, `true`\>; `organization`: `One`\<`"organizations"`, `true`\>; `recurrenceRule`: `One`\<`"recurrence_rules"`, `true`\>; `venueBookingsForRecurringEventInstance`: `Many`\<`"venue_bookings"`\>; \}\>

Defined in: [src/drizzle/tables/recurringEventInstances.ts:223](https://github.com/PalisadoesFoundation/talawa-api/blob/f55b9babb4ee32c06104383cf8760b84f8143482/src/drizzle/tables/recurringEventInstances.ts#L223)
