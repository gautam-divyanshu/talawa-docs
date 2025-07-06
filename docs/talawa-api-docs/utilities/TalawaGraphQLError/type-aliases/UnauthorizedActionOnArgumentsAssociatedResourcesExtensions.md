[**talawa-api**](../../../README.md)

***

# Type Alias: UnauthorizedActionOnArgumentsAssociatedResourcesExtensions

> **UnauthorizedActionOnArgumentsAssociatedResourcesExtensions** = `object`

Defined in: [src/utilities/TalawaGraphQLError.ts:158](https://github.com/PalisadoesFoundation/talawa-api/blob/5ea9b61d087fd885d263126674716e202dd020a5/src/utilities/TalawaGraphQLError.ts#L158)

When the client is not authorized to perform an action on a resource associated to an argument.

## Example

```ts
throw new TalawaGraphQLError({
	extensions: {
		code: "unauthorized_action_on_arguments_associated_resources",
		issues: [
			{
				argumentPath: ["input", "id"],
			},
		],
	},
});
```

## Properties

### code

> **code**: `"unauthorized_action_on_arguments_associated_resources"`

Defined in: [src/utilities/TalawaGraphQLError.ts:162](https://github.com/PalisadoesFoundation/talawa-api/blob/5ea9b61d087fd885d263126674716e202dd020a5/src/utilities/TalawaGraphQLError.ts#L162)

***

### issues

> **issues**: `object`[]

Defined in: [src/utilities/TalawaGraphQLError.ts:159](https://github.com/PalisadoesFoundation/talawa-api/blob/5ea9b61d087fd885d263126674716e202dd020a5/src/utilities/TalawaGraphQLError.ts#L159)

#### argumentPath

> **argumentPath**: (`string` \| `number`)[]
