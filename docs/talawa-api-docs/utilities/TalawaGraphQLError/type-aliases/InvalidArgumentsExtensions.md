[**talawa-api**](../../../README.md)

***

# Type Alias: InvalidArgumentsExtensions

> **InvalidArgumentsExtensions** = `object`

Defined in: [src/utilities/TalawaGraphQLError.ts:141](https://github.com/PalisadoesFoundation/talawa-api/blob/1ed05dfbd5f8b040258a6172cdf4d8be325f6225/src/utilities/TalawaGraphQLError.ts#L141)

When the client provides invalid arguments in a graphql operation.

## Example

```ts
throw new TalawaGraphQLError({
	extensions: {
		code: "invalid_arguments",
		issues: [
			{
				argumentPath: ["input", "age"],
				message: "Must be greater than 18.",
			},
			{
				argumentPath: ["input", "username"],
				message: "Must be smaller than or equal to 25 characters.",
			},
			{
				argumentPath: ["input", "favoriteFood", 2],
				message: "Must be at least 1 character long.",
			},
		],
	},
});
```

## Properties

### code

> **code**: `"invalid_arguments"`

Defined in: [src/utilities/TalawaGraphQLError.ts:142](https://github.com/PalisadoesFoundation/talawa-api/blob/1ed05dfbd5f8b040258a6172cdf4d8be325f6225/src/utilities/TalawaGraphQLError.ts#L142)

***

### issues

> **issues**: `object`[]

Defined in: [src/utilities/TalawaGraphQLError.ts:143](https://github.com/PalisadoesFoundation/talawa-api/blob/1ed05dfbd5f8b040258a6172cdf4d8be325f6225/src/utilities/TalawaGraphQLError.ts#L143)

#### argumentPath

> **argumentPath**: `JSONArgumentPathKey`[]

#### message

> **message**: `string`
