[**talawa-admin**](../../../../../README.md)

***

# Variable: default

> `const` **default**: `React.FC`\<`InterfaceUserPortalCardProps`\>

Defined in: [components/UserPortal/UserPortalCard/UserPortalCard.tsx:34](https://github.com/PalisadoesFoundation/talawa-admin/blob/460bd2773acfa2e179245b3aaa6f4a49389b14d5/src/components/UserPortal/UserPortalCard/UserPortalCard.tsx#L34)

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
- aria-label provided by consumer (i18n required)

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
