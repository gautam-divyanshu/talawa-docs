[**talawa-admin**](../../../../../README.md)

***

# Function: handleCreateDirectChat()

> **handleCreateDirectChat**(`id`, `chats`, `t`, `createChat`, `organizationId`, `userId`, `chatsListRefetch`, `toggleCreateDirectChatModal`): `Promise`\<`void`\>

Defined in: [src/components/UserPortal/CreateDirectChat/CreateDirectChat.tsx:70](https://github.com/PalisadoesFoundation/talawa-admin/blob/3104525a1c66b9686a5ac0b80c45c43369f312bb/src/components/UserPortal/CreateDirectChat/CreateDirectChat.tsx#L70)

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
