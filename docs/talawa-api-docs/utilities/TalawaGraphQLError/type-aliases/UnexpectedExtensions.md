[**talawa-api**](../../../README.md)

***

# Type Alias: UnexpectedExtensions

> **UnexpectedExtensions** = `object`

Defined in: [src/utilities/TalawaGraphQLError.ts:242](https://github.com/PalisadoesFoundation/talawa-api/blob/f55b9babb4ee32c06104383cf8760b84f8143482/src/utilities/TalawaGraphQLError.ts#L242)

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

Defined in: [src/utilities/TalawaGraphQLError.ts:243](https://github.com/PalisadoesFoundation/talawa-api/blob/f55b9babb4ee32c06104383cf8760b84f8143482/src/utilities/TalawaGraphQLError.ts#L243)
