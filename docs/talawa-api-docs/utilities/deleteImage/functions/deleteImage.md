[**talawa-api**](../../../README.md)

***

[talawa-api](../../../modules.md) / [utilities/deleteImage](../README.md) / deleteImage

# Function: deleteImage()

\> **deleteImage**(`imageToBeDeleted`, `imageBelongingToItem`?): `Promise`\<`void`\>

Defined in: [src/utilities/deleteImage.ts:13](https://github.com/PalisadoesFoundation/talawa-api/blob/3600eaaf2193496324ea8e78d75780839e27cae4/src/utilities/deleteImage.ts#L13)

Deletes an image file if it meets deletion criteria based on usage and duplicate checks.

## Parameters

### imageToBeDeleted

`string`

The path of the image file to be deleted

### imageBelongingToItem?

`string`

Optional. Indicates if the image belongs to a specific item for duplicate check

## Returns

`Promise`\<`void`\>

A promise that resolves once the image is successfully deleted
