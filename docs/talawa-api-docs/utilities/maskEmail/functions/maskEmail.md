[**talawa-api**](../../../README.md)

***

# Function: maskEmail()

> **maskEmail**(`email`): `string`

Defined in: [src/utilities/maskEmail.ts:14](https://github.com/PalisadoesFoundation/talawa-api/blob/e5257a859e980c4157b048d478eb38a347def32f/src/utilities/maskEmail.ts#L14)

Masks an email address for logging purposes to protect privacy.
Shows first character of local part and full domain.

## Parameters

### email

`string`

The email address to mask

## Returns

`string`

Masked email (e.g., "j***@example.com")

## Example

```typescript
maskEmail("john.doe@example.com") // Returns "j***@example.com"
maskEmail("a@test.org") // Returns "a***@test.org"
```
