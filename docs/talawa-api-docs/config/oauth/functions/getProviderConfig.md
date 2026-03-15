[**talawa-api**](../../../README.md)

***

# Function: getProviderConfig()

> **getProviderConfig**(`provider`, `env?`): `Required`\<`OAuthProviderConfig`\>

Defined in: [src/config/oauth.ts:50](https://github.com/PalisadoesFoundation/talawa-api/blob/e5257a859e980c4157b048d478eb38a347def32f/src/config/oauth.ts#L50)

Get provider config, throwing if provider is not enabled or invalid.

## Parameters

### provider

[`ProviderKey`](../type-aliases/ProviderKey.md)

### env?

`ProcessEnv` = `process.env`

## Returns

`Required`\<`OAuthProviderConfig`\>
