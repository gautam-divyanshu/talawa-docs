[**talawa-api**](../../../README.md)

***

# Type Alias: UnauthorizedActionOnArgumentsAssociatedResourcesExtensions

> **UnauthorizedActionOnArgumentsAssociatedResourcesExtensions** = `object`

Defined in: [src/utilities/TalawaGraphQLError.ts:200](https://github.com/PalisadoesFoundation/talawa-api/blob/86c684402120721d2151d1e28feb0b6d2f345849/src/utilities/TalawaGraphQLError.ts#L200)

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

Defined in: [src/utilities/TalawaGraphQLError.ts:204](https://github.com/PalisadoesFoundation/talawa-api/blob/86c684402120721d2151d1e28feb0b6d2f345849/src/utilities/TalawaGraphQLError.ts#L204)

***

### issues

> **issues**: `object`[]

Defined in: [src/utilities/TalawaGraphQLError.ts:201](https://github.com/PalisadoesFoundation/talawa-api/blob/86c684402120721d2151d1e28feb0b6d2f345849/src/utilities/TalawaGraphQLError.ts#L201)

#### argumentPath

> **argumentPath**: (`string` \| `number`)[]
