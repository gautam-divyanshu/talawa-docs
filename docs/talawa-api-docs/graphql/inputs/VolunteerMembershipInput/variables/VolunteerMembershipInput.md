[**talawa-api**](../../../../README.md)

***

# Variable: VolunteerMembershipInput

> `const` **VolunteerMembershipInput**: `InputObjectRef`\<`ExtendDefaultTypes`\<\{ `Context`: [`GraphQLContext`](../../../context/type-aliases/GraphQLContext.md); `Scalars`: [`CustomScalars`](../../../scalars/type-aliases/CustomScalars.md); \}\>, \{ `event?`: `string`; `group?`: `string`; `recurringEventInstanceId?`: `string`; `scope?`: `NonNullable`\<`"ENTIRE_SERIES"` \| `"THIS_INSTANCE_ONLY"`\>; `status?`: `NonNullable`\<`"rejected"` \| `"invited"` \| `"requested"` \| `"accepted"`\>; `userId?`: `string`; \}\>

Defined in: [src/graphql/inputs/VolunteerMembershipInput.ts:33](https://github.com/PalisadoesFoundation/talawa-api/blob/b1cda9d27e687af9cb4781360219969632134078/src/graphql/inputs/VolunteerMembershipInput.ts#L33)

GraphQL input type for creating a VolunteerMembership.
Matches the old Talawa API VolunteerMembershipInput structure.
