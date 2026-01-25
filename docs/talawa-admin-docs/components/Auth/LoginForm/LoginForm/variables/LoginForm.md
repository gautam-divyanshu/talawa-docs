[**talawa-admin**](../../../../../README.md)

***

# Variable: LoginForm

> `const` **LoginForm**: `React.FC`\<`InterfaceLoginFormProps`\>

Defined in: [components/Auth/LoginForm/LoginForm.tsx:37](https://github.com/PalisadoesFoundation/talawa-admin/blob/6445033f887df17fecf22e7ce251f7ab43ed5425/src/components/Auth/LoginForm/LoginForm.tsx#L37)

Reusable login form component that composes EmailField and PasswordField.

## Remarks

This component handles the login form UI and submission logic, delegating
authentication to the SIGNIN_QUERY GraphQL query. It supports both admin
and user login modes via the isAdmin prop.

## Param

Whether the login form is rendered for an admin user

## Param

Callback invoked with the authentication token on successful login

## Param

Callback invoked when the login request fails

## Param

Optional test ID used for querying the component in tests

## Returns

A JSX element rendering the login form

## Example

```tsx
<LoginForm
  isAdmin={false}
  onSuccess={(token) => console.log('Logged in:', token)}
  onError={(error) => console.error('Login failed:', error)}
/>
```
