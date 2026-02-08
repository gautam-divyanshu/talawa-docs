[**talawa-admin**](../../../../../README.md)

***

# Variable: organizationDataErrorMock

> `const` **organizationDataErrorMock**: `object`

Defined in: [components/UserPortal/UserPortalNavigationBar/UserPortalNavigationBarMocks.ts:108](https://github.com/PalisadoesFoundation/talawa-admin/blob/fc82c850e280189101f3f3784976f5c13ae288a3/src/components/UserPortal/UserPortalNavigationBar/UserPortalNavigationBarMocks.ts#L108)

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
