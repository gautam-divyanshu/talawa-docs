[**talawa-api**](../../../README.md)

***

# Type Alias: InvalidCredentialsExtensions

> **InvalidCredentialsExtensions** = `object`

Defined in: [src/utilities/TalawaGraphQLError.ts:163](https://github.com/PalisadoesFoundation/talawa-api/blob/aa036083713a382be03ddad8b72207946e5ffeb4/src/utilities/TalawaGraphQLError.ts#L163)

When the client provides invalid credentials (email/password) during authentication.
This error is intentionally vague to prevent user enumeration attacks.

## Example

```ts
throw new TalawaGraphQLError({
	extensions: {
		code: "invalid_credentials",
		issues: [
			{
				argumentPath: ["input"],
				message: "Invalid email address or password.",
			},
		],
	},
});
```

## Properties

### code

> **code**: `"invalid_credentials"`

Defined in: [src/utilities/TalawaGraphQLError.ts:164](https://github.com/PalisadoesFoundation/talawa-api/blob/aa036083713a382be03ddad8b72207946e5ffeb4/src/utilities/TalawaGraphQLError.ts#L164)

***

### issues

> **issues**: `object`[]

Defined in: [src/utilities/TalawaGraphQLError.ts:165](https://github.com/PalisadoesFoundation/talawa-api/blob/aa036083713a382be03ddad8b72207946e5ffeb4/src/utilities/TalawaGraphQLError.ts#L165)

#### argumentPath

> **argumentPath**: (`string` \| `number`)[]

#### message

> **message**: `string`
