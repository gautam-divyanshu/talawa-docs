[**talawa-admin**](../../../../../README.md)

***

# Function: isValidFilteringOption()

> **isValidFilteringOption**(`option`): `option is FilteringOption`

Defined in: [screens/AdminPortal/Users/Users.tsx:55](https://github.com/PalisadoesFoundation/talawa-admin/blob/fb3b30d69cbd78c0bc89ab15fb81a998876e1850/src/screens/AdminPortal/Users/Users.tsx#L55)

Type guard that validates if a value is a valid FilteringOption.

## Parameters

### option

`unknown`

The value to validate against the FilteringOption union type.

## Returns

`option is FilteringOption`

True if option is a valid FilteringOption ('admin', 'user', or 'cancel').
