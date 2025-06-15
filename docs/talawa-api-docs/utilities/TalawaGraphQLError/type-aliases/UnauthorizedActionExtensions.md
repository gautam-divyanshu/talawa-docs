[**talawa-api**](../../../README.md)

***

# Type Alias: UnauthorizedActionExtensions

> **UnauthorizedActionExtensions** = `object`

Defined in: [src/utilities/TalawaGraphQLError.ts:139](https://github.com/PalisadoesFoundation/talawa-api/blob/61d037fecfe39aa3d17edf85891dd02fbdba0f05/src/utilities/TalawaGraphQLError.ts#L139)

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

Defined in: [src/utilities/TalawaGraphQLError.ts:140](https://github.com/PalisadoesFoundation/talawa-api/blob/61d037fecfe39aa3d17edf85891dd02fbdba0f05/src/utilities/TalawaGraphQLError.ts#L140)
