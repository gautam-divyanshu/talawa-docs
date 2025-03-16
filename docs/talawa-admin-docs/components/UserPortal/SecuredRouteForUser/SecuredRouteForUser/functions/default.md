[**talawa-admin**](../../../../../README.md)

***

# Function: default()

> **default**(): `Element`

Defined in: [src/components/UserPortal/SecuredRouteForUser/SecuredRouteForUser.tsx:18](https://github.com/PalisadoesFoundation/talawa-admin/blob/a84ddc89ee5218e5c27f3b0b50310e2b84eeefe2/src/components/UserPortal/SecuredRouteForUser/SecuredRouteForUser.tsx#L18)

A component that guards routes by checking if the user is logged in.
If the user is logged in and does not have 'AdminFor' set, the child routes are rendered.
If the user is not logged in, they are redirected to the homepage.
If the user is logged in but has 'AdminFor' set, a 404 page is shown.

## Returns

`Element`

JSX.Element - Rendered component based on user authentication and role.
