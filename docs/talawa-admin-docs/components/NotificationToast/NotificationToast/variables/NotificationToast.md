[**talawa-admin**](../../../../README.md)

***

# Variable: NotificationToast

> `const` **NotificationToast**: `InterfaceNotificationToastHelpers`

Defined in: [components/NotificationToast/NotificationToast.tsx:76](https://github.com/PalisadoesFoundation/talawa-admin/blob/735c893b7cc6d606ec7a9a6509523dcad6e6ff19/src/components/NotificationToast/NotificationToast.tsx#L76)

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
