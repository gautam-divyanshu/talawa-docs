[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/removeMember](../README.md) / removeMember

# Variable: removeMember

\> `const` **removeMember**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"removeMember"`\]

Defined in: [src/resolvers/Mutation/removeMember.ts:27](https://github.com/PalisadoesFoundation/talawa-api/blob/33412350fcbc7b376cab529f8a291f46d0165828/src/resolvers/Mutation/removeMember.ts#L27)

This function enables to remove a member.

## Param

parent of current request

## Param

payload provided with the request

## Param

context of entire application

## Remarks

The following checks are done:
1. If the organization exists
2. If the user to be removed exists.
3. If the user is the admin of the organization.
4. If the user to be removed is a member of the organization.

## Returns

Organization.
