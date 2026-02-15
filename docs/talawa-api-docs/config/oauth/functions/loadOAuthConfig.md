[**talawa-api**](../../../README.md)

***

# Function: loadOAuthConfig()

> **loadOAuthConfig**(`env?`): [`OAuthProvidersConfig`](../interfaces/OAuthProvidersConfig.md)

Defined in: [src/config/oauth.ts:17](https://github.com/PalisadoesFoundation/talawa-api/blob/39075e3ba8206f4ccaf60cdb809b4cedd12c8a45/src/config/oauth.ts#L17)

Load and validate OAuth configuration from environment.
Providers are disabled if required values are missing.

## Parameters

### env?

`ProcessEnv` = `process.env`

## Returns

[`OAuthProvidersConfig`](../interfaces/OAuthProvidersConfig.md)
