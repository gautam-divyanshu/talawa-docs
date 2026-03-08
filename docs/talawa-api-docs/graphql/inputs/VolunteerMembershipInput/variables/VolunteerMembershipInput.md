[**talawa-api**](../../../../README.md)

***

# Variable: VolunteerMembershipInput

> `const` **VolunteerMembershipInput**: `InputObjectRef`\<`ExtendDefaultTypes`\<\{ `Context`: [`GraphQLContext`](../../../context/type-aliases/GraphQLContext.md); `Scalars`: [`CustomScalars`](../../../scalars/type-aliases/CustomScalars.md); \}\>, \{ `event`: `string`; `group?`: `string` \| `null`; `recurringEventInstanceId?`: `string` \| `null`; `scope?`: `NonNullable`\<`"ENTIRE_SERIES"` \| `"THIS_INSTANCE_ONLY"` \| `undefined`\> \| `null`; `status`: `NonNullable`\<`"rejected"` \| `"invited"` \| `"requested"` \| `"accepted"`\>; `userId`: `string`; \}\>

Defined in: [src/graphql/inputs/VolunteerMembershipInput.ts:33](https://github.com/PalisadoesFoundation/talawa-api/blob/bac950e699f25975d58faf99422a1af81bd3b461/src/graphql/inputs/VolunteerMembershipInput.ts#L33)

GraphQL input type for creating a VolunteerMembership.
Matches the old Talawa API VolunteerMembershipInput structure.
