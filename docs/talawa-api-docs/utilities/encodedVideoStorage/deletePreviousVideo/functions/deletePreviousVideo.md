[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [utilities/encodedVideoStorage/deletePreviousVideo](../README.md) / deletePreviousVideo

# Function: deletePreviousVideo()

\> **deletePreviousVideo**(`videoToBeDeletedPath`): `Promise`\<`void`\>

Defined in: [src/utilities/encodedVideoStorage/deletePreviousVideo.ts:12](https://github.com/PalisadoesFoundation/talawa-api/blob/25207c53554ba20e613226862dea483f0b67a696/src/utilities/encodedVideoStorage/deletePreviousVideo.ts#L12)

Deletes the previous video file and updates its database entry.

## Parameters

### videoToBeDeletedPath

`string`

The path of the video file to be deleted.

## Returns

`Promise`\<`void`\>

A promise that resolves once the video file and database entry are deleted or updated.
