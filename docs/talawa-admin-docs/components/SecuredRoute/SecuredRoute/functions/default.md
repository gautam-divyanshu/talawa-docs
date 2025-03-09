[**talawa-admin**](../../../../README.md)

***

# Function: default()

> **default**(): `Element`

Defined in: [src/components/SecuredRoute/SecuredRoute.tsx:19](https://github.com/PalisadoesFoundation/talawa-admin/blob/f8ee21cec8104cf917ede65f524307d1ff815e74/src/components/SecuredRoute/SecuredRoute.tsx#L19)

A route guard that checks if the user is logged in and has the necessary permissions.

If the user is logged in and has an admin role set, it renders the child routes.
Otherwise, it redirects to the home page or shows a 404 page if admin role is not set.

## Returns

`Element`

The JSX element representing the secured route.
