[**talawa-api**](../../../../README.md)

***

# Variable: VolunteerMembershipInput

> `const` **VolunteerMembershipInput**: `InputObjectRef`\<`ExtendDefaultTypes`\<\{ `Context`: [`GraphQLContext`](../../../context/type-aliases/GraphQLContext.md); `Scalars`: [`CustomScalars`](../../../scalars/type-aliases/CustomScalars.md); \}\>, \{ `event`: `string`; `group?`: `string` \| `null`; `recurringEventInstanceId?`: `string` \| `null`; `scope?`: `NonNullable`\<`"ENTIRE_SERIES"` \| `"THIS_INSTANCE_ONLY"` \| `undefined`\> \| `null`; `status`: `NonNullable`\<`"rejected"` \| `"invited"` \| `"requested"` \| `"accepted"`\>; `userId`: `string`; \}\>

Defined in: [src/graphql/inputs/VolunteerMembershipInput.ts:33](https://github.com/PalisadoesFoundation/talawa-api/blob/1ed05dfbd5f8b040258a6172cdf4d8be325f6225/src/graphql/inputs/VolunteerMembershipInput.ts#L33)

GraphQL input type for creating a VolunteerMembership.
Matches the old Talawa API VolunteerMembershipInput structure.
