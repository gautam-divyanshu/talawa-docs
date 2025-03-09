[**talawa-admin**](../../../../../README.md)

***

# Variable: MOCKS\_EMPTY

> `const` **MOCKS\_EMPTY**: `object`[]

Defined in: [src/components/OrgSettings/ActionItemCategories/OrgActionItemCategoryMocks.ts:236](https://github.com/PalisadoesFoundation/talawa-admin/blob/f8ee21cec8104cf917ede65f524307d1ff815e74/src/components/OrgSettings/ActionItemCategories/OrgActionItemCategoryMocks.ts#L236)

## Type declaration

### request

> **request**: `object`

#### request.query

> **query**: `DocumentNode` = `ACTION_ITEM_CATEGORY_LIST`

#### request.variables

> **variables**: `object`

#### request.variables.orderBy

> **orderBy**: `string` = `'createdAt_DESC'`

#### request.variables.organizationId

> **organizationId**: `string` = `'orgId'`

#### request.variables.where

> **where**: `object`

#### request.variables.where.name\_contains

> **name\_contains**: `string` = `''`

### result

> **result**: `object`

#### result.data

> **data**: `object`

#### result.data.actionItemCategoriesByOrganization

> **actionItemCategoriesByOrganization**: `any`[] = `[]`
