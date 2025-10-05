[**talawa-api**](../../../README.md)

***

# Function: applyRecurrenceOverrides()

> **applyRecurrenceOverrides**(`newStartAt`, `originalRecurrence`, `inputRecurrence?`): `object`

Defined in: [src/utilities/recurringEventHelpers.ts:340](https://github.com/PalisadoesFoundation/talawa-api/blob/8d297f60dc1691c65743cbe7bf8fda727ed61654/src/utilities/recurringEventHelpers.ts#L340)

Applies calendar-style override logic for recurring event updates.
This function implements the following rules:
1. If startAt is provided and byDay is not specified in recurrence,
   derive byDay from the new startAt day of week
2. If byDay is explicitly provided in recurrence, use it as-is
3. For monthly/yearly events, similar logic applies to byMonthDay/byMonth

## Parameters

### newStartAt

`Date`

The new start time for the event (if provided)

### originalRecurrence

`Pick`\<*typeof* `recurrenceRulesTable.$inferSelect`, `"frequency"` \| `"interval"` \| `"recurrenceEndDate"` \| `"count"` \| `"byDay"` \| `"byMonth"` \| `"byMonthDay"`\>

The original recurrence rule from the database

### inputRecurrence?

The recurrence input from the user (if provided)

#### byDay?

`string`[] = `...`

#### byMonth?

`number`[] = `...`

#### byMonthDay?

`number`[] = `...`

#### count?

`number` = `...`

#### endDate?

`Date` = `...`

#### frequency?

`"DAILY"` \| `"WEEKLY"` \| `"MONTHLY"` \| `"YEARLY"` = `recurrenceFrequencyEnum`

#### interval?

`number` = `...`

#### never?

`boolean` = `...`

## Returns

`object`

The updated recurrence configuration with proper overrides applied

### byDay?

> `optional` **byDay**: `string`[]

### byMonth?

> `optional` **byMonth**: `number`[]

### byMonthDay?

> `optional` **byMonthDay**: `number`[]

### count?

> `optional` **count**: `number`

### endDate?

> `optional` **endDate**: `Date`

### frequency?

> `optional` **frequency**: `"DAILY"` \| `"WEEKLY"` \| `"MONTHLY"` \| `"YEARLY"` = `recurrenceFrequencyEnum`

### interval?

> `optional` **interval**: `number`

### never?

> `optional` **never**: `boolean`
