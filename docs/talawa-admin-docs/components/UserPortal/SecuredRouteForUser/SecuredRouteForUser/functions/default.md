[**talawa-admin**](../../../../../README.md)

***

# Function: default()

> **default**(): `Element`

Defined in: [src/components/UserPortal/SecuredRouteForUser/SecuredRouteForUser.tsx:14](https://github.com/PalisadoesFoundation/talawa-admin/blob/3104525a1c66b9686a5ac0b80c45c43369f312bb/src/components/UserPortal/SecuredRouteForUser/SecuredRouteForUser.tsx#L14)

A component that guards routes by checking if the user is logged in.
If the user is logged in and does not have 'AdminFor' set, the child routes are rendered.
If the user is not logged in, they are redirected to the homepage.
If the user is logged in but has 'AdminFor' set, a 404 page is shown.

## Returns

`Element`

JSX.Element - Rendered component based on user authentication and role.
