[**talawa-api**](../../../README.md)

***

# Type Alias: AccountLockedExtensions

> **AccountLockedExtensions** = `object`

Defined in: [src/utilities/TalawaGraphQLError.ts:54](https://github.com/PalisadoesFoundation/talawa-api/blob/36d1ea832b10d1e9883eff7a03104362b71079bd/src/utilities/TalawaGraphQLError.ts#L54)

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

Defined in: [src/utilities/TalawaGraphQLError.ts:55](https://github.com/PalisadoesFoundation/talawa-api/blob/36d1ea832b10d1e9883eff7a03104362b71079bd/src/utilities/TalawaGraphQLError.ts#L55)

***

### retryAfter

> **retryAfter**: `string`

Defined in: [src/utilities/TalawaGraphQLError.ts:56](https://github.com/PalisadoesFoundation/talawa-api/blob/36d1ea832b10d1e9883eff7a03104362b71079bd/src/utilities/TalawaGraphQLError.ts#L56)
