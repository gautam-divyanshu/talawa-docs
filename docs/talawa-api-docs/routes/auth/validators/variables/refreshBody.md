[**talawa-api**](../../../../README.md)

***

# Variable: refreshBody

> `const` **refreshBody**: `ZodObject`\<\{ `refreshToken`: `ZodOptional`\<`ZodString`\>; \}, `$strip`\>

Defined in: [src/routes/auth/validators.ts:42](https://github.com/PalisadoesFoundation/talawa-api/blob/29f85325b75d0f277ef992b07c6afd8761e3db6a/src/routes/auth/validators.ts#L42)

Zod schema for REST refresh-token request body.
In refreshBody, `refreshToken` is intentionally optional because the token may be
supplied either in the JSON body or via the HttpOnly cookie (e.g. `talawa_refresh_token`).
This is deliberate; do not tighten the schema so that both sources remain supported.
