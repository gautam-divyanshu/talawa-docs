[**talawa-admin**](../../README.md)

***

# Function: areOptionsEqual()

> **areOptionsEqual**(`option`, `value`): `boolean`

Defined in: [screens/UserPortal/Campaigns/PledgeModal.tsx:90](https://github.com/PalisadoesFoundation/talawa-admin/blob/4725f1e5bdbf3744e5a256b68fe2df6d33a549d0/src/screens/UserPortal/Campaigns/PledgeModal.tsx#L90)

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
