[**talawa-admin**](../../../../README.md)

***

# Variable: completeActionForInstanceMutationError

> `const` **completeActionForInstanceMutationError**: `object`

Defined in: [screens/OrganizationActionItems/OrganizationActionItem.mocks.ts:403](https://github.com/PalisadoesFoundation/talawa-admin/blob/b238fb256f6e979ba85b4f82173b1063dad04c10/src/screens/OrganizationActionItems/OrganizationActionItem.mocks.ts#L403)

## Type declaration

### error

> **error**: `Error`

### request

> **request**: `object`

#### request.query

> **query**: `DocumentNode` = `COMPLETE_ACTION_ITEM_FOR_INSTANCE`

#### request.variables

> **variables**: `object`

#### request.variables.input

> **input**: `object`

#### request.variables.input.actionId

> **actionId**: `string` = `'actionItemId1'`

#### request.variables.input.eventId

> **eventId**: `string` = `'instanceId1'`

#### request.variables.input.postCompletionNotes

> **postCompletionNotes**: `string` = `'Valid completion notes'`
