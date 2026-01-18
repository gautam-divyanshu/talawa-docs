[**talawa-api**](../../../README.md)

***

# Type Alias: ForbiddenActionExtensions

> **ForbiddenActionExtensions** = `object`

Defined in: [src/utilities/TalawaGraphQLError.ts:68](https://github.com/PalisadoesFoundation/talawa-api/blob/86c684402120721d2151d1e28feb0b6d2f345849/src/utilities/TalawaGraphQLError.ts#L68)

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

Defined in: [src/utilities/TalawaGraphQLError.ts:69](https://github.com/PalisadoesFoundation/talawa-api/blob/86c684402120721d2151d1e28feb0b6d2f345849/src/utilities/TalawaGraphQLError.ts#L69)
