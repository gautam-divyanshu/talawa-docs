[**talawa-admin**](../../../../../README.md)

***

# Function: handleCreateDirectChat()

> **handleCreateDirectChat**(`id`, `chats`, `t`, `createChat`, `organizationId`, `userId`, `chatsListRefetch`, `toggleCreateDirectChatModal`): `Promise`\<`void`\>

Defined in: [src/components/UserPortal/CreateDirectChat/CreateDirectChat.tsx:70](https://github.com/PalisadoesFoundation/talawa-admin/blob/f8ee21cec8104cf917ede65f524307d1ff815e74/src/components/UserPortal/CreateDirectChat/CreateDirectChat.tsx#L70)

## Parameters

### id

`string`

### chats

[`Chat`](../../../../../screens/UserPortal/Chat/Chat/type-aliases/Chat.md)[]

### t

`TFunction`\<`"userChat"`\>

### createChat

(`options`?) => `Promise`\<`FetchResult`\<`unknown`\>\>(`arg0`) => `unknown`

### organizationId

`string`

### userId

`string`

### chatsListRefetch

(`variables`?) => `Promise`\<`ApolloQueryResult`\<`unknown`\>\>() => `Promise`\<`ApolloQueryResult`\<`unknown`\>\>

### toggleCreateDirectChatModal

() => `void`() => `void`

## Returns

`Promise`\<`void`\>
