[**talawa-api**](../../../../../README.md)

***

# Function: buildOAuthProviderRegistry()

> **buildOAuthProviderRegistry**(): [`OAuthProviderRegistry`](../../OAuthProviderRegistry/classes/OAuthProviderRegistry.md)

Defined in: [src/utilities/auth/oauth/providerFactory.ts:11](https://github.com/PalisadoesFoundation/talawa-api/blob/4192946e517a94b573c8f323a0a5b2837aeccf3f/src/utilities/auth/oauth/providerFactory.ts#L11)

Builds and initializes the OAuth provider registry from configuration.
Clears any existing providers (idempotent) and registers enabled providers.

## Returns

[`OAuthProviderRegistry`](../../OAuthProviderRegistry/classes/OAuthProviderRegistry.md)

The populated OAuthProviderRegistry singleton instance
