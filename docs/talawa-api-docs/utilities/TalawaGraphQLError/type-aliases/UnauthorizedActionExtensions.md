[**talawa-api**](../../../README.md)

***

# Type Alias: UnauthorizedActionExtensions

> **UnauthorizedActionExtensions** = `object`

Defined in: [src/utilities/TalawaGraphQLError.ts:164](https://github.com/PalisadoesFoundation/talawa-api/blob/0377c9a8043a9da5396efd550b28f87bf54a723a/src/utilities/TalawaGraphQLError.ts#L164)

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

Defined in: [src/utilities/TalawaGraphQLError.ts:165](https://github.com/PalisadoesFoundation/talawa-api/blob/0377c9a8043a9da5396efd550b28f87bf54a723a/src/utilities/TalawaGraphQLError.ts#L165)
