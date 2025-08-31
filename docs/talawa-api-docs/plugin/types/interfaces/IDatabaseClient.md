[**talawa-api**](../../../README.md)

***

# Interface: IDatabaseClient

Defined in: [src/plugin/types.ts:133](https://github.com/PalisadoesFoundation/talawa-api/blob/d13be3cb0cfe1a6d40c90655bd50eb2eae8eb9fc/src/plugin/types.ts#L133)

## Properties

### execute()?

> `optional` **execute**: (`sql`) => `Promise`\<`unknown`\>

Defined in: [src/plugin/types.ts:145](https://github.com/PalisadoesFoundation/talawa-api/blob/d13be3cb0cfe1a6d40c90655bd50eb2eae8eb9fc/src/plugin/types.ts#L145)

#### Parameters

##### sql

`string`

#### Returns

`Promise`\<`unknown`\>

***

### select()

> **select**: (...`args`) => `object`

Defined in: [src/plugin/types.ts:134](https://github.com/PalisadoesFoundation/talawa-api/blob/d13be3cb0cfe1a6d40c90655bd50eb2eae8eb9fc/src/plugin/types.ts#L134)

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

Defined in: [src/plugin/types.ts:140](https://github.com/PalisadoesFoundation/talawa-api/blob/d13be3cb0cfe1a6d40c90655bd50eb2eae8eb9fc/src/plugin/types.ts#L140)

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
