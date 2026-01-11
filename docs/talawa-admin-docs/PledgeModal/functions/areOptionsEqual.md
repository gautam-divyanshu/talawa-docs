[**talawa-admin**](../../README.md)

***

# Function: areOptionsEqual()

> **areOptionsEqual**(`option`, `value`): `boolean`

Defined in: [screens/UserPortal/Campaigns/PledgeModal.tsx:88](https://github.com/PalisadoesFoundation/talawa-admin/blob/8fd8f00df0a90979db5fffb62c8c8045329d3776/src/screens/UserPortal/Campaigns/PledgeModal.tsx#L88)

Compares two user options by ID.
Used by MUI Autocomplete to determine equality.

## Parameters

### option

`InterfaceUserInfoPG`

Option from the Autocomplete list

### value

`InterfaceUserInfoPG`

Currently selected value

## Returns

`boolean`

True if both options refer to the same user

## Example

```ts
areOptionsEqual({ id: '1' } as InterfaceUserInfoPG, { id: '1' } as InterfaceUserInfoPG);
// returns true
```
