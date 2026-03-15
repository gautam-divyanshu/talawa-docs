[**talawa-api**](../../../../README.md)

***

# Interface: WithMutationMetricsOptions

Defined in: [src/graphql/utils/withMutationMetrics.ts:6](https://github.com/PalisadoesFoundation/talawa-api/blob/e5257a859e980c4157b048d478eb38a347def32f/src/graphql/utils/withMutationMetrics.ts#L6)

Options for wrapping a GraphQL mutation resolver with performance tracking.

## Properties

### operationName

> **operationName**: `string`

Defined in: [src/graphql/utils/withMutationMetrics.ts:11](https://github.com/PalisadoesFoundation/talawa-api/blob/e5257a859e980c4157b048d478eb38a347def32f/src/graphql/utils/withMutationMetrics.ts#L11)

Name of the mutation operation for performance tracking.
Should follow the pattern: `mutation:{mutationName}` (e.g., `mutation:createUser`, `mutation:createOrganization`).
