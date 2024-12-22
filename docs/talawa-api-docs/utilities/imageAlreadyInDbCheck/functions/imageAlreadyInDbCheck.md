[**talawa-api**](../../../README.md)

***

[talawa-api](../../../modules.md) / [utilities/imageAlreadyInDbCheck](../README.md) / imageAlreadyInDbCheck

# Function: imageAlreadyInDbCheck()

\> **imageAlreadyInDbCheck**(`oldImagePath`, `newImagePath`): `Promise`\<`string`\>

Checks if an image already exists in the database using its hash value.
If the image exists, it points to the existing image and removes the newly uploaded image.
If the image does not exist, it saves the image hash in the database.

## Parameters

### oldImagePath

Path of the old image that might be replaced.

`null` | `string`

### newImagePath

`string`

Path of the newly uploaded image.

## Returns

`Promise`\<`string`\>

The file name of the existing image if found; otherwise, undefined.

## Defined in

[src/utilities/imageAlreadyInDbCheck.ts:16](https://github.com/PalisadoesFoundation/talawa-api/blob/039b0f127fb8caa46d57186ab4b3bb27fe150903/src/utilities/imageAlreadyInDbCheck.ts#L16)
