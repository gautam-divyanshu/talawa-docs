[**talawa-admin**](../../../../README.md)

***

# Variable: MOCKS\_ERROR\_ASSIGNED\_MEMBERS

> `const` **MOCKS\_ERROR\_ASSIGNED\_MEMBERS**: `object`[]

Defined in: [screens/ManageTag/ManageTagMocks.ts:391](https://github.com/PalisadoesFoundation/talawa-admin/blob/4725f1e5bdbf3744e5a256b68fe2df6d33a549d0/src/screens/ManageTag/ManageTagMocks.ts#L391)

## Type Declaration

### error

> **error**: `Error`

### request

> **request**: `object`

#### request.query

> **query**: `DocumentNode` = `USER_TAGS_ASSIGNED_MEMBERS`

#### request.variables

> **variables**: `object`

#### request.variables.first

> **first**: `number` = `TAGS_QUERY_DATA_CHUNK_SIZE`

#### request.variables.id

> **id**: `string` = `'1'`

#### request.variables.sortedBy

> **sortedBy**: `object`

#### request.variables.sortedBy.id

> **id**: `string` = `'DESCENDING'`

#### request.variables.where

> **where**: `object`

#### request.variables.where.firstName

> **firstName**: `object`

#### request.variables.where.firstName.starts\_with

> **starts\_with**: `string` = `''`

#### request.variables.where.lastName

> **lastName**: `object`

#### request.variables.where.lastName.starts\_with

> **starts\_with**: `string` = `''`
