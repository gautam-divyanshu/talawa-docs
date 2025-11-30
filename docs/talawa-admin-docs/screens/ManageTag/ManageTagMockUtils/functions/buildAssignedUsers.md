[**talawa-admin**](../../../../README.md)

***

# Function: buildAssignedUsers()

> **buildAssignedUsers**(`overrides?`): `object`

Defined in: [screens/ManageTag/ManageTagMockUtils.ts:4](https://github.com/PalisadoesFoundation/talawa-admin/blob/5e2c1fcdf6d126e8b534527cdf2ce6281a7d5d7d/src/screens/ManageTag/ManageTagMockUtils.ts#L4)

## Parameters

### overrides?

`Partial`\<\{ `ancestorTags`: `object`[]; `name`: `string`; `usersAssignedTo`: \{ `edges`: `object`[]; `pageInfo`: \{ `endCursor`: `string` \| `null`; `hasNextPage`: `boolean`; `hasPreviousPage`: `boolean`; `startCursor`: `string` \| `null`; \}; `totalCount`: `number`; \} \| `null`; \}\>

## Returns

`object`

### \_\_typename

> **\_\_typename**: `string` = `'UserTag'`

### ancestorTags

> **ancestorTags**: `object`[]

### name

> **name**: `string`

### usersAssignedTo

> **usersAssignedTo**: `object`

#### usersAssignedTo.\_\_typename

> **\_\_typename**: `string` = `'UserTagUsersAssignedToConnection'`

#### usersAssignedTo.edges

> **edges**: `object`[]

#### usersAssignedTo.pageInfo

> **pageInfo**: `object`

#### usersAssignedTo.pageInfo.\_\_typename

> **\_\_typename**: `string` = `'PageInfo'`

#### usersAssignedTo.pageInfo.endCursor

> **endCursor**: `string`

#### usersAssignedTo.pageInfo.hasNextPage

> **hasNextPage**: `boolean`

#### usersAssignedTo.pageInfo.hasPreviousPage

> **hasPreviousPage**: `boolean`

#### usersAssignedTo.pageInfo.startCursor

> **startCursor**: `string`

#### usersAssignedTo.totalCount

> **totalCount**: `number`
