[**talawa-api**](../../../../../README.md)

***

[talawa-api](../../../../../modules.md) / [REST/services/file/uploadFile](../README.md) / InterfaceUploadedFileResponse

# Interface: InterfaceUploadedFileResponse

Defined in: [src/REST/services/file/uploadFile.ts:17](https://github.com/PalisadoesFoundation/talawa-api/blob/25207c53554ba20e613226862dea483f0b67a696/src/REST/services/file/uploadFile.ts#L17)

## Extends

- `Partial`\<[`InterfaceFile`](../../../../../models/File/interfaces/InterfaceFile.md)\>

## Properties

### \_id?

\> `optional` **\_id**: `ObjectId`

Defined in: [src/models/File.ts:10](https://github.com/PalisadoesFoundation/talawa-api/blob/25207c53554ba20e613226862dea483f0b67a696/src/models/File.ts#L10)

#### Inherited from

`Partial._id`

***

### archived?

\> `optional` **archived**: `boolean`

Defined in: [src/models/File.ts:22](https://github.com/PalisadoesFoundation/talawa-api/blob/25207c53554ba20e613226862dea483f0b67a696/src/models/File.ts#L22)

#### Inherited from

`Partial.archived`

***

### archivedAt?

\> `optional` **archivedAt**: `Date`

Defined in: [src/models/File.ts:28](https://github.com/PalisadoesFoundation/talawa-api/blob/25207c53554ba20e613226862dea483f0b67a696/src/models/File.ts#L28)

#### Inherited from

`Partial.archivedAt`

***

### backupStatus?

\> `optional` **backupStatus**: `string`

Defined in: [src/models/File.ts:24](https://github.com/PalisadoesFoundation/talawa-api/blob/25207c53554ba20e613226862dea483f0b67a696/src/models/File.ts#L24)

#### Inherited from

`Partial.backupStatus`

***

### createdAt?

\> `optional` **createdAt**: `Date`

Defined in: [src/models/File.ts:26](https://github.com/PalisadoesFoundation/talawa-api/blob/25207c53554ba20e613226862dea483f0b67a696/src/models/File.ts#L26)

#### Inherited from

`Partial.createdAt`

***

### encryption?

\> `optional` **encryption**: `boolean`

Defined in: [src/models/File.ts:21](https://github.com/PalisadoesFoundation/talawa-api/blob/25207c53554ba20e613226862dea483f0b67a696/src/models/File.ts#L21)

#### Inherited from

`Partial.encryption`

***

### fileName?

\> `optional` **fileName**: `string`

Defined in: [src/models/File.ts:11](https://github.com/PalisadoesFoundation/talawa-api/blob/25207c53554ba20e613226862dea483f0b67a696/src/models/File.ts#L11)

#### Inherited from

`Partial.fileName`

***

### hash?

\> `optional` **hash**: `object`

Defined in: [src/models/File.ts:14](https://github.com/PalisadoesFoundation/talawa-api/blob/25207c53554ba20e613226862dea483f0b67a696/src/models/File.ts#L14)

#### algorithm

\> **algorithm**: `string`

#### value

\> **value**: `string`

#### Inherited from

`Partial.hash`

***

### metadata?

\> `optional` **metadata**: `Record`\<`string`, `any`\>

Defined in: [src/models/File.ts:20](https://github.com/PalisadoesFoundation/talawa-api/blob/25207c53554ba20e613226862dea483f0b67a696/src/models/File.ts#L20)

#### Inherited from

`Partial.metadata`

***

### mimeType?

\> `optional` **mimeType**: `string`

Defined in: [src/models/File.ts:12](https://github.com/PalisadoesFoundation/talawa-api/blob/25207c53554ba20e613226862dea483f0b67a696/src/models/File.ts#L12)

#### Inherited from

`Partial.mimeType`

***

### objectKey

\> **objectKey**: `string`

Defined in: [src/REST/services/file/uploadFile.ts:18](https://github.com/PalisadoesFoundation/talawa-api/blob/25207c53554ba20e613226862dea483f0b67a696/src/REST/services/file/uploadFile.ts#L18)

***

### referenceCount?

\> `optional` **referenceCount**: `number`

Defined in: [src/models/File.ts:19](https://github.com/PalisadoesFoundation/talawa-api/blob/25207c53554ba20e613226862dea483f0b67a696/src/models/File.ts#L19)

#### Inherited from

`Partial.referenceCount`

***

### size?

\> `optional` **size**: `number`

Defined in: [src/models/File.ts:13](https://github.com/PalisadoesFoundation/talawa-api/blob/25207c53554ba20e613226862dea483f0b67a696/src/models/File.ts#L13)

#### Inherited from

`Partial.size`

***

### status?

\> `optional` **status**: `"ACTIVE"` \| `"BLOCKED"` \| `"DELETED"`

Defined in: [src/models/File.ts:25](https://github.com/PalisadoesFoundation/talawa-api/blob/25207c53554ba20e613226862dea483f0b67a696/src/models/File.ts#L25)

#### Inherited from

`Partial.status`

***

### updatedAt?

\> `optional` **updatedAt**: `Date`

Defined in: [src/models/File.ts:27](https://github.com/PalisadoesFoundation/talawa-api/blob/25207c53554ba20e613226862dea483f0b67a696/src/models/File.ts#L27)

#### Inherited from

`Partial.updatedAt`

***

### uri?

\> `optional` **uri**: `string`

Defined in: [src/models/File.ts:18](https://github.com/PalisadoesFoundation/talawa-api/blob/25207c53554ba20e613226862dea483f0b67a696/src/models/File.ts#L18)

#### Inherited from

`Partial.uri`

***

### visibility?

\> `optional` **visibility**: `"PRIVATE"` \| `"PUBLIC"`

Defined in: [src/models/File.ts:23](https://github.com/PalisadoesFoundation/talawa-api/blob/25207c53554ba20e613226862dea483f0b67a696/src/models/File.ts#L23)

#### Inherited from

`Partial.visibility`
