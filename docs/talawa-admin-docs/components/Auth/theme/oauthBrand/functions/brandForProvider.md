[**talawa-admin**](../../../../../README.md)

***

# Function: brandForProvider()

> **brandForProvider**(`provider`): `InterfaceProviderBrand`

Defined in: [components/Auth/theme/oauthBrand.tsx:49](https://github.com/PalisadoesFoundation/talawa-admin/blob/a180e1fe530008895c63552aaba88fc299591b72/src/components/Auth/theme/oauthBrand.tsx#L49)

Retrieves the branding configuration for a specific OAuth provider.

## Parameters

### provider

`OAuthProviderKey`

The provider key (e.g., 'GOOGLE', 'GITHUB')

## Returns

`InterfaceProviderBrand`

The branding configuration for the provider, or Google branding as fallback

## Example

```tsx
const googleBrand = brandForProvider('GOOGLE');
console.log(googleBrand.displayName); // 'Google'
```
