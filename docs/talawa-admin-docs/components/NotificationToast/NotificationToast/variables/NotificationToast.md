[**talawa-admin**](../../../../README.md)

***

# Variable: NotificationToast

> `const` **NotificationToast**: `InterfaceNotificationToastHelpers`

Defined in: [components/NotificationToast/NotificationToast.tsx:115](https://github.com/PalisadoesFoundation/talawa-admin/blob/7de9fc83b19d9a7e4f0c39bbb159d7e24e276afa/src/components/NotificationToast/NotificationToast.tsx#L115)

NotificationToast

A small wrapper around `react-toastify` that standardizes toast defaults and
supports translating messages with an explicit i18n namespace.

## Examples

```ts
NotificationToast.success('Saved');
```

```
NotificationToast.error({ key: 'unknownError', namespace: 'errors' });
```

```ts
NotificationToast.dismiss(); // Dismiss all active toasts
```

```ts
Notification.promise(promisifiedFunction, {
 pending: 'pending message',
 success: 'success message',
 error: 'error message'
});
```
