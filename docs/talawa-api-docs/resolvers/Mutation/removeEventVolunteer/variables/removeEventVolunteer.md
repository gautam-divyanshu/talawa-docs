[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/removeEventVolunteer](../README.md) / removeEventVolunteer

# Variable: removeEventVolunteer

\> `const` **removeEventVolunteer**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"removeEventVolunteer"`\]

Defined in: [src/resolvers/Mutation/removeEventVolunteer.ts:25](https://github.com/PalisadoesFoundation/talawa-api/blob/25207c53554ba20e613226862dea483f0b67a696/src/resolvers/Mutation/removeEventVolunteer.ts#L25)

This function enables to remove an Event Volunteer.

## Param

parent of current request

## Param

payload provided with the request

## Param

context of entire application

## Remarks

The following checks are done:
1. If the user exists.
2. If the Event Volunteer exists.
3. Remove the Event Volunteer from their groups and delete the volunteer.
4. Delete the volunteer and their memberships in a single operation.

## Returns

Event Volunteer.
