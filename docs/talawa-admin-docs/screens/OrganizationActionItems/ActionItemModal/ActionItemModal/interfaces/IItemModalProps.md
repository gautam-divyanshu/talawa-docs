[**talawa-admin**](../../../../../README.md)

***

# Interface: IItemModalProps

Defined in: [screens/OrganizationActionItems/ActionItemModal/ActionItemModal.tsx:80](https://github.com/PalisadoesFoundation/talawa-admin/blob/a6a14220f0b45328ddf1ab781d27ae47e9bbead4/src/screens/OrganizationActionItems/ActionItemModal/ActionItemModal.tsx#L80)

Props for the `ItemModal` component.

## Properties

### actionItem

> **actionItem**: `IActionItemInfo`

Defined in: [screens/OrganizationActionItems/ActionItemModal/ActionItemModal.tsx:92](https://github.com/PalisadoesFoundation/talawa-admin/blob/a6a14220f0b45328ddf1ab781d27ae47e9bbead4/src/screens/OrganizationActionItems/ActionItemModal/ActionItemModal.tsx#L92)

Existing action item data (null for create mode)

***

### actionItemsRefetch()

> **actionItemsRefetch**: () => `void`

Defined in: [screens/OrganizationActionItems/ActionItemModal/ActionItemModal.tsx:90](https://github.com/PalisadoesFoundation/talawa-admin/blob/a6a14220f0b45328ddf1ab781d27ae47e9bbead4/src/screens/OrganizationActionItems/ActionItemModal/ActionItemModal.tsx#L90)

Function to refetch action items data after mutation

#### Returns

`void`

***

### editMode

> **editMode**: `boolean`

Defined in: [screens/OrganizationActionItems/ActionItemModal/ActionItemModal.tsx:94](https://github.com/PalisadoesFoundation/talawa-admin/blob/a6a14220f0b45328ddf1ab781d27ae47e9bbead4/src/screens/OrganizationActionItems/ActionItemModal/ActionItemModal.tsx#L94)

Whether the modal is in edit mode (true) or create mode (false)

***

### eventId

> **eventId**: `string`

Defined in: [screens/OrganizationActionItems/ActionItemModal/ActionItemModal.tsx:88](https://github.com/PalisadoesFoundation/talawa-admin/blob/a6a14220f0b45328ddf1ab781d27ae47e9bbead4/src/screens/OrganizationActionItems/ActionItemModal/ActionItemModal.tsx#L88)

Optional event ID if the action item is associated with an event

***

### hide()

> **hide**: () => `void`

Defined in: [screens/OrganizationActionItems/ActionItemModal/ActionItemModal.tsx:84](https://github.com/PalisadoesFoundation/talawa-admin/blob/a6a14220f0b45328ddf1ab781d27ae47e9bbead4/src/screens/OrganizationActionItems/ActionItemModal/ActionItemModal.tsx#L84)

Function to hide/close the modal

#### Returns

`void`

***

### isOpen

> **isOpen**: `boolean`

Defined in: [screens/OrganizationActionItems/ActionItemModal/ActionItemModal.tsx:82](https://github.com/PalisadoesFoundation/talawa-admin/blob/a6a14220f0b45328ddf1ab781d27ae47e9bbead4/src/screens/OrganizationActionItems/ActionItemModal/ActionItemModal.tsx#L82)

Whether the modal is currently open/visible

***

### orgId

> **orgId**: `string`

Defined in: [screens/OrganizationActionItems/ActionItemModal/ActionItemModal.tsx:86](https://github.com/PalisadoesFoundation/talawa-admin/blob/a6a14220f0b45328ddf1ab781d27ae47e9bbead4/src/screens/OrganizationActionItems/ActionItemModal/ActionItemModal.tsx#L86)

Organization ID for which the action item belongs
