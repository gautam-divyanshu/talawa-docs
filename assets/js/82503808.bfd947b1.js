"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[57348],{79322:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>o});var s=n(85893),a=n(11151);const r={},c=void 0,t={id:"talawa-api-docs/utilities/userFamilyAdminCheck/functions/adminCheck",title:"adminCheck",description:"talawa-api \u2022 Docs",source:"@site/docs/talawa-api-docs/utilities/userFamilyAdminCheck/functions/adminCheck.md",sourceDirName:"talawa-api-docs/utilities/userFamilyAdminCheck/functions",slug:"/talawa-api-docs/utilities/userFamilyAdminCheck/functions/adminCheck",permalink:"/docs/talawa-api-docs/utilities/userFamilyAdminCheck/functions/adminCheck",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/utilities/userFamilyAdminCheck/functions/adminCheck.md",tags:[],version:"current",frontMatter:{}},d={},o=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Defined in",id:"defined-in",level:2}];function l(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",strong:"strong",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.a,{href:"/docs/talawa-api-docs/",children:(0,s.jsx)(i.strong,{children:"talawa-api"})})," \u2022 ",(0,s.jsx)(i.strong,{children:"Docs"})]}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.a,{href:"/docs/talawa-api-docs/modules",children:"talawa-api"})," / ",(0,s.jsx)(i.a,{href:"/docs/talawa-api-docs/utilities/userFamilyAdminCheck/",children:"utilities/userFamilyAdminCheck"})," / adminCheck"]}),"\n",(0,s.jsx)(i.h1,{id:"function-admincheck",children:"Function: adminCheck()"}),"\n",(0,s.jsxs)(i.p,{children:["> ",(0,s.jsx)(i.strong,{children:"adminCheck"}),"(",(0,s.jsx)(i.code,{children:"userId"}),", ",(0,s.jsx)(i.code,{children:"userFamily"}),"): ",(0,s.jsx)(i.code,{children:"Promise"}),"<",(0,s.jsx)(i.code,{children:"void"}),">"]}),"\n",(0,s.jsx)(i.p,{children:"Checks if the current user is an admin of the organization or a super admin.\nThrows an UnauthorizedError if the user is neither an admin nor a super admin."}),"\n",(0,s.jsx)(i.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(i.p,{children:["\u2022 ",(0,s.jsx)(i.strong,{children:"userId"}),": ",(0,s.jsx)(i.code,{children:"string"})," | ",(0,s.jsx)(i.code,{children:"ObjectId"})]}),"\n",(0,s.jsx)(i.p,{children:"The ID of the current user."}),"\n",(0,s.jsxs)(i.p,{children:["\u2022 ",(0,s.jsx)(i.strong,{children:"userFamily"}),": ",(0,s.jsx)(i.a,{href:"/docs/talawa-api-docs/models/userFamily/interfaces/InterfaceUserFamily",children:(0,s.jsx)(i.code,{children:"InterfaceUserFamily"})})]}),"\n",(0,s.jsxs)(i.p,{children:["The user family data of type ",(0,s.jsx)(i.code,{children:"InterfaceUserFamily"}),"."]}),"\n",(0,s.jsx)(i.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"Promise"}),"<",(0,s.jsx)(i.code,{children:"void"}),">"]}),"\n",(0,s.jsx)(i.h2,{id:"remarks",children:"Remarks"}),"\n",(0,s.jsxs)(i.p,{children:["This function queries the ",(0,s.jsx)(i.code,{children:"userFamily"})," to check if the ",(0,s.jsx)(i.code,{children:"userId"})," is listed as an admin.\nAdditionally, it queries the ",(0,s.jsx)(i.code,{children:"AppUserProfile"})," to check if the ",(0,s.jsx)(i.code,{children:"userId"})," is a super admin."]}),"\n",(0,s.jsx)(i.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/0e711c6a6b57f55ab5776fc9c8edfc5ebc0b3d70/src/utilities/userFamilyAdminCheck.ts#L19",children:"src/utilities/userFamilyAdminCheck.ts:19"})})]})}function h(e={}){const{wrapper:i}={...(0,a.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},11151:(e,i,n)=>{n.d(i,{Z:()=>t,a:()=>c});var s=n(67294);const a={},r=s.createContext(a);function c(e){const i=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function t(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),s.createElement(r.Provider,{value:i},e.children)}}}]);