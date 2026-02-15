[**talawa-api**](../../../../README.md)

***

# Interface: WithQueryMetricsOptions

Defined in: [src/graphql/utils/withQueryMetrics.ts:6](https://github.com/PalisadoesFoundation/talawa-api/blob/39075e3ba8206f4ccaf60cdb809b4cedd12c8a45/src/graphql/utils/withQueryMetrics.ts#L6)

Options for wrapping a GraphQL query resolver with performance tracking.

## Properties

### operationName

> **operationName**: `string`

Defined in: [src/graphql/utils/withQueryMetrics.ts:11](https://github.com/PalisadoesFoundation/talawa-api/blob/39075e3ba8206f4ccaf60cdb809b4cedd12c8a45/src/graphql/utils/withQueryMetrics.ts#L11)

Name of the query operation for performance tracking.
Should follow the pattern: `query:{queryName}` (e.g., `query:user`, `query:organizations`).
