[**talawa-admin**](../../../../../README.md)

***

# Function: isValidFilteringOption()

> **isValidFilteringOption**(`option`): `option is FilteringOption`

Defined in: [screens/AdminPortal/Users/Users.tsx:55](https://github.com/PalisadoesFoundation/talawa-admin/blob/460bd2773acfa2e179245b3aaa6f4a49389b14d5/src/screens/AdminPortal/Users/Users.tsx#L55)

Type guard that validates if a value is a valid FilteringOption.

## Parameters

### option

`unknown`

The value to validate against the FilteringOption union type.

## Returns

`option is FilteringOption`

True if option is a valid FilteringOption ('admin', 'user', or 'cancel').
