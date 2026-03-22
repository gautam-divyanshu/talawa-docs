[**talawa-api**](../../../../README.md)

***

# Variable: VolunteerMembershipInput

> `const` **VolunteerMembershipInput**: `InputObjectRef`\<`ExtendDefaultTypes`\<\{ `Context`: [`GraphQLContext`](../../../context/type-aliases/GraphQLContext.md); `Scalars`: [`CustomScalars`](../../../scalars/type-aliases/CustomScalars.md); \}\>, \{ `event`: `string`; `group?`: `string` \| `null`; `recurringEventInstanceId?`: `string` \| `null`; `scope?`: `NonNullable`\<`"ENTIRE_SERIES"` \| `"THIS_INSTANCE_ONLY"` \| `undefined`\> \| `null`; `status`: `NonNullable`\<`"rejected"` \| `"invited"` \| `"requested"` \| `"accepted"`\>; `userId`: `string`; \}\>

Defined in: [src/graphql/inputs/VolunteerMembershipInput.ts:33](https://github.com/PalisadoesFoundation/talawa-api/blob/4192946e517a94b573c8f323a0a5b2837aeccf3f/src/graphql/inputs/VolunteerMembershipInput.ts#L33)

GraphQL input type for creating a VolunteerMembership.
Matches the old Talawa API VolunteerMembershipInput structure.
