[**talawa-api**](../../../README.md)

***

# Type Alias: UnauthorizedActionExtensions

> **UnauthorizedActionExtensions** = `object`

Defined in: [src/utilities/TalawaGraphQLError.ts:139](https://github.com/PalisadoesFoundation/talawa-api/blob/38f66e7bf6477f824ec6304308f4c8fdc8e4e79b/src/utilities/TalawaGraphQLError.ts#L139)

When the client is not authorized to perform an action.

## Example

```ts
throw new TalawaGraphQLError({
	extensions: {
		code: "unauthorized_action",
	},
});
```

## Properties

### code

> **code**: `"unauthorized_action"`

Defined in: [src/utilities/TalawaGraphQLError.ts:140](https://github.com/PalisadoesFoundation/talawa-api/blob/38f66e7bf6477f824ec6304308f4c8fdc8e4e79b/src/utilities/TalawaGraphQLError.ts#L140)
