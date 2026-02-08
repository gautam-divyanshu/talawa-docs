[**talawa-api**](../../../README.md)

***

# Function: isSanitizedInput()

> **isSanitizedInput**(`value`): `value is SanitizedInputString`

Defined in: [src/utilities/sanitizer.ts:79](https://github.com/PalisadoesFoundation/talawa-api/blob/36d1ea832b10d1e9883eff7a03104362b71079bd/src/utilities/sanitizer.ts#L79)

Type guard to check if a value is a SanitizedInputString.
At runtime, this just checks if it's a trimmed string (may be empty).
The branded type provides compile-time safety.

## Parameters

### value

`unknown`

The value to check.

## Returns

`value is SanitizedInputString`

- True if the value appears to be sanitized input.
