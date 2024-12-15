[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [utilities/encodedImageStorage/uploadEncodedImage](../README.md) / uploadEncodedImage

# Function: uploadEncodedImage()

\> **uploadEncodedImage**(`encodedImageURL`, `previousImagePath`?): `Promise`\<`string`\>

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

## Defined in

[src/utilities/encodedImageStorage/uploadEncodedImage.ts:45](https://github.com/PalisadoesFoundation/talawa-api/blob/6bd0fecc1032af2aa70d925c85724d9fec2350f9/src/utilities/encodedImageStorage/uploadEncodedImage.ts#L45)
