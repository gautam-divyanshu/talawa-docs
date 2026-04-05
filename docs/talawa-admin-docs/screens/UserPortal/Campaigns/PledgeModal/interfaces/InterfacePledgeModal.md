[**talawa-admin**](../../../../../README.md)

***

# Interface: InterfacePledgeModal

Defined in: [screens/UserPortal/Campaigns/PledgeModal.tsx:26](https://github.com/PalisadoesFoundation/talawa-admin/blob/daa074e07cb9ddfe6bb0bbbf7427f4dea4b5d8d7/src/screens/UserPortal/Campaigns/PledgeModal.tsx#L26)

Props for the `PledgeModal` component.

## Properties

### campaignId

> **campaignId**: `string`

Defined in: [screens/UserPortal/Campaigns/PledgeModal.tsx:32](https://github.com/PalisadoesFoundation/talawa-admin/blob/daa074e07cb9ddfe6bb0bbbf7427f4dea4b5d8d7/src/screens/UserPortal/Campaigns/PledgeModal.tsx#L32)

ID of the campaign associated with the pledge.

***

### hide

> **hide**: () => `void`

Defined in: [screens/UserPortal/Campaigns/PledgeModal.tsx:30](https://github.com/PalisadoesFoundation/talawa-admin/blob/daa074e07cb9ddfe6bb0bbbf7427f4dea4b5d8d7/src/screens/UserPortal/Campaigns/PledgeModal.tsx#L30)

Handler to close the modal.

#### Returns

`void`

***

### isOpen

> **isOpen**: `boolean`

Defined in: [screens/UserPortal/Campaigns/PledgeModal.tsx:28](https://github.com/PalisadoesFoundation/talawa-admin/blob/daa074e07cb9ddfe6bb0bbbf7427f4dea4b5d8d7/src/screens/UserPortal/Campaigns/PledgeModal.tsx#L28)

Indicates whether the modal is open or closed.

***

### mode

> **mode**: `"create"` \| `"edit"`

Defined in: [screens/UserPortal/Campaigns/PledgeModal.tsx:40](https://github.com/PalisadoesFoundation/talawa-admin/blob/daa074e07cb9ddfe6bb0bbbf7427f4dea4b5d8d7/src/screens/UserPortal/Campaigns/PledgeModal.tsx#L40)

Determines whether the modal is in create or edit mode.

***

### pledge

> **pledge**: `InterfacePledgeInfo`

Defined in: [screens/UserPortal/Campaigns/PledgeModal.tsx:36](https://github.com/PalisadoesFoundation/talawa-admin/blob/daa074e07cb9ddfe6bb0bbbf7427f4dea4b5d8d7/src/screens/UserPortal/Campaigns/PledgeModal.tsx#L36)

Pledge data to edit; null when creating a new pledge.

***

### refetchPledge

> **refetchPledge**: () => `void`

Defined in: [screens/UserPortal/Campaigns/PledgeModal.tsx:38](https://github.com/PalisadoesFoundation/talawa-admin/blob/daa074e07cb9ddfe6bb0bbbf7427f4dea4b5d8d7/src/screens/UserPortal/Campaigns/PledgeModal.tsx#L38)

Trigger to refetch pledge data after updates.

#### Returns

`void`

***

### userId

> **userId**: `string`

Defined in: [screens/UserPortal/Campaigns/PledgeModal.tsx:34](https://github.com/PalisadoesFoundation/talawa-admin/blob/daa074e07cb9ddfe6bb0bbbf7427f4dea4b5d8d7/src/screens/UserPortal/Campaigns/PledgeModal.tsx#L34)

ID of the user creating or editing the pledge.
