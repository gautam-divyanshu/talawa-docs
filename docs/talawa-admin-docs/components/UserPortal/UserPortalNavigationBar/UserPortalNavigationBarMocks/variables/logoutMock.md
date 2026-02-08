[**talawa-admin**](../../../../../README.md)

***

# Variable: logoutMock

> `const` **logoutMock**: `object`

Defined in: [components/UserPortal/UserPortalNavigationBar/UserPortalNavigationBarMocks.ts:69](https://github.com/PalisadoesFoundation/talawa-admin/blob/fc82c850e280189101f3f3784976f5c13ae288a3/src/components/UserPortal/UserPortalNavigationBar/UserPortalNavigationBarMocks.ts#L69)

Mock GraphQL mutation for logout
Using variableMatcher to match any variables

## Type Declaration

### request

> **request**: `object`

#### request.query

> **query**: `DocumentNode` = `LOGOUT_MUTATION`

### result

> **result**: `object`

#### result.data

> **data**: `object`

#### result.data.logout

> **logout**: `object`

#### result.data.logout.success

> **success**: `boolean` = `true`

### variableMatcher()

> **variableMatcher**: () => `boolean`

#### Returns

`boolean`
