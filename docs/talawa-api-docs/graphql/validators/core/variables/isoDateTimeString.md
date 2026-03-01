[**talawa-api**](../../../../README.md)

***

# Variable: isoDateTimeString

> `const` **isoDateTimeString**: `ZodPipe`\<`ZodString`, `ZodISODateTime`\>

Defined in: [src/graphql/validators/core.ts:69](https://github.com/PalisadoesFoundation/talawa-api/blob/29f85325b75d0f277ef992b07c6afd8761e3db6a/src/graphql/validators/core.ts#L69)

ISO 8601 datetime string in UTC (with Z suffix).
Format: YYYY-MM-DDTHH:mm:ssZ (milliseconds optional)

Uses `z.iso.datetime` internally, which accepts varying fractional-second precision.
