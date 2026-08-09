[**talawa-api**](../../../../README.md)

***

# Variable: eventInvitationsTable

> `const` **eventInvitationsTable**: `PgTableWithColumns`\<\{ \}\>

Defined in: [src/drizzle/tables/eventInvitations.ts:23](https://github.com/PalisadoesFoundation/talawa-api/blob/b9e6fcc765ae0106e0dfd5d4f4612eef0522df38/src/drizzle/tables/eventInvitations.ts#L23)

Table to store event invitations for both users and non-users.
Invitations are created with an email and a secure token. When
the recipient accepts the invitation the `userId` can be linked
and an `event_attendees` record should be created by service logic.
