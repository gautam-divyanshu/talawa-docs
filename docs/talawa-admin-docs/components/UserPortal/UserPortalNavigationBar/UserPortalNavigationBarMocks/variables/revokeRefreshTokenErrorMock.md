[**talawa-admin**](../../../../../README.md)

***

# Variable: revokeRefreshTokenErrorMock

> `const` **revokeRefreshTokenErrorMock**: `object`

Defined in: [components/UserPortal/UserPortalNavigationBar/UserPortalNavigationBarMocks.ts:120](https://github.com/PalisadoesFoundation/talawa-admin/blob/fc3abee3ec7208447f84a5286dfe9cc9bbdaa02a/src/components/UserPortal/UserPortalNavigationBar/UserPortalNavigationBarMocks.ts#L120)

Mock GraphQL error response for revoking refresh token
Used to test error handling during logout

## Type Declaration

### error

> **error**: `Error`

### request

> **request**: `object`

#### request.query

> **query**: `DocumentNode` = `REVOKE_REFRESH_TOKEN`

### variableMatcher()

> **variableMatcher**: () => `boolean`

#### Returns

`boolean`
