[**talawa-api**](../../README.md)

***

# Variable: envSchemaAjv

> `const` **envSchemaAjv**: `EnvSchemaOpt`\[`"ajv"`\]

Defined in: [src/envConfigSchema.ts:776](https://github.com/PalisadoesFoundation/talawa-api/blob/36d1ea832b10d1e9883eff7a03104362b71079bd/src/envConfigSchema.ts#L776)

The `@sinclair/typebox` package doesn't do format validation by itself and requires custom validators for it. The `ajv-formats` package provides this functionality and this object is used to provide the talawa api specific configuration for the `ajv` property accepted by `envSchema` to define those custom format validators.
