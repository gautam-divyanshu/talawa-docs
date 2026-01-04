[**talawa-api**](../../../README.md)

***

# Type Alias: UnexpectedExtensions

> **UnexpectedExtensions** = `object`

Defined in: [src/utilities/TalawaGraphQLError.ts:240](https://github.com/PalisadoesFoundation/talawa-api/blob/4fc4e12ad9f960600b3078451d438c08033538a9/src/utilities/TalawaGraphQLError.ts#L240)

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

Defined in: [src/utilities/TalawaGraphQLError.ts:241](https://github.com/PalisadoesFoundation/talawa-api/blob/4fc4e12ad9f960600b3078451d438c08033538a9/src/utilities/TalawaGraphQLError.ts#L241)
