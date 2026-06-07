[**talawa-admin**](../../../../../../README.md)

***

# ~~Variable: getStatusBadgeProps~~

> `const` **getStatusBadgeProps**: (`status`) => `object` = `mapVolunteerStatusToVariant`

Defined in: [screens/UserPortal/Volunteer/UpcomingEvents/UpcomingEvents.tsx:40](https://github.com/PalisadoesFoundation/talawa-admin/blob/b87aaed727690609a6d5a345627bfa10a8d26ef0/src/screens/UserPortal/Volunteer/UpcomingEvents/UpcomingEvents.tsx#L40)

Maps membership status to StatusBadge variant.

Maps volunteer membership status to StatusBadge variant.

This function provides a single source of truth for status→variant mapping,
ensuring consistent visual representation across the application.

## Parameters

### status

`string`

The membership status string (e.g., 'requested', 'invited', 'accepted', 'rejected')

## Returns

`object`

Object containing the StatusBadge variant

### ~~variant~~

> **variant**: `StatusVariant`

## Example

```typescript
const badgeProps = mapVolunteerStatusToVariant('invited');
// Returns: { variant: 'pending' }
```

## Deprecated

Use mapVolunteerStatusToVariant from utils/volunteerStatusMapper instead.
This export is maintained for backward compatibility with existing tests.

## Param

**status**

The membership status string (e.g., 'requested', 'invited', 'accepted', 'rejected')

## Returns

Object containing the StatusBadge variant
