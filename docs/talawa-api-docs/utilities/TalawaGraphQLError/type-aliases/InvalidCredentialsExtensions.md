[**talawa-api**](../../../README.md)

***

# Type Alias: InvalidCredentialsExtensions

> **InvalidCredentialsExtensions** = `object`

Defined in: [src/utilities/TalawaGraphQLError.ts:166](https://github.com/PalisadoesFoundation/talawa-api/blob/39075e3ba8206f4ccaf60cdb809b4cedd12c8a45/src/utilities/TalawaGraphQLError.ts#L166)

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

Defined in: [src/utilities/TalawaGraphQLError.ts:167](https://github.com/PalisadoesFoundation/talawa-api/blob/39075e3ba8206f4ccaf60cdb809b4cedd12c8a45/src/utilities/TalawaGraphQLError.ts#L167)

***

### issues

> **issues**: `object`[]

Defined in: [src/utilities/TalawaGraphQLError.ts:168](https://github.com/PalisadoesFoundation/talawa-api/blob/39075e3ba8206f4ccaf60cdb809b4cedd12c8a45/src/utilities/TalawaGraphQLError.ts#L168)

#### argumentPath

> **argumentPath**: `JSONArgumentPathKey`[]

#### message

> **message**: `string`
