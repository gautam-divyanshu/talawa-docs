[**talawa-api**](../../../README.md)

***

# Type Alias: UnexpectedExtensions

> **UnexpectedExtensions** = `object`

Defined in: [src/utilities/TalawaGraphQLError.ts:240](https://github.com/PalisadoesFoundation/talawa-api/blob/aa036083713a382be03ddad8b72207946e5ffeb4/src/utilities/TalawaGraphQLError.ts#L240)

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

Defined in: [src/utilities/TalawaGraphQLError.ts:241](https://github.com/PalisadoesFoundation/talawa-api/blob/aa036083713a382be03ddad8b72207946e5ffeb4/src/utilities/TalawaGraphQLError.ts#L241)
