[**talawa-api**](../../../README.md)

***

# Function: loadOAuthConfig()

> **loadOAuthConfig**(`env?`): [`OAuthProvidersConfig`](../interfaces/OAuthProvidersConfig.md)

Defined in: [src/config/oauth.ts:17](https://github.com/PalisadoesFoundation/talawa-api/blob/ba020be1455b363dacbc8141230aeacb45671626/src/config/oauth.ts#L17)

Load and validate OAuth configuration from environment.
Providers are disabled if required values are missing.

## Parameters

### env?

`ProcessEnv` = `process.env`

## Returns

[`OAuthProvidersConfig`](../interfaces/OAuthProvidersConfig.md)
