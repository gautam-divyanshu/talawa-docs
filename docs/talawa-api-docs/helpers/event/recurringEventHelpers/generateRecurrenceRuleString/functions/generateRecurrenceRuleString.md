[**talawa-api**](../../../../../README.md)

***

[talawa-api](../../../../../modules.md) / [helpers/event/recurringEventHelpers/generateRecurrenceRuleString](../README.md) / generateRecurrenceRuleString

# Function: generateRecurrenceRuleString()

\> **generateRecurrenceRuleString**(`recurrenceRuleData`): `string`

Defined in: [src/helpers/event/recurringEventHelpers/generateRecurrenceRuleString.ts:15](https://github.com/PalisadoesFoundation/talawa-api/blob/3600eaaf2193496324ea8e78d75780839e27cae4/src/helpers/event/recurringEventHelpers/generateRecurrenceRuleString.ts#L15)

Generates a recurrence rule (RRULE) string based on the provided recurrence rule input.

## Parameters

### recurrenceRuleData

[`RecurrenceRuleInput`](../../../../../types/generatedGraphQLTypes/type-aliases/RecurrenceRuleInput.md)

The input data defining the recurrence rule.

## Returns

`string`

The generated recurrence rule string suitable for creating a valid RRULE object.

## Remarks

This function performs the following steps:
1. Extracts relevant fields from the recurrenceRuleData such as start date, end date, frequency, weekdays, interval, count, and week day occurrence in month.
2. Converts start and end dates to string format suitable for RRULE properties.
3. Constructs the RRULE string based on the extracted fields, using standard RRULE syntax.
