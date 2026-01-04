[**talawa-admin**](../../../../README.md)

***

# Function: handleCreateDirectChat()

> **handleCreateDirectChat**(`id`, `userName`, `chats`, `t`, `createChat`, `createChatMembership`, `organizationId`, `userId`, `currentUserName`, `chatsListRefetch`, `toggleCreateDirectChatModal`): `Promise`\<`void`\>

Defined in: [components/UserPortal/CreateDirectChat/CreateDirectChat.tsx:82](https://github.com/PalisadoesFoundation/talawa-admin/blob/fc3abee3ec7208447f84a5286dfe9cc9bbdaa02a/src/components/UserPortal/CreateDirectChat/CreateDirectChat.tsx#L82)

## Parameters

### id

`string`

### userName

`string`

### chats

`GroupChat`[]

### t

`TFunction`\<`"translation"`, `"userChat"`\>

### createChat

\{(`options?`): `Promise`\<`FetchResult`\<`unknown`\>\>; (`arg0`): `unknown`; \}

### createChatMembership

\{(`options?`): `Promise`\<`FetchResult`\<`unknown`\>\>; (`arg0`): `unknown`; \}

### organizationId

`string`

### userId

`string`

### currentUserName

`string`

### chatsListRefetch

\{(`variables?`): `Promise`\<`ApolloQueryResult`\<`unknown`\>\>; (): `Promise`\<`ApolloQueryResult`\<`unknown`\>\>; \}

### toggleCreateDirectChatModal

\{(): `void`; (): `void`; \}

## Returns

`Promise`\<`void`\>
