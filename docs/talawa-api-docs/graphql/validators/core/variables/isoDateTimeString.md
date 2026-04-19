[**talawa-api**](../../../../README.md)

***

# Variable: isoDateTimeString

> `const` **isoDateTimeString**: `ZodPipe`\<`ZodString`, `ZodISODateTime`\>

Defined in: [src/graphql/validators/core.ts:69](https://github.com/PalisadoesFoundation/talawa-api/blob/5246239edff12106460ef2c69cc54e98da4dedcf/src/graphql/validators/core.ts#L69)

ISO 8601 datetime string in UTC (with Z suffix).
Format: YYYY-MM-DDTHH:mm:ssZ (milliseconds optional)

Uses `z.iso.datetime` internally, which accepts varying fractional-second precision.
