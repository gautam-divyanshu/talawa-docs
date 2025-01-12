[**talawa-api**](../../../README.md)

***

[talawa-api](../../../modules.md) / [types/generatedGraphQLTypes](../README.md) / AdvertisementsConnectionResolvers

# Type Alias: AdvertisementsConnectionResolvers\<ContextType, ParentType\>

\> **AdvertisementsConnectionResolvers**\<`ContextType`, `ParentType`\>: `object`

Defined in: [src/types/generatedGraphQLTypes.ts:4024](https://github.com/PalisadoesFoundation/talawa-api/blob/25207c53554ba20e613226862dea483f0b67a696/src/types/generatedGraphQLTypes.ts#L4024)

## Type Parameters

• **ContextType** = `any`

• **ParentType** *extends* [`ResolversParentTypes`](ResolversParentTypes.md)\[`"AdvertisementsConnection"`\] = [`ResolversParentTypes`](ResolversParentTypes.md)\[`"AdvertisementsConnection"`\]

## Type declaration

### \_\_isTypeOf?

\> `optional` **\_\_isTypeOf**: [`IsTypeOfResolverFn`](IsTypeOfResolverFn.md)\<`ParentType`, `ContextType`\>

### edges?

\> `optional` **edges**: [`Resolver`](Resolver.md)\<[`Maybe`](Maybe.md)\<[`Maybe`](Maybe.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"AdvertisementEdge"`\]\>[]\>, `ParentType`, `ContextType`\>

### pageInfo?

\> `optional` **pageInfo**: [`Resolver`](Resolver.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"DefaultConnectionPageInfo"`\], `ParentType`, `ContextType`\>

### totalCount?

\> `optional` **totalCount**: [`Resolver`](Resolver.md)\<[`Maybe`](Maybe.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"Int"`\]\>, `ParentType`, `ContextType`\>
