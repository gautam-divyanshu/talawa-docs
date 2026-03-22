[**talawa-api**](../../../README.md)

***

# Type Alias: TalawaGraphQLFormattedError

> **TalawaGraphQLFormattedError** = `GraphQLFormattedError` & `object`

Defined in: [src/utilities/TalawaGraphQLError.ts:419](https://github.com/PalisadoesFoundation/talawa-api/blob/4192946e517a94b573c8f323a0a5b2837aeccf3f/src/utilities/TalawaGraphQLError.ts#L419)

Formatted error type returned by Talawa API's GraphQL implementation.

This type extends the standard GraphQLFormattedError with typed extensions
that include structured error metadata for consistent client-side error handling.

## Type Declaration

### extensions

> **extensions**: [`TalawaGraphQLErrorExtensions`](TalawaGraphQLErrorExtensions.md)

Typed error extensions with structured metadata

## Example

```json
{
  "message": "User not found",
  "path": ["user"],
  "extensions": {
    "code": "not_found",
    "details": { "userId": "123" },
    "correlationId": "req-abc123",
    "httpStatus": 404
  }
}
```
