[**talawa-admin**](../../../../../README.md)

***

# Interface: InterfaceWeeklyEventCalenderProps

Defined in: [components/EventCalender/Weekly/WeeklyEventCalender.tsx:47](https://github.com/PalisadoesFoundation/talawa-admin/blob/b87aaed727690609a6d5a345627bfa10a8d26ef0/src/components/EventCalender/Weekly/WeeklyEventCalender.tsx#L47)

## Extends

- `InterfaceCalendarProps`

## Properties

### currentDate

> **currentDate**: `Date`

Defined in: [components/EventCalender/Weekly/WeeklyEventCalender.tsx:48](https://github.com/PalisadoesFoundation/talawa-admin/blob/b87aaed727690609a6d5a345627bfa10a8d26ef0/src/components/EventCalender/Weekly/WeeklyEventCalender.tsx#L48)

***

### currentDateOfMonth?

> `optional` **currentDateOfMonth?**: `number`

Defined in: [types/Event/interface.ts:136](https://github.com/PalisadoesFoundation/talawa-admin/blob/b87aaed727690609a6d5a345627bfa10a8d26ef0/src/types/Event/interface.ts#L136)

#### Inherited from

`InterfaceCalendarProps.currentDateOfMonth`

***

### currentMonth?

> `optional` **currentMonth?**: `number`

Defined in: [types/Event/interface.ts:134](https://github.com/PalisadoesFoundation/talawa-admin/blob/b87aaed727690609a6d5a345627bfa10a8d26ef0/src/types/Event/interface.ts#L134)

#### Inherited from

`InterfaceCalendarProps.currentMonth`

***

### currentYear?

> `optional` **currentYear?**: `number`

Defined in: [types/Event/interface.ts:135](https://github.com/PalisadoesFoundation/talawa-admin/blob/b87aaed727690609a6d5a345627bfa10a8d26ef0/src/types/Event/interface.ts#L135)

#### Inherited from

`InterfaceCalendarProps.currentYear`

***

### dayEventsResetKey?

> `optional` **dayEventsResetKey?**: `number`

Defined in: [types/Event/interface.ts:129](https://github.com/PalisadoesFoundation/talawa-admin/blob/b87aaed727690609a6d5a345627bfa10a8d26ef0/src/types/Event/interface.ts#L129)

#### Inherited from

`InterfaceCalendarProps.dayEventsResetKey`

***

### dayHasMoreMap?

> `optional` **dayHasMoreMap?**: `Record`\<`string`, `boolean`\>

Defined in: [types/Event/interface.ts:130](https://github.com/PalisadoesFoundation/talawa-admin/blob/b87aaed727690609a6d5a345627bfa10a8d26ef0/src/types/Event/interface.ts#L130)

#### Inherited from

`InterfaceCalendarProps.dayHasMoreMap`

***

### eventData

> **eventData**: `IEvent`[]

Defined in: [types/Event/interface.ts:123](https://github.com/PalisadoesFoundation/talawa-admin/blob/b87aaed727690609a6d5a345627bfa10a8d26ef0/src/types/Event/interface.ts#L123)

#### Inherited from

`InterfaceCalendarProps.eventData`

***

### isMonthChangeDisabled?

> `optional` **isMonthChangeDisabled?**: `boolean`

Defined in: [types/Event/interface.ts:131](https://github.com/PalisadoesFoundation/talawa-admin/blob/b87aaed727690609a6d5a345627bfa10a8d26ef0/src/types/Event/interface.ts#L131)

#### Inherited from

`InterfaceCalendarProps.isMonthChangeDisabled`

***

### onCurrentDateChange?

> `optional` **onCurrentDateChange?**: (`dayOfMonth`) => `void`

Defined in: [types/Event/interface.ts:133](https://github.com/PalisadoesFoundation/talawa-admin/blob/b87aaed727690609a6d5a345627bfa10a8d26ef0/src/types/Event/interface.ts#L133)

#### Parameters

##### dayOfMonth

`number`

#### Returns

`void`

#### Inherited from

`InterfaceCalendarProps.onCurrentDateChange`

***

### onMonthChange?

> `optional` **onMonthChange?**: (`month`, `year`) => `void`

Defined in: [types/Event/interface.ts:132](https://github.com/PalisadoesFoundation/talawa-admin/blob/b87aaed727690609a6d5a345627bfa10a8d26ef0/src/types/Event/interface.ts#L132)

#### Parameters

##### month

`number`

##### year

`number`

#### Returns

`void`

#### Inherited from

`InterfaceCalendarProps.onMonthChange`

***

### orgData?

> `optional` **orgData?**: `IOrgList` \| `InterfaceOrgForEventFilter`

Defined in: [types/Event/interface.ts:125](https://github.com/PalisadoesFoundation/talawa-admin/blob/b87aaed727690609a6d5a345627bfa10a8d26ef0/src/types/Event/interface.ts#L125)

#### Inherited from

`InterfaceCalendarProps.orgData`

***

### refetchEvents?

> `optional` **refetchEvents?**: () => `void`

Defined in: [types/Event/interface.ts:124](https://github.com/PalisadoesFoundation/talawa-admin/blob/b87aaed727690609a6d5a345627bfa10a8d26ef0/src/types/Event/interface.ts#L124)

#### Returns

`void`

#### Inherited from

`InterfaceCalendarProps.refetchEvents`

***

### userId?

> `optional` **userId?**: `string`

Defined in: [types/Event/interface.ts:127](https://github.com/PalisadoesFoundation/talawa-admin/blob/b87aaed727690609a6d5a345627bfa10a8d26ef0/src/types/Event/interface.ts#L127)

#### Inherited from

`InterfaceCalendarProps.userId`

***

### userRole?

> `optional` **userRole?**: `string`

Defined in: [types/Event/interface.ts:126](https://github.com/PalisadoesFoundation/talawa-admin/blob/b87aaed727690609a6d5a345627bfa10a8d26ef0/src/types/Event/interface.ts#L126)

#### Inherited from

`InterfaceCalendarProps.userRole`

***

### viewType?

> `optional` **viewType?**: [`ViewType`](../../../../../screens/AdminPortal/OrganizationEvents/OrganizationEvents/enumerations/ViewType.md)

Defined in: [types/Event/interface.ts:128](https://github.com/PalisadoesFoundation/talawa-admin/blob/b87aaed727690609a6d5a345627bfa10a8d26ef0/src/types/Event/interface.ts#L128)

#### Inherited from

`InterfaceCalendarProps.viewType`
