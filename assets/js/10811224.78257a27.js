"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[32579],{98324:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=s(85893),t=s(11151);const r={},a=void 0,o={id:"talawa-api-docs/resolvers/Mutation/blockUser/variables/blockUser",title:"blockUser",description:"talawa-api \u2022 Docs",source:"@site/docs/talawa-api-docs/resolvers/Mutation/blockUser/variables/blockUser.md",sourceDirName:"talawa-api-docs/resolvers/Mutation/blockUser/variables",slug:"/talawa-api-docs/resolvers/Mutation/blockUser/variables/blockUser",permalink:"/docs/talawa-api-docs/resolvers/Mutation/blockUser/variables/blockUser",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/resolvers/Mutation/blockUser/variables/blockUser.md",tags:[],version:"current",frontMatter:{}},l={},c=[{value:"Param",id:"param",level:2},{value:"Param",id:"param-1",level:2},{value:"Param",id:"param-2",level:2},{value:"See",id:"see",level:2},{value:"Defined in",id:"defined-in",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/talawa-api-docs/",children:(0,i.jsx)(n.strong,{children:"talawa-api"})})," \u2022 ",(0,i.jsx)(n.strong,{children:"Docs"})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/talawa-api-docs/modules",children:"talawa-api"})," / ",(0,i.jsx)(n.a,{href:"/docs/talawa-api-docs/resolvers/Mutation/blockUser/",children:"resolvers/Mutation/blockUser"})," / blockUser"]}),"\n",(0,i.jsx)(n.h1,{id:"variable-blockuser",children:"Variable: blockUser"}),"\n",(0,i.jsxs)(n.p,{children:["> ",(0,i.jsx)(n.code,{children:"const"})," ",(0,i.jsx)(n.strong,{children:"blockUser"}),": ",(0,i.jsx)(n.a,{href:"/docs/talawa-api-docs/types/generatedGraphQLTypes/type-aliases/MutationResolvers",children:(0,i.jsx)(n.code,{children:"MutationResolvers"})}),"[",(0,i.jsx)(n.code,{children:'"blockUser"'}),"]"]}),"\n",(0,i.jsx)(n.p,{children:"Mutation resolver function to block a user from an organization."}),"\n",(0,i.jsx)(n.p,{children:"This function performs the following actions:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Verifies that the organization specified by ",(0,i.jsx)(n.code,{children:"args.organizationId"})," exists."]}),"\n",(0,i.jsxs)(n.li,{children:["Ensures that the user specified by ",(0,i.jsx)(n.code,{children:"args.userId"})," exists."]}),"\n",(0,i.jsx)(n.li,{children:"Checks if the user attempting to block the user is an admin of the organization."}),"\n",(0,i.jsx)(n.li,{children:"Verifies if the user to be blocked is currently a member of the organization."}),"\n",(0,i.jsx)(n.li,{children:"Ensures that the user is not attempting to block themselves."}),"\n",(0,i.jsxs)(n.li,{children:["Blocks the user by adding them to the organization's ",(0,i.jsx)(n.code,{children:"blockedUsers"})," list and removing them from the ",(0,i.jsx)(n.code,{children:"members"})," list."]}),"\n",(0,i.jsxs)(n.li,{children:["Updates the user's document to reflect that they have been blocked by the organization, and removes the organization from their ",(0,i.jsx)(n.code,{children:"joinedOrganizations"})," list."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"param",children:"Param"}),"\n",(0,i.jsx)(n.p,{children:"The parent object for the mutation. This parameter is not used in this resolver."}),"\n",(0,i.jsx)(n.h2,{id:"param-1",children:"Param"}),"\n",(0,i.jsx)(n.p,{children:"The arguments for the mutation, including:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"organizationId"}),": The ID of the organization from which the user is to be blocked."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"userId"}),": The ID of the user to be blocked."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"param-2",children:"Param"}),"\n",(0,i.jsx)(n.p,{children:"The context for the mutation, including:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"userId"}),": The ID of the current user making the request."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"see",children:"See"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Organization - The Organization model used to interact with the organizations collection in the database."}),"\n",(0,i.jsx)(n.li,{children:"User - The User model used to interact with the users collection in the database."}),"\n",(0,i.jsx)(n.li,{children:"MutationResolvers - The type definition for the mutation resolvers."}),"\n",(0,i.jsx)(n.li,{children:"adminCheck - Utility function to check if the current user is an admin of the organization."}),"\n",(0,i.jsx)(n.li,{children:"findOrganizationsInCache - Service function to retrieve organizations from cache."}),"\n",(0,i.jsx)(n.li,{children:"cacheOrganizations - Service function to cache updated organization data."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/60937520d7a29ccf883a9c6a7c2d186bae92a81b/src/resolvers/Mutation/blockUser.ts#L45",children:"src/resolvers/Mutation/blockUser.ts:45"})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>a});var i=s(67294);const t={},r=i.createContext(t);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);