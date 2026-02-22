[**talawa-api**](../../../../README.md)

***

# Variable: isoDateTimeString

> `const` **isoDateTimeString**: `ZodPipe`\<`ZodString`, `ZodISODateTime`\>

Defined in: [src/graphql/validators/core.ts:69](https://github.com/PalisadoesFoundation/talawa-api/blob/e0c5d64d62f9cbd7e709b63db8cf19f32f235f61/src/graphql/validators/core.ts#L69)

ISO 8601 datetime string in UTC (with Z suffix).
Format: YYYY-MM-DDTHH:mm:ssZ (milliseconds optional)

Uses `z.iso.datetime` internally, which accepts varying fractional-second precision.
