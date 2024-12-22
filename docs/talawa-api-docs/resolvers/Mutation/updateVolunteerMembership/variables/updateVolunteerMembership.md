[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/updateVolunteerMembership](../README.md) / updateVolunteerMembership

# Variable: updateVolunteerMembership

\> `const` **updateVolunteerMembership**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"updateVolunteerMembership"`\]

This function enables to update an Volunteer Membership

## Param

parent of current request

## Param

payload provided with the request

## Param

context of entire application

## Remarks

The following checks are done:
1. Whether the user exists
2. Update the Volunteer Membership
3. update related fields of Volunteer Group & Volunteer

## Defined in

[src/resolvers/Mutation/updateVolunteerMembership.ts:72](https://github.com/PalisadoesFoundation/talawa-api/blob/039b0f127fb8caa46d57186ab4b3bb27fe150903/src/resolvers/Mutation/updateVolunteerMembership.ts#L72)
