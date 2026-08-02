[**talawa-api**](../../../README.md)

***

# Function: loadOAuthConfig()

> **loadOAuthConfig**(`env?`): [`OAuthProvidersConfig`](../interfaces/OAuthProvidersConfig.md)

Defined in: [src/config/oauth.ts:17](https://github.com/PalisadoesFoundation/talawa-api/blob/5786ae4f6a720dac990dcd3c8ac65cc65d4a7aa7/src/config/oauth.ts#L17)

Load and validate OAuth configuration from environment.
Providers are disabled if required values are missing.

## Parameters

### env?

`ProcessEnv` = `process.env`

## Returns

[`OAuthProvidersConfig`](../interfaces/OAuthProvidersConfig.md)
