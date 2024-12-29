[**talawa-api**](../../../README.md)

***

[talawa-api](../../../modules.md) / [types/generatedGraphQLTypes](../README.md) / UserConnectionResolvers

# Type Alias: UserConnectionResolvers\<ContextType, ParentType\>

\> **UserConnectionResolvers**\<`ContextType`, `ParentType`\>: `object`

## Type Parameters

• **ContextType** = `any`

• **ParentType** *extends* [`ResolversParentTypes`](ResolversParentTypes.md)\[`"UserConnection"`\] = [`ResolversParentTypes`](ResolversParentTypes.md)\[`"UserConnection"`\]

## Type declaration

### \_\_isTypeOf?

\> `optional` **\_\_isTypeOf**: [`IsTypeOfResolverFn`](IsTypeOfResolverFn.md)\<`ParentType`, `ContextType`\>

### aggregate?

\> `optional` **aggregate**: [`Resolver`](Resolver.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"AggregateUser"`\], `ParentType`, `ContextType`\>

### edges?

\> `optional` **edges**: [`Resolver`](Resolver.md)\<[`Maybe`](Maybe.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"User"`\]\>[], `ParentType`, `ContextType`\>

### pageInfo?

\> `optional` **pageInfo**: [`Resolver`](Resolver.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"PageInfo"`\], `ParentType`, `ContextType`\>

## Defined in

[src/types/generatedGraphQLTypes.ts:4998](https://github.com/PalisadoesFoundation/talawa-api/blob/3a5276aff43f5de4f7fab3ec9683a420dcdc7a06/src/types/generatedGraphQLTypes.ts#L4998)
