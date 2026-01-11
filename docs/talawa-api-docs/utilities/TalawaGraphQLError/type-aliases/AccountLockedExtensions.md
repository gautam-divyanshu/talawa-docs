[**talawa-api**](../../../README.md)

***

# Type Alias: AccountLockedExtensions

> **AccountLockedExtensions** = `object`

Defined in: [src/utilities/TalawaGraphQLError.ts:51](https://github.com/PalisadoesFoundation/talawa-api/blob/b24a30943e90218609bbe2cec77af89181bb6c56/src/utilities/TalawaGraphQLError.ts#L51)

When the user's account is temporarily locked due to too many failed login attempts.
The retryAfter field indicates when the account will be unlocked (ISO 8601 timestamp).

## Example

```ts
throw new TalawaGraphQLError({
	extensions: {
		code: "account_locked",
		retryAfter: new Date(Date.now() + 900000).toISOString(),
	},
});
```

## Properties

### code

> **code**: `"account_locked"`

Defined in: [src/utilities/TalawaGraphQLError.ts:52](https://github.com/PalisadoesFoundation/talawa-api/blob/b24a30943e90218609bbe2cec77af89181bb6c56/src/utilities/TalawaGraphQLError.ts#L52)

***

### retryAfter

> **retryAfter**: `string`

Defined in: [src/utilities/TalawaGraphQLError.ts:53](https://github.com/PalisadoesFoundation/talawa-api/blob/b24a30943e90218609bbe2cec77af89181bb6c56/src/utilities/TalawaGraphQLError.ts#L53)
