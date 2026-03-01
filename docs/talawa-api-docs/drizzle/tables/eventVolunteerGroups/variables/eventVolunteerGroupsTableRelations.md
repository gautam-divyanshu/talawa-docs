[**talawa-api**](../../../../README.md)

***

# Variable: eventVolunteerGroupsTableRelations

> `const` **eventVolunteerGroupsTableRelations**: `Relations`\<`"event_volunteer_groups"`, \{ `creator`: `One`\<`"users"`, `false`\>; `event`: `One`\<`"events"`, `true`\>; `leader`: `One`\<`"users"`, `true`\>; `recurringEventInstance`: `One`\<`"recurring_event_instances"`, `false`\>; `updater`: `One`\<`"users"`, `false`\>; `volunteerMemberships`: `Many`\<`"event_volunteer_memberships"`\>; \}\>

Defined in: [src/drizzle/tables/eventVolunteerGroups.ts:131](https://github.com/PalisadoesFoundation/talawa-api/blob/29f85325b75d0f277ef992b07c6afd8761e3db6a/src/drizzle/tables/eventVolunteerGroups.ts#L131)
