[**talawa-admin**](../../../../README.md)

***

# Function: handleCreateDirectChat()

> **handleCreateDirectChat**(`id`, `chats`, `t`, `createChat`, `organizationId`, `userId`, `chatsListRefetch`, `toggleCreateDirectChatModal`): `Promise`\<`void`\>

Defined in: [components/UserPortal/CreateDirectChat/CreateDirectChat.tsx:89](https://github.com/PalisadoesFoundation/talawa-admin/blob/96d654ef5614951b0c6831633ec9037a4f39157e/src/components/UserPortal/CreateDirectChat/CreateDirectChat.tsx#L89)

## Parameters

### id

`string`

### chats

`GroupChat`[]

### t

`TFunction`\<`"translation"`, `"userChat"`\>

### createChat

\{(`options?`): `Promise`\<`FetchResult`\<`unknown`\>\>; (`arg0`): `unknown`; \}

### organizationId

`string`

### userId

`string`

### chatsListRefetch

\{(`variables?`): `Promise`\<`ApolloQueryResult`\<`unknown`\>\>; (): `Promise`\<`ApolloQueryResult`\<`unknown`\>\>; \}

### toggleCreateDirectChatModal

\{(): `void`; (): `void`; \}

## Returns

`Promise`\<`void`\>
