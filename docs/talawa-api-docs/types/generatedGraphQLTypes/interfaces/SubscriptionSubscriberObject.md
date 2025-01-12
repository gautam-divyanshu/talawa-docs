[**talawa-api**](../../../README.md)

***

[talawa-api](../../../modules.md) / [types/generatedGraphQLTypes](../README.md) / SubscriptionSubscriberObject

# Interface: SubscriptionSubscriberObject\<TResult, TKey, TParent, TContext, TArgs\>

Defined in: [src/types/generatedGraphQLTypes.ts:3451](https://github.com/PalisadoesFoundation/talawa-api/blob/25207c53554ba20e613226862dea483f0b67a696/src/types/generatedGraphQLTypes.ts#L3451)

## Type Parameters

• **TResult**

• **TKey** *extends* `string`

• **TParent**

• **TContext**

• **TArgs**

## Properties

### resolve?

\> `optional` **resolve**: [`SubscriptionResolveFn`](../type-aliases/SubscriptionResolveFn.md)\<`TResult`, `\{ [key in string]: TResult \}`, `TContext`, `TArgs`\>

Defined in: [src/types/generatedGraphQLTypes.ts:3453](https://github.com/PalisadoesFoundation/talawa-api/blob/25207c53554ba20e613226862dea483f0b67a696/src/types/generatedGraphQLTypes.ts#L3453)

***

### subscribe

\> **subscribe**: [`SubscriptionSubscribeFn`](../type-aliases/SubscriptionSubscribeFn.md)\<`\{ [key in string]: TResult \}`, `TParent`, `TContext`, `TArgs`\>

Defined in: [src/types/generatedGraphQLTypes.ts:3452](https://github.com/PalisadoesFoundation/talawa-api/blob/25207c53554ba20e613226862dea483f0b67a696/src/types/generatedGraphQLTypes.ts#L3452)
