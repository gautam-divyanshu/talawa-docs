[**talawa-api**](../../../README.md)

***

# Type Alias: UnauthenticatedExtensions

> **UnauthenticatedExtensions** = `object`

Defined in: [src/utilities/TalawaGraphQLError.ts:110](https://github.com/PalisadoesFoundation/talawa-api/blob/4fc4e12ad9f960600b3078451d438c08033538a9/src/utilities/TalawaGraphQLError.ts#L110)

When the client must be authenticated to perform an action.

## Example

```ts
throw new TalawaGraphQLError({
	extensions: {
		code: "unauthenticated",
	},
});
```

## Properties

### code

> **code**: `"unauthenticated"`

Defined in: [src/utilities/TalawaGraphQLError.ts:111](https://github.com/PalisadoesFoundation/talawa-api/blob/4fc4e12ad9f960600b3078451d438c08033538a9/src/utilities/TalawaGraphQLError.ts#L111)
