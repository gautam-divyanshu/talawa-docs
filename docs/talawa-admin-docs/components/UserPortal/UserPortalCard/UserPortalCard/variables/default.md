[**talawa-admin**](../../../../../README.md)

***

# Variable: default

> `const` **default**: `React.FC`\<`InterfaceUserPortalCardProps`\>

Defined in: [components/UserPortal/UserPortalCard/UserPortalCard.tsx:32](https://github.com/PalisadoesFoundation/talawa-admin/blob/735c893b7cc6d606ec7a9a6509523dcad6e6ff19/src/components/UserPortal/UserPortalCard/UserPortalCard.tsx#L32)

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
  ariaLabel={t('donation.card')}
  imageSlot={<Avatar />}
  actionsSlot={<Button />}
>
  <CardContent />
</UserPortalCard>
```
