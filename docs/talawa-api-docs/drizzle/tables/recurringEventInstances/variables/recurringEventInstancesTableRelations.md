[**talawa-api**](../../../../README.md)

***

# Variable: recurringEventInstancesTableRelations

> `const` **recurringEventInstancesTableRelations**: `Relations`\<`"recurring_event_instances"`, \{ `attachmentsForRecurringEventInstance`: `Many`\<`"event_attachments"`\>; `attendancesForRecurringEventInstance`: `Many`\<`"event_attendances"`\>; `baseRecurringEvent`: `One`\<`"events"`, `true`\>; `organization`: `One`\<`"organizations"`, `true`\>; `recurrenceRule`: `One`\<`"recurrence_rules"`, `true`\>; `venueBookingsForRecurringEventInstance`: `Many`\<`"venue_bookings"`\>; \}\>

Defined in: [src/drizzle/tables/recurringEventInstances.ts:213](https://github.com/PalisadoesFoundation/talawa-api/blob/683c972995b645053f41c76c01368003402b250c/src/drizzle/tables/recurringEventInstances.ts#L213)
