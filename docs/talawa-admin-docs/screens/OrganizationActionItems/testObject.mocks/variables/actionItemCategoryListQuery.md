[**talawa-admin**](../../../../README.md)

***

# Variable: actionItemCategoryListQuery

> `const` **actionItemCategoryListQuery**: `object`

Defined in: [src/screens/OrganizationActionItems/testObject.mocks.ts:408](https://github.com/PalisadoesFoundation/talawa-admin/blob/a84ddc89ee5218e5c27f3b0b50310e2b84eeefe2/src/screens/OrganizationActionItems/testObject.mocks.ts#L408)

## Type declaration

### request

> **request**: `object`

#### request.query

> **query**: `DocumentNode` = `ACTION_ITEM_CATEGORY_LIST`

#### request.variables

> **variables**: `object`

#### request.variables.organizationId

> **organizationId**: `string` = `'orgId'`

#### request.variables.where

> **where**: `object`

#### request.variables.where.is\_disabled

> **is\_disabled**: `boolean` = `false`

### result

> **result**: `object`

#### result.data

> **data**: `object`

#### result.data.actionItemCategoriesByOrganization

> **actionItemCategoriesByOrganization**: (\{ `_id`: `string`; `createdAt`: `string`; `creator`: \{ `_id`: `string`; `firstName`: `string`; `lastName`: `string`; \}; `isDisabled`: `boolean`; `name`: `string`; \} \| \{ `_id`: `undefined`; `createdAt`: `string`; `creator`: \{ `_id`: `undefined`; `firstName`: `string`; `lastName`: `string`; \}; `isDisabled`: `boolean`; `name`: `string`; \})[]
