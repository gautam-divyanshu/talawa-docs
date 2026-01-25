[**talawa-admin**](../../../../../README.md)

***

# Variable: OrgSelector

> `const` **OrgSelector**: `React.FC`\<`InterfaceOrgSelectorProps`\>

Defined in: [components/Auth/OrgSelector/OrgSelector.tsx:26](https://github.com/PalisadoesFoundation/talawa-admin/blob/6445033f887df17fecf22e7ce251f7ab43ed5425/src/components/Auth/OrgSelector/OrgSelector.tsx#L26)

Reusable organization selector component with search/autocomplete and accessibility support.

## Remarks

This component provides a searchable dropdown for selecting an organization from a list.
It supports search/autocomplete, error display, required field indication, and proper
ARIA attributes for accessibility.

## Example

```tsx
<OrgSelector
  options={organizations}
  value={selectedOrgId}
  onChange={handleOrgChange}
  error={orgError}
  required
/>
```
