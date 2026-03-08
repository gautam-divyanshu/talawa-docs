[**talawa-admin**](../../../../../README.md)

***

# Variable: default

> `const` **default**: `React.FC`\<[`InterfacePledgeModal`](../interfaces/InterfacePledgeModal.md)\>

Defined in: [screens/UserPortal/Campaigns/PledgeModal.tsx:102](https://github.com/PalisadoesFoundation/talawa-admin/blob/a3aff34c5338b675e61260486f2477e6f97319b3/src/screens/UserPortal/Campaigns/PledgeModal.tsx#L102)

Modal component for creating or editing pledges in a campaign.

## Remarks

Integrates internationalization and GraphQL operations for pledge creation and updates.

## Param

Props for the PledgeModal component.

## Returns

Rendered `PledgeModal` component.

## Example

```tsx
<PledgeModal
isOpen={true}
hide={() => {}}
campaignId="123"
userId="456"
pledge={null}
refetchPledge={() => {}}
mode="create"
/>
```
