[**talawa-api**](../../../README.md)

***

# Variable: createContext

> `const` **createContext**: [`CreateContext`](../type-aliases/CreateContext.md)

Defined in: [src/routes/graphql.ts:84](https://github.com/PalisadoesFoundation/talawa-api/blob/86c684402120721d2151d1e28feb0b6d2f345849/src/routes/graphql.ts#L84)

This function is used to create the explicit context passed to the graphql resolvers each time they resolve a graphql operation at runtime. All the transport protocol specific information should be dealt with within this function and the return type of this function must be transport protocol agnostic.
