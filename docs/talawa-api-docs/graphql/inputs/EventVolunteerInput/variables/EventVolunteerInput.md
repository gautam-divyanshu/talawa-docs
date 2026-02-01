[**talawa-api**](../../../../README.md)

***

# Variable: EventVolunteerInput

> `const` **EventVolunteerInput**: `InputObjectRef`\<`ExtendDefaultTypes`\<\{ `Context`: [`GraphQLContext`](../../../context/type-aliases/GraphQLContext.md); `Scalars`: [`CustomScalars`](../../../scalars/type-aliases/CustomScalars.md); \}\>, \{ `eventId`: `string`; `groupId?`: `string` \| `null`; `recurringEventInstanceId?`: `string` \| `null`; `scope?`: `NonNullable`\<`"ENTIRE_SERIES"` \| `"THIS_INSTANCE_ONLY"` \| `undefined`\> \| `null`; `userId`: `string`; \}\>

Defined in: [src/graphql/inputs/EventVolunteerInput.ts:32](https://github.com/PalisadoesFoundation/talawa-api/blob/1ed05dfbd5f8b040258a6172cdf4d8be325f6225/src/graphql/inputs/EventVolunteerInput.ts#L32)

GraphQL input type for creating an EventVolunteer.
Matches the old Talawa API EventVolunteerInput structure.
