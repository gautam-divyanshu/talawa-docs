[**talawa-admin**](../../README.md)

***

# Function: getMemberLabel()

> **getMemberLabel**(`member`): `string`

Defined in: [screens/UserPortal/Campaigns/PledgeModal.tsx:104](https://github.com/PalisadoesFoundation/talawa-admin/blob/8fd8f00df0a90979db5fffb62c8c8045329d3776/src/screens/UserPortal/Campaigns/PledgeModal.tsx#L104)

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
getMemberLabel({ firstName: 'John', lastName: 'Doe' } as InterfaceUserInfoPG);
// returns "John Doe"
```
