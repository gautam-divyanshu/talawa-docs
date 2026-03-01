[**talawa-admin**](../../../../../README.md)

***

# Variable: OAuthButton

> `const` **OAuthButton**: `React.FC`\<`Props`\>

Defined in: [components/Auth/OAuthButton/OAuthButton.tsx:51](https://github.com/PalisadoesFoundation/talawa-admin/blob/9325ac63b1aa0de5c188b3108fe5b032999b90ee/src/components/Auth/OAuthButton/OAuthButton.tsx#L51)

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
