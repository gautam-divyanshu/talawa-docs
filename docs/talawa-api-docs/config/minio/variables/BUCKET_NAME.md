[**talawa-api**](../../../README.md)

***

[talawa-api](../../../modules.md) / [config/minio](../README.md) / BUCKET\_NAME

# Variable: BUCKET\_NAME

\> `const` **BUCKET\_NAME**: `undefined` \| `string` = `process.env.MINIO_BUCKET`

Defined in: [src/config/minio/index.ts:47](https://github.com/PalisadoesFoundation/talawa-api/blob/25207c53554ba20e613226862dea483f0b67a696/src/config/minio/index.ts#L47)

The name of the bucket used in the MinIO storage, defined via an environment variable.

## Example

```typescript
console.log(BUCKET_NAME); // Logs the bucket name from the environment
```

## Returns

The name of the MinIO bucket.
