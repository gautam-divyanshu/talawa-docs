[**talawa-admin**](../../../../../README.md)

***

# Function: areOptionsEqual()

> **areOptionsEqual**(`option`, `value`): `boolean`

Defined in: [screens/UserPortal/Campaigns/PledgeModal.tsx:57](https://github.com/PalisadoesFoundation/talawa-admin/blob/1de97dc40e6b2c1912f1a794db50684eedba4ceb/src/screens/UserPortal/Campaigns/PledgeModal.tsx#L57)

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
