[**talawa-admin**](../../../../../../README.md)

***

# Variable: default

> `const` **default**: `React.FC`\<`InterfaceAgendaItemsUpdateModalProps`\>

Defined in: [components/AdminPortal/AgendaItems/Update/AgendaItemsUpdateModal.tsx:52](https://github.com/PalisadoesFoundation/talawa-admin/blob/b87aaed727690609a6d5a345627bfa10a8d26ef0/src/components/AdminPortal/AgendaItems/Update/AgendaItemsUpdateModal.tsx#L52)

AgendaItemsUpdateModal

Edit modal for updating an existing agenda item.
Uses `EditModal` to handle submission, loading, and keyboard actions.

## Param

**isOpen**

Controls modal visibility

## Param

**onClose**

Callback to close the modal

## Param

**agendaItemId**

ID of the agenda item being updated

## Param

**itemFormState**

Current agenda item form state

## Param

**setItemFormState**

Setter for agenda item form state

## Param

**agendaItemCategories**

Available agenda item categories

## Param

**agendaFolderData**

Available agenda folders

## Param

**refetchAgendaFolder**

Refetches agenda folder data after update

## Param

**t**

i18n translation function

## Returns

JSX.Element
