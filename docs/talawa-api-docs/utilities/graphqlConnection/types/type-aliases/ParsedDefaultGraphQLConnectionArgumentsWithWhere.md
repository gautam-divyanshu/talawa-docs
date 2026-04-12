[**talawa-api**](../../../../README.md)

***

# Type Alias: ParsedDefaultGraphQLConnectionArgumentsWithWhere\<Cursor, Where\>

> **ParsedDefaultGraphQLConnectionArgumentsWithWhere**\<`Cursor`, `Where`\> = [`ParsedDefaultGraphQLConnectionArguments`](ParsedDefaultGraphQLConnectionArguments.md)\<`Cursor`\> & `object`

Defined in: [src/utilities/graphqlConnection/types.ts:26](https://github.com/PalisadoesFoundation/talawa-api/blob/164e192ab45bfadc8f9212fcf7495afd6ad24351/src/utilities/graphqlConnection/types.ts#L26)

Type of the object containing the parsed default arguments of a graphql connection with where filtering.
Extends the base connection arguments with a generic where type.

## Type Declaration

### where

> **where**: `Where`

The where filter criteria to apply to the connection.

## Type Parameters

### Cursor

`Cursor` = `string`

### Where

`Where` = `unknown`
