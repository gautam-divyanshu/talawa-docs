[**talawa-api**](../../../README.md)

***

# Interface: IDatabaseClient

Defined in: [src/plugin/types.ts:169](https://github.com/PalisadoesFoundation/talawa-api/blob/4fc4e12ad9f960600b3078451d438c08033538a9/src/plugin/types.ts#L169)

## Properties

### execute()?

> `optional` **execute**: (`sql`) => `Promise`\<`unknown`\>

Defined in: [src/plugin/types.ts:181](https://github.com/PalisadoesFoundation/talawa-api/blob/4fc4e12ad9f960600b3078451d438c08033538a9/src/plugin/types.ts#L181)

#### Parameters

##### sql

`string`

#### Returns

`Promise`\<`unknown`\>

***

### select()

> **select**: (...`args`) => `object`

Defined in: [src/plugin/types.ts:170](https://github.com/PalisadoesFoundation/talawa-api/blob/4fc4e12ad9f960600b3078451d438c08033538a9/src/plugin/types.ts#L170)

#### Parameters

##### args

...`unknown`[]

#### Returns

`object`

##### from()

> **from**: (`table`) => `object`

###### Parameters

###### table

`unknown`

###### Returns

`object`

###### limit()?

> `optional` **limit**: (...`args`) => `Promise`\<`unknown`[]\>

###### Parameters

###### args

...`unknown`[]

###### Returns

`Promise`\<`unknown`[]\>

###### where()

> **where**: (...`args`) => `Promise`\<`unknown`[]\>

###### Parameters

###### args

...`unknown`[]

###### Returns

`Promise`\<`unknown`[]\>

***

### update()

> **update**: (...`args`) => `object`

Defined in: [src/plugin/types.ts:176](https://github.com/PalisadoesFoundation/talawa-api/blob/4fc4e12ad9f960600b3078451d438c08033538a9/src/plugin/types.ts#L176)

#### Parameters

##### args

...`unknown`[]

#### Returns

`object`

##### set()

> **set**: (...`args`) => `object`

###### Parameters

###### args

...`unknown`[]

###### Returns

`object`

###### where()

> **where**: (...`args`) => `Promise`\<`void`\>

###### Parameters

###### args

...`unknown`[]

###### Returns

`Promise`\<`void`\>
