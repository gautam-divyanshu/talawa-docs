[**talawa-admin**](../../../../../README.md)

***

# Variable: default

> `const` **default**: `React.FC`\<`InterfaceUserPortalCardProps`\>

Defined in: [components/UserPortal/UserPortalCard/UserPortalCard.tsx:32](https://github.com/PalisadoesFoundation/talawa-admin/blob/fc82c850e280189101f3f3784976f5c13ae288a3/src/components/UserPortal/UserPortalCard/UserPortalCard.tsx#L32)

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

```ts
<UserPortalCard
  variant="compact"
  ariaLabel={t('donation.card_aria')}
  imageSlot={<ProfileAvatarDisplay fallbackName="User Name" />}
  actionsSlot={<Button />}
>
  <CardContent />
</UserPortalCard>
```
