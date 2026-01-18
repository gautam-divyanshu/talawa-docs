[**talawa-admin**](../../../../../README.md)

***

# Function: getMemberLabel()

> **getMemberLabel**(`member`): `string`

Defined in: [screens/UserPortal/Campaigns/PledgeModal.tsx:78](https://github.com/PalisadoesFoundation/talawa-admin/blob/7de9fc83b19d9a7e4f0c39bbb159d7e24e276afa/src/screens/UserPortal/Campaigns/PledgeModal.tsx#L78)

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
