[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [directives/directiveTransformer/authDirectiveTransformer](../README.md) / default

# Function: default()

\> **default**(`schema`, `directiveName`): `GraphQLSchema`

A function to transform a GraphQL schema by adding authentication logic
to the fields with the specified directive.

## Parameters

### schema

`GraphQLSchema`

The original GraphQL schema to be transformed.

### directiveName

`string`

The name of the directive that will trigger the transformation.

## Returns

`GraphQLSchema`

A new GraphQL schema with the authentication logic applied.

## See

Parent File:
- `src/index.ts`

## Example

```ts
`const transformedSchema = authDirectiveTransformer(originalSchema, 'auth');`
```

## Defined in

[src/directives/directiveTransformer/authDirectiveTransformer.ts:22](https://github.com/PalisadoesFoundation/talawa-api/blob/3a5276aff43f5de4f7fab3ec9683a420dcdc7a06/src/directives/directiveTransformer/authDirectiveTransformer.ts#L22)
