[**talawa-api**](../../../../README.md)

***

# Function: validateWindowConfiguration()

> **validateWindowConfiguration**(`windowConfig`): `object`

Defined in: [src/workers/eventGeneration/windowManager.ts:247](https://github.com/PalisadoesFoundation/talawa-api/blob/aa036083713a382be03ddad8b72207946e5ffeb4/src/workers/eventGeneration/windowManager.ts#L247)

Validates window configuration for processing

## Parameters

### windowConfig

#### configurationNotes

`string` \| `null`

#### createdAt

`Date`

#### createdById

`string`

#### currentWindowEndDate

`Date`

#### historyRetentionMonths

`number`

#### hotWindowMonthsAhead

`number`

#### id

`string`

#### isEnabled

`boolean`

#### lastProcessedAt

`Date`

#### lastProcessedInstanceCount

`number`

#### lastUpdatedById

`string` \| `null`

#### maxInstancesPerRun

`number`

#### organizationId

`string`

#### processingPriority

`number`

#### retentionStartDate

`Date`

#### updatedAt

`Date` \| `null`

## Returns

`object`

### errors

> **errors**: `string`[]

### isValid

> **isValid**: `boolean`
