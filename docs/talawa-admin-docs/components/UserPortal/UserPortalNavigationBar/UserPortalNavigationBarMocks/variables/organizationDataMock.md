[**talawa-admin**](../../../../../README.md)

***

# Variable: organizationDataMock

> `const` **organizationDataMock**: `object`

Defined in: [components/UserPortal/UserPortalNavigationBar/UserPortalNavigationBarMocks.ts:49](https://github.com/PalisadoesFoundation/talawa-admin/blob/fb3b30d69cbd78c0bc89ab15fb81a998876e1850/src/components/UserPortal/UserPortalNavigationBar/UserPortalNavigationBarMocks.ts#L49)

Mock GraphQL response for fetching organization basic data

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

> **organization**: `object`

#### result.data.organization.\_\_typename

> **\_\_typename**: `string` = `'Organization'`

#### result.data.organization.id

> **id**: `string` = `mockOrganizationId`

#### result.data.organization.name

> **name**: `string` = `mockOrganizationName`
