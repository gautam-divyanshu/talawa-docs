[**talawa-admin**](../../../../../../README.md)

***

# Variable: default

> `const` **default**: `React.FC`\<`InterfaceAgendaFolderCreateModalProps`\>

Defined in: [components/AdminPortal/AgendaFolder/Create/AgendaFolderCreateModal.tsx:34](https://github.com/PalisadoesFoundation/talawa-admin/blob/b87aaed727690609a6d5a345627bfa10a8d26ef0/src/components/AdminPortal/AgendaFolder/Create/AgendaFolderCreateModal.tsx#L34)

AgendaFolderCreateModal

Modal component for creating a new agenda folder within an event.
Calculates the next folder sequence based on existing folders and
submits the creation request via GraphQL.

Displays validation and mutation feedback using NotificationToast
and refreshes agenda folder data on successful creation.

## Param

**isOpen**

Controls modal visibility

## Param

**hide**

Callback to close the modal

## Param

**eventId**

ID of the event the folder belongs to

## Param

**agendaFolderData**

Existing agenda folder data for sequence calculation

## Param

**t**

i18n translation function

## Param

**refetchAgendaFolder**

Refetches agenda folder data after creation

## Returns

JSX.Element | null
