[**talawa-admin**](../../../../README.md)

***

# Variable: NotificationToast

> `const` **NotificationToast**: `InterfaceNotificationToastHelpers`

Defined in: [shared-components/NotificationToast/NotificationToast.tsx:126](https://github.com/PalisadoesFoundation/talawa-admin/blob/6fc3485a4facf0986d54647cd149412b30c0b289/src/shared-components/NotificationToast/NotificationToast.tsx#L126)

NotificationToast

A small wrapper around `react-toastify` that standardizes toast defaults and
supports translating messages with an explicit i18n namespace.

## Examples

```ts
NotificationToast.success('Saved');
```

```ts
NotificationToast.error({ key: 'unknownError', namespace: 'errors' });
```

```ts
NotificationToast.dismiss(); // Dismiss all active toasts
```
