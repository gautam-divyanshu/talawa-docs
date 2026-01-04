[**talawa-api**](../../../README.md)

***

# Variable: createContext

> `const` **createContext**: [`CreateContext`](../type-aliases/CreateContext.md)

Defined in: [src/routes/graphql.ts:63](https://github.com/PalisadoesFoundation/talawa-api/blob/4fc4e12ad9f960600b3078451d438c08033538a9/src/routes/graphql.ts#L63)

This function is used to create the explicit context passed to the graphql resolvers each time they resolve a graphql operation at runtime. All the transport protocol specific information should be dealt with within this function and the return type of this function must be transport protocol agnostic.
