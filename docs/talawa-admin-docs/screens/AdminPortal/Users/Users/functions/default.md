[**talawa-admin**](../../../../../README.md)

***

# Function: default()

> **default**(): `ReactElement`

Defined in: [screens/AdminPortal/Users/Users.tsx:74](https://github.com/PalisadoesFoundation/talawa-admin/blob/6fc3485a4facf0986d54647cd149412b30c0b289/src/screens/AdminPortal/Users/Users.tsx#L74)

The Users component displays a list of users with search, filter, sort, and infinite scroll capabilities.

Migration (Phase 5 - Issue #5819): Migrated to use DataTable with useTableData hook for GraphQL integration,
simplified state management using useTableData for data fetching, preserved custom row rendering via UsersTableItem
for complex organization management, and maintained backward compatibility with existing search, filter, and sort functionality.

## Returns

`ReactElement`

The rendered Users component

## Remarks

This component uses the DataTable component for rendering user lists with pagination support.
Search, filtering by role, and sorting by creation date are fully supported.
