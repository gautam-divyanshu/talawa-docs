[**talawa-admin**](../../../../README.md)

***

# Variable: updateActionItemMutation

> `const` **updateActionItemMutation**: `object`

Defined in: [screens/OrganizationActionItems/OrganizationActionItem.mocks.ts:295](https://github.com/PalisadoesFoundation/talawa-admin/blob/b238fb256f6e979ba85b4f82173b1063dad04c10/src/screens/OrganizationActionItems/OrganizationActionItem.mocks.ts#L295)

## Type declaration

### request

> **request**: `object`

#### request.query

> **query**: `DocumentNode` = `UPDATE_ACTION_ITEM_MUTATION`

#### request.variables

> **variables**: `object`

#### request.variables.input

> **input**: `object`

#### request.variables.input.id

> **id**: `string` = `'actionItemId1'`

#### request.variables.input.isCompleted

> **isCompleted**: `boolean` = `true`

#### request.variables.input.postCompletionNotes

> **postCompletionNotes**: `string` = `'Cmp Notes 1'`

### result

> **result**: `object`

#### result.data

> **data**: `object`

#### result.data.updateActionItem

> **updateActionItem**: `object`

#### result.data.updateActionItem.id

> **id**: `string` = `'actionItemId1'`

#### result.data.updateActionItem.isCompleted

> **isCompleted**: `boolean` = `true`

#### result.data.updateActionItem.postCompletionNotes

> **postCompletionNotes**: `string` = `'Cmp Notes 1'`

#### result.data.updateActionItem.updatedAt

> **updatedAt**: `string` = `'2025-07-01T07:49:24Z'`
