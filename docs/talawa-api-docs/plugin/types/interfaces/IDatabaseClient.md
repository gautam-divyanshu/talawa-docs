[**talawa-api**](../../../README.md)

***

# Interface: IDatabaseClient

Defined in: [src/plugin/types.ts:159](https://github.com/PalisadoesFoundation/talawa-api/blob/8d297f60dc1691c65743cbe7bf8fda727ed61654/src/plugin/types.ts#L159)

## Properties

### execute()?

> `optional` **execute**: (`sql`) => `Promise`\<`unknown`\>

Defined in: [src/plugin/types.ts:171](https://github.com/PalisadoesFoundation/talawa-api/blob/8d297f60dc1691c65743cbe7bf8fda727ed61654/src/plugin/types.ts#L171)

#### Parameters

##### sql

`string`

#### Returns

`Promise`\<`unknown`\>

***

### select()

> **select**: (...`args`) => `object`

Defined in: [src/plugin/types.ts:160](https://github.com/PalisadoesFoundation/talawa-api/blob/8d297f60dc1691c65743cbe7bf8fda727ed61654/src/plugin/types.ts#L160)

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

Defined in: [src/plugin/types.ts:166](https://github.com/PalisadoesFoundation/talawa-api/blob/8d297f60dc1691c65743cbe7bf8fda727ed61654/src/plugin/types.ts#L166)

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
