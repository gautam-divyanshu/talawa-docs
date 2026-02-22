[**talawa-api**](../../../../README.md)

***

# Variable: EventVolunteerGroupInput

> `const` **EventVolunteerGroupInput**: `InputObjectRef`\<`ExtendDefaultTypes`\<\{ `Context`: [`GraphQLContext`](../../../context/type-aliases/GraphQLContext.md); `Scalars`: [`CustomScalars`](../../../scalars/type-aliases/CustomScalars.md); \}\>, \{ `description?`: `string` \| `null`; `eventId`: `string`; `leaderId`: `string`; `name`: `string`; `recurringEventInstanceId?`: `string` \| `null`; `scope?`: `NonNullable`\<`"ENTIRE_SERIES"` \| `"THIS_INSTANCE_ONLY"` \| `undefined`\> \| `null`; `volunteersRequired?`: `number` \| `null`; `volunteerUserIds?`: `string`[] \| `null`; \}\>

Defined in: [src/graphql/inputs/EventVolunteerGroupInput.ts:37](https://github.com/PalisadoesFoundation/talawa-api/blob/e0c5d64d62f9cbd7e709b63db8cf19f32f235f61/src/graphql/inputs/EventVolunteerGroupInput.ts#L37)

GraphQL input type for creating an EventVolunteerGroup.
Matches the old Talawa API EventVolunteerGroupInput structure.
