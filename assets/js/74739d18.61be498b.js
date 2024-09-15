"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[7392],{85549:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var o=t(85893),i=t(11151);const r={},a=void 0,c={id:"talawa-api-docs/utilities/graphQLConnection/getCommonGraphQLConnectionFilter/functions/getCommonGraphQLConnectionFilter",title:"getCommonGraphQLConnectionFilter",description:"talawa-api \u2022 Docs",source:"@site/docs/talawa-api-docs/utilities/graphQLConnection/getCommonGraphQLConnectionFilter/functions/getCommonGraphQLConnectionFilter.md",sourceDirName:"talawa-api-docs/utilities/graphQLConnection/getCommonGraphQLConnectionFilter/functions",slug:"/talawa-api-docs/utilities/graphQLConnection/getCommonGraphQLConnectionFilter/functions/getCommonGraphQLConnectionFilter",permalink:"/docs/talawa-api-docs/utilities/graphQLConnection/getCommonGraphQLConnectionFilter/functions/getCommonGraphQLConnectionFilter",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/utilities/graphQLConnection/getCommonGraphQLConnectionFilter/functions/getCommonGraphQLConnectionFilter.md",tags:[],version:"current",frontMatter:{}},s={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2},{value:"Defined in",id:"defined-in",level:2}];function d(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.a,{href:"/docs/talawa-api-docs/",children:(0,o.jsx)(e.strong,{children:"talawa-api"})})," \u2022 ",(0,o.jsx)(e.strong,{children:"Docs"})]}),"\n",(0,o.jsx)(e.hr,{}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.a,{href:"/docs/talawa-api-docs/modules",children:"talawa-api"})," / ",(0,o.jsx)(e.a,{href:"/docs/talawa-api-docs/utilities/graphQLConnection/getCommonGraphQLConnectionFilter/",children:"utilities/graphQLConnection/getCommonGraphQLConnectionFilter"})," / getCommonGraphQLConnectionFilter"]}),"\n",(0,o.jsx)(e.h1,{id:"function-getcommongraphqlconnectionfilter",children:"Function: getCommonGraphQLConnectionFilter()"}),"\n",(0,o.jsxs)(e.p,{children:["> ",(0,o.jsx)(e.strong,{children:"getCommonGraphQLConnectionFilter"}),"(",(0,o.jsx)(e.code,{children:"__namedParameters"}),"): ",(0,o.jsx)(e.code,{children:"CommonGraphQLConnectionFilter"})]}),"\n",(0,o.jsx)(e.p,{children:"This function is used to get an object containing common mongoose filtering logic."}),"\n",(0,o.jsx)(e.h2,{id:"parameters",children:"Parameters"}),"\n",(0,o.jsxs)(e.p,{children:["\u2022 ",(0,o.jsx)(e.strong,{children:"__namedParameters"})]}),"\n",(0,o.jsxs)(e.p,{children:["\u2022 ",(0,o.jsx)(e.strong,{children:"__namedParameters.cursor"}),": ",(0,o.jsx)(e.code,{children:"null"})," | ",(0,o.jsx)(e.code,{children:"string"})]}),"\n",(0,o.jsxs)(e.p,{children:["\u2022 ",(0,o.jsx)(e.strong,{children:"__namedParameters.direction"}),": ",(0,o.jsx)(e.a,{href:"/docs/talawa-api-docs/utilities/graphQLConnection/type-aliases/GraphQLConnectionTraversalDirection",children:(0,o.jsx)(e.code,{children:"GraphQLConnectionTraversalDirection"})})]}),"\n",(0,o.jsx)(e.h2,{id:"returns",children:"Returns"}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.code,{children:"CommonGraphQLConnectionFilter"})}),"\n",(0,o.jsx)(e.h2,{id:"remarks",children:"Remarks"}),"\n",(0,o.jsx)(e.p,{children:"Here are a few assumptions this function makes which are common to most of the\ngraphQL connections."}),"\n",(0,o.jsx)(e.p,{children:"The entity that has the latest creation datetime must appear at the top of the connection. This\nmeans the default filtering logic would be to filter in descending order by the time of creation of\nan entity, and if two or more entities have the same time of creation filtering in descending order\nby the primary key of the entity. MongoDB object ids are lexographically sortable all on their own\nbecause they contain information about both the creation time and primary key for the document."}),"\n",(0,o.jsx)(e.p,{children:"Therefore, this function only returns filtering logic for filtering by the object id of a mongoDB\ndocument."}),"\n",(0,o.jsx)(e.h2,{id:"example",children:"Example"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",children:'const filter = getCommonGraphQLConnectionFilter(\\{\n cursor: "65da3f8df35eb5bfd52c5368",\n direction: "BACKWARD"\n\\});\nconst objectList = await User.find(filter).limit(10);\n'})}),"\n",(0,o.jsx)(e.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/60937520d7a29ccf883a9c6a7c2d186bae92a81b/src/utilities/graphQLConnection/getCommonGraphQLConnectionFilter.ts#L44",children:"src/utilities/graphQLConnection/getCommonGraphQLConnectionFilter.ts:44"})})]})}function h(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(d,{...n})}):d(n)}},11151:(n,e,t)=>{t.d(e,{Z:()=>c,a:()=>a});var o=t(67294);const i={},r=o.createContext(i);function a(n){const e=o.useContext(r);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:a(n.components),o.createElement(r.Provider,{value:e},n.children)}}}]);