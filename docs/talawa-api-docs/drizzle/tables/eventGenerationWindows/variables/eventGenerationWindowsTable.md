[**talawa-api**](../../../../README.md)

***

# Variable: eventGenerationWindowsTable

> `const` **eventGenerationWindowsTable**: `PgTableWithColumns`\<\{ \}\>

Defined in: [src/drizzle/tables/eventGenerationWindows.ts:24](https://github.com/PalisadoesFoundation/talawa-api/blob/b24a30943e90218609bbe2cec77af89181bb6c56/src/drizzle/tables/eventGenerationWindows.ts#L24)

Drizzle ORM postgres table definition for event generation window configuration.

This table stores configuration settings for the generation hot window
per organization. It controls how far ahead the background worker should
pre-calculate and store event instances.
