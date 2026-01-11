[**talawa-admin**](../../../../../README.md)

***

# Variable: LoginForm

> `const` **LoginForm**: `React.FC`\<`InterfaceLoginFormProps`\>

Defined in: [components/Auth/LoginForm/LoginForm.tsx:30](https://github.com/PalisadoesFoundation/talawa-admin/blob/8fd8f00df0a90979db5fffb62c8c8045329d3776/src/components/Auth/LoginForm/LoginForm.tsx#L30)

Reusable login form component that composes EmailField and PasswordField.

## Remarks

This component handles the login form UI and submission logic, delegating
authentication to the SIGNIN_QUERY GraphQL query. It supports both admin
and user login modes via the isAdmin prop.

## Example

```tsx
<LoginForm
  isAdmin={false}
  onSuccess={(token) => console.log('Logged in:', token)}
  onError={(error) => console.error('Login failed:', error)}
/>
```
