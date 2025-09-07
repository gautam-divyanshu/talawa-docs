[**talawa-api**](../../../../README.md)

***

# Variable: recurringEventInstancesTableRelations

> `const` **recurringEventInstancesTableRelations**: `Relations`\<`"recurring_event_instances"`, \{ `attachmentsForRecurringEventInstance`: `Many`\<`"event_attachments"`\>; `attendancesForRecurringEventInstance`: `Many`\<`"event_attendances"`\>; `baseRecurringEvent`: `One`\<`"events"`, `true`\>; `organization`: `One`\<`"organizations"`, `true`\>; `recurrenceRule`: `One`\<`"recurrence_rules"`, `true`\>; `venueBookingsForRecurringEventInstance`: `Many`\<`"venue_bookings"`\>; \}\>

Defined in: [src/drizzle/tables/recurringEventInstances.ts:224](https://github.com/PalisadoesFoundation/talawa-api/blob/0e301aa1f701eb095149d8f0e8999317f84b9cd9/src/drizzle/tables/recurringEventInstances.ts#L224)
