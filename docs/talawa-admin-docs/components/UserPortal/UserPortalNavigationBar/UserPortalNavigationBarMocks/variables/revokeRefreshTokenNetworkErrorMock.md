[**talawa-admin**](../../../../../README.md)

***

# Variable: revokeRefreshTokenNetworkErrorMock

> `const` **revokeRefreshTokenNetworkErrorMock**: `object`

Defined in: [components/UserPortal/UserPortalNavigationBar/UserPortalNavigationBarMocks.ts:132](https://github.com/PalisadoesFoundation/talawa-admin/blob/fc3abee3ec7208447f84a5286dfe9cc9bbdaa02a/src/components/UserPortal/UserPortalNavigationBar/UserPortalNavigationBarMocks.ts#L132)

Mock network error for revoking refresh token
Simulates network failure during logout

## Type Declaration

### request

> **request**: `object`

#### request.query

> **query**: `DocumentNode` = `REVOKE_REFRESH_TOKEN`

### result

> **result**: `object`

#### result.errors

> **errors**: `object`[]

### variableMatcher()

> **variableMatcher**: () => `boolean`

#### Returns

`boolean`
