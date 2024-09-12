"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[68579],{7103:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=t(85893),r=t(11151);const i={},s=void 0,o={id:"talawa-api-docs/resolvers/Mutation/createAgendaCategory/variables/createAgendaCategory",title:"createAgendaCategory",description:"talawa-api \u2022 Docs",source:"@site/docs/talawa-api-docs/resolvers/Mutation/createAgendaCategory/variables/createAgendaCategory.md",sourceDirName:"talawa-api-docs/resolvers/Mutation/createAgendaCategory/variables",slug:"/talawa-api-docs/resolvers/Mutation/createAgendaCategory/variables/createAgendaCategory",permalink:"/docs/talawa-api-docs/resolvers/Mutation/createAgendaCategory/variables/createAgendaCategory",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/resolvers/Mutation/createAgendaCategory/variables/createAgendaCategory.md",tags:[],version:"current",frontMatter:{}},c={},d=[{value:"Param",id:"param",level:2},{value:"Param",id:"param-1",level:2},{value:"Param",id:"param-2",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Defined in",id:"defined-in",level:2}];function l(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.a,{href:"/docs/talawa-api-docs/",children:(0,n.jsx)(a.strong,{children:"talawa-api"})})," \u2022 ",(0,n.jsx)(a.strong,{children:"Docs"})]}),"\n",(0,n.jsx)(a.hr,{}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.a,{href:"/docs/talawa-api-docs/modules",children:"talawa-api"})," / ",(0,n.jsx)(a.a,{href:"/docs/talawa-api-docs/resolvers/Mutation/createAgendaCategory/",children:"resolvers/Mutation/createAgendaCategory"})," / createAgendaCategory"]}),"\n",(0,n.jsx)(a.h1,{id:"variable-createagendacategory",children:"Variable: createAgendaCategory"}),"\n",(0,n.jsxs)(a.p,{children:["> ",(0,n.jsx)(a.code,{children:"const"})," ",(0,n.jsx)(a.strong,{children:"createAgendaCategory"}),": ",(0,n.jsx)(a.a,{href:"/docs/talawa-api-docs/types/generatedGraphQLTypes/type-aliases/MutationResolvers",children:(0,n.jsx)(a.code,{children:"MutationResolvers"})}),"[",(0,n.jsx)(a.code,{children:'"createAgendaCategory"'}),"]"]}),"\n",(0,n.jsx)(a.p,{children:"Creates a new agenda category and associates it with a specified organization."}),"\n",(0,n.jsx)(a.p,{children:"This resolver function performs the following steps:"}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsx)(a.li,{children:"Retrieves the current user based on the userId from the context."}),"\n",(0,n.jsx)(a.li,{children:"Fetches the associated app user profile for the current user."}),"\n",(0,n.jsx)(a.li,{children:"Retrieves the organization specified in the input, either from the cache or from the database."}),"\n",(0,n.jsx)(a.li,{children:"Validates the existence of the organization."}),"\n",(0,n.jsx)(a.li,{children:"Checks if the current user is authorized to perform this operation."}),"\n",(0,n.jsx)(a.li,{children:"Creates a new agenda category and associates it with the specified organization."}),"\n",(0,n.jsx)(a.li,{children:"Updates the organization document with the new agenda category."}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"param",children:"Param"}),"\n",(0,n.jsx)(a.p,{children:"The parent object for the mutation (not used in this function)."}),"\n",(0,n.jsx)(a.h2,{id:"param-1",children:"Param"}),"\n",(0,n.jsx)(a.p,{children:"The arguments provided with the request, including:"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.code,{children:"input"}),": An object containing:","\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.code,{children:"organizationId"}),": The ID of the organization to which the new agenda category will be added."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.code,{children:"name"}),": The name of the new agenda category."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.code,{children:"description"}),": A description of the new agenda category."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"param-2",children:"Param"}),"\n",(0,n.jsx)(a.p,{children:"The context of the entire application, including user information (context.userId)."}),"\n",(0,n.jsx)(a.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsx)(a.p,{children:"The function performs caching and retrieval operations to ensure the latest data is used,\nand it updates the organization document to include the new agenda category."}),"\n",(0,n.jsx)(a.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/0e711c6a6b57f55ab5776fc9c8edfc5ebc0b3d70/src/resolvers/Mutation/createAgendaCategory.ts#L49",children:"src/resolvers/Mutation/createAgendaCategory.ts:49"})})]})}function h(e={}){const{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},11151:(e,a,t)=>{t.d(a,{Z:()=>o,a:()=>s});var n=t(67294);const r={},i=n.createContext(r);function s(e){const a=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(i.Provider,{value:a},e.children)}}}]);