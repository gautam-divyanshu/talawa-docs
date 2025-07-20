[**talawa-admin**](../../../../README.md)

***

# Variable: MOCKS\_UNDEFINED\_USER\_TAGS

> `const` **MOCKS\_UNDEFINED\_USER\_TAGS**: `object`[]

Defined in: [screens/OrganizationTags/OrganizationTagsMocks.ts:376](https://github.com/PalisadoesFoundation/talawa-admin/blob/a6a14220f0b45328ddf1ab781d27ae47e9bbead4/src/screens/OrganizationTags/OrganizationTagsMocks.ts#L376)

## Type declaration

### request

> **request**: `object`

#### request.query

> **query**: `DocumentNode` = `ORGANIZATION_USER_TAGS_LIST_PG`

#### request.variables

> **variables**: `object`

#### request.variables.first

> **first**: `number` = `TAGS_QUERY_DATA_CHUNK_SIZE`

#### request.variables.input

> **input**: `object`

#### request.variables.input.id

> **id**: `string` = `'orgId'`

#### request.variables.sortedBy

> **sortedBy**: `object`

#### request.variables.sortedBy.id

> **id**: `string` = `'DESCENDING'`

#### request.variables.where

> **where**: `object`

#### request.variables.where.name

> **name**: `object`

#### request.variables.where.name.starts\_with

> **starts\_with**: `string` = `''`

### result

> **result**: `object`

#### result.data

> **data**: `object`

#### result.data.organizations

> **organizations**: `object`[]
