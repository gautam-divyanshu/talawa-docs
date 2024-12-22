[**talawa-api**](../../../README.md)

***

[talawa-api](../../../modules.md) / [libraries/dbLogger](../README.md) / createLoggingMiddleware

# Function: createLoggingMiddleware()

\> **createLoggingMiddleware**\<`T`\>(`schema`, `modelName`): `void`

Creates a logging middleware for a Mongoose schema. This middleware logs
create, update, and delete operations on the specified schema.

## Type Parameters

• **T** *extends* `Document`\<`any`, `any`, `any`\>

## Parameters

### schema

`Schema`\<`T`, `Model`\<`T`, `any`, `any`, `any`, `IfAny`\<`T`, `any`, `Document`\<`unknown`, `any`, `T`\> & `Require_id`\<`T`\>\>, `any`\>, \{\}, \{\}, \{\}, \{\}, `DefaultSchemaOptions`, `ObtainDocumentType`\<`any`, `T`, `ResolveSchemaOptions`\<`DefaultSchemaOptions`\>\>, `IfAny`\<`FlatRecord`\<`ObtainDocumentType`\<`any`, `T`, `ResolveSchemaOptions`\<`DefaultSchemaOptions`\>\>\>, `any`, `Document`\<`unknown`, \{\}, `FlatRecord`\<`ObtainDocumentType`\<`any`, `T`, `ResolveSchemaOptions`\<`DefaultSchemaOptions`\>\>\>\> & `Require_id`\<`FlatRecord`\<`ObtainDocumentType`\<`any`, `T`, `ResolveSchemaOptions`\<`DefaultSchemaOptions`\>\>\>\>\>\>

The Mongoose schema to which the middleware will be added

### modelName

`string`

The name of the model associated with the schema

## Returns

`void`

## Defined in

[src/libraries/dbLogger.ts:65](https://github.com/PalisadoesFoundation/talawa-api/blob/039b0f127fb8caa46d57186ab4b3bb27fe150903/src/libraries/dbLogger.ts#L65)
