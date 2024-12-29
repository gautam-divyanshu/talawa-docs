[**talawa-api**](../../../../../README.md)

***

[talawa-api](../../../../../modules.md) / [helpers/event/updateEventHelpers/shouldUpdateBaseRecurringEvent](../README.md) / shouldUpdateBaseRecurringEvent

# Function: shouldUpdateBaseRecurringEvent()

\> **shouldUpdateBaseRecurringEvent**(`recurrenceRuleEndDate`, `baseRecurringEventEndDate`): `boolean`

This function checks whether the baseRecurringEvent should be updated.

## Parameters

### recurrenceRuleEndDate

the end date of the recurrence rule.

`undefined` | `null` | `string`

### baseRecurringEventEndDate

the end date of the base recurring event.

`undefined` | `null` | `string`

## Returns

`boolean`

true if the recurrence rule is the latest rule that the instances were following, false otherwise.

## Defined in

[src/helpers/event/updateEventHelpers/shouldUpdateBaseRecurringEvent.ts:8](https://github.com/PalisadoesFoundation/talawa-api/blob/3a5276aff43f5de4f7fab3ec9683a420dcdc7a06/src/helpers/event/updateEventHelpers/shouldUpdateBaseRecurringEvent.ts#L8)
