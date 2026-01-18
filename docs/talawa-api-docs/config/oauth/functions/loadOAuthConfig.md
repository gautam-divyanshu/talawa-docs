[**talawa-api**](../../../README.md)

***

# Function: loadOAuthConfig()

> **loadOAuthConfig**(`env`): [`OAuthProvidersConfig`](../interfaces/OAuthProvidersConfig.md)

Defined in: [src/config/oauth.ts:17](https://github.com/PalisadoesFoundation/talawa-api/blob/86c684402120721d2151d1e28feb0b6d2f345849/src/config/oauth.ts#L17)

Load and validate OAuth configuration from environment.
Providers are disabled if required values are missing.

## Parameters

### env

`ProcessEnv` = `process.env`

## Returns

[`OAuthProvidersConfig`](../interfaces/OAuthProvidersConfig.md)
