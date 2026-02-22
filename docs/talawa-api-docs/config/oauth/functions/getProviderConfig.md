[**talawa-api**](../../../README.md)

***

# Function: getProviderConfig()

> **getProviderConfig**(`provider`, `env?`): `Required`\<`OAuthProviderConfig`\>

Defined in: [src/config/oauth.ts:50](https://github.com/PalisadoesFoundation/talawa-api/blob/e0c5d64d62f9cbd7e709b63db8cf19f32f235f61/src/config/oauth.ts#L50)

Get provider config, throwing if provider is not enabled or invalid.

## Parameters

### provider

[`ProviderKey`](../type-aliases/ProviderKey.md)

### env?

`ProcessEnv` = `process.env`

## Returns

`Required`\<`OAuthProviderConfig`\>
