[**talawa-api**](../../../../README.md)

***

# Variable: VolunteerMembershipWhereInput

> `const` **VolunteerMembershipWhereInput**: `InputObjectRef`\<`ExtendDefaultTypes`\<\{ `Context`: [`GraphQLContext`](../../../context/type-aliases/GraphQLContext.md); `Scalars`: [`CustomScalars`](../../../scalars/type-aliases/CustomScalars.md); \}\>, \{ `eventId?`: `string` \| `null`; `eventTitle?`: `string` \| `null`; `filter?`: `NonNullable`\<`"group"` \| `"individual"` \| `undefined`\> \| `null`; `groupId?`: `string` \| `null`; `status?`: `NonNullable`\<`"rejected"` \| `"invited"` \| `"requested"` \| `"accepted"` \| `undefined`\> \| `null`; `userId?`: `string` \| `null`; `userName?`: `string` \| `null`; \}\>

Defined in: [src/graphql/inputs/VolunteerMembershipWhereInput.ts:24](https://github.com/PalisadoesFoundation/talawa-api/blob/d40e84d157d4bee564e5a066ea403df80b2fb3be/src/graphql/inputs/VolunteerMembershipWhereInput.ts#L24)

GraphQL input type for filtering VolunteerMemberships.
Matches the old Talawa API VolunteerMembershipWhereInput structure.
