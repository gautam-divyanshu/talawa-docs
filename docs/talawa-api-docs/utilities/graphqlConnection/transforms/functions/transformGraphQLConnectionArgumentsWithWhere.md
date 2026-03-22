[**talawa-api**](../../../../README.md)

***

# Function: transformGraphQLConnectionArgumentsWithWhere()

> **transformGraphQLConnectionArgumentsWithWhere**\<`Arg`, `_Where`\>(`arg`, `ctx`): `object` & `Omit`\<`Arg`, `"first"` \| `"last"` \| `"before"` \| `"after"`\> & `object`

Defined in: [src/utilities/graphqlConnection/transforms.ts:89](https://github.com/PalisadoesFoundation/talawa-api/blob/4192946e517a94b573c8f323a0a5b2837aeccf3f/src/utilities/graphqlConnection/transforms.ts#L89)

Transform function for connection arguments with a where clause.
Extends the base transformation with where handling.

## Type Parameters

### Arg

`Arg` *extends* `object` & `object`

### _Where

`_Where` = `Arg`\[`"where"`\]

## Parameters

### arg

`Arg`

The arguments to transform

### ctx

`$RefinementCtx`

The Zod refinement context

## Returns

- The transformed arguments with where clause
