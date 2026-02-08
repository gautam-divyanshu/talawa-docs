[**talawa-api**](../../../README.md)

***

# Type Alias: UnauthenticatedExtensions

> **UnauthenticatedExtensions** = `object`

Defined in: [src/utilities/TalawaGraphQLError.ts:113](https://github.com/PalisadoesFoundation/talawa-api/blob/36d1ea832b10d1e9883eff7a03104362b71079bd/src/utilities/TalawaGraphQLError.ts#L113)

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

Defined in: [src/utilities/TalawaGraphQLError.ts:114](https://github.com/PalisadoesFoundation/talawa-api/blob/36d1ea832b10d1e9883eff7a03104362b71079bd/src/utilities/TalawaGraphQLError.ts#L114)
