[**talawa-api**](../../README.md)

***

# Variable: envSchemaAjv

> `const` **envSchemaAjv**: `EnvSchemaOpt`\[`"ajv"`\]

Defined in: [src/envConfigSchema.ts:325](https://github.com/PalisadoesFoundation/talawa-api/blob/683c972995b645053f41c76c01368003402b250c/src/envConfigSchema.ts#L325)

The `@sinclair/typebox` package doesn't do format validation by itself and requires custom validators for it. The `ajv-formats` package provides this functionality and this object is used to provide the talawa api specific configuration for the `ajv` property accepted by `envSchema` to define those custom format validators.
