[**talawa-api**](../../../../README.md)

***

# Variable: VolunteerMembershipWhereInput

> `const` **VolunteerMembershipWhereInput**: `InputObjectRef`\<`ExtendDefaultTypes`\<\{ `Context`: [`GraphQLContext`](../../../context/type-aliases/GraphQLContext.md); `Scalars`: [`CustomScalars`](../../../scalars/type-aliases/CustomScalars.md); \}\>, \{ `eventId?`: `string` \| `null`; `eventTitle?`: `string` \| `null`; `filter?`: `NonNullable`\<`"group"` \| `"individual"` \| `undefined`\> \| `null`; `groupId?`: `string` \| `null`; `status?`: `NonNullable`\<`"rejected"` \| `"invited"` \| `"requested"` \| `"accepted"` \| `undefined`\> \| `null`; `userId?`: `string` \| `null`; `userName?`: `string` \| `null`; \}\>

Defined in: [src/graphql/inputs/VolunteerMembershipWhereInput.ts:24](https://github.com/PalisadoesFoundation/talawa-api/blob/86c684402120721d2151d1e28feb0b6d2f345849/src/graphql/inputs/VolunteerMembershipWhereInput.ts#L24)

GraphQL input type for filtering VolunteerMemberships.
Matches the old Talawa API VolunteerMembershipWhereInput structure.
