[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [utilities/encodedImageStorage/deletePreviousImage](../README.md) / deletePreviousImage

# Function: deletePreviousImage()

\> **deletePreviousImage**(`imageToBeDeletedPath`): `Promise`\<`void`\>

Defined in: [src/utilities/encodedImageStorage/deletePreviousImage.ts:10](https://github.com/PalisadoesFoundation/talawa-api/blob/33412350fcbc7b376cab529f8a291f46d0165828/src/utilities/encodedImageStorage/deletePreviousImage.ts#L10)

Deletes the previous image file if its `numberOfUses` is 1 and updates the `numberOfUses` in the database.

## Parameters

### imageToBeDeletedPath

`string`

Path of the image to be deleted.

## Returns

`Promise`\<`void`\>
