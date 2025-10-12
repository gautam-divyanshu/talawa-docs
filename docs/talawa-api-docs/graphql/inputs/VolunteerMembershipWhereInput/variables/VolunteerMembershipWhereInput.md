[**talawa-api**](../../../../README.md)

***

# Variable: VolunteerMembershipWhereInput

> `const` **VolunteerMembershipWhereInput**: `InputObjectRef`\<`ExtendDefaultTypes`\<\{ `Context`: [`GraphQLContext`](../../../context/type-aliases/GraphQLContext.md); `Scalars`: [`CustomScalars`](../../../scalars/type-aliases/CustomScalars.md); \}\>, \{ `eventId?`: `string`; `eventTitle?`: `string`; `filter?`: `NonNullable`\<`"group"` \| `"individual"`\>; `groupId?`: `string`; `status?`: `NonNullable`\<`"rejected"` \| `"invited"` \| `"requested"` \| `"accepted"`\>; `userId?`: `string`; `userName?`: `string`; \}\>

Defined in: [src/graphql/inputs/VolunteerMembershipWhereInput.ts:24](https://github.com/PalisadoesFoundation/talawa-api/blob/e96fa5edb6be6453765d6ab160fe5a845f75f0e8/src/graphql/inputs/VolunteerMembershipWhereInput.ts#L24)

GraphQL input type for filtering VolunteerMemberships.
Matches the old Talawa API VolunteerMembershipWhereInput structure.
