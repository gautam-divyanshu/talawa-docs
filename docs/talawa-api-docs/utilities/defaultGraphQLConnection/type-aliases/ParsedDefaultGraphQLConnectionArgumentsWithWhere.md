[**talawa-api**](../../../README.md)

***

# Type Alias: ParsedDefaultGraphQLConnectionArgumentsWithWhere\<Cursor, Where\>

> **ParsedDefaultGraphQLConnectionArgumentsWithWhere**\<`Cursor`, `Where`\> = [`ParsedDefaultGraphQLConnectionArguments`](ParsedDefaultGraphQLConnectionArguments.md)\<`Cursor`\> & `object`

Defined in: [src/utilities/defaultGraphQLConnection.ts:28](https://github.com/PalisadoesFoundation/talawa-api/blob/0e301aa1f701eb095149d8f0e8999317f84b9cd9/src/utilities/defaultGraphQLConnection.ts#L28)

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
