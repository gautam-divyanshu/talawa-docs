[**talawa-api**](../../../README.md)

***

[talawa-api](../../../modules.md) / [types/generatedGraphQLTypes](../README.md) / DirectiveResolverFn

# Type Alias: DirectiveResolverFn()\<TResult, TParent, TContext, TArgs\>

\> **DirectiveResolverFn**\<`TResult`, `TParent`, `TContext`, `TArgs`\>: (`next`, `parent`, `args`, `context`, `info`?) =\> `TResult` \| `Promise`\<`TResult`\>

Defined in: [src/types/generatedGraphQLTypes.ts:3479](https://github.com/PalisadoesFoundation/talawa-api/blob/33412350fcbc7b376cab529f8a291f46d0165828/src/types/generatedGraphQLTypes.ts#L3479)

## Type Parameters

• **TResult** = \{\}

• **TParent** = \{\}

• **TContext** = \{\}

• **TArgs** = \{\}

## Parameters

### next

[`NextResolverFn`](NextResolverFn.md)\<`TResult`\>

### parent

`TParent`

### args

`TArgs`

### context

`TContext`

### info?

`GraphQLResolveInfo`

## Returns

`TResult` \| `Promise`\<`TResult`\>
