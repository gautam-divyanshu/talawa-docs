[**talawa-api**](../../../README.md)

***

# Type Alias: ForbiddenActionExtensions

> **ForbiddenActionExtensions** = `object`

Defined in: [src/utilities/TalawaGraphQLError.ts:68](https://github.com/PalisadoesFoundation/talawa-api/blob/b24a30943e90218609bbe2cec77af89181bb6c56/src/utilities/TalawaGraphQLError.ts#L68)

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

Defined in: [src/utilities/TalawaGraphQLError.ts:69](https://github.com/PalisadoesFoundation/talawa-api/blob/b24a30943e90218609bbe2cec77af89181bb6c56/src/utilities/TalawaGraphQLError.ts#L69)
