[**talawa-admin**](../../../../../README.md)

***

# Variable: EmailField

> `const` **EmailField**: `React.FC`\<`InterfaceEmailFieldProps`\>

Defined in: [components/Auth/EmailField/EmailField.tsx:24](https://github.com/PalisadoesFoundation/talawa-admin/blob/8fd8f00df0a90979db5fffb62c8c8045329d3776/src/components/Auth/EmailField/EmailField.tsx#L24)

Reusable email input field component.

## Remarks

This component wraps FormField with email-specific defaults including:
- HTML5 email input type for built-in validation
- Default label "Email" and placeholder "name@example.com"
- Required field marking
- Support for error display via string or null error prop

## Example

```tsx
<EmailField
  value={email}
  onChange={handleEmailChange}
  error={emailError}
/>
```
