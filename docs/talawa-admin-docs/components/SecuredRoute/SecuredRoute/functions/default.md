[**talawa-admin**](../../../../README.md)

***

# Function: default()

> **default**(): `Element`

Defined in: [src/components/SecuredRoute/SecuredRoute.tsx:19](https://github.com/PalisadoesFoundation/talawa-admin/blob/47e7c605dffe0d8b3eaed99e959ed345bc9cdf11/src/components/SecuredRoute/SecuredRoute.tsx#L19)

A route guard that checks if the user is logged in and has the necessary permissions.

If the user is logged in and has an admin role set, it renders the child routes.
Otherwise, it redirects to the home page or shows a 404 page if admin role is not set.

## Returns

`Element`

The JSX element representing the secured route.
