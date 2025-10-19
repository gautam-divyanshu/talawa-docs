[**talawa-admin**](../../../../README.md)

***

# Function: handleCreateDirectChat()

> **handleCreateDirectChat**(`id`, `chats`, `t`, `createChat`, `organizationId`, `userId`, `chatsListRefetch`, `toggleCreateDirectChatModal`): `Promise`\<`void`\>

Defined in: [components/UserPortal/CreateDirectChat/CreateDirectChat.tsx:89](https://github.com/PalisadoesFoundation/talawa-admin/blob/ad263628205945a0b68fe718adb247e95cc9ae2d/src/components/UserPortal/CreateDirectChat/CreateDirectChat.tsx#L89)

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
