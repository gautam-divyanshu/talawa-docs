[**talawa-api**](../../../../README.md)

***

# Variable: recurringEventInstancesTableRelations

> `const` **recurringEventInstancesTableRelations**: `Relations`\<`"recurring_event_instances"`, \{ `attachmentsForRecurringEventInstance`: `Many`\<`"event_attachments"`\>; `baseRecurringEvent`: `One`\<`"events"`, `true`\>; `organization`: `One`\<`"organizations"`, `true`\>; `recurrenceRule`: `One`\<`"recurrence_rules"`, `true`\>; `venueBookingsForRecurringEventInstance`: `Many`\<`"venue_bookings"`\>; \}\>

Defined in: [src/drizzle/tables/recurringEventInstances.ts:246](https://github.com/PalisadoesFoundation/talawa-api/blob/e5257a859e980c4157b048d478eb38a347def32f/src/drizzle/tables/recurringEventInstances.ts#L246)
