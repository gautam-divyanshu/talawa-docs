[**talawa-admin**](../../../../../README.md)

***

# Variable: FormField

> `const` **FormField**: `React.FC`\<`InterfaceFormFieldProps`\>

Defined in: [components/Auth/FormField/FormField.tsx:26](https://github.com/PalisadoesFoundation/talawa-admin/blob/7de9fc83b19d9a7e4f0c39bbb159d7e24e276afa/src/components/Auth/FormField/FormField.tsx#L26)

Reusable form field component with validation and accessibility support.

## Remarks

This component integrates with Phase 1 validators via the `error` prop
and provides aria-live announcements for screen readers.

## Example

```tsx
<FormField
  label="Email"
  name="email"
  type="email"
  value={email}
  onChange={handleChange}
  onBlur={handleBlur}
  error={emailError}
  required
/>
```
