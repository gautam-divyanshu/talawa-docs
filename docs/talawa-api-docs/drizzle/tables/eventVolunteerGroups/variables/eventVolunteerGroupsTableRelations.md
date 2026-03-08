[**talawa-api**](../../../../README.md)

***

# Variable: eventVolunteerGroupsTableRelations

> `const` **eventVolunteerGroupsTableRelations**: `Relations`\<`"event_volunteer_groups"`, \{ `creator`: `One`\<`"users"`, `false`\>; `event`: `One`\<`"events"`, `true`\>; `leader`: `One`\<`"users"`, `true`\>; `recurringEventInstance`: `One`\<`"recurring_event_instances"`, `false`\>; `updater`: `One`\<`"users"`, `false`\>; `volunteerMemberships`: `Many`\<`"event_volunteer_memberships"`\>; \}\>

Defined in: [src/drizzle/tables/eventVolunteerGroups.ts:131](https://github.com/PalisadoesFoundation/talawa-api/blob/bac950e699f25975d58faf99422a1af81bd3b461/src/drizzle/tables/eventVolunteerGroups.ts#L131)
