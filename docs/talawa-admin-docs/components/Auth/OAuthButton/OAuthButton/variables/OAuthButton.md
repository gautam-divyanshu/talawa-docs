[**talawa-admin**](../../../../../README.md)

***

# Variable: OAuthButton

> `const` **OAuthButton**: `React.FC`\<`Props`\>

Defined in: [components/Auth/OAuthButton/OAuthButton.tsx:51](https://github.com/PalisadoesFoundation/talawa-admin/blob/fb3b30d69cbd78c0bc89ab15fb81a998876e1850/src/components/Auth/OAuthButton/OAuthButton.tsx#L51)

A customizable OAuth authentication button component that supports multiple providers.

## Param

The component props

## Returns

A styled OAuth button with provider-specific branding

## Example

```tsx
<OAuthButton
  provider="GOOGLE"
  mode="login"
  onClick={handleGoogleLogin}
  loading={isLoading}
  size="lg"
  fullWidth
/>
```
