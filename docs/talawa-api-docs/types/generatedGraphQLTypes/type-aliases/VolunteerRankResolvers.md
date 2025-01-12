[**talawa-api**](../../../README.md)

***

[talawa-api](../../../modules.md) / [types/generatedGraphQLTypes](../README.md) / VolunteerRankResolvers

# Type Alias: VolunteerRankResolvers\<ContextType, ParentType\>

\> **VolunteerRankResolvers**\<`ContextType`, `ParentType`\>: `object`

Defined in: [src/types/generatedGraphQLTypes.ts:5118](https://github.com/PalisadoesFoundation/talawa-api/blob/25207c53554ba20e613226862dea483f0b67a696/src/types/generatedGraphQLTypes.ts#L5118)

## Type Parameters

• **ContextType** = `any`

• **ParentType** *extends* [`ResolversParentTypes`](ResolversParentTypes.md)\[`"VolunteerRank"`\] = [`ResolversParentTypes`](ResolversParentTypes.md)\[`"VolunteerRank"`\]

## Type declaration

### \_\_isTypeOf?

\> `optional` **\_\_isTypeOf**: [`IsTypeOfResolverFn`](IsTypeOfResolverFn.md)\<`ParentType`, `ContextType`\>

### hoursVolunteered?

\> `optional` **hoursVolunteered**: [`Resolver`](Resolver.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"Float"`\], `ParentType`, `ContextType`\>

### rank?

\> `optional` **rank**: [`Resolver`](Resolver.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"Int"`\], `ParentType`, `ContextType`\>

### user?

\> `optional` **user**: [`Resolver`](Resolver.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"User"`\], `ParentType`, `ContextType`\>
