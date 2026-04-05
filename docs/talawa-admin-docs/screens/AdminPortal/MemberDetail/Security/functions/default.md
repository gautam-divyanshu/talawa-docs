[**talawa-admin**](../../../../../README.md)

***

# Function: default()

> **default**(): `Element`

Defined in: [screens/AdminPortal/MemberDetail/Security.tsx:29](https://github.com/PalisadoesFoundation/talawa-admin/blob/daa074e07cb9ddfe6bb0bbbf7427f4dea4b5d8d7/src/screens/AdminPortal/MemberDetail/Security.tsx#L29)

Security component.

## Returns

`Element`

A card containing password management controls.

## Remarks

Displays security settings for a user, allowing them to update their password.
Administrators can also reset passwords for other users without requiring the
current password. The component opens a PasswordUpdateModal for handling
password updates and performs validation before executing the appropriate
GraphQL mutation.
