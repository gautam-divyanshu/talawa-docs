"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[72374],{47707:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var n=a(85893),t=a(11151);const r={},i=void 0,o={id:"talawa-api-docs/resolvers/Mutation/unassignUserTag/variables/unassignUserTag",title:"unassignUserTag",description:"talawa-api \u2022 Docs",source:"@site/docs/talawa-api-docs/resolvers/Mutation/unassignUserTag/variables/unassignUserTag.md",sourceDirName:"talawa-api-docs/resolvers/Mutation/unassignUserTag/variables",slug:"/talawa-api-docs/resolvers/Mutation/unassignUserTag/variables/unassignUserTag",permalink:"/docs/talawa-api-docs/resolvers/Mutation/unassignUserTag/variables/unassignUserTag",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/resolvers/Mutation/unassignUserTag/variables/unassignUserTag.md",tags:[],version:"current",frontMatter:{}},c={},l=[{value:"Param",id:"param",level:2},{value:"Param",id:"param-1",level:2},{value:"Param",id:"param-2",level:2},{value:"Defined in",id:"defined-in",level:2}];function d(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/docs/talawa-api-docs/",children:(0,n.jsx)(s.strong,{children:"talawa-api"})})," \u2022 ",(0,n.jsx)(s.strong,{children:"Docs"})]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/docs/talawa-api-docs/modules",children:"talawa-api"})," / ",(0,n.jsx)(s.a,{href:"/docs/talawa-api-docs/resolvers/Mutation/unassignUserTag/",children:"resolvers/Mutation/unassignUserTag"})," / unassignUserTag"]}),"\n",(0,n.jsx)(s.h1,{id:"variable-unassignusertag",children:"Variable: unassignUserTag"}),"\n",(0,n.jsxs)(s.p,{children:["> ",(0,n.jsx)(s.code,{children:"const"})," ",(0,n.jsx)(s.strong,{children:"unassignUserTag"}),": ",(0,n.jsx)(s.a,{href:"/docs/talawa-api-docs/types/generatedGraphQLTypes/type-aliases/MutationResolvers",children:(0,n.jsx)(s.code,{children:"MutationResolvers"})}),"[",(0,n.jsx)(s.code,{children:'"unassignUserTag"'}),"]"]}),"\n",(0,n.jsx)(s.p,{children:"Unassigns a tag from a user in an organization."}),"\n",(0,n.jsx)(s.p,{children:"This function removes a specific tag from a user in an organization.\nIt checks whether the current user has the necessary permissions to unassign the tag and\nverifies if the tag and the user exist in the system. If the tag is not currently assigned\nto the user, an error is thrown."}),"\n",(0,n.jsx)(s.p,{children:"The function performs the following steps:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"Attempts to find the current user in the cache or database."}),"\n",(0,n.jsx)(s.li,{children:"Verifies if the current user exists."}),"\n",(0,n.jsx)(s.li,{children:"Attempts to find the current user's profile in the cache or database."}),"\n",(0,n.jsx)(s.li,{children:"Checks if the current user has the necessary permissions to unassign the tag."}),"\n",(0,n.jsx)(s.li,{children:"Fetches the tag that needs to be unassigned."}),"\n",(0,n.jsx)(s.li,{children:"Checks if the user to whom the tag is assigned exists."}),"\n",(0,n.jsx)(s.li,{children:"Ensures that the tag is actually assigned to the user."}),"\n",(0,n.jsx)(s.li,{children:"Removes the tag assignment from the user."}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"param",children:"Param"}),"\n",(0,n.jsx)(s.p,{children:"This parameter is not used in this resolver function."}),"\n",(0,n.jsx)(s.h2,{id:"param-1",children:"Param"}),"\n",(0,n.jsx)(s.p,{children:"The arguments provided by the GraphQL query, specifically containing the user ID and tag ID to unassign."}),"\n",(0,n.jsx)(s.h2,{id:"param-2",children:"Param"}),"\n",(0,n.jsx)(s.p,{children:"The context of the request, containing information about the currently authenticated user."}),"\n",(0,n.jsx)(s.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/0e711c6a6b57f55ab5776fc9c8edfc5ebc0b3d70/src/resolvers/Mutation/unassignUserTag.ts#L47",children:"src/resolvers/Mutation/unassignUserTag.ts:47"})})]})}function h(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,s,a)=>{a.d(s,{Z:()=>o,a:()=>i});var n=a(67294);const t={},r=n.createContext(t);function i(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);