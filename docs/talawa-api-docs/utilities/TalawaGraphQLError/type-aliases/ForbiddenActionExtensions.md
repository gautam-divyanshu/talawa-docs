[**talawa-api**](../../../README.md)

***

# Type Alias: ForbiddenActionExtensions

> **ForbiddenActionExtensions** = `object`

Defined in: [src/utilities/TalawaGraphQLError.ts:68](https://github.com/PalisadoesFoundation/talawa-api/blob/4fc4e12ad9f960600b3078451d438c08033538a9/src/utilities/TalawaGraphQLError.ts#L68)

When the client tries to perform an action that conflicts with real world expectations of the application.

## Example

```ts
throw new TalawaGraphQLError(
	{
		extensions: {
			code: "forbidden_action",
		},
	},
);
```

## Properties

### code

> **code**: `"forbidden_action"`

Defined in: [src/utilities/TalawaGraphQLError.ts:69](https://github.com/PalisadoesFoundation/talawa-api/blob/4fc4e12ad9f960600b3078451d438c08033538a9/src/utilities/TalawaGraphQLError.ts#L69)
