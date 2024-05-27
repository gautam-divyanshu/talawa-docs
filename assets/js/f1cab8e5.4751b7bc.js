"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[50522],{36238:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var o=t(85893),i=t(11151);const r={},s="Module: utilities/graphQLConnection/getCommonGraphQLConnectionSort",a={id:"talawa-api-docs/modules/utilities_graphQLConnection_getCommonGraphQLConnectionSort",title:"utilities_graphQLConnection_getCommonGraphQLConnectionSort",description:"talawa-api / Exports / utilities/graphQLConnection/getCommonGraphQLConnectionSort",source:"@site/docs/talawa-api-docs/modules/utilities_graphQLConnection_getCommonGraphQLConnectionSort.md",sourceDirName:"talawa-api-docs/modules",slug:"/talawa-api-docs/modules/utilities_graphQLConnection_getCommonGraphQLConnectionSort",permalink:"/docs/talawa-api-docs/modules/utilities_graphQLConnection_getCommonGraphQLConnectionSort",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/modules/utilities_graphQLConnection_getCommonGraphQLConnectionSort.md",tags:[],version:"current",frontMatter:{},sidebar:"API",previous:{title:"utilities_graphQLConnection_getCommonGraphQLConnectionFilter",permalink:"/docs/talawa-api-docs/modules/utilities_graphQLConnection_getCommonGraphQLConnectionFilter"},next:{title:"utilities_graphQLConnection_parseGraphQLConnectionArguments",permalink:"/docs/talawa-api-docs/modules/utilities_graphQLConnection_parseGraphQLConnectionArguments"}},c={},l=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Functions",id:"functions",level:3},{value:"Functions",id:"functions-1",level:2},{value:"getCommonGraphQLConnectionSort",id:"getcommongraphqlconnectionsort",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}];function d(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.a,{href:"/docs/talawa-api-docs/",children:"talawa-api"})," / ",(0,o.jsx)(e.a,{href:"/docs/talawa-api-docs/modules",children:"Exports"})," / utilities/graphQLConnection/getCommonGraphQLConnectionSort"]}),"\n",(0,o.jsx)(e.h1,{id:"module-utilitiesgraphqlconnectiongetcommongraphqlconnectionsort",children:"Module: utilities/graphQLConnection/getCommonGraphQLConnectionSort"}),"\n",(0,o.jsx)(e.h2,{id:"table-of-contents",children:"Table of contents"}),"\n",(0,o.jsx)(e.h3,{id:"functions",children:"Functions"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"/docs/talawa-api-docs/modules/utilities_graphQLConnection_getCommonGraphQLConnectionSort#getcommongraphqlconnectionsort",children:"getCommonGraphQLConnectionSort"})}),"\n"]}),"\n",(0,o.jsx)(e.h2,{id:"functions-1",children:"Functions"}),"\n",(0,o.jsx)(e.h3,{id:"getcommongraphqlconnectionsort",children:"getCommonGraphQLConnectionSort"}),"\n",(0,o.jsxs)(e.p,{children:["\u25b8 ",(0,o.jsx)(e.strong,{children:"getCommonGraphQLConnectionSort"}),"(",(0,o.jsx)(e.code,{children:"\xabdestructured\xbb"}),"): ",(0,o.jsx)(e.code,{children:"CommmonGraphQLConnectionSort"})]}),"\n",(0,o.jsx)(e.p,{children:"This function is used to get an object containing common mongoose sorting logic."}),"\n",(0,o.jsx)(e.h4,{id:"parameters",children:"Parameters"}),"\n",(0,o.jsxs)(e.table,{children:[(0,o.jsx)(e.thead,{children:(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.th,{style:{textAlign:"left"},children:"Name"}),(0,o.jsx)(e.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,o.jsxs)(e.tbody,{children:[(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{style:{textAlign:"left"},children:(0,o.jsx)(e.code,{children:"\xabdestructured\xbb"})}),(0,o.jsx)(e.td,{style:{textAlign:"left"},children:(0,o.jsx)(e.code,{children:"Object"})})]}),(0,o.jsxs)(e.tr,{children:[(0,o.jsxs)(e.td,{style:{textAlign:"left"},children:["\u203a\xa0",(0,o.jsx)(e.code,{children:"direction"})]}),(0,o.jsx)(e.td,{style:{textAlign:"left"},children:(0,o.jsx)(e.a,{href:"/docs/talawa-api-docs/modules/utilities_graphQLConnection#graphqlconnectiontraversaldirection",children:(0,o.jsx)(e.code,{children:"GraphQLConnectionTraversalDirection"})})})]})]})]}),"\n",(0,o.jsx)(e.h4,{id:"returns",children:"Returns"}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.code,{children:"CommmonGraphQLConnectionSort"})}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.strong,{children:(0,o.jsx)(e.code,{children:"Remarks"})})}),"\n",(0,o.jsx)(e.p,{children:"Here are a few assumptions this function makes which are common to most of the\ngraphQL connections."}),"\n",(0,o.jsx)(e.p,{children:"The entity that has the latest creation datetime must appear at the top of the connection. This\nmeans the default sorting logic would be sorting in descending order by the time of creation of\nan entity, and if two or more entities have the same time of creation sorting in descending order\nby the primary key of the entity. MongoDB object ids are lexographically sortable all on their own\nbecause they contain information about both the creation time and primary key for the document."}),"\n",(0,o.jsx)(e.p,{children:"Therefore, this function only returns sorting logic for sorting by the object id of a mongoDB\ndocument."}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.strong,{children:(0,o.jsx)(e.code,{children:"Example"})})}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",children:'const sort = getCommonGraphQLConnectionSort(\\{\n  direction: "BACKWARD"\n \\});\nconst objectList = await User.find().sort(sort).limit(10);\n'})}),"\n",(0,o.jsx)(e.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/9fa6a1c/src/utilities/graphQLConnection/getCommonGraphQLConnectionSort.ts#L34",children:"src/utilities/graphQLConnection/getCommonGraphQLConnectionSort.ts:34"})})]})}function h(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(d,{...n})}):d(n)}},11151:(n,e,t)=>{t.d(e,{Z:()=>a,a:()=>s});var o=t(67294);const i={},r=o.createContext(i);function s(n){const e=o.useContext(r);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:s(n.components),o.createElement(r.Provider,{value:e},n.children)}}}]);