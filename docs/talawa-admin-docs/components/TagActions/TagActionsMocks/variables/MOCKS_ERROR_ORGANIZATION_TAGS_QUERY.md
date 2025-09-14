[**talawa-admin**](../../../../README.md)

***

# Variable: MOCKS\_ERROR\_ORGANIZATION\_TAGS\_QUERY

> `const` **MOCKS\_ERROR\_ORGANIZATION\_TAGS\_QUERY**: `object`[]

Defined in: [components/TagActions/TagActionsMocks.ts:279](https://github.com/PalisadoesFoundation/talawa-admin/blob/dcaa146cd8ce05674a5b0d97ae7a99ec40d88323/src/components/TagActions/TagActionsMocks.ts#L279)

## Type declaration

### error

> **error**: `Error`

### request

> **request**: `object`

#### request.query

> **query**: `DocumentNode` = `ORGANIZATION_USER_TAGS_LIST`

#### request.variables

> **variables**: `object`

#### request.variables.first

> **first**: `number` = `TAGS_QUERY_DATA_CHUNK_SIZE`

#### request.variables.id

> **id**: `string` = `'123'`

#### request.variables.where

> **where**: `object`

#### request.variables.where.name

> **name**: `object`

#### request.variables.where.name.starts\_with

> **starts\_with**: `string` = `''`
