[**talawa-admin**](../../../../README.md)

***

# Function: default()

> **default**(`props`): `JSX.Element`

Defined in: [src/components/AgendaCategory/AgendaCategoryContainer.tsx:34](https://github.com/PalisadoesFoundation/talawa-admin/blob/1cf8e39ca2930eb303ad9ea666b2d90033e35c94/src/components/AgendaCategory/AgendaCategoryContainer.tsx#L34)

Component for displaying and managing agenda item categories.

## Parameters

### props

Contains agenda category data and functions for data management.

#### agendaCategoryConnection

`"Organization"`

#### agendaCategoryData

`InterfaceAgendaItemCategoryInfo`[]

#### agendaCategoryRefetch

() => `void`

## Returns

`JSX.Element`

A JSX element that renders agenda item categories with options to preview, edit, and delete.

## Example

```tsx
<AgendaCategoryContainer
  agendaCategoryConnection="Organization"
  agendaCategoryData={data}
  agendaCategoryRefetch={refetch}
/>
```
