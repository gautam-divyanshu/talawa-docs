[**talawa-admin**](../../../../../README.md)

***

# Variable: organizationDataNullMock

> `const` **organizationDataNullMock**: `object`

Defined in: [components/UserPortal/UserPortalNavigationBar/UserPortalNavigationBarMocks.ts:148](https://github.com/PalisadoesFoundation/talawa-admin/blob/fc82c850e280189101f3f3784976f5c13ae288a3/src/components/UserPortal/UserPortalNavigationBar/UserPortalNavigationBarMocks.ts#L148)

Mock GraphQL null data response for organization query
Used to test fallback behavior when data is null

## Type Declaration

### request

> **request**: `object`

#### request.query

> **query**: `DocumentNode` = `GET_ORGANIZATION_BASIC_DATA`

#### request.variables

> **variables**: `object`

#### request.variables.id

> **id**: `string` = `mockOrganizationId`

### result

> **result**: `object`

#### result.data

> **data**: `object`

#### result.data.organization

> **organization**: `any` = `null`
