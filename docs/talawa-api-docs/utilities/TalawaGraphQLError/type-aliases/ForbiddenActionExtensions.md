[**talawa-api**](../../../README.md)

***

# Type Alias: ForbiddenActionExtensions

> **ForbiddenActionExtensions** = `object`

Defined in: [src/utilities/TalawaGraphQLError.ts:51](https://github.com/PalisadoesFoundation/talawa-api/blob/3cff0028f235a062c461ef9b6aa80f244182c2ef/src/utilities/TalawaGraphQLError.ts#L51)

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

Defined in: [src/utilities/TalawaGraphQLError.ts:52](https://github.com/PalisadoesFoundation/talawa-api/blob/3cff0028f235a062c461ef9b6aa80f244182c2ef/src/utilities/TalawaGraphQLError.ts#L52)
