[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [utilities/encodedVideoStorage/uploadEncodedVideo](../README.md) / uploadEncodedVideo

# Function: uploadEncodedVideo()

\> **uploadEncodedVideo**(`encodedVideoURL`, `previousVideoPath`?): `Promise`\<`string`\>

Defined in: [src/utilities/encodedVideoStorage/uploadEncodedVideo.ts:19](https://github.com/PalisadoesFoundation/talawa-api/blob/33412350fcbc7b376cab529f8a291f46d0165828/src/utilities/encodedVideoStorage/uploadEncodedVideo.ts#L19)

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
