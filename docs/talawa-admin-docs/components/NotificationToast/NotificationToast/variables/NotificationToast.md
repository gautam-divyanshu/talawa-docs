[**talawa-admin**](../../../../README.md)

***

# Variable: NotificationToast

> `const` **NotificationToast**: `InterfaceNotificationToastHelpers`

Defined in: [components/NotificationToast/NotificationToast.tsx:76](https://github.com/PalisadoesFoundation/talawa-admin/blob/fc3abee3ec7208447f84a5286dfe9cc9bbdaa02a/src/components/NotificationToast/NotificationToast.tsx#L76)

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
