[**talawa-admin**](../../README.md)

***

# Function: getMemberLabel()

> **getMemberLabel**(`member`): `string`

Defined in: [screens/UserPortal/Campaigns/PledgeModal.tsx:106](https://github.com/PalisadoesFoundation/talawa-admin/blob/4725f1e5bdbf3744e5a256b68fe2df6d33a549d0/src/screens/UserPortal/Campaigns/PledgeModal.tsx#L106)

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
