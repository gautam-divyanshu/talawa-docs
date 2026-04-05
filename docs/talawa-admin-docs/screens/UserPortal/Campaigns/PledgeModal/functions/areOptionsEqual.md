[**talawa-admin**](../../../../../README.md)

***

# Function: areOptionsEqual()

> **areOptionsEqual**(`option`, `value`): `boolean`

Defined in: [screens/UserPortal/Campaigns/PledgeModal.tsx:60](https://github.com/PalisadoesFoundation/talawa-admin/blob/daa074e07cb9ddfe6bb0bbbf7427f4dea4b5d8d7/src/screens/UserPortal/Campaigns/PledgeModal.tsx#L60)

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
areOptionsEqual(
{ id: '1' } as InterfaceUserInfoPG,
{ id: '1' } as InterfaceUserInfoPG,
);
// returns true
```
