"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[40301],{34280:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var n=a(85893),i=a(11151);const r={},o=void 0,s={id:"talawa-api-docs/resolvers/Mutation/createActionItemCategory/variables/createActionItemCategory",title:"createActionItemCategory",description:"talawa-api \u2022 Docs",source:"@site/docs/talawa-api-docs/resolvers/Mutation/createActionItemCategory/variables/createActionItemCategory.md",sourceDirName:"talawa-api-docs/resolvers/Mutation/createActionItemCategory/variables",slug:"/talawa-api-docs/resolvers/Mutation/createActionItemCategory/variables/createActionItemCategory",permalink:"/docs/talawa-api-docs/resolvers/Mutation/createActionItemCategory/variables/createActionItemCategory",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/resolvers/Mutation/createActionItemCategory/variables/createActionItemCategory.md",tags:[],version:"current",frontMatter:{}},c={},l=[{value:"Param",id:"param",level:2},{value:"Param",id:"param-1",level:2},{value:"Param",id:"param-2",level:2},{value:"See",id:"see",level:2},{value:"Defined in",id:"defined-in",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/talawa-api-docs/",children:(0,n.jsx)(t.strong,{children:"talawa-api"})})," \u2022 ",(0,n.jsx)(t.strong,{children:"Docs"})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/talawa-api-docs/modules",children:"talawa-api"})," / ",(0,n.jsx)(t.a,{href:"/docs/talawa-api-docs/resolvers/Mutation/createActionItemCategory/",children:"resolvers/Mutation/createActionItemCategory"})," / createActionItemCategory"]}),"\n",(0,n.jsx)(t.h1,{id:"variable-createactionitemcategory",children:"Variable: createActionItemCategory"}),"\n",(0,n.jsxs)(t.p,{children:["> ",(0,n.jsx)(t.code,{children:"const"})," ",(0,n.jsx)(t.strong,{children:"createActionItemCategory"}),": ",(0,n.jsx)(t.a,{href:"/docs/talawa-api-docs/types/generatedGraphQLTypes/type-aliases/MutationResolvers",children:(0,n.jsx)(t.code,{children:"MutationResolvers"})}),"[",(0,n.jsx)(t.code,{children:'"createActionItemCategory"'}),"]"]}),"\n",(0,n.jsx)(t.p,{children:"Mutation resolver function to create a new ActionItemCategory."}),"\n",(0,n.jsx)(t.p,{children:"This function performs the following actions:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Verifies that the current user, identified by ",(0,n.jsx)(t.code,{children:"context.userId"}),", exists."]}),"\n",(0,n.jsxs)(t.li,{children:["Ensures that the organization specified by ",(0,n.jsx)(t.code,{children:"args.organizationId"})," exists."]}),"\n",(0,n.jsx)(t.li,{children:"Checks if the current user is authorized to perform the operation (must be an admin)."}),"\n",(0,n.jsx)(t.li,{children:"Checks if an ActionItemCategory with the provided name already exists for the specified organization."}),"\n",(0,n.jsx)(t.li,{children:"Creates a new ActionItemCategory if no conflicts are found."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"param",children:"Param"}),"\n",(0,n.jsx)(t.p,{children:"The parent object for the mutation. This parameter is not used in this resolver."}),"\n",(0,n.jsx)(t.h2,{id:"param-1",children:"Param"}),"\n",(0,n.jsx)(t.p,{children:"The arguments for the mutation, including:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"name"}),": The name of the ActionItemCategory to be created."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"organizationId"}),": The ID of the organization where the ActionItemCategory will be created."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"param-2",children:"Param"}),"\n",(0,n.jsx)(t.p,{children:"The context for the mutation, including:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"userId"}),": The ID of the current user making the request."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"see",children:"See"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"ActionItemCategory - The ActionItemCategory model used to interact with the ActionItemCategory collection in the database."}),"\n",(0,n.jsx)(t.li,{children:"Organization - The Organization model used to interact with the organizations collection in the database."}),"\n",(0,n.jsx)(t.li,{children:"User - The User model used to interact with the users collection in the database."}),"\n",(0,n.jsx)(t.li,{children:"MutationResolvers - The type definition for the mutation resolvers."}),"\n",(0,n.jsx)(t.li,{children:"findOrganizationsInCache - Service function to retrieve organizations from cache."}),"\n",(0,n.jsx)(t.li,{children:"cacheOrganizations - Service function to cache updated organization data."}),"\n",(0,n.jsx)(t.li,{children:"findUserInCache - Service function to retrieve users from cache."}),"\n",(0,n.jsx)(t.li,{children:"cacheUsers - Service function to cache updated user data."}),"\n",(0,n.jsx)(t.li,{children:"adminCheck - Utility function to check if a user is an admin of an organization."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/0e711c6a6b57f55ab5776fc9c8edfc5ebc0b3d70/src/resolvers/Mutation/createActionItemCategory.ts#L46",children:"src/resolvers/Mutation/createActionItemCategory.ts:46"})})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,t,a)=>{a.d(t,{Z:()=>s,a:()=>o});var n=a(67294);const i={},r=n.createContext(i);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);