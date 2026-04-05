[**talawa-admin**](../../../../../README.md)

***

# Function: default()

> **default**(`props`): `Element`

Defined in: [components/UserPortal/UserPortalNavigationBar/UserDropdown.tsx:40](https://github.com/PalisadoesFoundation/talawa-admin/blob/daa074e07cb9ddfe6bb0bbbf7427f4dea4b5d8d7/src/components/UserPortal/UserPortalNavigationBar/UserDropdown.tsx#L40)

UserProfileDropdown Component

Renders a dropdown menu for user profile actions including settings navigation
and logout functionality. This component is typically used in the navigation bar
to provide quick access to user-related actions.

## Parameters

### props

`InterfaceUserDropdownProps`

## Returns

`Element`

The rendered dropdown component, or null if showUserProfile is false

## Example

```tsx
<UserProfileDropdown
  showUserProfile={true}
  testIdPrefix="navbar"
  dropDirection="start"
  handleLogout={handleLogoutAction}
  finalUserName="John Doe"
  navigate={navigate}
  tCommon={t}
  styles={navbarStyles}
  PermIdentityIcon={PermIdentityIcon}
/>
```

## See

InterfaceUserDropdownProps for detailed prop type definitions
