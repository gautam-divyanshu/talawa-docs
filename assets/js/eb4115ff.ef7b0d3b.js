"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[83874],{85207:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>t,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var c=n(85893),d=n(11151);const s={},t=void 0,o={id:"talawa-api-docs/resolvers/Query/helperFunctions/getSort/functions/getSort",title:"getSort",description:"talawa-api \u2022 Docs",source:"@site/docs/talawa-api-docs/resolvers/Query/helperFunctions/getSort/functions/getSort.md",sourceDirName:"talawa-api-docs/resolvers/Query/helperFunctions/getSort/functions",slug:"/talawa-api-docs/resolvers/Query/helperFunctions/getSort/functions/getSort",permalink:"/docs/talawa-api-docs/resolvers/Query/helperFunctions/getSort/functions/getSort",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/resolvers/Query/helperFunctions/getSort/functions/getSort.md",tags:[],version:"current",frontMatter:{}},i={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Defined in",id:"defined-in",level:2}];function a(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",strong:"strong",...(0,d.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.a,{href:"/docs/talawa-api-docs/",children:(0,c.jsx)(r.strong,{children:"talawa-api"})})," \u2022 ",(0,c.jsx)(r.strong,{children:"Docs"})]}),"\n",(0,c.jsx)(r.hr,{}),"\n",(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.a,{href:"/docs/talawa-api-docs/modules",children:"talawa-api"})," / ",(0,c.jsx)(r.a,{href:"/docs/talawa-api-docs/resolvers/Query/helperFunctions/getSort/",children:"resolvers/Query/helperFunctions/getSort"})," / getSort"]}),"\n",(0,c.jsx)(r.h1,{id:"function-getsort",children:"Function: getSort()"}),"\n",(0,c.jsxs)(r.p,{children:["> ",(0,c.jsx)(r.strong,{children:"getSort"}),"(",(0,c.jsx)(r.code,{children:"orderBy"}),"): ",(0,c.jsx)(r.code,{children:"undefined"})," | ",(0,c.jsx)(r.code,{children:"null"})," | ",(0,c.jsx)(r.code,{children:"string"})," | [",(0,c.jsx)(r.code,{children:"string"}),", ",(0,c.jsx)(r.code,{children:"SortOrder"}),"][] | ",(0,c.jsx)(r.code,{children:"object"})]}),"\n",(0,c.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,c.jsxs)(r.p,{children:["\u2022 ",(0,c.jsx)(r.strong,{children:"orderBy"}),": ",(0,c.jsx)(r.code,{children:"undefined"})," | ",(0,c.jsx)(r.a,{href:"/docs/talawa-api-docs/types/generatedGraphQLTypes/type-aliases/InputMaybe",children:(0,c.jsx)(r.code,{children:"InputMaybe"})}),"<",(0,c.jsx)(r.code,{children:'"createdAt_ASC"'})," | ",(0,c.jsx)(r.code,{children:'"createdAt_DESC"'})," | ",(0,c.jsx)(r.code,{children:'"endDate_ASC"'})," | ",(0,c.jsx)(r.code,{children:'"endDate_DESC"'})," | ",(0,c.jsx)(r.code,{children:'"fundingGoal_ASC"'})," | ",(0,c.jsx)(r.code,{children:'"fundingGoal_DESC"'})," | ",(0,c.jsx)(r.code,{children:'"startDate_ASC"'})," | ",(0,c.jsx)(r.code,{children:'"startDate_DESC"'})," | ",(0,c.jsx)(r.code,{children:'"allDay_ASC"'})," | ",(0,c.jsx)(r.code,{children:'"allDay_DESC"'})," | ",(0,c.jsx)(r.code,{children:'"description_ASC"'})," | ",(0,c.jsx)(r.code,{children:'"description_DESC"'})," | ",(0,c.jsx)(r.code,{children:'"endTime_ASC"'})," | ",(0,c.jsx)(r.code,{children:'"endTime_DESC"'})," | ",(0,c.jsx)(r.code,{children:'"id_ASC"'})," | ",(0,c.jsx)(r.code,{children:'"id_DESC"'})," | ",(0,c.jsx)(r.code,{children:'"location_ASC"'})," | ",(0,c.jsx)(r.code,{children:'"location_DESC"'})," | ",(0,c.jsx)(r.code,{children:'"recurrance_ASC"'})," | ",(0,c.jsx)(r.code,{children:'"recurrance_DESC"'})," | ",(0,c.jsx)(r.code,{children:'"startTime_ASC"'})," | ",(0,c.jsx)(r.code,{children:'"startTime_DESC"'})," | ",(0,c.jsx)(r.code,{children:'"title_ASC"'})," | ",(0,c.jsx)(r.code,{children:'"title_DESC"'})," | ",(0,c.jsx)(r.code,{children:'"apiUrl_ASC"'})," | ",(0,c.jsx)(r.code,{children:'"apiUrl_DESC"'})," | ",(0,c.jsx)(r.code,{children:'"name_ASC"'})," | ",(0,c.jsx)(r.code,{children:'"name_DESC"'})," | ",(0,c.jsx)(r.code,{children:'"amount_ASC"'})," | ",(0,c.jsx)(r.code,{children:'"amount_DESC"'})," | ",(0,c.jsx)(r.code,{children:'"commentCount_ASC"'})," | ",(0,c.jsx)(r.code,{children:'"commentCount_DESC"'})," | ",(0,c.jsx)(r.code,{children:'"imageUrl_ASC"'})," | ",(0,c.jsx)(r.code,{children:'"imageUrl_DESC"'})," | ",(0,c.jsx)(r.code,{children:'"likeCount_ASC"'})," | ",(0,c.jsx)(r.code,{children:'"likeCount_DESC"'})," | ",(0,c.jsx)(r.code,{children:'"text_ASC"'})," | ",(0,c.jsx)(r.code,{children:'"text_DESC"'})," | ",(0,c.jsx)(r.code,{children:'"videoUrl_ASC"'})," | ",(0,c.jsx)(r.code,{children:'"videoUrl_DESC"'})," | ",(0,c.jsx)(r.code,{children:'"capacity_ASC"'})," | ",(0,c.jsx)(r.code,{children:'"capacity_DESC"'})," | ",(0,c.jsx)(r.code,{children:'"email_ASC"'})," | ",(0,c.jsx)(r.code,{children:'"email_DESC"'})," | ",(0,c.jsx)(r.code,{children:'"firstName_ASC"'})," | ",(0,c.jsx)(r.code,{children:'"firstName_DESC"'})," | ",(0,c.jsx)(r.code,{children:'"lastName_ASC"'})," | ",(0,c.jsx)(r.code,{children:'"lastName_DESC"'}),">"]}),"\n",(0,c.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.code,{children:"undefined"})," | ",(0,c.jsx)(r.code,{children:"null"})," | ",(0,c.jsx)(r.code,{children:"string"})," | [",(0,c.jsx)(r.code,{children:"string"}),", ",(0,c.jsx)(r.code,{children:"SortOrder"}),"][] | ",(0,c.jsx)(r.code,{children:"object"})]}),"\n",(0,c.jsx)(r.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,c.jsx)(r.p,{children:(0,c.jsx)(r.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/67d017fd9312183a6b2bae1b160bc814f56ab5c2/src/resolvers/Query/helperFunctions/getSort.ts#L14",children:"src/resolvers/Query/helperFunctions/getSort.ts:14"})})]})}function h(e={}){const{wrapper:r}={...(0,d.a)(),...e.components};return r?(0,c.jsx)(r,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}},11151:(e,r,n)=>{n.d(r,{Z:()=>o,a:()=>t});var c=n(67294);const d={},s=c.createContext(d);function t(e){const r=c.useContext(s);return c.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),c.createElement(s.Provider,{value:r},e.children)}}}]);