"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[25626],{12090:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>n,metadata:()=>o,toc:()=>l});var r=t(85893),s=t(11151);const n={},i=void 0,o={id:"talawa-api-docs/resolvers/Mutation/createGroupChat/variables/createGroupChat",title:"createGroupChat",description:"talawa-api \u2022 Docs",source:"@site/docs/talawa-api-docs/resolvers/Mutation/createGroupChat/variables/createGroupChat.md",sourceDirName:"talawa-api-docs/resolvers/Mutation/createGroupChat/variables",slug:"/talawa-api-docs/resolvers/Mutation/createGroupChat/variables/createGroupChat",permalink:"/docs/talawa-api-docs/resolvers/Mutation/createGroupChat/variables/createGroupChat",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/resolvers/Mutation/createGroupChat/variables/createGroupChat.md",tags:[],version:"current",frontMatter:{}},c={},l=[{value:"Param",id:"param",level:2},{value:"Param",id:"param-1",level:2},{value:"Param",id:"param-2",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Defined in",id:"defined-in",level:2}];function d(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.a,{href:"/docs/talawa-api-docs/",children:(0,r.jsx)(a.strong,{children:"talawa-api"})})," \u2022 ",(0,r.jsx)(a.strong,{children:"Docs"})]}),"\n",(0,r.jsx)(a.hr,{}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.a,{href:"/docs/talawa-api-docs/modules",children:"talawa-api"})," / ",(0,r.jsx)(a.a,{href:"/docs/talawa-api-docs/resolvers/Mutation/createGroupChat/",children:"resolvers/Mutation/createGroupChat"})," / createGroupChat"]}),"\n",(0,r.jsx)(a.h1,{id:"variable-creategroupchat",children:"Variable: createGroupChat"}),"\n",(0,r.jsxs)(a.p,{children:["> ",(0,r.jsx)(a.code,{children:"const"})," ",(0,r.jsx)(a.strong,{children:"createGroupChat"}),": ",(0,r.jsx)(a.a,{href:"/docs/talawa-api-docs/types/generatedGraphQLTypes/type-aliases/MutationResolvers",children:(0,r.jsx)(a.code,{children:"MutationResolvers"})}),"[",(0,r.jsx)(a.code,{children:'"createGroupChat"'}),"]"]}),"\n",(0,r.jsx)(a.p,{children:"Creates a new group chat and associates it with a specified organization."}),"\n",(0,r.jsx)(a.p,{children:"This resolver performs the following actions:"}),"\n",(0,r.jsxs)(a.ol,{children:["\n",(0,r.jsx)(a.li,{children:"Checks if the specified organization exists in the cache, and if not, fetches it from the database and caches it."}),"\n",(0,r.jsx)(a.li,{children:"Verifies that the organization with the given ID exists."}),"\n",(0,r.jsxs)(a.li,{children:["Checks if each user specified in the ",(0,r.jsx)(a.code,{children:"userIds"})," list exists."]}),"\n",(0,r.jsx)(a.li,{children:"Creates a new group chat with the specified users, organization, and title."}),"\n"]}),"\n",(0,r.jsx)(a.h2,{id:"param",children:"Param"}),"\n",(0,r.jsx)(a.p,{children:"The parent object, not used in this resolver."}),"\n",(0,r.jsx)(a.h2,{id:"param-1",children:"Param"}),"\n",(0,r.jsx)(a.p,{children:"The input arguments for the mutation, including:"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:"data"}),": An object containing:","\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:"organizationId"}),": The ID of the organization to associate with the group chat."]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:"userIds"}),": A list of user IDs to be added to the group chat."]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:"title"}),": The title of the group chat."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(a.h2,{id:"param-2",children:"Param"}),"\n",(0,r.jsx)(a.p,{children:"The context object containing user information (context.userId)."}),"\n",(0,r.jsx)(a.h2,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsx)(a.p,{children:"This function ensures the existence of the organization and users, and caches the organization if it is not already cached. It returns the created group chat object."}),"\n",(0,r.jsx)(a.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/0e711c6a6b57f55ab5776fc9c8edfc5ebc0b3d70/src/resolvers/Mutation/createGroupChat.ts#L33",children:"src/resolvers/Mutation/createGroupChat.ts:33"})})]})}function h(e={}){const{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,a,t)=>{t.d(a,{Z:()=>o,a:()=>i});var r=t(67294);const s={},n=r.createContext(s);function i(e){const a=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(n.Provider,{value:a},e.children)}}}]);