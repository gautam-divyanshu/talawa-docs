[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/updateEventVolunteerGroup](../README.md) / updateEventVolunteerGroup

# Variable: updateEventVolunteerGroup

\> `const` **updateEventVolunteerGroup**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"updateEventVolunteerGroup"`\]

Defined in: [src/resolvers/Mutation/updateEventVolunteerGroup.ts:22](https://github.com/PalisadoesFoundation/talawa-api/blob/3600eaaf2193496324ea8e78d75780839e27cae4/src/resolvers/Mutation/updateEventVolunteerGroup.ts#L22)

This function enables to update the Event Volunteer Group

## Param

parent of current request

## Param

payload provided with the request

## Param

context of entire application

## Remarks

The following checks are done:
1. Whether the user exists
2. Whether the EventVolunteerGroup exists
3. Whether the current user is the leader of EventVolunteerGroup
