[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/Subscription/messageSentToChat](../README.md) / messageSentToChat

# Variable: messageSentToChat

\> `const` **messageSentToChat**: [`SubscriptionResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/SubscriptionResolvers.md)\[`"messageSentToChat"`\]

Defined in: [src/resolvers/Subscription/messageSentToChat.ts:35](https://github.com/PalisadoesFoundation/talawa-api/blob/33412350fcbc7b376cab529f8a291f46d0165828/src/resolvers/Subscription/messageSentToChat.ts#L35)

This property included a `subscribe` method, which is used to
subscribe the `receiver` and `sender` to receive Chat updates.

## Remarks

To control updates on a per-client basis, the function uses the `withFilter`
method imported from `apollo-server-express` module.
You can learn about `subscription` [here](https://www.apollographql.com/docs/apollo-server/data/subscriptions/).
