[**talawa-api**](../../../README.md)

***

# Type Alias: UnauthorizedArgumentsExtensions

> **UnauthorizedArgumentsExtensions** = `object`

Defined in: [src/utilities/TalawaGraphQLError.ts:225](https://github.com/PalisadoesFoundation/talawa-api/blob/f55b9babb4ee32c06104383cf8760b84f8143482/src/utilities/TalawaGraphQLError.ts#L225)

When the client is not authorized to perform an action with certain arguments.

## Example

```ts
throw new TalawaGraphQLError({
	extensions: {
		code: "unauthorized_arguments",
		issues: [
			{
				argumentPath: ["input", "role"],
				message: "You are not authorzied to change your user role.",
			},
		],
	},
});
```

## Properties

### code

> **code**: `"unauthorized_arguments"`

Defined in: [src/utilities/TalawaGraphQLError.ts:229](https://github.com/PalisadoesFoundation/talawa-api/blob/f55b9babb4ee32c06104383cf8760b84f8143482/src/utilities/TalawaGraphQLError.ts#L229)

***

### issues

> **issues**: `object`[]

Defined in: [src/utilities/TalawaGraphQLError.ts:226](https://github.com/PalisadoesFoundation/talawa-api/blob/f55b9babb4ee32c06104383cf8760b84f8143482/src/utilities/TalawaGraphQLError.ts#L226)

#### argumentPath

> **argumentPath**: `JSONArgumentPathKey`[]
