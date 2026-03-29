[**talawa-admin**](../../../../../README.md)

***

# Function: areOptionsEqual()

> **areOptionsEqual**(`option`, `value`): `boolean`

Defined in: [screens/UserPortal/Campaigns/PledgeModal.tsx:60](https://github.com/PalisadoesFoundation/talawa-admin/blob/a180e1fe530008895c63552aaba88fc299591b72/src/screens/UserPortal/Campaigns/PledgeModal.tsx#L60)

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
