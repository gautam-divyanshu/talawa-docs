[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/addUserToGroupChat](../README.md) / addUserToGroupChat

# Variable: addUserToGroupChat

\> `const` **addUserToGroupChat**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"addUserToGroupChat"`\]

Mutation resolver function to add a user to a group chat.

This function performs the following actions:
1. Verifies that the current user exists.
2. Ensures that the chat specified by `args.input.chatId` exists and is a group chat.
3. Checks whether the current user is an admin of the chat.
4. Verifies that the user to be added as an admin exists.
5. Ensures that the organization specified by `args.input.organizationId` exists.
6. Adds the user to the chat's admins list.

## Param

The parent object for the mutation.

## Param

The arguments for the mutation, containing `input` with `chatId`, `userId`, and `organizationId`.

## Param

The context object for the mutation, containing the current user's ID.

## Defined in

[src/resolvers/Mutation/addUserToGroupChat.ts:28](https://github.com/PalisadoesFoundation/talawa-api/blob/3a5276aff43f5de4f7fab3ec9683a420dcdc7a06/src/resolvers/Mutation/addUserToGroupChat.ts#L28)
