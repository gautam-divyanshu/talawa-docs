[**talawa-admin**](../../../../../README.md)

***

# Variable: revokeRefreshTokenMock

> `const` **revokeRefreshTokenMock**: `object`

Defined in: [components/UserPortal/UserPortalNavigationBar/UserPortalNavigationBarMocks.ts:69](https://github.com/PalisadoesFoundation/talawa-admin/blob/fc3abee3ec7208447f84a5286dfe9cc9bbdaa02a/src/components/UserPortal/UserPortalNavigationBar/UserPortalNavigationBarMocks.ts#L69)

Mock GraphQL mutation for revoking refresh token
Using variableMatcher to match any refresh token string

## Type Declaration

### request

> **request**: `object`

#### request.query

> **query**: `DocumentNode` = `REVOKE_REFRESH_TOKEN`

### result

> **result**: `object`

#### result.data

> **data**: `object`

#### result.data.revokeRefreshToken

> **revokeRefreshToken**: `boolean` = `true`

### variableMatcher()

> **variableMatcher**: () => `boolean`

#### Returns

`boolean`
