[**talawa-api**](../../../README.md)

***

# Type Alias: UnauthorizedActionExtensions

> **UnauthorizedActionExtensions** = `object`

Defined in: [src/utilities/TalawaGraphQLError.ts:181](https://github.com/PalisadoesFoundation/talawa-api/blob/4fc4e12ad9f960600b3078451d438c08033538a9/src/utilities/TalawaGraphQLError.ts#L181)

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

Defined in: [src/utilities/TalawaGraphQLError.ts:182](https://github.com/PalisadoesFoundation/talawa-api/blob/4fc4e12ad9f960600b3078451d438c08033538a9/src/utilities/TalawaGraphQLError.ts#L182)
