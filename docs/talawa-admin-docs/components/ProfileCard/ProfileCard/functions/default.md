[**talawa-admin**](../../../../README.md)

***

# Function: default()

> **default**(): `Element`

Defined in: [src/components/ProfileCard/ProfileCard.tsx:21](https://github.com/PalisadoesFoundation/talawa-admin/blob/f8ee21cec8104cf917ede65f524307d1ff815e74/src/components/ProfileCard/ProfileCard.tsx#L21)

Renders a profile card for the user.

This component displays the user's profile picture or an avatar, their name (truncated if necessary),
and their role (SuperAdmin, Admin, or User). It provides options to view the profile.

- If a user image is available, it displays that; otherwise, it shows an avatar.
- The displayed name is truncated if it exceeds a specified length.

## Returns

`Element`

JSX.Element - The profile card .
