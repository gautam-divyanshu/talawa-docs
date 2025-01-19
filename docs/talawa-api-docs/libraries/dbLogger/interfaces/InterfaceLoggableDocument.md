[**talawa-api**](../../../README.md)

***

[talawa-api](../../../modules.md) / [libraries/dbLogger](../README.md) / InterfaceLoggableDocument

# Interface: InterfaceLoggableDocument

Defined in: [src/libraries/dbLogger.ts:53](https://github.com/PalisadoesFoundation/talawa-api/blob/33412350fcbc7b376cab529f8a291f46d0165828/src/libraries/dbLogger.ts#L53)

Interface for a document that includes logging information.

## Extends

- `Document`

## Properties

### \_\_v?

\> `optional` **\_\_v**: `any`

Defined in: node\_modules/mongoose/types/document.d.ts:26

This documents __v.

#### Inherited from

`Document.__v`

***

### \_id?

\> `optional` **\_id**: `any`

Defined in: node\_modules/mongoose/types/document.d.ts:23

This documents _id.

#### Inherited from

`Document._id`

***

### $locals

\> **$locals**: `Record`\<`string`, `unknown`\>

Defined in: node\_modules/mongoose/types/document.d.ts:71

Empty object that you can use for storing properties on the document. This
is handy for passing data to middleware without conflicting with Mongoose
internals.

#### Inherited from

`Document.$locals`

***

### $op

\> **$op**: `null` \| `"validate"` \| `"save"` \| `"remove"`

Defined in: node\_modules/mongoose/types/document.d.ts:84

A string containing the current operation that Mongoose is executing
on this document. Can be `null`, `'save'`, `'validate'`, or `'remove'`.

#### Inherited from

`Document.$op`

***

### $where

\> **$where**: `Record`\<`string`, `unknown`\>

Defined in: node\_modules/mongoose/types/document.d.ts:99

Set this property to add additional query filters when Mongoose saves this document and `isNew` is false.

#### Inherited from

`Document.$where`

***

### baseModelName?

\> `optional` **baseModelName**: `string`

Defined in: node\_modules/mongoose/types/document.d.ts:102

If this is a discriminator model, `baseModelName` is the name of the base model.

#### Inherited from

`Document.baseModelName`

***

### collection

\> **collection**: `Collection`

Defined in: node\_modules/mongoose/types/document.d.ts:105

Collection the model uses.

#### Inherited from

`Document.collection`

***

### db

\> **db**: `Connection`

Defined in: node\_modules/mongoose/types/document.d.ts:108

Connection the model uses.

#### Inherited from

`Document.db`

***

### errors?

\> `optional` **errors**: `ValidationError`

Defined in: node\_modules/mongoose/types/document.d.ts:142

Returns the current validation errors.

#### Inherited from

`Document.errors`

***

### id?

\> `optional` **id**: `any`

Defined in: node\_modules/mongoose/types/document.d.ts:155

The string version of this documents _id.

#### Inherited from

`Document.id`

***

### isNew

\> **isNew**: `boolean`

Defined in: node\_modules/mongoose/types/document.d.ts:191

Boolean flag specifying if the document is new.

#### Inherited from

`Document.isNew`

***

### logInfo

\> **logInfo**: [`TransactionLogInfo`](../type-aliases/TransactionLogInfo.md)

Defined in: [src/libraries/dbLogger.ts:55](https://github.com/PalisadoesFoundation/talawa-api/blob/33412350fcbc7b376cab529f8a291f46d0165828/src/libraries/dbLogger.ts#L55)

Information about the transaction log

***

### schema

\> **schema**: `Schema`\<`Model`, \{\}, `Document`\<`unknown`, \{\}, `FlatRecord`\<\{\}\>\> & `FlatRecord`\<\{\}\> & `Required`\<\{ `_id`: `unknown`; \}\>\>

Defined in: node\_modules/mongoose/types/document.d.ts:235

The document's schema.

#### Inherited from

`Document.schema`

## Methods

### $assertPopulated()

\> **$assertPopulated**\<`Paths`\>(`path`, `values`?): `Omit`\<[`InterfaceLoggableDocument`](InterfaceLoggableDocument.md), keyof `Paths`\> & `Paths`

Defined in: node\_modules/mongoose/types/document.d.ts:29

Assert that a given path or paths is populated. Throws an error if not populated.

#### Type Parameters

• **Paths** = \{\}

#### Parameters

##### path

`string` | `string`[]

##### values?

`Partial`\<`Paths`\>

#### Returns

`Omit`\<[`InterfaceLoggableDocument`](InterfaceLoggableDocument.md), keyof `Paths`\> & `Paths`

#### Inherited from

`Document.$assertPopulated`

***

### $clone()

\> **$clone**(): `this`

Defined in: node\_modules/mongoose/types/document.d.ts:32

Returns a deep clone of this document

#### Returns

`this`

#### Inherited from

`Document.$clone`

***

### $getAllSubdocs()

\> **$getAllSubdocs**(): `Document`[]

Defined in: node\_modules/mongoose/types/document.d.ts:35

#### Returns

`Document`[]

#### Inherited from

`Document.$getAllSubdocs`

***

### $getPopulatedDocs()

\> **$getPopulatedDocs**(): `Document`[]

Defined in: node\_modules/mongoose/types/document.d.ts:47

Returns an array of all populated documents associated with the query

#### Returns

`Document`[]

#### Inherited from

`Document.$getPopulatedDocs`

***

### $ignore()

\> **$ignore**(`path`): `void`

Defined in: node\_modules/mongoose/types/document.d.ts:38

Don't run validation on this path or persist changes to this path.

#### Parameters

##### path

`string`

#### Returns

`void`

#### Inherited from

`Document.$ignore`

***

### $inc()

\> **$inc**(`path`, `val`?): `this`

Defined in: node\_modules/mongoose/types/document.d.ts:54

Increments the numeric value at `path` by the given `val`.
When you call `save()` on this document, Mongoose will send a
`$inc` as opposed to a `$set`.

#### Parameters

##### path

`string` | `string`[]

##### val?

`number`

#### Returns

`this`

#### Inherited from

`Document.$inc`

***

### $isDefault()

\> **$isDefault**(`path`): `boolean`

Defined in: node\_modules/mongoose/types/document.d.ts:41

Checks if a path is set to its default.

#### Parameters

##### path

`string`

#### Returns

`boolean`

#### Inherited from

`Document.$isDefault`

***

### $isDeleted()

\> **$isDeleted**(`val`?): `boolean`

Defined in: node\_modules/mongoose/types/document.d.ts:44

Getter/setter, determines whether the document was removed or not.

#### Parameters

##### val?

`boolean`

#### Returns

`boolean`

#### Inherited from

`Document.$isDeleted`

***

### $isEmpty()

\> **$isEmpty**(`path`): `boolean`

Defined in: node\_modules/mongoose/types/document.d.ts:61

Returns true if the given path is nullish or only contains empty objects.
Useful for determining whether this subdoc will get stripped out by the
[minimize option](/docs/guide.html#minimize).

#### Parameters

##### path

`string`

#### Returns

`boolean`

#### Inherited from

`Document.$isEmpty`

***

### $isValid()

\> **$isValid**(`path`): `boolean`

Defined in: node\_modules/mongoose/types/document.d.ts:64

Checks if a path is invalid

#### Parameters

##### path

`string`

#### Returns

`boolean`

#### Inherited from

`Document.$isValid`

***

### $markValid()

\> **$markValid**(`path`): `void`

Defined in: node\_modules/mongoose/types/document.d.ts:74

Marks a path as valid, removing existing validation errors.

#### Parameters

##### path

`string`

#### Returns

`void`

#### Inherited from

`Document.$markValid`

***

### $model()

#### Call Signature

\> **$model**\<`ModelType`\>(`name`): `ModelType`

Defined in: node\_modules/mongoose/types/document.d.ts:77

Returns the model with the given name on this document's associated connection.

##### Type Parameters

• **ModelType** = `Model`\<`unknown`, `Document`\<`unknown`, \{\}, `unknown`\> & `object`\>

##### Parameters

###### name

`string`

##### Returns

`ModelType`

##### Inherited from

`Document.$model`

#### Call Signature

\> **$model**\<`ModelType`\>(): `ModelType`

Defined in: node\_modules/mongoose/types/document.d.ts:78

Returns the model with the given name on this document's associated connection.

##### Type Parameters

• **ModelType** = `Model`

##### Returns

`ModelType`

##### Inherited from

`Document.$model`

***

### $parent()

\> **$parent**(): `undefined` \| `Document`

Defined in: node\_modules/mongoose/types/document.d.ts:219

If this document is a subdocument or populated document, returns the
document's parent. Returns undefined otherwise.

#### Returns

`undefined` \| `Document`

#### Inherited from

`Document.$parent`

***

### $session()

\> **$session**(`session`?): `null` \| `ClientSession`

Defined in: node\_modules/mongoose/types/document.d.ts:91

Getter/setter around the session associated with this document. Used to
automatically set `session` if you `save()` a doc that you got from a
query with an associated session.

#### Parameters

##### session?

`null` | `ClientSession`

#### Returns

`null` \| `ClientSession`

#### Inherited from

`Document.$session`

***

### $set()

#### Call Signature

\> **$set**(`path`, `val`, `type`, `options`?): `this`

Defined in: node\_modules/mongoose/types/document.d.ts:94

Alias for `set()`, used internally to avoid conflicts

##### Parameters

###### path

`string` | `Record`\<`string`, `any`\>

###### val

`any`

###### type

`any`

###### options?

`DocumentSetOptions`

##### Returns

`this`

##### Inherited from

`Document.$set`

#### Call Signature

\> **$set**(`path`, `val`, `options`?): `this`

Defined in: node\_modules/mongoose/types/document.d.ts:95

Alias for `set()`, used internally to avoid conflicts

##### Parameters

###### path

`string` | `Record`\<`string`, `any`\>

###### val

`any`

###### options?

`DocumentSetOptions`

##### Returns

`this`

##### Inherited from

`Document.$set`

#### Call Signature

\> **$set**(`value`): `this`

Defined in: node\_modules/mongoose/types/document.d.ts:96

Alias for `set()`, used internally to avoid conflicts

##### Parameters

###### value

`string` | `Record`\<`string`, `any`\>

##### Returns

`this`

##### Inherited from

`Document.$set`

***

### deleteOne()

\> **deleteOne**(`options`?): `any`

Defined in: node\_modules/mongoose/types/document.d.ts:111

Removes this document from the db.

#### Parameters

##### options?

`QueryOptions`

#### Returns

`any`

#### Inherited from

`Document.deleteOne`

***

### depopulate()

\> **depopulate**(`path`?): `this`

Defined in: node\_modules/mongoose/types/document.d.ts:123

Takes a populated field and returns it to its unpopulated state. If called with
no arguments, then all populated fields are returned to their unpopulated state.

#### Parameters

##### path?

`string` | `string`[]

#### Returns

`this`

#### Inherited from

`Document.depopulate`

***

### directModifiedPaths()

\> **directModifiedPaths**(): `string`[]

Defined in: node\_modules/mongoose/types/document.d.ts:130

Returns the list of paths that have been directly modified. A direct
modified path is a path that you explicitly set, whether via `doc.foo = 'bar'`,
`Object.assign(doc, \{ foo: 'bar' \})`, or `doc.set('foo', 'bar')`.

#### Returns

`string`[]

#### Inherited from

`Document.directModifiedPaths`

***

### equals()

\> **equals**(`doc`): `boolean`

Defined in: node\_modules/mongoose/types/document.d.ts:139

Returns true if this document is equal to another document.

Documents are considered equal when they have matching `_id`s, unless neither
document has an `_id`, in which case this function falls back to using
`deepEqual()`.

#### Parameters

##### doc

`Document`

#### Returns

`boolean`

#### Inherited from

`Document.equals`

***

### get()

#### Call Signature

\> **get**\<`T`\>(`path`, `type`?, `options`?): `any`

Defined in: node\_modules/mongoose/types/document.d.ts:145

Returns the value of a path.

##### Type Parameters

• **T** *extends* `string` \| `number` \| `symbol`

##### Parameters

###### path

`T`

###### type?

`any`

###### options?

`any`

##### Returns

`any`

##### Inherited from

`Document.get`

#### Call Signature

\> **get**(`path`, `type`?, `options`?): `any`

Defined in: node\_modules/mongoose/types/document.d.ts:146

Returns the value of a path.

##### Parameters

###### path

`string`

###### type?

`any`

###### options?

`any`

##### Returns

`any`

##### Inherited from

`Document.get`

***

### getChanges()

\> **getChanges**(): `UpdateQuery`\<[`InterfaceLoggableDocument`](InterfaceLoggableDocument.md)\>

Defined in: node\_modules/mongoose/types/document.d.ts:152

Returns the changes that happened to the document
in the format that will be sent to MongoDB.

#### Returns

`UpdateQuery`\<[`InterfaceLoggableDocument`](InterfaceLoggableDocument.md)\>

#### Inherited from

`Document.getChanges`

***

### increment()

\> **increment**(): `this`

Defined in: node\_modules/mongoose/types/document.d.ts:158

Signal that we desire an increment of this documents version.

#### Returns

`this`

#### Inherited from

`Document.increment`

***

### init()

\> **init**(`obj`, `opts`?): `this`

Defined in: node\_modules/mongoose/types/document.d.ts:165

Initializes the document without setters or marking anything modified.
Called internally after a document is returned from mongodb. Normally,
you do **not** need to call this function on your own.

#### Parameters

##### obj

`AnyObject`

##### opts?

`AnyObject`

#### Returns

`this`

#### Inherited from

`Document.init`

***

### invalidate()

#### Call Signature

\> **invalidate**\<`T`\>(`path`, `errorMsg`, `value`?, `kind`?): `null` \| `NativeError`

Defined in: node\_modules/mongoose/types/document.d.ts:168

Marks a path as invalid, causing validation to fail.

##### Type Parameters

• **T** *extends* `string` \| `number` \| `symbol`

##### Parameters

###### path

`T`

###### errorMsg

`string` | `NativeError`

###### value?

`any`

###### kind?

`string`

##### Returns

`null` \| `NativeError`

##### Inherited from

`Document.invalidate`

#### Call Signature

\> **invalidate**(`path`, `errorMsg`, `value`?, `kind`?): `null` \| `NativeError`

Defined in: node\_modules/mongoose/types/document.d.ts:169

Marks a path as invalid, causing validation to fail.

##### Parameters

###### path

`string`

###### errorMsg

`string` | `NativeError`

###### value?

`any`

###### kind?

`string`

##### Returns

`null` \| `NativeError`

##### Inherited from

`Document.invalidate`

***

### isDirectModified()

#### Call Signature

\> **isDirectModified**\<`T`\>(`path`): `boolean`

Defined in: node\_modules/mongoose/types/document.d.ts:172

Returns true if `path` was directly set and modified, else false.

##### Type Parameters

• **T** *extends* `string` \| `number` \| `symbol`

##### Parameters

###### path

`T` | `T`[]

##### Returns

`boolean`

##### Inherited from

`Document.isDirectModified`

#### Call Signature

\> **isDirectModified**(`path`): `boolean`

Defined in: node\_modules/mongoose/types/document.d.ts:173

Returns true if `path` was directly set and modified, else false.

##### Parameters

###### path

`string` | `string`[]

##### Returns

`boolean`

##### Inherited from

`Document.isDirectModified`

***

### isDirectSelected()

#### Call Signature

\> **isDirectSelected**\<`T`\>(`path`): `boolean`

Defined in: node\_modules/mongoose/types/document.d.ts:176

Checks if `path` was explicitly selected. If no projection, always returns true.

##### Type Parameters

• **T** *extends* `string` \| `number` \| `symbol`

##### Parameters

###### path

`T`

##### Returns

`boolean`

##### Inherited from

`Document.isDirectSelected`

#### Call Signature

\> **isDirectSelected**(`path`): `boolean`

Defined in: node\_modules/mongoose/types/document.d.ts:177

Checks if `path` was explicitly selected. If no projection, always returns true.

##### Parameters

###### path

`string`

##### Returns

`boolean`

##### Inherited from

`Document.isDirectSelected`

***

### isInit()

#### Call Signature

\> **isInit**\<`T`\>(`path`): `boolean`

Defined in: node\_modules/mongoose/types/document.d.ts:180

Checks if `path` is in the `init` state, that is, it was set by `Document#init()` and not modified since.

##### Type Parameters

• **T** *extends* `string` \| `number` \| `symbol`

##### Parameters

###### path

`T`

##### Returns

`boolean`

##### Inherited from

`Document.isInit`

#### Call Signature

\> **isInit**(`path`): `boolean`

Defined in: node\_modules/mongoose/types/document.d.ts:181

Checks if `path` is in the `init` state, that is, it was set by `Document#init()` and not modified since.

##### Parameters

###### path

`string`

##### Returns

`boolean`

##### Inherited from

`Document.isInit`

***

### isModified()

#### Call Signature

\> **isModified**\<`T`\>(`path`?, `options`?): `boolean`

Defined in: node\_modules/mongoose/types/document.d.ts:187

Returns true if any of the given paths are modified, else false. If no arguments, returns `true` if any path
in this document is modified.

##### Type Parameters

• **T** *extends* `string` \| `number` \| `symbol`

##### Parameters

###### path?

`T` | `T`[]

###### options?

`null` | \{ `ignoreAtomics`: `boolean`; \}

##### Returns

`boolean`

##### Inherited from

`Document.isModified`

#### Call Signature

\> **isModified**(`path`?, `options`?): `boolean`

Defined in: node\_modules/mongoose/types/document.d.ts:188

Returns true if any of the given paths are modified, else false. If no arguments, returns `true` if any path
in this document is modified.

##### Parameters

###### path?

`string` | `string`[]

###### options?

`null` | \{ `ignoreAtomics`: `boolean`; \}

##### Returns

`boolean`

##### Inherited from

`Document.isModified`

***

### isSelected()

#### Call Signature

\> **isSelected**\<`T`\>(`path`): `boolean`

Defined in: node\_modules/mongoose/types/document.d.ts:194

Checks if `path` was selected in the source query which initialized this document.

##### Type Parameters

• **T** *extends* `string` \| `number` \| `symbol`

##### Parameters

###### path

`T`

##### Returns

`boolean`

##### Inherited from

`Document.isSelected`

#### Call Signature

\> **isSelected**(`path`): `boolean`

Defined in: node\_modules/mongoose/types/document.d.ts:195

Checks if `path` was selected in the source query which initialized this document.

##### Parameters

###### path

`string`

##### Returns

`boolean`

##### Inherited from

`Document.isSelected`

***

### markModified()

#### Call Signature

\> **markModified**\<`T`\>(`path`, `scope`?): `void`

Defined in: node\_modules/mongoose/types/document.d.ts:198

Marks the path as having pending changes to write to the db.

##### Type Parameters

• **T** *extends* `string` \| `number` \| `symbol`

##### Parameters

###### path

`T`

###### scope?

`any`

##### Returns

`void`

##### Inherited from

`Document.markModified`

#### Call Signature

\> **markModified**(`path`, `scope`?): `void`

Defined in: node\_modules/mongoose/types/document.d.ts:199

Marks the path as having pending changes to write to the db.

##### Parameters

###### path

`string`

###### scope?

`any`

##### Returns

`void`

##### Inherited from

`Document.markModified`

***

### model()

#### Call Signature

\> **model**\<`ModelType`\>(`name`): `ModelType`

Defined in: node\_modules/mongoose/types/document.d.ts:202

Returns the model with the given name on this document's associated connection.

##### Type Parameters

• **ModelType** = `Model`\<`unknown`, `Document`\<`unknown`, \{\}, `unknown`\> & `object`\>

##### Parameters

###### name

`string`

##### Returns

`ModelType`

##### Inherited from

`Document.model`

#### Call Signature

\> **model**\<`ModelType`\>(): `ModelType`

Defined in: node\_modules/mongoose/types/document.d.ts:203

Returns the model with the given name on this document's associated connection.

##### Type Parameters

• **ModelType** = `Model`

##### Returns

`ModelType`

##### Inherited from

`Document.model`

***

### modifiedPaths()

\> **modifiedPaths**(`options`?): `string`[]

Defined in: node\_modules/mongoose/types/document.d.ts:206

Returns the list of paths that have been modified.

#### Parameters

##### options?

###### includeChildren

`boolean`

#### Returns

`string`[]

#### Inherited from

`Document.modifiedPaths`

***

### overwrite()

\> **overwrite**(`obj`): `this`

Defined in: node\_modules/mongoose/types/document.d.ts:213

Overwrite all values in this document with the values of `obj`, except
for immutable properties. Behaves similarly to `set()`, except for it
unsets all properties that aren't in `obj`.

#### Parameters

##### obj

`AnyObject`

#### Returns

`this`

#### Inherited from

`Document.overwrite`

***

### populate()

#### Call Signature

\> **populate**\<`Paths`\>(`path`): `Promise`\<`MergeType`\<[`InterfaceLoggableDocument`](InterfaceLoggableDocument.md), `Paths`\>\>

Defined in: node\_modules/mongoose/types/document.d.ts:222

Populates document references.

##### Type Parameters

• **Paths** = \{\}

##### Parameters

###### path

`string` | `PopulateOptions` | (`string` \| `PopulateOptions`)[]

##### Returns

`Promise`\<`MergeType`\<[`InterfaceLoggableDocument`](InterfaceLoggableDocument.md), `Paths`\>\>

##### Inherited from

`Document.populate`

#### Call Signature

\> **populate**\<`Paths`\>(`path`, `select`?, `model`?, `match`?, `options`?): `Promise`\<`MergeType`\<[`InterfaceLoggableDocument`](InterfaceLoggableDocument.md), `Paths`\>\>

Defined in: node\_modules/mongoose/types/document.d.ts:223

Populates document references.

##### Type Parameters

• **Paths** = \{\}

##### Parameters

###### path

`string`

###### select?

`string` | `AnyObject`

###### model?

`Model`

###### match?

`AnyObject`

###### options?

`PopulateOptions`

##### Returns

`Promise`\<`MergeType`\<[`InterfaceLoggableDocument`](InterfaceLoggableDocument.md), `Paths`\>\>

##### Inherited from

`Document.populate`

***

### populated()

\> **populated**(`path`): `any`

Defined in: node\_modules/mongoose/types/document.d.ts:226

Gets _id(s) used during population of the given `path`. If the path was not populated, returns `undefined`.

#### Parameters

##### path

`string`

#### Returns

`any`

#### Inherited from

`Document.populated`

***

### replaceOne()

\> **replaceOne**(`replacement`?, `options`?): `Query`\<`any`, [`InterfaceLoggableDocument`](InterfaceLoggableDocument.md), [`InterfaceLoggableDocument`](InterfaceLoggableDocument.md)\>

Defined in: node\_modules/mongoose/types/document.d.ts:229

Sends a replaceOne command with this document `_id` as the query selector.

#### Parameters

##### replacement?

`AnyObject`

##### options?

`null` | `QueryOptions`

#### Returns

`Query`\<`any`, [`InterfaceLoggableDocument`](InterfaceLoggableDocument.md), [`InterfaceLoggableDocument`](InterfaceLoggableDocument.md)\>

#### Inherited from

`Document.replaceOne`

***

### save()

\> **save**(`options`?): `Promise`\<[`InterfaceLoggableDocument`](InterfaceLoggableDocument.md)\>

Defined in: node\_modules/mongoose/types/document.d.ts:232

Saves this document by inserting a new document into the database if [document.isNew](/docs/api/document.html#document_Document-isNew) is `true`, or sends an [updateOne](/docs/api/document.html#document_Document-updateOne) operation with just the modified paths if `isNew` is `false`.

#### Parameters

##### options?

`SaveOptions`

#### Returns

`Promise`\<[`InterfaceLoggableDocument`](InterfaceLoggableDocument.md)\>

#### Inherited from

`Document.save`

***

### set()

#### Call Signature

\> **set**\<`T`\>(`path`, `val`, `type`, `options`?): `this`

Defined in: node\_modules/mongoose/types/document.d.ts:238

Sets the value of a path, or many paths.

##### Type Parameters

• **T** *extends* `string` \| `number` \| `symbol`

##### Parameters

###### path

`T`

###### val

`any`

###### type

`any`

###### options?

`DocumentSetOptions`

##### Returns

`this`

##### Inherited from

`Document.set`

#### Call Signature

\> **set**(`path`, `val`, `type`, `options`?): `this`

Defined in: node\_modules/mongoose/types/document.d.ts:239

Sets the value of a path, or many paths.

##### Parameters

###### path

`string` | `Record`\<`string`, `any`\>

###### val

`any`

###### type

`any`

###### options?

`DocumentSetOptions`

##### Returns

`this`

##### Inherited from

`Document.set`

#### Call Signature

\> **set**(`path`, `val`, `options`?): `this`

Defined in: node\_modules/mongoose/types/document.d.ts:240

Sets the value of a path, or many paths.

##### Parameters

###### path

`string` | `Record`\<`string`, `any`\>

###### val

`any`

###### options?

`DocumentSetOptions`

##### Returns

`this`

##### Inherited from

`Document.set`

#### Call Signature

\> **set**(`value`): `this`

Defined in: node\_modules/mongoose/types/document.d.ts:241

Sets the value of a path, or many paths.

##### Parameters

###### value

`string` | `Record`\<`string`, `any`\>

##### Returns

`this`

##### Inherited from

`Document.set`

***

### toJSON()

#### Call Signature

\> **toJSON**\<`T`\>(`options`?): `FlattenMaps`\<`T`\>

Defined in: node\_modules/mongoose/types/document.d.ts:244

The return value of this method is used in calls to JSON.stringify(doc).

##### Type Parameters

• **T** = `any`

##### Parameters

###### options?

`ToObjectOptions` & `object`

##### Returns

`FlattenMaps`\<`T`\>

##### Inherited from

`Document.toJSON`

#### Call Signature

\> **toJSON**\<`T`\>(`options`): `T`

Defined in: node\_modules/mongoose/types/document.d.ts:245

The return value of this method is used in calls to JSON.stringify(doc).

##### Type Parameters

• **T** = `any`

##### Parameters

###### options

`ToObjectOptions` & `object`

##### Returns

`T`

##### Inherited from

`Document.toJSON`

***

### toObject()

\> **toObject**\<`T`\>(`options`?): `Require_id`\<`T`\>

Defined in: node\_modules/mongoose/types/document.d.ts:248

Converts this document into a plain-old JavaScript object ([POJO](https://masteringjs.io/tutorials/fundamentals/pojo)).

#### Type Parameters

• **T** = `any`

#### Parameters

##### options?

`ToObjectOptions`

#### Returns

`Require_id`\<`T`\>

#### Inherited from

`Document.toObject`

***

### unmarkModified()

#### Call Signature

\> **unmarkModified**\<`T`\>(`path`): `void`

Defined in: node\_modules/mongoose/types/document.d.ts:251

Clears the modified state on the specified path.

##### Type Parameters

• **T** *extends* `string` \| `number` \| `symbol`

##### Parameters

###### path

`T`

##### Returns

`void`

##### Inherited from

`Document.unmarkModified`

#### Call Signature

\> **unmarkModified**(`path`): `void`

Defined in: node\_modules/mongoose/types/document.d.ts:252

Clears the modified state on the specified path.

##### Parameters

###### path

`string`

##### Returns

`void`

##### Inherited from

`Document.unmarkModified`

***

### updateOne()

\> **updateOne**(`update`?, `options`?): `Query`\<`any`, [`InterfaceLoggableDocument`](InterfaceLoggableDocument.md), [`InterfaceLoggableDocument`](InterfaceLoggableDocument.md)\>

Defined in: node\_modules/mongoose/types/document.d.ts:255

Sends an updateOne command with this document `_id` as the query selector.

#### Parameters

##### update?

`UpdateWithAggregationPipeline` | `UpdateQuery`\<[`InterfaceLoggableDocument`](InterfaceLoggableDocument.md)\>

##### options?

`null` | `QueryOptions`

#### Returns

`Query`\<`any`, [`InterfaceLoggableDocument`](InterfaceLoggableDocument.md), [`InterfaceLoggableDocument`](InterfaceLoggableDocument.md)\>

#### Inherited from

`Document.updateOne`

***

### validate()

#### Call Signature

\> **validate**\<`T`\>(`pathsToValidate`?, `options`?): `Promise`\<`void`\>

Defined in: node\_modules/mongoose/types/document.d.ts:258

Executes registered validation rules for this document.

##### Type Parameters

• **T** *extends* `string` \| `number` \| `symbol`

##### Parameters

###### pathsToValidate?

`T` | `T`[]

###### options?

`AnyObject`

##### Returns

`Promise`\<`void`\>

##### Inherited from

`Document.validate`

#### Call Signature

\> **validate**(`pathsToValidate`?, `options`?): `Promise`\<`void`\>

Defined in: node\_modules/mongoose/types/document.d.ts:259

Executes registered validation rules for this document.

##### Parameters

###### pathsToValidate?

`PathsToValidate`

###### options?

`AnyObject`

##### Returns

`Promise`\<`void`\>

##### Inherited from

`Document.validate`

#### Call Signature

\> **validate**(`options`): `Promise`\<`void`\>

Defined in: node\_modules/mongoose/types/document.d.ts:260

Executes registered validation rules for this document.

##### Parameters

###### options

###### pathsToSkip

`pathsToSkip`

##### Returns

`Promise`\<`void`\>

##### Inherited from

`Document.validate`

***

### validateSync()

#### Call Signature

\> **validateSync**(`options`): `null` \| `ValidationError`

Defined in: node\_modules/mongoose/types/document.d.ts:263

Executes registered validation rules (skipping asynchronous validators) for this document.

##### Parameters

###### options

###### pathsToSkip

`pathsToSkip`

##### Returns

`null` \| `ValidationError`

##### Inherited from

`Document.validateSync`

#### Call Signature

\> **validateSync**\<`T`\>(`pathsToValidate`?, `options`?): `null` \| `ValidationError`

Defined in: node\_modules/mongoose/types/document.d.ts:264

Executes registered validation rules (skipping asynchronous validators) for this document.

##### Type Parameters

• **T** *extends* `string` \| `number` \| `symbol`

##### Parameters

###### pathsToValidate?

`T` | `T`[]

###### options?

`AnyObject`

##### Returns

`null` \| `ValidationError`

##### Inherited from

`Document.validateSync`

#### Call Signature

\> **validateSync**(`pathsToValidate`?, `options`?): `null` \| `ValidationError`

Defined in: node\_modules/mongoose/types/document.d.ts:265

Executes registered validation rules (skipping asynchronous validators) for this document.

##### Parameters

###### pathsToValidate?

`PathsToValidate`

###### options?

`AnyObject`

##### Returns

`null` \| `ValidationError`

##### Inherited from

`Document.validateSync`
