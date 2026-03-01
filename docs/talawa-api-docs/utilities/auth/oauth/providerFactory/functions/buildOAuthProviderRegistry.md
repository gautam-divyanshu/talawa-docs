[**talawa-api**](../../../../../README.md)

***

# Function: buildOAuthProviderRegistry()

> **buildOAuthProviderRegistry**(): [`OAuthProviderRegistry`](../../OAuthProviderRegistry/classes/OAuthProviderRegistry.md)

Defined in: [src/utilities/auth/oauth/providerFactory.ts:11](https://github.com/PalisadoesFoundation/talawa-api/blob/29f85325b75d0f277ef992b07c6afd8761e3db6a/src/utilities/auth/oauth/providerFactory.ts#L11)

Builds and initializes the OAuth provider registry from configuration.
Clears any existing providers (idempotent) and registers enabled providers.

## Returns

[`OAuthProviderRegistry`](../../OAuthProviderRegistry/classes/OAuthProviderRegistry.md)

The populated OAuthProviderRegistry singleton instance
