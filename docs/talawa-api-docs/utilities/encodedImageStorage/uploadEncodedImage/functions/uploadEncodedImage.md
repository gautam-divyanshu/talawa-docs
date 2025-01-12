[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [utilities/encodedImageStorage/uploadEncodedImage](../README.md) / uploadEncodedImage

# Function: uploadEncodedImage()

\> **uploadEncodedImage**(`encodedImageURL`, `previousImagePath`?): `Promise`\<`string`\>

Defined in: [src/utilities/encodedImageStorage/uploadEncodedImage.ts:46](https://github.com/PalisadoesFoundation/talawa-api/blob/25207c53554ba20e613226862dea483f0b67a696/src/utilities/encodedImageStorage/uploadEncodedImage.ts#L46)

Uploads an encoded image to the server.

## Parameters

### encodedImageURL

`string`

The URL or content of the encoded image to upload.

### previousImagePath?

Optional. The path of the previous image to delete before uploading the new one.

`null` | `string`

## Returns

`Promise`\<`string`\>

The file name of the uploaded image.
