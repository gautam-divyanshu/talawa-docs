[**talawa-admin**](../../../../../README.md)

***

# Function: useUpdateEventHandler()

> **useUpdateEventHandler**(): `object`

Defined in: [components/EventListCard/Modal/updateLogic.ts:28](https://github.com/PalisadoesFoundation/talawa-admin/blob/fc82c850e280189101f3f3784976f5c13ae288a3/src/components/EventListCard/Modal/updateLogic.ts#L28)

Creates the update handler for EventListCard modal edits, managing mutations for standalone and recurring events.

## Returns

`object`

An object containing the update logic:
- updateEventHandler: `(args: IUpdateEventHandlerProps) => Promise<void>` - Asynchronous function that handles the event update process, including validation and mutation execution.

### updateEventHandler()

> **updateEventHandler**: (`__namedParameters`) => `Promise`\<`void`\>

#### Parameters

##### \_\_namedParameters

`InterfaceUpdateEventHandlerProps`

#### Returns

`Promise`\<`void`\>
