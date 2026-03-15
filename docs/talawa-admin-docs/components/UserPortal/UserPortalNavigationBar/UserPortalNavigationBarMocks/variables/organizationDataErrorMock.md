[**talawa-admin**](../../../../../README.md)

***

# Variable: organizationDataErrorMock

> `const` **organizationDataErrorMock**: `object`

Defined in: [components/UserPortal/UserPortalNavigationBar/UserPortalNavigationBarMocks.ts:108](https://github.com/PalisadoesFoundation/talawa-admin/blob/fb3b30d69cbd78c0bc89ab15fb81a998876e1850/src/components/UserPortal/UserPortalNavigationBar/UserPortalNavigationBarMocks.ts#L108)

Mock GraphQL error response for fetching organization basic data
Used to test error handling when organization query fails

## Type Declaration

### error

> **error**: `Error`

### request

> **request**: `object`

#### request.query

> **query**: `DocumentNode` = `GET_ORGANIZATION_BASIC_DATA`

#### request.variables

> **variables**: `object`

#### request.variables.id

> **id**: `string` = `mockOrganizationId`
