[**talawa-admin**](../../../../../README.md)

***

# Function: default()

> **default**(`__namedParameters`): `Element`

Defined in: [components/UserPortal/UserPortalCard/UserPortalCard.tsx:34](https://github.com/PalisadoesFoundation/talawa-admin/blob/daa074e07cb9ddfe6bb0bbbf7427f4dea4b5d8d7/src/components/UserPortal/UserPortalCard/UserPortalCard.tsx#L34)

UserPortalCard

Reusable 3-section layout wrapper for User Portal cards.

Structure:
[ imageSlot ] [ content (children) ] [ actionsSlot ]

Responsibilities:
- Centralizes spacing and alignment logic
- Supports density variants (compact / standard / expanded)
- Remains content-agnostic and styling-agnostic

Accessibility:
- role="group"
- aria-label provided by consumer or defaults to a translated internal label.

## Parameters

### \_\_namedParameters

`InterfaceUserPortalCardProps`

## Returns

`Element`

## Example

```tsx
<UserPortalCard
  variant="compact"
  ariaLabel={t('donation.card_aria')}
  imageSlot={<ProfileAvatarDisplay fallbackName="User Name" />}
  actionsSlot={<Button />}
>
  <CardContent />
</UserPortalCard>
```
