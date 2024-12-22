[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/sendMembershipRequest](../README.md) / sendMembershipRequest

# Variable: sendMembershipRequest

\> `const` **sendMembershipRequest**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"sendMembershipRequest"`\]

This function enables to send membership request.

## Param

parent of current request

## Param

payload provided with the request

## Param

context of entire application

## Remarks

The following checks are done:
1. If the organization exists
2. If the user exists.
3. If the membership request already exists.

## Returns

Membership request.

## Defined in

[src/resolvers/Mutation/sendMembershipRequest.ts:25](https://github.com/PalisadoesFoundation/talawa-api/blob/039b0f127fb8caa46d57186ab4b3bb27fe150903/src/resolvers/Mutation/sendMembershipRequest.ts#L25)
