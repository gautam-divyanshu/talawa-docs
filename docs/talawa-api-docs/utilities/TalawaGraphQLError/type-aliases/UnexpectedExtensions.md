[**talawa-api**](../../../README.md)

***

# Type Alias: UnexpectedExtensions

> **UnexpectedExtensions** = `object`

Defined in: [src/utilities/TalawaGraphQLError.ts:243](https://github.com/PalisadoesFoundation/talawa-api/blob/ba020be1455b363dacbc8141230aeacb45671626/src/utilities/TalawaGraphQLError.ts#L243)

When an error that doesn't fit one of the error types listed above occurs. One example would be a database request failure.

## Example

```ts
throw new TalawaGraphQLError({
	extensions: {
		code: "unexpected",
	},
});
```

## Properties

### code

> **code**: `"unexpected"`

Defined in: [src/utilities/TalawaGraphQLError.ts:244](https://github.com/PalisadoesFoundation/talawa-api/blob/ba020be1455b363dacbc8141230aeacb45671626/src/utilities/TalawaGraphQLError.ts#L244)
