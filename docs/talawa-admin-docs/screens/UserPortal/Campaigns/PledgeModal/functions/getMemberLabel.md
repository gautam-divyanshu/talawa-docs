[**talawa-admin**](../../../../../README.md)

***

# Function: getMemberLabel()

> **getMemberLabel**(`member`): `string`

Defined in: [screens/UserPortal/Campaigns/PledgeModal.tsx:81](https://github.com/PalisadoesFoundation/talawa-admin/blob/b87aaed727690609a6d5a345627bfa10a8d26ef0/src/screens/UserPortal/Campaigns/PledgeModal.tsx#L81)

Builds a display label for a member.
Empty name parts are safely ignored.

## Parameters

### member

`InterfaceUserInfoPG`

User object containing name fields

## Returns

`string`

Full name string constructed from available name parts

## Example

```ts
getMemberLabel({
firstName: 'John',
lastName: 'Doe',
} as InterfaceUserInfoPG);
// returns "John Doe"
```
