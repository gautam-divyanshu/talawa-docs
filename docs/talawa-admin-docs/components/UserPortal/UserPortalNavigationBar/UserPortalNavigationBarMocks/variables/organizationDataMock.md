[**talawa-admin**](../../../../../README.md)

***

# Variable: organizationDataMock

> `const` **organizationDataMock**: `object`

Defined in: [components/UserPortal/UserPortalNavigationBar/UserPortalNavigationBarMocks.ts:49](https://github.com/PalisadoesFoundation/talawa-admin/blob/460bd2773acfa2e179245b3aaa6f4a49389b14d5/src/components/UserPortal/UserPortalNavigationBar/UserPortalNavigationBarMocks.ts#L49)

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
