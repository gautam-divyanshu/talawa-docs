[**talawa-api**](../../../README.md) • **Docs**

***

[talawa-api](../../../modules.md) / [types/generatedGraphQLTypes](../README.md) / UserCustomDataResolvers

# Type Alias: UserCustomDataResolvers\<ContextType, ParentType\>

\> **UserCustomDataResolvers**\<`ContextType`, `ParentType`\>: `object`

## Type Parameters

• **ContextType** = `any`

• **ParentType** *extends* [`ResolversParentTypes`](ResolversParentTypes.md)\[`"UserCustomData"`\] = [`ResolversParentTypes`](ResolversParentTypes.md)\[`"UserCustomData"`\]

## Type declaration

### \_\_isTypeOf?

\> `optional` **\_\_isTypeOf**: [`IsTypeOfResolverFn`](IsTypeOfResolverFn.md)\<`ParentType`, `ContextType`\>

### \_id?

\> `optional` **\_id**: [`Resolver`](Resolver.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"ID"`\], `ParentType`, `ContextType`\>

### organizationId?

\> `optional` **organizationId**: [`Resolver`](Resolver.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"ID"`\], `ParentType`, `ContextType`\>

### userId?

\> `optional` **userId**: [`Resolver`](Resolver.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"ID"`\], `ParentType`, `ContextType`\>

### values?

\> `optional` **values**: [`Resolver`](Resolver.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"JSON"`\], `ParentType`, `ContextType`\>

## Defined in

[src/types/generatedGraphQLTypes.ts:4759](https://github.com/PalisadoesFoundation/talawa-api/blob/f9e8275b1ddff2d3edcec79ee3b37c07998f6cc3/src/types/generatedGraphQLTypes.ts#L4759)
