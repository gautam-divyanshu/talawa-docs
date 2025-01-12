[**talawa-api**](../../../README.md)

***

[talawa-api](../../../modules.md) / [types/generatedGraphQLTypes](../README.md) / ExtendSessionResolvers

# Type Alias: ExtendSessionResolvers\<ContextType, ParentType\>

\> **ExtendSessionResolvers**\<`ContextType`, `ParentType`\>: `object`

Defined in: [src/types/generatedGraphQLTypes.ts:4371](https://github.com/PalisadoesFoundation/talawa-api/blob/25207c53554ba20e613226862dea483f0b67a696/src/types/generatedGraphQLTypes.ts#L4371)

## Type Parameters

• **ContextType** = `any`

• **ParentType** *extends* [`ResolversParentTypes`](ResolversParentTypes.md)\[`"ExtendSession"`\] = [`ResolversParentTypes`](ResolversParentTypes.md)\[`"ExtendSession"`\]

## Type declaration

### \_\_isTypeOf?

\> `optional` **\_\_isTypeOf**: [`IsTypeOfResolverFn`](IsTypeOfResolverFn.md)\<`ParentType`, `ContextType`\>

### accessToken?

\> `optional` **accessToken**: [`Resolver`](Resolver.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"String"`\], `ParentType`, `ContextType`\>

### refreshToken?

\> `optional` **refreshToken**: [`Resolver`](Resolver.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"String"`\], `ParentType`, `ContextType`\>
