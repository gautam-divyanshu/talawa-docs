[**talawa-api**](../../../README.md)

***

[talawa-api](../../../modules.md) / [utilities/reuploadDuplicateCheck](../README.md) / reuploadDuplicateCheck

# Function: reuploadDuplicateCheck()

\> **reuploadDuplicateCheck**(`oldImagePath`, `newImagePath`): `Promise`\<`boolean`\>

Defined in: [src/utilities/reuploadDuplicateCheck.ts:48](https://github.com/PalisadoesFoundation/talawa-api/blob/25207c53554ba20e613226862dea483f0b67a696/src/utilities/reuploadDuplicateCheck.ts#L48)

Checks if a user or organization is attempting to re-upload the same image.

## Parameters

### oldImagePath

Path of the current image (could be a string, URL request object, or buffer object).

`null` | [`TypeImagePath`](../type-aliases/TypeImagePath.md)

### newImagePath

[`TypeImagePath`](../type-aliases/TypeImagePath.md)

Path of the new image being uploaded (could be a string, URL request object, or buffer object).

## Returns

`Promise`\<`boolean`\>

Promise that resolves to true if the images are identical, false otherwise.

## Remarks

This is a utility method.
