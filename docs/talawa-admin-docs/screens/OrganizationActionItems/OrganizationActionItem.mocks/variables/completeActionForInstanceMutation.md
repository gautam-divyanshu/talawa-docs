[**talawa-admin**](../../../../README.md)

***

# Variable: completeActionForInstanceMutation

> `const` **completeActionForInstanceMutation**: `object`

Defined in: [screens/OrganizationActionItems/OrganizationActionItem.mocks.ts:451](https://github.com/PalisadoesFoundation/talawa-admin/blob/5e2c1fcdf6d126e8b534527cdf2ce6281a7d5d7d/src/screens/OrganizationActionItems/OrganizationActionItem.mocks.ts#L451)

## Type Declaration

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

### result

> **result**: `object`

#### result.data

> **data**: `object`

#### result.data.completeActionForInstance

> **completeActionForInstance**: `object`

#### result.data.completeActionForInstance.id

> **id**: `string` = `'actionItemId1'`
