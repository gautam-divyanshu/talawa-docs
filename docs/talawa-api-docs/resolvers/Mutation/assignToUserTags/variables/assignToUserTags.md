[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/assignToUserTags](../README.md) / assignToUserTags

# Variable: assignToUserTags

\> `const` **assignToUserTags**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"assignToUserTags"`\]

Defined in: [src/resolvers/Mutation/assignToUserTags.ts:37](https://github.com/PalisadoesFoundation/talawa-api/blob/3600eaaf2193496324ea8e78d75780839e27cae4/src/resolvers/Mutation/assignToUserTags.ts#L37)

This function enables an admin to assign multiple tags to users with a specified tag.

## Param

parent of current request

## Param

payload provided with the request

## Param

context of entire application

## Remarks

The following checks are done:
1. If the current user exists and has a profile.
2. If the current user is an admin for the organization of the tags.
3. If the currentTagId exists and the selected tags exist.
4. Assign the tags to users who have the currentTagId.

## Returns

Array of tags that were assigned to users.
