[**talawa-api**](../../../../README.md)

***

# Variable: EventVolunteerGroupInput

> `const` **EventVolunteerGroupInput**: `InputObjectRef`\<`ExtendDefaultTypes`\<\{ `Context`: [`GraphQLContext`](../../../context/type-aliases/GraphQLContext.md); `Scalars`: [`CustomScalars`](../../../scalars/type-aliases/CustomScalars.md); \}\>, \{ `description?`: `string` \| `null`; `eventId`: `string`; `leaderId`: `string`; `name`: `string`; `recurringEventInstanceId?`: `string` \| `null`; `scope?`: `NonNullable`\<`"ENTIRE_SERIES"` \| `"THIS_INSTANCE_ONLY"` \| `undefined`\> \| `null`; `volunteersRequired?`: `number` \| `null`; `volunteerUserIds?`: `string`[] \| `null`; \}\>

Defined in: [src/graphql/inputs/EventVolunteerGroupInput.ts:37](https://github.com/PalisadoesFoundation/talawa-api/blob/d40e84d157d4bee564e5a066ea403df80b2fb3be/src/graphql/inputs/EventVolunteerGroupInput.ts#L37)

GraphQL input type for creating an EventVolunteerGroup.
Matches the old Talawa API EventVolunteerGroupInput structure.
