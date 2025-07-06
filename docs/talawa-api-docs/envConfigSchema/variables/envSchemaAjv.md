[**talawa-api**](../../README.md)

***

# Variable: envSchemaAjv

> `const` **envSchemaAjv**: `EnvSchemaOpt`\[`"ajv"`\]

Defined in: [src/envConfigSchema.ts:305](https://github.com/PalisadoesFoundation/talawa-api/blob/5ea9b61d087fd885d263126674716e202dd020a5/src/envConfigSchema.ts#L305)

The `@sinclair/typebox` package doesn't do format validation by itself and requires custom validators for it. The `ajv-formats` package provides this functionality and this object is used to provide the talawa api specific configuration for the `ajv` property accepted by `envSchema` to define those custom format validators.
