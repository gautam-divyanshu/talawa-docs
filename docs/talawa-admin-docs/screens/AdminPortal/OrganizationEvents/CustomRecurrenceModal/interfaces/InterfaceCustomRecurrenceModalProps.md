[**talawa-admin**](../../../../../README.md)

***

# Interface: InterfaceCustomRecurrenceModalProps

Defined in: [types/Recurrence/interface.ts:7](https://github.com/PalisadoesFoundation/talawa-admin/blob/7de9fc83b19d9a7e4f0c39bbb159d7e24e276afa/src/types/Recurrence/interface.ts#L7)

Props interface for the CustomRecurrenceModal component

## Properties

### customRecurrenceModalIsOpen

> **customRecurrenceModalIsOpen**: `boolean`

Defined in: [types/Recurrence/interface.ts:19](https://github.com/PalisadoesFoundation/talawa-admin/blob/7de9fc83b19d9a7e4f0c39bbb159d7e24e276afa/src/types/Recurrence/interface.ts#L19)

Whether the custom recurrence modal is open

***

### endDate

> **endDate**: `Date`

Defined in: [types/Recurrence/interface.ts:15](https://github.com/PalisadoesFoundation/talawa-admin/blob/7de9fc83b19d9a7e4f0c39bbb159d7e24e276afa/src/types/Recurrence/interface.ts#L15)

Event end date

***

### hideCustomRecurrenceModal()

> **hideCustomRecurrenceModal**: () => `void`

Defined in: [types/Recurrence/interface.ts:21](https://github.com/PalisadoesFoundation/talawa-admin/blob/7de9fc83b19d9a7e4f0c39bbb159d7e24e276afa/src/types/Recurrence/interface.ts#L21)

Function to hide the custom recurrence modal

#### Returns

`void`

***

### recurrenceRuleState

> **recurrenceRuleState**: `InterfaceRecurrenceRule`

Defined in: [types/Recurrence/interface.ts:9](https://github.com/PalisadoesFoundation/talawa-admin/blob/7de9fc83b19d9a7e4f0c39bbb159d7e24e276afa/src/types/Recurrence/interface.ts#L9)

Current recurrence rule state

***

### setCustomRecurrenceModalIsOpen()

> **setCustomRecurrenceModalIsOpen**: (`state`) => `void`

Defined in: [types/Recurrence/interface.ts:23](https://github.com/PalisadoesFoundation/talawa-admin/blob/7de9fc83b19d9a7e4f0c39bbb159d7e24e276afa/src/types/Recurrence/interface.ts#L23)

Function to set custom recurrence modal open state

#### Parameters

##### state

`SetStateAction`\<`boolean`\>

#### Returns

`void`

***

### setEndDate()

> **setEndDate**: (`state`) => `void`

Defined in: [types/Recurrence/interface.ts:17](https://github.com/PalisadoesFoundation/talawa-admin/blob/7de9fc83b19d9a7e4f0c39bbb159d7e24e276afa/src/types/Recurrence/interface.ts#L17)

Function to set event end date

#### Parameters

##### state

`SetStateAction`\<`Date`\>

#### Returns

`void`

***

### setRecurrenceRuleState()

> **setRecurrenceRuleState**: (`state`) => `void`

Defined in: [types/Recurrence/interface.ts:11](https://github.com/PalisadoesFoundation/talawa-admin/blob/7de9fc83b19d9a7e4f0c39bbb159d7e24e276afa/src/types/Recurrence/interface.ts#L11)

Function to update recurrence rule state

#### Parameters

##### state

`SetStateAction`\<`InterfaceRecurrenceRule`\>

#### Returns

`void`

***

### startDate

> **startDate**: `Date`

Defined in: [types/Recurrence/interface.ts:29](https://github.com/PalisadoesFoundation/talawa-admin/blob/7de9fc83b19d9a7e4f0c39bbb159d7e24e276afa/src/types/Recurrence/interface.ts#L29)

Event start date

***

### t()

> **t**: (`key`) => `string`

Defined in: [types/Recurrence/interface.ts:27](https://github.com/PalisadoesFoundation/talawa-admin/blob/7de9fc83b19d9a7e4f0c39bbb159d7e24e276afa/src/types/Recurrence/interface.ts#L27)

Translation function

#### Parameters

##### key

`string`

#### Returns

`string`
