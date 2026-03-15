[**talawa-admin**](../../../../README.md)

***

# Variable: NotificationToast

> `const` **NotificationToast**: `InterfaceNotificationToastHelpers`

Defined in: [shared-components/NotificationToast/NotificationToast.tsx:126](https://github.com/PalisadoesFoundation/talawa-admin/blob/fb3b30d69cbd78c0bc89ab15fb81a998876e1850/src/shared-components/NotificationToast/NotificationToast.tsx#L126)

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
