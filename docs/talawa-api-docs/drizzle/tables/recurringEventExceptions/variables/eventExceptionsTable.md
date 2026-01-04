[**talawa-api**](../../../../README.md)

***

# Variable: eventExceptionsTable

> `const` **eventExceptionsTable**: `PgTableWithColumns`\<\{ \}\>

Defined in: [src/drizzle/tables/recurringEventExceptions.ts:22](https://github.com/PalisadoesFoundation/talawa-api/blob/4fc4e12ad9f960600b3078451d438c08033538a9/src/drizzle/tables/recurringEventExceptions.ts#L22)

Drizzle ORM postgres table definition for recurring event exceptions.
This table stores instance-specific modifications to recurring events.
When a user modifies a single instance or "this and future" instances,
the changes are stored here as differences from the template.

Clean design principles:
- Direct reference to recurring_event_instances.id for precise targeting
- JSON-based exception data for flexible field modifications
- Template reference can be derived via instance.baseRecurringEventId (no redundant storage)
- All exceptions are single-instance modifications (no type differentiation needed)
