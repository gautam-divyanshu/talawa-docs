[**talawa-admin**](../../../../../README.md)

***

# Variable: default

> `const` **default**: `React.FC`\<[`InterfacePledgeModal`](../interfaces/InterfacePledgeModal.md)\>

Defined in: [screens/UserPortal/Campaigns/PledgeModal.tsx:105](https://github.com/PalisadoesFoundation/talawa-admin/blob/daa074e07cb9ddfe6bb0bbbf7427f4dea4b5d8d7/src/screens/UserPortal/Campaigns/PledgeModal.tsx#L105)

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
