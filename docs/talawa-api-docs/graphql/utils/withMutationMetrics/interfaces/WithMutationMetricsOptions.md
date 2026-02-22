[**talawa-api**](../../../../README.md)

***

# Interface: WithMutationMetricsOptions

Defined in: [src/graphql/utils/withMutationMetrics.ts:6](https://github.com/PalisadoesFoundation/talawa-api/blob/e0c5d64d62f9cbd7e709b63db8cf19f32f235f61/src/graphql/utils/withMutationMetrics.ts#L6)

Options for wrapping a GraphQL mutation resolver with performance tracking.

## Properties

### operationName

> **operationName**: `string`

Defined in: [src/graphql/utils/withMutationMetrics.ts:11](https://github.com/PalisadoesFoundation/talawa-api/blob/e0c5d64d62f9cbd7e709b63db8cf19f32f235f61/src/graphql/utils/withMutationMetrics.ts#L11)

Name of the mutation operation for performance tracking.
Should follow the pattern: `mutation:{mutationName}` (e.g., `mutation:createUser`, `mutation:createOrganization`).
