[**talawa-admin**](../../../../../../README.md)

***

# Variable: default

> `const` **default**: `React.FC`\<`InterfaceAgendaFolderCreateModalProps`\>

Defined in: [components/AdminPortal/AgendaFolder/Create/AgendaFolderCreateModal.tsx:33](https://github.com/PalisadoesFoundation/talawa-admin/blob/460bd2773acfa2e179245b3aaa6f4a49389b14d5/src/components/AdminPortal/AgendaFolder/Create/AgendaFolderCreateModal.tsx#L33)

AgendaFolderCreateModal

Modal component for creating a new agenda folder within an event.
Calculates the next folder sequence based on existing folders and
submits the creation request via GraphQL.

Displays validation and mutation feedback using NotificationToast
and refreshes agenda folder data on successful creation.

## Param

Controls modal visibility

## Param

Callback to close the modal

## Param

ID of the event the folder belongs to

## Param

Existing agenda folder data for sequence calculation

## Param

i18n translation function

## Param

Refetches agenda folder data after creation

## Returns

JSX.Element | null
