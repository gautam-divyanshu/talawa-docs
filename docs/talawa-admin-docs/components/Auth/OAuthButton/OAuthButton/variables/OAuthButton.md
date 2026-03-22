[**talawa-admin**](../../../../../README.md)

***

# Variable: OAuthButton

> `const` **OAuthButton**: `React.FC`\<`Props`\>

Defined in: [components/Auth/OAuthButton/OAuthButton.tsx:51](https://github.com/PalisadoesFoundation/talawa-admin/blob/6fc3485a4facf0986d54647cd149412b30c0b289/src/components/Auth/OAuthButton/OAuthButton.tsx#L51)

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
