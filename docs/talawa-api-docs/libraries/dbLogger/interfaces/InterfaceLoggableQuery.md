[**talawa-api**](../../../README.md)

***

[talawa-api](../../../modules.md) / [libraries/dbLogger](../README.md) / InterfaceLoggableQuery

# Interface: InterfaceLoggableQuery\<T\>

Defined in: [src/libraries/dbLogger.ts:61](https://github.com/PalisadoesFoundation/talawa-api/blob/33412350fcbc7b376cab529f8a291f46d0165828/src/libraries/dbLogger.ts#L61)

Interface for a query that can include logging information.

## Extends

- `Query`\<`unknown`, `T`\>

## Type Parameters

• **T**

## Properties

### \_mongooseOptions

\> **\_mongooseOptions**: `MongooseQueryOptions`\<`T`, `"timestamps"` \| `MongooseBaseQueryOptionKeys` \| `"lean"`\>

Defined in: node\_modules/mongoose/types/query.d.ts:209

#### Inherited from

`Query._mongooseOptions`

***

### \[toStringTag\]

\> **\[toStringTag\]**: `string`

Defined in: node\_modules/mongoose/types/query.d.ts:269

#### Inherited from

`Query.[toStringTag]`

***

### catch()

\> **catch**: \<`TResult`\>(`onrejected`?) =\> `Promise`\<`unknown`\>

Defined in: node\_modules/mongoose/types/query.d.ts:260

Executes the query returning a `Promise` which will be
resolved with either the doc(s) or rejected with the error.
Like `.then()`, but only takes a rejection handler.

Attaches a callback for only the rejection of the Promise.

#### Type Parameters

• **TResult** = `never`

#### Parameters

##### onrejected?

The callback to execute when the Promise is rejected.

`null` | (`reason`) =\> `TResult` \| `PromiseLike`\<`TResult`\>

#### Returns

`Promise`\<`unknown`\>

A Promise for the completion of the callback.

#### Inherited from

`Query.catch`

***

### finally()

\> **finally**: (`onfinally`?) =\> `Promise`\<`unknown`\>

Defined in: node\_modules/mongoose/types/query.d.ts:266

Executes the query returning a `Promise` which will be
resolved with `.finally()` chained.

Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
resolved value cannot be modified from the callback.

#### Parameters

##### onfinally?

The callback to execute when the Promise is settled (fulfilled or rejected).

`null` | () =\> `void`

#### Returns

`Promise`\<`unknown`\>

A Promise for the completion of the callback.

#### Inherited from

`Query.finally`

***

### logInfo?

\> `optional` **logInfo**: [`TransactionLogInfo`](../type-aliases/TransactionLogInfo.md)

Defined in: [src/libraries/dbLogger.ts:63](https://github.com/PalisadoesFoundation/talawa-api/blob/33412350fcbc7b376cab529f8a291f46d0165828/src/libraries/dbLogger.ts#L63)

Information about the transaction log (optional)

***

### model

\> **model**: `Model`

Defined in: node\_modules/mongoose/types/query.d.ts:567

The model this query was created from

#### Inherited from

`Query.model`

***

### then()

\> **then**: \<`TResult1`, `TResult2`\>(`onfulfilled`?, `onrejected`?) =\> `Promise`\<`TResult1` \| `TResult2`\>

Defined in: node\_modules/mongoose/types/query.d.ts:744

Executes the query returning a `Promise` which will be
resolved with either the doc(s) or rejected with the error.

Attaches callbacks for the resolution and/or rejection of the Promise.

#### Type Parameters

• **TResult1** = `unknown`

• **TResult2** = `never`

#### Parameters

##### onfulfilled?

The callback to execute when the Promise is resolved.

`null` | (`value`) =\> `TResult1` \| `PromiseLike`\<`TResult1`\>

##### onrejected?

The callback to execute when the Promise is rejected.

`null` | (`reason`) =\> `TResult2` \| `PromiseLike`\<`TResult2`\>

#### Returns

`Promise`\<`TResult1` \| `TResult2`\>

A Promise for the completion of which ever callback is executed.

#### Inherited from

`Query.then`

## Methods

### \[asyncIterator\]()

\> **\[asyncIterator\]**(): `AsyncIterableIterator`\<`unknown`\>

Defined in: node\_modules/mongoose/types/query.d.ts:216

Returns a wrapper around a [mongodb driver cursor](https://mongodb.github.io/node-mongodb-native/4.9/classes/FindCursor.html).
A QueryCursor exposes a Streams3 interface, as well as a `.next()` function.
This is equivalent to calling `.cursor()` with no arguments.

#### Returns

`AsyncIterableIterator`\<`unknown`\>

#### Inherited from

`Query.[asyncIterator]`

***

### $where()

\> **$where**(`argument`): `Query`\<`T`[], `T`, `T`\>

Defined in: node\_modules/mongoose/types/query.d.ts:221

#### Parameters

##### argument

`string` | `Function`

#### Returns

`Query`\<`T`[], `T`, `T`\>

#### Inherited from

`Query.$where`

***

### all()

#### Call Signature

\> **all**(`path`, `val`): `this`

Defined in: node\_modules/mongoose/types/query.d.ts:230

Specifies an `$all` query condition. When called with one argument, the most recent path passed to `where()` is used.

##### Parameters

###### path

`string`

###### val

`any`[]

##### Returns

`this`

##### Inherited from

`Query.all`

#### Call Signature

\> **all**(`val`): `this`

Defined in: node\_modules/mongoose/types/query.d.ts:231

Specifies an `$all` query condition. When called with one argument, the most recent path passed to `where()` is used.

##### Parameters

###### val

`any`[]

##### Returns

`this`

##### Inherited from

`Query.all`

***

### allowDiskUse()

\> **allowDiskUse**(`value`): `this`

Defined in: node\_modules/mongoose/types/query.d.ts:234

Sets the allowDiskUse option for the query (ignored for \< 4.4.0)

#### Parameters

##### value

`boolean`

#### Returns

`this`

#### Inherited from

`Query.allowDiskUse`

***

### and()

\> **and**(`array`): `this`

Defined in: node\_modules/mongoose/types/query.d.ts:237

Specifies arguments for an `$and` condition.

#### Parameters

##### array

`FilterQuery`\<`T`\>[]

#### Returns

`this`

#### Inherited from

`Query.and`

***

### batchSize()

\> **batchSize**(`val`): `this`

Defined in: node\_modules/mongoose/types/query.d.ts:240

Specifies the batchSize option.

#### Parameters

##### val

`number`

#### Returns

`this`

#### Inherited from

`Query.batchSize`

***

### box()

#### Call Signature

\> **box**(`lower`, `upper`): `this`

Defined in: node\_modules/mongoose/types/query.d.ts:243

Specifies a `$box` condition

##### Parameters

###### lower

`number`[]

###### upper

`number`[]

##### Returns

`this`

##### Inherited from

`Query.box`

#### Call Signature

\> **box**(`val`): `this`

Defined in: node\_modules/mongoose/types/query.d.ts:244

Specifies a `$box` condition

##### Parameters

###### val

`any`

##### Returns

`this`

##### Inherited from

`Query.box`

***

### cast()

\> **cast**(`model`?, `obj`?): `any`

Defined in: node\_modules/mongoose/types/query.d.ts:253

Casts this query to the schema of `model`.

#### Parameters

##### model?

the model to cast to. If not set, defaults to `this.model`

`null` | `Model`

##### obj?

`any`

If not set, defaults to this query's conditions

#### Returns

`any`

the casted `obj`

#### Inherited from

`Query.cast`

***

### circle()

#### Call Signature

\> **circle**(`path`, `area`): `this`

Defined in: node\_modules/mongoose/types/query.d.ts:272

Specifies a `$center` or `$centerSphere` condition.

##### Parameters

###### path

`string`

###### area

`any`

##### Returns

`this`

##### Inherited from

`Query.circle`

#### Call Signature

\> **circle**(`area`): `this`

Defined in: node\_modules/mongoose/types/query.d.ts:273

Specifies a `$center` or `$centerSphere` condition.

##### Parameters

###### area

`any`

##### Returns

`this`

##### Inherited from

`Query.circle`

***

### clone()

\> **clone**(): `this`

Defined in: node\_modules/mongoose/types/query.d.ts:276

Make a copy of this query so you can re-execute it.

#### Returns

`this`

#### Inherited from

`Query.clone`

***

### collation()

\> **collation**(`value`): `this`

Defined in: node\_modules/mongoose/types/query.d.ts:279

Adds a collation to this op (MongoDB 3.4 and up)

#### Parameters

##### value

`CollationOptions`

#### Returns

`this`

#### Inherited from

`Query.collation`

***

### comment()

\> **comment**(`val`): `this`

Defined in: node\_modules/mongoose/types/query.d.ts:282

Specifies the `comment` option.

#### Parameters

##### val

`string`

#### Returns

`this`

#### Inherited from

`Query.comment`

***

### countDocuments()

\> **countDocuments**(`criteria`?, `options`?): `Query`\<`number`, `T`, `T`, `"countDocuments"`\>

Defined in: node\_modules/mongoose/types/query.d.ts:285

Specifies this query as a `countDocuments` query.

#### Parameters

##### criteria?

`FilterQuery`\<`T`\>

##### options?

`QueryOptions`\<`T`\>

#### Returns

`Query`\<`number`, `T`, `T`, `"countDocuments"`\>

#### Inherited from

`Query.countDocuments`

***

### cursor()

\> **cursor**(`options`?): `Cursor`\<`unknown`, `QueryOptions`\<`T`\>\>

Defined in: node\_modules/mongoose/types/query.d.ts:294

Returns a wrapper around a [mongodb driver cursor](https://mongodb.github.io/node-mongodb-native/4.9/classes/FindCursor.html).
A QueryCursor exposes a Streams3 interface, as well as a `.next()` function.

#### Parameters

##### options?

`QueryOptions`\<`T`\>

#### Returns

`Cursor`\<`unknown`, `QueryOptions`\<`T`\>\>

#### Inherited from

`Query.cursor`

***

### deleteMany()

#### Call Signature

\> **deleteMany**(`filter`?, `options`?): `Query`\<`any`, `T`, `T`, `"deleteMany"`\>

Defined in: node\_modules/mongoose/types/query.d.ts:301

Declare and/or execute this query as a `deleteMany()` operation. Works like
remove, except it deletes _every_ document that matches `filter` in the
collection, regardless of the value of `single`.

##### Parameters

###### filter?

`FilterQuery`\<`T`\>

###### options?

`QueryOptions`\<`T`\>

##### Returns

`Query`\<`any`, `T`, `T`, `"deleteMany"`\>

##### Inherited from

`Query.deleteMany`

#### Call Signature

\> **deleteMany**(`filter`): `Query`\<`any`, `T`, `T`, `"deleteMany"`\>

Defined in: node\_modules/mongoose/types/query.d.ts:305

Declare and/or execute this query as a `deleteMany()` operation. Works like
remove, except it deletes _every_ document that matches `filter` in the
collection, regardless of the value of `single`.

##### Parameters

###### filter

`FilterQuery`\<`T`\>

##### Returns

`Query`\<`any`, `T`, `T`, `"deleteMany"`\>

##### Inherited from

`Query.deleteMany`

#### Call Signature

\> **deleteMany**(): `Query`\<`any`, `T`, `T`, `"deleteMany"`\>

Defined in: node\_modules/mongoose/types/query.d.ts:312

Declare and/or execute this query as a `deleteMany()` operation. Works like
remove, except it deletes _every_ document that matches `filter` in the
collection, regardless of the value of `single`.

##### Returns

`Query`\<`any`, `T`, `T`, `"deleteMany"`\>

##### Inherited from

`Query.deleteMany`

***

### deleteOne()

#### Call Signature

\> **deleteOne**(`filter`?, `options`?): `Query`\<`any`, `T`, `T`, `"deleteOne"`\>

Defined in: node\_modules/mongoose/types/query.d.ts:319

Declare and/or execute this query as a `deleteOne()` operation. Works like
remove, except it deletes at most one document regardless of the `single`
option.

##### Parameters

###### filter?

`FilterQuery`\<`T`\>

###### options?

`QueryOptions`\<`T`\>

##### Returns

`Query`\<`any`, `T`, `T`, `"deleteOne"`\>

##### Inherited from

`Query.deleteOne`

#### Call Signature

\> **deleteOne**(`filter`): `Query`\<`any`, `T`, `T`, `"deleteOne"`\>

Defined in: node\_modules/mongoose/types/query.d.ts:323

Declare and/or execute this query as a `deleteOne()` operation. Works like
remove, except it deletes at most one document regardless of the `single`
option.

##### Parameters

###### filter

`FilterQuery`\<`T`\>

##### Returns

`Query`\<`any`, `T`, `T`, `"deleteOne"`\>

##### Inherited from

`Query.deleteOne`

#### Call Signature

\> **deleteOne**(): `Query`\<`any`, `T`, `T`, `"deleteOne"`\>

Defined in: node\_modules/mongoose/types/query.d.ts:330

Declare and/or execute this query as a `deleteOne()` operation. Works like
remove, except it deletes at most one document regardless of the `single`
option.

##### Returns

`Query`\<`any`, `T`, `T`, `"deleteOne"`\>

##### Inherited from

`Query.deleteOne`

***

### distinct()

\> **distinct**\<`DocKey`, `ResultType`\>(`field`, `filter`?): `Query`\<`DocKey` *extends* keyof `T` ? `Unpacked`\<`T`\[`DocKey`\<`DocKey`\>\]\> : `ResultType`[], `T`, `T`, `"distinct"`\>

Defined in: node\_modules/mongoose/types/query.d.ts:333

Creates a `distinct` query: returns the distinct values of the given `field` that match `filter`.

#### Type Parameters

• **DocKey** *extends* `string`

• **ResultType** = `unknown`

#### Parameters

##### field

`DocKey`

##### filter?

`FilterQuery`\<`T`\>

#### Returns

`Query`\<`DocKey` *extends* keyof `T` ? `Unpacked`\<`T`\[`DocKey`\<`DocKey`\>\]\> : `ResultType`[], `T`, `T`, `"distinct"`\>

#### Inherited from

`Query.distinct`

***

### elemMatch()

#### Call Signature

\> **elemMatch**\<`K`\>(`path`, `val`): `this`

Defined in: node\_modules/mongoose/types/query.d.ts:339

Specifies a `$elemMatch` query condition. When called with one argument, the most recent path passed to `where()` is used.

##### Type Parameters

• **K** = `string`

##### Parameters

###### path

`K`

###### val

`any`

##### Returns

`this`

##### Inherited from

`Query.elemMatch`

#### Call Signature

\> **elemMatch**(`val`): `this`

Defined in: node\_modules/mongoose/types/query.d.ts:340

Specifies a `$elemMatch` query condition. When called with one argument, the most recent path passed to `where()` is used.

##### Parameters

###### val

`any`

##### Returns

`this`

##### Inherited from

`Query.elemMatch`

***

### equals()

\> **equals**(`val`): `this`

Defined in: node\_modules/mongoose/types/query.d.ts:350

Specifies the complementary comparison value for paths specified with `where()`

#### Parameters

##### val

`any`

#### Returns

`this`

#### Inherited from

`Query.equals`

***

### error()

#### Call Signature

\> **error**(): `null` \| `NativeError`

Defined in: node\_modules/mongoose/types/query.d.ts:346

Gets/sets the error flag on this query. If this flag is not null or
undefined, the `exec()` promise will reject without executing.

##### Returns

`null` \| `NativeError`

##### Inherited from

`Query.error`

#### Call Signature

\> **error**(`val`): `this`

Defined in: node\_modules/mongoose/types/query.d.ts:347

Gets/sets the error flag on this query. If this flag is not null or
undefined, the `exec()` promise will reject without executing.

##### Parameters

###### val

`null` | `NativeError`

##### Returns

`this`

##### Inherited from

`Query.error`

***

### estimatedDocumentCount()

\> **estimatedDocumentCount**(`options`?): `Query`\<`number`, `T`, `T`, `"estimatedDocumentCount"`\>

Defined in: node\_modules/mongoose/types/query.d.ts:353

Creates a `estimatedDocumentCount` query: counts the number of documents in the collection.

#### Parameters

##### options?

`QueryOptions`\<`T`\>

#### Returns

`Query`\<`number`, `T`, `T`, `"estimatedDocumentCount"`\>

#### Inherited from

`Query.estimatedDocumentCount`

***

### exec()

\> **exec**(): `Promise`\<`unknown`\>

Defined in: node\_modules/mongoose/types/query.d.ts:219

Executes the query

#### Returns

`Promise`\<`unknown`\>

#### Inherited from

`Query.exec`

***

### exists()

#### Call Signature

\> **exists**\<`K`\>(`path`, `val`): `this`

Defined in: node\_modules/mongoose/types/query.d.ts:362

Specifies a `$exists` query condition. When called with one argument, the most recent path passed to `where()` is used.

##### Type Parameters

• **K** = `string`

##### Parameters

###### path

`K`

###### val

`boolean`

##### Returns

`this`

##### Inherited from

`Query.exists`

#### Call Signature

\> **exists**(`val`): `this`

Defined in: node\_modules/mongoose/types/query.d.ts:363

Specifies a `$exists` query condition. When called with one argument, the most recent path passed to `where()` is used.

##### Parameters

###### val

`boolean`

##### Returns

`this`

##### Inherited from

`Query.exists`

***

### explain()

\> **explain**(`verbose`?): `this`

Defined in: node\_modules/mongoose/types/query.d.ts:371

Sets the [`explain` option](https://www.mongodb.com/docs/manual/reference/method/cursor.explain/),
which makes this query return detailed execution stats instead of the actual
query result. This method is useful for determining what index your queries
use.

#### Parameters

##### verbose?

`ExplainVerbosityLike`

#### Returns

`this`

#### Inherited from

`Query.explain`

***

### find()

#### Call Signature

\> **find**(`filter`, `projection`?, `options`?): `Query`\<`T`[], `T`, `T`\>

Defined in: node\_modules/mongoose/types/query.d.ts:374

Creates a `find` query: gets a list of documents that match `filter`.

##### Parameters

###### filter

`FilterQuery`\<`T`\>

###### projection?

`null` | `ProjectionType`\<`T`\>

###### options?

`null` | `QueryOptions`\<`T`\>

##### Returns

`Query`\<`T`[], `T`, `T`\>

##### Inherited from

`Query.find`

#### Call Signature

\> **find**(`filter`, `projection`?): `Query`\<`T`[], `T`, `T`\>

Defined in: node\_modules/mongoose/types/query.d.ts:379

Creates a `find` query: gets a list of documents that match `filter`.

##### Parameters

###### filter

`FilterQuery`\<`T`\>

###### projection?

`null` | `ProjectionType`\<`T`\>

##### Returns

`Query`\<`T`[], `T`, `T`\>

##### Inherited from

`Query.find`

#### Call Signature

\> **find**(`filter`): `Query`\<`T`[], `T`, `T`\>

Defined in: node\_modules/mongoose/types/query.d.ts:383

Creates a `find` query: gets a list of documents that match `filter`.

##### Parameters

###### filter

`FilterQuery`\<`T`\>

##### Returns

`Query`\<`T`[], `T`, `T`\>

##### Inherited from

`Query.find`

#### Call Signature

\> **find**(): `Query`\<`T`[], `T`, `T`\>

Defined in: node\_modules/mongoose/types/query.d.ts:386

Creates a `find` query: gets a list of documents that match `filter`.

##### Returns

`Query`\<`T`[], `T`, `T`\>

##### Inherited from

`Query.find`

***

### findById()

#### Call Signature

\> **findById**(`id`, `projection`?, `options`?): `Query`\<`null` \| `T`, `T`, `T`, `"findOne"`\>

Defined in: node\_modules/mongoose/types/query.d.ts:426

Declares the query a findById operation. When executed, returns the document with the given `_id`.

##### Parameters

###### id

`any`

###### projection?

`null` | `ProjectionType`\<`T`\>

###### options?

`null` | `QueryOptions`\<`T`\>

##### Returns

`Query`\<`null` \| `T`, `T`, `T`, `"findOne"`\>

##### Inherited from

`Query.findById`

#### Call Signature

\> **findById**(`id`, `projection`?): `Query`\<`null` \| `T`, `T`, `T`, `"findOne"`\>

Defined in: node\_modules/mongoose/types/query.d.ts:431

Declares the query a findById operation. When executed, returns the document with the given `_id`.

##### Parameters

###### id

`any`

###### projection?

`null` | `ProjectionType`\<`T`\>

##### Returns

`Query`\<`null` \| `T`, `T`, `T`, `"findOne"`\>

##### Inherited from

`Query.findById`

#### Call Signature

\> **findById**(`id`): `Query`\<`null` \| `T`, `T`, `T`, `"findOne"`\>

Defined in: node\_modules/mongoose/types/query.d.ts:435

Declares the query a findById operation. When executed, returns the document with the given `_id`.

##### Parameters

###### id

`any`

##### Returns

`Query`\<`null` \| `T`, `T`, `T`, `"findOne"`\>

##### Inherited from

`Query.findById`

***

### findByIdAndDelete()

#### Call Signature

\> **findByIdAndDelete**(`id`, `options`): `Query`\<`ModifyResult`\<`T`\>, `T`, `T`, `"findOneAndDelete"`\>

Defined in: node\_modules/mongoose/types/query.d.ts:440

Creates a `findByIdAndDelete` query, filtering by the given `_id`.

##### Parameters

###### id

`any`

###### options

`QueryOptions`\<`T`\> & `object`

##### Returns

`Query`\<`ModifyResult`\<`T`\>, `T`, `T`, `"findOneAndDelete"`\>

##### Inherited from

`Query.findByIdAndDelete`

#### Call Signature

\> **findByIdAndDelete**(`id`?, `options`?): `Query`\<`null` \| `T`, `T`, `T`, `"findOneAndDelete"`\>

Defined in: node\_modules/mongoose/types/query.d.ts:444

Creates a `findByIdAndDelete` query, filtering by the given `_id`.

##### Parameters

###### id?

`any`

###### options?

`null` | `QueryOptions`\<`T`\>

##### Returns

`Query`\<`null` \| `T`, `T`, `T`, `"findOneAndDelete"`\>

##### Inherited from

`Query.findByIdAndDelete`

***

### findByIdAndUpdate()

#### Call Signature

\> **findByIdAndUpdate**(`id`, `update`, `options`): `Query`\<`any`, `T`, `T`, `"findOneAndUpdate"`\>

Defined in: node\_modules/mongoose/types/query.d.ts:450

Creates a `findOneAndUpdate` query, filtering by the given `_id`.

##### Parameters

###### id

`any`

###### update

`UpdateQuery`\<`T`\>

###### options

`QueryOptions`\<`T`\> & `object`

##### Returns

`Query`\<`any`, `T`, `T`, `"findOneAndUpdate"`\>

##### Inherited from

`Query.findByIdAndUpdate`

#### Call Signature

\> **findByIdAndUpdate**(`id`, `update`, `options`): `Query`\<`T`, `T`, `T`, `"findOneAndUpdate"`\>

Defined in: node\_modules/mongoose/types/query.d.ts:455

Creates a `findOneAndUpdate` query, filtering by the given `_id`.

##### Parameters

###### id

`any`

###### update

`UpdateQuery`\<`T`\>

###### options

`QueryOptions`\<`T`\> & \{ upsert: true; \} & ReturnsNewDoc

##### Returns

`Query`\<`T`, `T`, `T`, `"findOneAndUpdate"`\>

##### Inherited from

`Query.findByIdAndUpdate`

#### Call Signature

\> **findByIdAndUpdate**(`id`?, `update`?, `options`?): `Query`\<`null` \| `T`, `T`, `T`, `"findOneAndUpdate"`\>

Defined in: node\_modules/mongoose/types/query.d.ts:460

Creates a `findOneAndUpdate` query, filtering by the given `_id`.

##### Parameters

###### id?

`any`

###### update?

`UpdateQuery`\<`T`\>

###### options?

`null` | `QueryOptions`\<`T`\>

##### Returns

`Query`\<`null` \| `T`, `T`, `T`, `"findOneAndUpdate"`\>

##### Inherited from

`Query.findByIdAndUpdate`

#### Call Signature

\> **findByIdAndUpdate**(`id`, `update`): `Query`\<`null` \| `T`, `T`, `T`, `"findOneAndUpdate"`\>

Defined in: node\_modules/mongoose/types/query.d.ts:465

Creates a `findOneAndUpdate` query, filtering by the given `_id`.

##### Parameters

###### id

`any`

###### update

`UpdateQuery`\<`T`\>

##### Returns

`Query`\<`null` \| `T`, `T`, `T`, `"findOneAndUpdate"`\>

##### Inherited from

`Query.findByIdAndUpdate`

***

### findOne()

#### Call Signature

\> **findOne**(`filter`?, `projection`?, `options`?): `Query`\<`null` \| `T`, `T`, `T`, `"findOne"`\>

Defined in: node\_modules/mongoose/types/query.d.ts:389

Declares the query a findOne operation. When executed, returns the first found document.

##### Parameters

###### filter?

`FilterQuery`\<`T`\>

###### projection?

`null` | `ProjectionType`\<`T`\>

###### options?

`null` | `QueryOptions`\<`T`\>

##### Returns

`Query`\<`null` \| `T`, `T`, `T`, `"findOne"`\>

##### Inherited from

`Query.findOne`

#### Call Signature

\> **findOne**(`filter`?, `projection`?): `Query`\<`null` \| `T`, `T`, `T`, `"findOne"`\>

Defined in: node\_modules/mongoose/types/query.d.ts:394

Declares the query a findOne operation. When executed, returns the first found document.

##### Parameters

###### filter?

`FilterQuery`\<`T`\>

###### projection?

`null` | `ProjectionType`\<`T`\>

##### Returns

`Query`\<`null` \| `T`, `T`, `T`, `"findOne"`\>

##### Inherited from

`Query.findOne`

#### Call Signature

\> **findOne**(`filter`?): `Query`\<`null` \| `T`, `T`, `T`, `"findOne"`\>

Defined in: node\_modules/mongoose/types/query.d.ts:398

Declares the query a findOne operation. When executed, returns the first found document.

##### Parameters

###### filter?

`FilterQuery`\<`T`\>

##### Returns

`Query`\<`null` \| `T`, `T`, `T`, `"findOne"`\>

##### Inherited from

`Query.findOne`

***

### findOneAndDelete()

\> **findOneAndDelete**(`filter`?, `options`?): `Query`\<`null` \| `T`, `T`, `T`, `"findOneAndDelete"`\>

Defined in: node\_modules/mongoose/types/query.d.ts:403

Creates a `findOneAndDelete` query: atomically finds the given document, deletes it, and returns the document as it was before deletion.

#### Parameters

##### filter?

`FilterQuery`\<`T`\>

##### options?

`null` | `QueryOptions`\<`T`\>

#### Returns

`Query`\<`null` \| `T`, `T`, `T`, `"findOneAndDelete"`\>

#### Inherited from

`Query.findOneAndDelete`

***

### findOneAndUpdate()

#### Call Signature

\> **findOneAndUpdate**(`filter`, `update`, `options`): `Query`\<`ModifyResult`\<`T`\>, `T`, `T`, `"findOneAndUpdate"`\>

Defined in: node\_modules/mongoose/types/query.d.ts:409

Creates a `findOneAndUpdate` query: atomically find the first document that matches `filter` and apply `update`.

##### Parameters

###### filter

`FilterQuery`\<`T`\>

###### update

`UpdateQuery`\<`T`\>

###### options

`QueryOptions`\<`T`\> & `object`

##### Returns

`Query`\<`ModifyResult`\<`T`\>, `T`, `T`, `"findOneAndUpdate"`\>

##### Inherited from

`Query.findOneAndUpdate`

#### Call Signature

\> **findOneAndUpdate**(`filter`, `update`, `options`): `Query`\<`T`, `T`, `T`, `"findOneAndUpdate"`\>

Defined in: node\_modules/mongoose/types/query.d.ts:414

Creates a `findOneAndUpdate` query: atomically find the first document that matches `filter` and apply `update`.

##### Parameters

###### filter

`FilterQuery`\<`T`\>

###### update

`UpdateQuery`\<`T`\>

###### options

`QueryOptions`\<`T`\> & \{ upsert: true; \} & ReturnsNewDoc

##### Returns

`Query`\<`T`, `T`, `T`, `"findOneAndUpdate"`\>

##### Inherited from

`Query.findOneAndUpdate`

#### Call Signature

\> **findOneAndUpdate**(`filter`?, `update`?, `options`?): `Query`\<`null` \| `T`, `T`, `T`, `"findOneAndUpdate"`\>

Defined in: node\_modules/mongoose/types/query.d.ts:419

Creates a `findOneAndUpdate` query: atomically find the first document that matches `filter` and apply `update`.

##### Parameters

###### filter?

`FilterQuery`\<`T`\>

###### update?

`UpdateQuery`\<`T`\>

###### options?

`null` | `QueryOptions`\<`T`\>

##### Returns

`Query`\<`null` \| `T`, `T`, `T`, `"findOneAndUpdate"`\>

##### Inherited from

`Query.findOneAndUpdate`

***

### geometry()

\> **geometry**(`object`): `this`

Defined in: node\_modules/mongoose/types/query.d.ts:471

Specifies a `$geometry` condition

#### Parameters

##### object

###### coordinates

`any`[]

###### type

`string`

#### Returns

`this`

#### Inherited from

`Query.geometry`

***

### get()

\> **get**(`path`): `any`

Defined in: node\_modules/mongoose/types/query.d.ts:478

For update operations, returns the value of a path in the update's `$set`.
Useful for writing getters/setters that can work with both update operations
and `save()`.

#### Parameters

##### path

`string`

#### Returns

`any`

#### Inherited from

`Query.get`

***

### getFilter()

\> **getFilter**(): `FilterQuery`\<`T`\>

Defined in: node\_modules/mongoose/types/query.d.ts:481

Returns the current query filter (also known as conditions) as a POJO.

#### Returns

`FilterQuery`\<`T`\>

#### Inherited from

`Query.getFilter`

***

### getOptions()

\> **getOptions**(): `QueryOptions`\<`T`\>

Defined in: node\_modules/mongoose/types/query.d.ts:484

Gets query options.

#### Returns

`QueryOptions`\<`T`\>

#### Inherited from

`Query.getOptions`

***

### getPopulatedPaths()

\> **getPopulatedPaths**(): `string`[]

Defined in: node\_modules/mongoose/types/query.d.ts:487

Gets a list of paths to be populated by this query

#### Returns

`string`[]

#### Inherited from

`Query.getPopulatedPaths`

***

### getQuery()

\> **getQuery**(): `FilterQuery`\<`T`\>

Defined in: node\_modules/mongoose/types/query.d.ts:490

Returns the current query filter. Equivalent to `getFilter()`.

#### Returns

`FilterQuery`\<`T`\>

#### Inherited from

`Query.getQuery`

***

### getUpdate()

\> **getUpdate**(): `null` \| `UpdateWithAggregationPipeline` \| `UpdateQuery`\<`T`\>

Defined in: node\_modules/mongoose/types/query.d.ts:493

Returns the current update operations as a JSON object.

#### Returns

`null` \| `UpdateWithAggregationPipeline` \| `UpdateQuery`\<`T`\>

#### Inherited from

`Query.getUpdate`

***

### gt()

#### Call Signature

\> **gt**\<`K`\>(`path`, `val`): `this`

Defined in: node\_modules/mongoose/types/query.d.ts:496

Specifies a `$gt` query condition. When called with one argument, the most recent path passed to `where()` is used.

##### Type Parameters

• **K** = `string`

##### Parameters

###### path

`K`

###### val

`any`

##### Returns

`this`

##### Inherited from

`Query.gt`

#### Call Signature

\> **gt**(`val`): `this`

Defined in: node\_modules/mongoose/types/query.d.ts:497

Specifies a `$gt` query condition. When called with one argument, the most recent path passed to `where()` is used.

##### Parameters

###### val

`number`

##### Returns

`this`

##### Inherited from

`Query.gt`

***

### gte()

#### Call Signature

\> **gte**\<`K`\>(`path`, `val`): `this`

Defined in: node\_modules/mongoose/types/query.d.ts:500

Specifies a `$gte` query condition. When called with one argument, the most recent path passed to `where()` is used.

##### Type Parameters

• **K** = `string`

##### Parameters

###### path

`K`

###### val

`any`

##### Returns

`this`

##### Inherited from

`Query.gte`

#### Call Signature

\> **gte**(`val`): `this`

Defined in: node\_modules/mongoose/types/query.d.ts:501

Specifies a `$gte` query condition. When called with one argument, the most recent path passed to `where()` is used.

##### Parameters

###### val

`number`

##### Returns

`this`

##### Inherited from

`Query.gte`

***

### hint()

\> **hint**(`val`): `this`

Defined in: node\_modules/mongoose/types/query.d.ts:504

Sets query hints.

#### Parameters

##### val

`any`

#### Returns

`this`

#### Inherited from

`Query.hint`

***

### in()

#### Call Signature

\> **in**\<`K`\>(`path`, `val`): `this`

Defined in: node\_modules/mongoose/types/query.d.ts:507

Specifies an `$in` query condition. When called with one argument, the most recent path passed to `where()` is used.

##### Type Parameters

• **K** = `string`

##### Parameters

###### path

`K`

###### val

`any`[]

##### Returns

`this`

##### Inherited from

`Query.in`

#### Call Signature

\> **in**(`val`): `this`

Defined in: node\_modules/mongoose/types/query.d.ts:508

Specifies an `$in` query condition. When called with one argument, the most recent path passed to `where()` is used.

##### Parameters

###### val

`any`[]

##### Returns

`this`

##### Inherited from

`Query.in`

***

### intersects()

\> **intersects**(`arg`?): `this`

Defined in: node\_modules/mongoose/types/query.d.ts:511

Declares an intersects query for `geometry()`.

#### Parameters

##### arg?

`any`

#### Returns

`this`

#### Inherited from

`Query.intersects`

***

### j()

\> **j**(`val`): `this`

Defined in: node\_modules/mongoose/types/query.d.ts:514

Requests acknowledgement that this operation has been persisted to MongoDB's on-disk journal.

#### Parameters

##### val

`null` | `boolean`

#### Returns

`this`

#### Inherited from

`Query.j`

***

### lean()

\> **lean**\<`LeanResultType`\>(`val`?): `Query`\<`LeanResultType`, `T`, `T`\>

Defined in: node\_modules/mongoose/types/query.d.ts:517

Sets the lean option.

#### Type Parameters

• **LeanResultType** = `Require_id`\<`FlattenMaps`\<`T`\>\>

#### Parameters

##### val?

`any`

#### Returns

`Query`\<`LeanResultType`, `T`, `T`\>

#### Inherited from

`Query.lean`

***

### limit()

\> **limit**(`val`): `this`

Defined in: node\_modules/mongoose/types/query.d.ts:532

Specifies the maximum number of documents the query will return.

#### Parameters

##### val

`number`

#### Returns

`this`

#### Inherited from

`Query.limit`

***

### lt()

#### Call Signature

\> **lt**\<`K`\>(`path`, `val`): `this`

Defined in: node\_modules/mongoose/types/query.d.ts:535

Specifies a `$lt` query condition. When called with one argument, the most recent path passed to `where()` is used.

##### Type Parameters

• **K** = `string`

##### Parameters

###### path

`K`

###### val

`any`

##### Returns

`this`

##### Inherited from

`Query.lt`

#### Call Signature

\> **lt**(`val`): `this`

Defined in: node\_modules/mongoose/types/query.d.ts:536

Specifies a `$lt` query condition. When called with one argument, the most recent path passed to `where()` is used.

##### Parameters

###### val

`number`

##### Returns

`this`

##### Inherited from

`Query.lt`

***

### lte()

#### Call Signature

\> **lte**\<`K`\>(`path`, `val`): `this`

Defined in: node\_modules/mongoose/types/query.d.ts:539

Specifies a `$lte` query condition. When called with one argument, the most recent path passed to `where()` is used.

##### Type Parameters

• **K** = `string`

##### Parameters

###### path

`K`

###### val

`any`

##### Returns

`this`

##### Inherited from

`Query.lte`

#### Call Signature

\> **lte**(`val`): `this`

Defined in: node\_modules/mongoose/types/query.d.ts:540

Specifies a `$lte` query condition. When called with one argument, the most recent path passed to `where()` is used.

##### Parameters

###### val

`number`

##### Returns

`this`

##### Inherited from

`Query.lte`

***

### maxDistance()

#### Call Signature

\> **maxDistance**(`path`, `val`): `this`

Defined in: node\_modules/mongoose/types/query.d.ts:549

Specifies an `$maxDistance` query condition. When called with one argument, the most recent path passed to `where()` is used.

##### Parameters

###### path

`string`

###### val

`number`

##### Returns

`this`

##### Inherited from

`Query.maxDistance`

#### Call Signature

\> **maxDistance**(`val`): `this`

Defined in: node\_modules/mongoose/types/query.d.ts:550

Specifies an `$maxDistance` query condition. When called with one argument, the most recent path passed to `where()` is used.

##### Parameters

###### val

`number`

##### Returns

`this`

##### Inherited from

`Query.maxDistance`

***

### maxTimeMS()

\> **maxTimeMS**(`ms`): `this`

Defined in: node\_modules/mongoose/types/query.d.ts:557

Sets the [maxTimeMS](https://www.mongodb.com/docs/manual/reference/method/cursor.maxTimeMS/)
option. This will tell the MongoDB server to abort if the query or write op
has been running for more than `ms` milliseconds.

#### Parameters

##### ms

`number`

#### Returns

`this`

#### Inherited from

`Query.maxTimeMS`

***

### merge()

\> **merge**(`source`): `this`

Defined in: node\_modules/mongoose/types/query.d.ts:560

Merges another Query or conditions object into this one.

#### Parameters

##### source

`Query`\<`any`, `any`, `any`\> | `FilterQuery`\<`T`\>

#### Returns

`this`

#### Inherited from

`Query.merge`

***

### mod()

#### Call Signature

\> **mod**\<`K`\>(`path`, `val`): `this`

Defined in: node\_modules/mongoose/types/query.d.ts:563

Specifies a `$mod` condition, filters documents for documents whose `path` property is a number that is equal to `remainder` modulo `divisor`.

##### Type Parameters

• **K** = `string`

##### Parameters

###### path

`K`

###### val

`number`

##### Returns

`this`

##### Inherited from

`Query.mod`

#### Call Signature

\> **mod**(`val`): `this`

Defined in: node\_modules/mongoose/types/query.d.ts:564

Specifies a `$mod` condition, filters documents for documents whose `path` property is a number that is equal to `remainder` modulo `divisor`.

##### Parameters

###### val

`number`[]

##### Returns

`this`

##### Inherited from

`Query.mod`

***

### mongooseOptions()

\> **mongooseOptions**(`val`?): `MongooseQueryOptions`\<`unknown`, `"timestamps"` \| `MongooseBaseQueryOptionKeys` \| `"lean"`\>

Defined in: node\_modules/mongoose/types/query.d.ts:573

Getter/setter around the current mongoose-specific options for this query
Below are the current Mongoose-specific options.

#### Parameters

##### val?

`MongooseQueryOptions`\<`unknown`, `"timestamps"` \| `MongooseBaseQueryOptionKeys` \| `"lean"`\>

#### Returns

`MongooseQueryOptions`\<`unknown`, `"timestamps"` \| `MongooseBaseQueryOptionKeys` \| `"lean"`\>

#### Inherited from

`Query.mongooseOptions`

***

### ne()

#### Call Signature

\> **ne**\<`K`\>(`path`, `val`): `this`

Defined in: node\_modules/mongoose/types/query.d.ts:576

Specifies a `$ne` query condition. When called with one argument, the most recent path passed to `where()` is used.

##### Type Parameters

• **K** = `string`

##### Parameters

###### path

`K`

###### val

`any`

##### Returns

`this`

##### Inherited from

`Query.ne`

#### Call Signature

\> **ne**(`val`): `this`

Defined in: node\_modules/mongoose/types/query.d.ts:577

Specifies a `$ne` query condition. When called with one argument, the most recent path passed to `where()` is used.

##### Parameters

###### val

`any`

##### Returns

`this`

##### Inherited from

`Query.ne`

***

### near()

#### Call Signature

\> **near**\<`K`\>(`path`, `val`): `this`

Defined in: node\_modules/mongoose/types/query.d.ts:580

Specifies a `$near` or `$nearSphere` condition

##### Type Parameters

• **K** = `string`

##### Parameters

###### path

`K`

###### val

`any`

##### Returns

`this`

##### Inherited from

`Query.near`

#### Call Signature

\> **near**(`val`): `this`

Defined in: node\_modules/mongoose/types/query.d.ts:581

Specifies a `$near` or `$nearSphere` condition

##### Parameters

###### val

`any`

##### Returns

`this`

##### Inherited from

`Query.near`

***

### nin()

#### Call Signature

\> **nin**\<`K`\>(`path`, `val`): `this`

Defined in: node\_modules/mongoose/types/query.d.ts:584

Specifies an `$nin` query condition. When called with one argument, the most recent path passed to `where()` is used.

##### Type Parameters

• **K** = `string`

##### Parameters

###### path

`K`

###### val

`any`[]

##### Returns

`this`

##### Inherited from

`Query.nin`

#### Call Signature

\> **nin**(`val`): `this`

Defined in: node\_modules/mongoose/types/query.d.ts:585

Specifies an `$nin` query condition. When called with one argument, the most recent path passed to `where()` is used.

##### Parameters

###### val

`any`[]

##### Returns

`this`

##### Inherited from

`Query.nin`

***

### nor()

\> **nor**(`array`): `this`

Defined in: node\_modules/mongoose/types/query.d.ts:588

Specifies arguments for an `$nor` condition.

#### Parameters

##### array

`FilterQuery`\<`T`\>[]

#### Returns

`this`

#### Inherited from

`Query.nor`

***

### or()

\> **or**(`array`): `this`

Defined in: node\_modules/mongoose/types/query.d.ts:591

Specifies arguments for an `$or` condition.

#### Parameters

##### array

`FilterQuery`\<`T`\>[]

#### Returns

`this`

#### Inherited from

`Query.or`

***

### orFail()

\> **orFail**(`err`?): `Query`\<`T`, `T`\>

Defined in: node\_modules/mongoose/types/query.d.ts:598

Make this query throw an error if no documents match the given `filter`.
This is handy for integrating with async/await, because `orFail()` saves you
an extra `if` statement to check if no document was found.

#### Parameters

##### err?

`NativeError` | () =\> `NativeError`

#### Returns

`Query`\<`T`, `T`\>

#### Inherited from

`Query.orFail`

***

### paginate()

#### Call Signature

\> **paginate**\<`O`\>(`options`?): `Promise`\<`PaginateResult`\<`PaginateDocument`\<`T`, `Record`\<`string`, `never`\>, \{\}, `O`\>\>\>

Defined in: node\_modules/mongoose-paginate-v2/index.d.ts:140

##### Type Parameters

• **O** *extends* `PaginateOptions`

##### Parameters

###### options?

`O`

##### Returns

`Promise`\<`PaginateResult`\<`PaginateDocument`\<`T`, `Record`\<`string`, `never`\>, \{\}, `O`\>\>\>

##### Inherited from

`Query.paginate`

#### Call Signature

\> **paginate**\<`UserType`, `O`\>(`options`?): `Promise`\<`PaginateResult`\<`PaginateDocument`\<`UserType`, `Record`\<`string`, `never`\>, \{\}, `O`\>\>\>

Defined in: node\_modules/mongoose-paginate-v2/index.d.ts:143

##### Type Parameters

• **UserType** = `unknown`

• **O** *extends* `PaginateOptions` = `PaginateOptions`

##### Parameters

###### options?

`O`

##### Returns

`Promise`\<`PaginateResult`\<`PaginateDocument`\<`UserType`, `Record`\<`string`, `never`\>, \{\}, `O`\>\>\>

##### Inherited from

`Query.paginate`

#### Call Signature

\> **paginate**\<`UserType`\>(`options`?): `Promise`\<`PaginateResult`\<`IfAny`\<`UserType`, `any`, `Document`\<`unknown`, \{\}, `UserType`\> & `Require_id`\<`UserType`\>\>\>\>

Defined in: node\_modules/mongoose-paginate-v2/index.d.ts:146

##### Type Parameters

• **UserType** = `unknown`

##### Parameters

###### options?

`PaginateOptions`

##### Returns

`Promise`\<`PaginateResult`\<`IfAny`\<`UserType`, `any`, `Document`\<`unknown`, \{\}, `UserType`\> & `Require_id`\<`UserType`\>\>\>\>

##### Inherited from

`Query.paginate`

***

### polygon()

#### Call Signature

\> **polygon**(`path`, ...`coordinatePairs`): `this`

Defined in: node\_modules/mongoose/types/query.d.ts:601

Specifies a `$polygon` condition

##### Parameters

###### path

`string`

###### coordinatePairs

...`number`[][]

##### Returns

`this`

##### Inherited from

`Query.polygon`

#### Call Signature

\> **polygon**(...`coordinatePairs`): `this`

Defined in: node\_modules/mongoose/types/query.d.ts:602

Specifies a `$polygon` condition

##### Parameters

###### coordinatePairs

...`number`[][]

##### Returns

`this`

##### Inherited from

`Query.polygon`

***

### populate()

#### Call Signature

\> **populate**\<`Paths`\>(`path`, `select`?, `model`?, `match`?): `Query`\<keyof `Paths` *extends* `never` ? `unknown` : `Omit`\<`unknown`, keyof `Paths`\> & `Paths`, `T`, `UnpackedIntersection`\<`T`, `Paths`\>\>

Defined in: node\_modules/mongoose/types/query.d.ts:605

Specifies paths which should be populated with other documents.

##### Type Parameters

• **Paths** = \{\}

##### Parameters

###### path

`string` | `string`[]

###### select?

`any`

###### model?

`string` | `Model`

###### match?

`any`

##### Returns

`Query`\<keyof `Paths` *extends* `never` ? `unknown` : `Omit`\<`unknown`, keyof `Paths`\> & `Paths`, `T`, `UnpackedIntersection`\<`T`, `Paths`\>\>

##### Inherited from

`Query.populate`

#### Call Signature

\> **populate**\<`Paths`\>(`options`): `Query`\<keyof `Paths` *extends* `never` ? `unknown` : `Omit`\<`unknown`, keyof `Paths`\> & `Paths`, `T`, `UnpackedIntersection`\<`T`, `Paths`\>\>

Defined in: node\_modules/mongoose/types/query.d.ts:617

Specifies paths which should be populated with other documents.

##### Type Parameters

• **Paths** = \{\}

##### Parameters

###### options

`PopulateOptions` | (`string` \| `PopulateOptions`)[]

##### Returns

`Query`\<keyof `Paths` *extends* `never` ? `unknown` : `Omit`\<`unknown`, keyof `Paths`\> & `Paths`, `T`, `UnpackedIntersection`\<`T`, `Paths`\>\>

##### Inherited from

`Query.populate`

***

### post()

\> **post**(`fn`): `this`

Defined in: node\_modules/mongoose/types/query.d.ts:631

Add post middleware to this query instance. Doesn't affect other queries.

#### Parameters

##### fn

`Function`

#### Returns

`this`

#### Inherited from

`Query.post`

***

### pre()

\> **pre**(`fn`): `this`

Defined in: node\_modules/mongoose/types/query.d.ts:628

Add pre middleware to this query instance. Doesn't affect other queries.

#### Parameters

##### fn

`Function`

#### Returns

`this`

#### Inherited from

`Query.pre`

***

### projection()

#### Call Signature

\> **projection**(`fields`?): `ProjectionFields`\<`T`\>

Defined in: node\_modules/mongoose/types/query.d.ts:634

Get/set the current projection (AKA fields). Pass `null` to remove the current projection.

##### Parameters

###### fields?

`string` | `ProjectionFields`\<`T`\>

##### Returns

`ProjectionFields`\<`T`\>

##### Inherited from

`Query.projection`

#### Call Signature

\> **projection**(`fields`): `null`

Defined in: node\_modules/mongoose/types/query.d.ts:635

Get/set the current projection (AKA fields). Pass `null` to remove the current projection.

##### Parameters

###### fields

`null`

##### Returns

`null`

##### Inherited from

`Query.projection`

#### Call Signature

\> **projection**(): `null` \| `ProjectionFields`\<`T`\>

Defined in: node\_modules/mongoose/types/query.d.ts:636

Get/set the current projection (AKA fields). Pass `null` to remove the current projection.

##### Returns

`null` \| `ProjectionFields`\<`T`\>

##### Inherited from

`Query.projection`

***

### read()

\> **read**(`mode`, `tags`?): `this`

Defined in: node\_modules/mongoose/types/query.d.ts:639

Determines the MongoDB nodes from which to read.

#### Parameters

##### mode

`string`

##### tags?

`any`[]

#### Returns

`this`

#### Inherited from

`Query.read`

***

### readConcern()

\> **readConcern**(`level`): `this`

Defined in: node\_modules/mongoose/types/query.d.ts:642

Sets the readConcern option for the query.

#### Parameters

##### level

`string`

#### Returns

`this`

#### Inherited from

`Query.readConcern`

***

### regex()

#### Call Signature

\> **regex**\<`K`\>(`path`, `val`): `this`

Defined in: node\_modules/mongoose/types/query.d.ts:645

Specifies a `$regex` query condition. When called with one argument, the most recent path passed to `where()` is used.

##### Type Parameters

• **K** = `string`

##### Parameters

###### path

`K`

###### val

`RegExp`

##### Returns

`this`

##### Inherited from

`Query.regex`

#### Call Signature

\> **regex**(`val`): `this`

Defined in: node\_modules/mongoose/types/query.d.ts:646

Specifies a `$regex` query condition. When called with one argument, the most recent path passed to `where()` is used.

##### Parameters

###### val

`string` | `RegExp`

##### Returns

`this`

##### Inherited from

`Query.regex`

***

### replaceOne()

\> **replaceOne**(`filter`?, `replacement`?, `options`?): `Query`\<`any`, `T`, `T`, `"replaceOne"`\>

Defined in: node\_modules/mongoose/types/query.d.ts:653

Declare and/or execute this query as a replaceOne() operation. Same as
`update()`, except MongoDB will replace the existing document and will
not accept any [atomic](https://www.mongodb.com/docs/manual/tutorial/model-data-for-atomic-operations/#pattern) operators (`$set`, etc.)

#### Parameters

##### filter?

`FilterQuery`\<`T`\>

##### replacement?

`T` | `AnyObject`

##### options?

`null` | `QueryOptions`\<`T`\>

#### Returns

`Query`\<`any`, `T`, `T`, `"replaceOne"`\>

#### Inherited from

`Query.replaceOne`

***

### select()

\> **select**\<`RawDocTypeOverride`\>(`arg`): `Query`\<`IfEquals`\<`RawDocTypeOverride`, \{\}, `unknown`, `IfAny`\<`RawDocTypeOverride`, `any`, `Document`\<`unknown`, \{\}, `RawDocTypeOverride`\> & `Require_id`\<`RawDocTypeOverride`\>\>\>, `T`, `IfEquals`\<`RawDocTypeOverride`, \{\}, `T`, `RawDocTypeOverride`\>\>

Defined in: node\_modules/mongoose/types/query.d.ts:660

Specifies which document fields to include or exclude (also known as the query "projection")

#### Type Parameters

• **RawDocTypeOverride** *extends* \{ \[P in string \| number \| symbol\]?: any \} = \{\}

#### Parameters

##### arg

`string` | `string`[] | `Record`\<`string`, `string` \| `number` \| `boolean` \| `object`\>

#### Returns

`Query`\<`IfEquals`\<`RawDocTypeOverride`, \{\}, `unknown`, `IfAny`\<`RawDocTypeOverride`, `any`, `Document`\<`unknown`, \{\}, `RawDocTypeOverride`\> & `Require_id`\<`RawDocTypeOverride`\>\>\>, `T`, `IfEquals`\<`RawDocTypeOverride`, \{\}, `T`, `RawDocTypeOverride`\>\>

#### Inherited from

`Query.select`

***

### selected()

\> **selected**(): `boolean`

Defined in: node\_modules/mongoose/types/query.d.ts:687

Determines if field selection has been made.

#### Returns

`boolean`

#### Inherited from

`Query.selected`

***

### selectedExclusively()

\> **selectedExclusively**(): `boolean`

Defined in: node\_modules/mongoose/types/query.d.ts:690

Determines if exclusive field selection has been made.

#### Returns

`boolean`

#### Inherited from

`Query.selectedExclusively`

***

### selectedInclusively()

\> **selectedInclusively**(): `boolean`

Defined in: node\_modules/mongoose/types/query.d.ts:693

Determines if inclusive field selection has been made.

#### Returns

`boolean`

#### Inherited from

`Query.selectedInclusively`

***

### session()

\> **session**(`session`): `this`

Defined in: node\_modules/mongoose/types/query.d.ts:700

Sets the [MongoDB session](https://www.mongodb.com/docs/manual/reference/server-sessions/)
associated with this query. Sessions are how you mark a query as part of a
[transaction](/docs/transactions.html).

#### Parameters

##### session

`null` | `ClientSession`

#### Returns

`this`

#### Inherited from

`Query.session`

***

### set()

\> **set**(`path`, `value`?): `this`

Defined in: node\_modules/mongoose/types/query.d.ts:707

Adds a `$set` to this query's update without changing the operation.
This is useful for query middleware so you can add an update regardless
of whether you use `updateOne()`, `updateMany()`, `findOneAndUpdate()`, etc.

#### Parameters

##### path

`string` | `Record`\<`string`, `unknown`\>

##### value?

`any`

#### Returns

`this`

#### Inherited from

`Query.set`

***

### setOptions()

\> **setOptions**(`options`, `overwrite`?): `this`

Defined in: node\_modules/mongoose/types/query.d.ts:710

Sets query options. Some options only make sense for certain operations.

#### Parameters

##### options

`QueryOptions`\<`T`\>

##### overwrite?

`boolean`

#### Returns

`this`

#### Inherited from

`Query.setOptions`

***

### setQuery()

\> **setQuery**(`val`): `void`

Defined in: node\_modules/mongoose/types/query.d.ts:713

Sets the query conditions to the provided JSON object.

#### Parameters

##### val

`null` | `FilterQuery`\<`T`\>

#### Returns

`void`

#### Inherited from

`Query.setQuery`

***

### setUpdate()

\> **setUpdate**(`update`): `void`

Defined in: node\_modules/mongoose/types/query.d.ts:715

#### Parameters

##### update

`UpdateWithAggregationPipeline` | `UpdateQuery`\<`T`\>

#### Returns

`void`

#### Inherited from

`Query.setUpdate`

***

### size()

#### Call Signature

\> **size**\<`K`\>(`path`, `val`): `this`

Defined in: node\_modules/mongoose/types/query.d.ts:718

Specifies an `$size` query condition. When called with one argument, the most recent path passed to `where()` is used.

##### Type Parameters

• **K** = `string`

##### Parameters

###### path

`K`

###### val

`number`

##### Returns

`this`

##### Inherited from

`Query.size`

#### Call Signature

\> **size**(`val`): `this`

Defined in: node\_modules/mongoose/types/query.d.ts:719

Specifies an `$size` query condition. When called with one argument, the most recent path passed to `where()` is used.

##### Parameters

###### val

`number`

##### Returns

`this`

##### Inherited from

`Query.size`

***

### skip()

\> **skip**(`val`): `this`

Defined in: node\_modules/mongoose/types/query.d.ts:722

Specifies the number of documents to skip.

#### Parameters

##### val

`number`

#### Returns

`this`

#### Inherited from

`Query.skip`

***

### slice()

#### Call Signature

\> **slice**(`path`, `val`): `this`

Defined in: node\_modules/mongoose/types/query.d.ts:725

Specifies a `$slice` projection for an array.

##### Parameters

###### path

`string`

###### val

`number` | `number`[]

##### Returns

`this`

##### Inherited from

`Query.slice`

#### Call Signature

\> **slice**(`val`): `this`

Defined in: node\_modules/mongoose/types/query.d.ts:726

Specifies a `$slice` projection for an array.

##### Parameters

###### val

`number` | `number`[]

##### Returns

`this`

##### Inherited from

`Query.slice`

***

### sort()

\> **sort**(`arg`?, `options`?): `this`

Defined in: node\_modules/mongoose/types/query.d.ts:729

Sets the sort order. If an object is passed, values allowed are `asc`, `desc`, `ascending`, `descending`, `1`, and `-1`.

#### Parameters

##### arg?

`null` | `string` | \[`string`, `SortOrder`\][] | \{\}

##### options?

###### override

`boolean`

#### Returns

`this`

#### Inherited from

`Query.sort`

***

### tailable()

\> **tailable**(`bool`?, `opts`?): `this`

Defined in: node\_modules/mongoose/types/query.d.ts:735

Sets the tailable option (for use with capped collections).

#### Parameters

##### bool?

`boolean`

##### opts?

###### numberOfRetries

`number`

###### tailableRetryInterval

`number`

#### Returns

`this`

#### Inherited from

`Query.tailable`

***

### toConstructor()

\> **toConstructor**\<`RetType`\>(): `RetType`

Defined in: node\_modules/mongoose/types/query.d.ts:747

Converts this query to a customized, reusable query constructor with all arguments and options retained.

#### Type Parameters

• **RetType** = *typeof* `Query`

#### Returns

`RetType`

#### Inherited from

`Query.toConstructor`

***

### transform()

\> **transform**\<`MappedType`\>(`fn`): `Query`\<`MappedType`, `T`, `T`\>

Defined in: node\_modules/mongoose/types/query.d.ts:546

Runs a function `fn` and treats the return value of `fn` as the new value
for the query to resolve to.

#### Type Parameters

• **MappedType**

#### Parameters

##### fn

(`doc`) =\> `MappedType`

#### Returns

`Query`\<`MappedType`, `T`, `T`\>

#### Inherited from

`Query.transform`

***

### updateMany()

\> **updateMany**(`filter`?, `update`?, `options`?): `Query`\<`UpdateWriteOpResult`, `T`, `T`, `"updateMany"`\>

Defined in: node\_modules/mongoose/types/query.d.ts:755

Declare and/or execute this query as an updateMany() operation. Same as
`update()`, except MongoDB will update _all_ documents that match
`filter` (as opposed to just the first one) regardless of the value of
the `multi` option.

#### Parameters

##### filter?

`FilterQuery`\<`T`\>

##### update?

`UpdateWithAggregationPipeline` | `UpdateQuery`\<`T`\>

##### options?

`null` | `QueryOptions`\<`T`\>

#### Returns

`Query`\<`UpdateWriteOpResult`, `T`, `T`, `"updateMany"`\>

#### Inherited from

`Query.updateMany`

***

### updateOne()

\> **updateOne**(`filter`?, `update`?, `options`?): `Query`\<`UpdateWriteOpResult`, `T`, `T`, `"updateOne"`\>

Defined in: node\_modules/mongoose/types/query.d.ts:765

Declare and/or execute this query as an updateOne() operation. Same as
`update()`, except it does not support the `multi` or `overwrite` options.

#### Parameters

##### filter?

`FilterQuery`\<`T`\>

##### update?

`UpdateWithAggregationPipeline` | `UpdateQuery`\<`T`\>

##### options?

`null` | `QueryOptions`\<`T`\>

#### Returns

`Query`\<`UpdateWriteOpResult`, `T`, `T`, `"updateOne"`\>

#### Inherited from

`Query.updateOne`

***

### w()

\> **w**(`val`): `this`

Defined in: node\_modules/mongoose/types/query.d.ts:775

Sets the specified number of `mongod` servers, or tag set of `mongod` servers,
that must acknowledge this write before this write is considered successful.

#### Parameters

##### val

`null` | `string` | `number`

#### Returns

`this`

#### Inherited from

`Query.w`

***

### where()

#### Call Signature

\> **where**(`path`, `val`?): `this`

Defined in: node\_modules/mongoose/types/query.d.ts:778

Specifies a path for use with chaining.

##### Parameters

###### path

`string`

###### val?

`any`

##### Returns

`this`

##### Inherited from

`Query.where`

#### Call Signature

\> **where**(`obj`): `this`

Defined in: node\_modules/mongoose/types/query.d.ts:779

Specifies a path for use with chaining.

##### Parameters

###### obj

`object`

##### Returns

`this`

##### Inherited from

`Query.where`

#### Call Signature

\> **where**(): `this`

Defined in: node\_modules/mongoose/types/query.d.ts:780

Specifies a path for use with chaining.

##### Returns

`this`

##### Inherited from

`Query.where`

***

### within()

\> **within**(`val`?): `this`

Defined in: node\_modules/mongoose/types/query.d.ts:783

Defines a `$within` or `$geoWithin` argument for geo-spatial queries.

#### Parameters

##### val?

`any`

#### Returns

`this`

#### Inherited from

`Query.within`

***

### wtimeout()

\> **wtimeout**(`ms`): `this`

Defined in: node\_modules/mongoose/types/query.d.ts:790

If [`w \> 1`](/docs/api/query.html#query_Query-w), the maximum amount of time to
wait for this write to propagate through the replica set before this
operation fails. The default is `0`, which means no timeout.

#### Parameters

##### ms

`number`

#### Returns

`this`

#### Inherited from

`Query.wtimeout`
