[**talawa-admin**](../../../../../README.md)

***

# Variable: organizationDataErrorMock

> `const` **organizationDataErrorMock**: `object`

Defined in: [components/UserPortal/UserPortalNavigationBar/UserPortalNavigationBarMocks.ts:108](https://github.com/PalisadoesFoundation/talawa-admin/blob/a3aff34c5338b675e61260486f2477e6f97319b3/src/components/UserPortal/UserPortalNavigationBar/UserPortalNavigationBarMocks.ts#L108)

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
