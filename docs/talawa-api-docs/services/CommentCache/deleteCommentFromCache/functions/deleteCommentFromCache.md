[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [services/CommentCache/deleteCommentFromCache](../README.md) / deleteCommentFromCache

# Function: deleteCommentFromCache()

\> **deleteCommentFromCache**(`comment`): `Promise`\<`void`\>

Defined in: [src/services/CommentCache/deleteCommentFromCache.ts:10](https://github.com/PalisadoesFoundation/talawa-api/blob/33412350fcbc7b376cab529f8a291f46d0165828/src/services/CommentCache/deleteCommentFromCache.ts#L10)

Deletes the specified comment from Redis cache.

## Parameters

### comment

[`InterfaceComment`](../../../../models/Comment/interfaces/InterfaceComment.md)

The InterfaceComment object representing the comment to delete.

## Returns

`Promise`\<`void`\>

A promise resolving to void.
