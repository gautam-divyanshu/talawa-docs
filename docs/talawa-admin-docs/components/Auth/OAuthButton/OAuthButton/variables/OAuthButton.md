[**talawa-admin**](../../../../../README.md)

***

# Variable: OAuthButton

> `const` **OAuthButton**: `React.FC`\<`Props`\>

Defined in: [components/Auth/OAuthButton/OAuthButton.tsx:51](https://github.com/PalisadoesFoundation/talawa-admin/blob/a3aff34c5338b675e61260486f2477e6f97319b3/src/components/Auth/OAuthButton/OAuthButton.tsx#L51)

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
