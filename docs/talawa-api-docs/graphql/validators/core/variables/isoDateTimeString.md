[**talawa-api**](../../../../README.md)

***

# Variable: isoDateTimeString

> `const` **isoDateTimeString**: `ZodPipe`\<`ZodString`, `ZodISODateTime`\>

Defined in: [src/graphql/validators/core.ts:69](https://github.com/PalisadoesFoundation/talawa-api/blob/ba020be1455b363dacbc8141230aeacb45671626/src/graphql/validators/core.ts#L69)

ISO 8601 datetime string in UTC (with Z suffix).
Format: YYYY-MM-DDTHH:mm:ssZ (milliseconds optional)

Uses `z.iso.datetime` internally, which accepts varying fractional-second precision.
