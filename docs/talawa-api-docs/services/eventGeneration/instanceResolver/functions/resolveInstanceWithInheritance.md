[**talawa-api**](../../../../README.md)

***

# Function: resolveInstanceWithInheritance()

> **resolveInstanceWithInheritance**(`input`): [`ResolvedRecurringEventInstance`](../../../../drizzle/tables/recurringEventInstances/type-aliases/ResolvedRecurringEventInstance.md)

Defined in: [src/services/eventGeneration/instanceResolver.ts:20](https://github.com/PalisadoesFoundation/talawa-api/blob/5786ae4f6a720dac990dcd3c8ac65cc65d4a7aa7/src/services/eventGeneration/instanceResolver.ts#L20)

Resolves a single generated instance by combining the properties of the base event template
with any applicable exceptions. This function forms the core of the inheritance logic,
ensuring that each instance accurately reflects its intended state.

## Parameters

### input

[`ResolveInstanceInput`](../../types/interfaces/ResolveInstanceInput.md)

An object containing the generated instance, base template, and optional exception.

## Returns

[`ResolvedRecurringEventInstance`](../../../../drizzle/tables/recurringEventInstances/type-aliases/ResolvedRecurringEventInstance.md)

- A fully resolved generated event instance with all properties correctly inherited and overridden.
