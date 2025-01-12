[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [utilities/encodedVideoStorage/uploadEncodedVideo](../README.md) / uploadEncodedVideo

# Function: uploadEncodedVideo()

\> **uploadEncodedVideo**(`encodedVideoURL`, `previousVideoPath`?): `Promise`\<`string`\>

Defined in: [src/utilities/encodedVideoStorage/uploadEncodedVideo.ts:19](https://github.com/PalisadoesFoundation/talawa-api/blob/25207c53554ba20e613226862dea483f0b67a696/src/utilities/encodedVideoStorage/uploadEncodedVideo.ts#L19)

Uploads an encoded video to the server.

## Parameters

### encodedVideoURL

`string`

The URL or content of the encoded video to upload.

### previousVideoPath?

Optional. The path of the previous video to delete before uploading the new one.

`null` | `string`

## Returns

`Promise`\<`string`\>

The file name of the uploaded video.
