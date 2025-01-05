[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [REST/services/minio](../README.md) / deleteFile

# Function: deleteFile()

\> **deleteFile**(`bucketName`, `objectKey`): `Promise`\<`DeleteObjectCommandOutput`\>

Defined in: [src/REST/services/minio/index.ts:114](https://github.com/PalisadoesFoundation/talawa-api/blob/3600eaaf2193496324ea8e78d75780839e27cae4/src/REST/services/minio/index.ts#L114)

Deletes a file from a specified S3 bucket.

The `deleteFile` function deletes an object in an S3 bucket using the `DeleteObjectCommand`.
If an error occurs during the deletion process, it logs the error and rethrows it.

## Parameters

### bucketName

`string`

The name of the S3 bucket from which the file will be deleted.

### objectKey

`string`

The key of the object to be deleted in the S3 bucket.

## Returns

`Promise`\<`DeleteObjectCommandOutput`\>

A promise that resolves to the output of the `DeleteObjectCommand`.

## Example

```typescript
const response = await deleteFile("my-bucket", "image123.png");
console.log(response);
```
