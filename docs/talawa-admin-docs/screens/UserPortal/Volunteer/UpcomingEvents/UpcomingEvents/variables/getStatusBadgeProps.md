[**talawa-admin**](../../../../../../README.md)

***

# ~~Variable: getStatusBadgeProps()~~

> `const` **getStatusBadgeProps**: (`status`) => `object` = `mapVolunteerStatusToVariant`

Defined in: [screens/UserPortal/Volunteer/UpcomingEvents/UpcomingEvents.tsx:40](https://github.com/PalisadoesFoundation/talawa-admin/blob/1de97dc40e6b2c1912f1a794db50684eedba4ceb/src/screens/UserPortal/Volunteer/UpcomingEvents/UpcomingEvents.tsx#L40)

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

The membership status string (e.g., 'requested', 'invited', 'accepted', 'rejected')

## Returns

Object containing the StatusBadge variant
