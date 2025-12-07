[**talawa-api**](../../../README.md)

***

# Type Alias: UnexpectedExtensions

> **UnexpectedExtensions** = `object`

Defined in: [src/utilities/TalawaGraphQLError.ts:198](https://github.com/PalisadoesFoundation/talawa-api/blob/d40e84d157d4bee564e5a066ea403df80b2fb3be/src/utilities/TalawaGraphQLError.ts#L198)

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

Defined in: [src/utilities/TalawaGraphQLError.ts:199](https://github.com/PalisadoesFoundation/talawa-api/blob/d40e84d157d4bee564e5a066ea403df80b2fb3be/src/utilities/TalawaGraphQLError.ts#L199)
