[**talawa-api**](../../../../README.md)

***

# Variable: eventInvitationsTable

> `const` **eventInvitationsTable**: `PgTableWithColumns`\<\{ \}\>

Defined in: [src/drizzle/tables/eventInvitations.ts:23](https://github.com/PalisadoesFoundation/talawa-api/blob/36d1ea832b10d1e9883eff7a03104362b71079bd/src/drizzle/tables/eventInvitations.ts#L23)

Table to store event invitations for both users and non-users.
Invitations are created with an email and a secure token. When
the recipient accepts the invitation the `userId` can be linked
and an `event_attendees` record should be created by service logic.
