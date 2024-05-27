"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[3152],{70780:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var i=s(85893),n=s(11151);const l={},r="Module: utilities/auth",d={id:"talawa-api-docs/modules/utilities_auth",title:"utilities_auth",description:"talawa-api / Exports / utilities/auth",source:"@site/docs/talawa-api-docs/modules/utilities_auth.md",sourceDirName:"talawa-api-docs/modules",slug:"/talawa-api-docs/modules/utilities_auth",permalink:"/docs/talawa-api-docs/modules/utilities_auth",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/modules/utilities_auth.md",tags:[],version:"current",frontMatter:{},sidebar:"API",previous:{title:"utilities_adminCheck",permalink:"/docs/talawa-api-docs/modules/utilities_adminCheck"},next:{title:"utilities_checkReplicaSet",permalink:"/docs/talawa-api-docs/modules/utilities_checkReplicaSet"}},a={},c=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Interfaces",id:"interfaces",level:3},{value:"Functions",id:"functions",level:3},{value:"Functions",id:"functions-1",level:2},{value:"createAccessToken",id:"createaccesstoken",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"createRefreshToken",id:"createrefreshtoken",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"revokeRefreshToken",id:"revokerefreshtoken",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-2",level:4}];function o(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/docs/talawa-api-docs/",children:"talawa-api"})," / ",(0,i.jsx)(t.a,{href:"/docs/talawa-api-docs/modules",children:"Exports"})," / utilities/auth"]}),"\n",(0,i.jsx)(t.h1,{id:"module-utilitiesauth",children:"Module: utilities/auth"}),"\n",(0,i.jsx)(t.h2,{id:"table-of-contents",children:"Table of contents"}),"\n",(0,i.jsx)(t.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/talawa-api-docs/interfaces/utilities_auth.InterfaceJwtTokenPayload",children:"InterfaceJwtTokenPayload"})}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"functions",children:"Functions"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/talawa-api-docs/modules/utilities_auth#createaccesstoken",children:"createAccessToken"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/talawa-api-docs/modules/utilities_auth#createrefreshtoken",children:"createRefreshToken"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/talawa-api-docs/modules/utilities_auth#revokerefreshtoken",children:"revokeRefreshToken"})}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"functions-1",children:"Functions"}),"\n",(0,i.jsx)(t.h3,{id:"createaccesstoken",children:"createAccessToken"}),"\n",(0,i.jsxs)(t.p,{children:["\u25b8 ",(0,i.jsx)(t.strong,{children:"createAccessToken"}),"(",(0,i.jsx)(t.code,{children:"user"}),", ",(0,i.jsx)(t.code,{children:"appUserProfile"}),"): ",(0,i.jsx)(t.code,{children:"string"})]}),"\n",(0,i.jsx)(t.p,{children:"This function creates a json web token which expires in 15 minutes.\nIt signs the given payload(user data) into a JSON Web Token string payload."}),"\n",(0,i.jsx)(t.h4,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"user"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.a,{href:"/docs/talawa-api-docs/interfaces/models_User.InterfaceUser",children:(0,i.jsx)(t.code,{children:"InterfaceUser"})})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"User data"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"appUserProfile"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.a,{href:"/docs/talawa-api-docs/interfaces/models_AppUserProfile.InterfaceAppUserProfile",children:(0,i.jsx)(t.code,{children:"InterfaceAppUserProfile"})})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"-"})]})]})]}),"\n",(0,i.jsx)(t.h4,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"string"})}),"\n",(0,i.jsx)(t.p,{children:"JSON Web Token string payload"}),"\n",(0,i.jsx)(t.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/9fa6a1c/src/utilities/auth.ts#L19",children:"src/utilities/auth.ts:19"})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h3,{id:"createrefreshtoken",children:"createRefreshToken"}),"\n",(0,i.jsxs)(t.p,{children:["\u25b8 ",(0,i.jsx)(t.strong,{children:"createRefreshToken"}),"(",(0,i.jsx)(t.code,{children:"user"}),", ",(0,i.jsx)(t.code,{children:"appUserProfile"}),"): ",(0,i.jsx)(t.code,{children:"string"})]}),"\n",(0,i.jsx)(t.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"user"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.a,{href:"/docs/talawa-api-docs/interfaces/models_User.InterfaceUser",children:(0,i.jsx)(t.code,{children:"InterfaceUser"})})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"appUserProfile"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.a,{href:"/docs/talawa-api-docs/interfaces/models_AppUserProfile.InterfaceAppUserProfile",children:(0,i.jsx)(t.code,{children:"InterfaceAppUserProfile"})})})]})]})]}),"\n",(0,i.jsx)(t.h4,{id:"returns-1",children:"Returns"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"string"})}),"\n",(0,i.jsx)(t.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/9fa6a1c/src/utilities/auth.ts#L38",children:"src/utilities/auth.ts:38"})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h3,{id:"revokerefreshtoken",children:"revokeRefreshToken"}),"\n",(0,i.jsxs)(t.p,{children:["\u25b8 ",(0,i.jsx)(t.strong,{children:"revokeRefreshToken"}),"(",(0,i.jsx)(t.code,{children:"userId"}),"): ",(0,i.jsx)(t.code,{children:"Promise"}),"<",(0,i.jsx)(t.code,{children:"void"}),">"]}),"\n",(0,i.jsx)(t.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"userId"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"string"})})]})})]}),"\n",(0,i.jsx)(t.h4,{id:"returns-2",children:"Returns"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"Promise"}),"<",(0,i.jsx)(t.code,{children:"void"}),">"]}),"\n",(0,i.jsx)(t.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/9fa6a1c/src/utilities/auth.ts#L57",children:"src/utilities/auth.ts:57"})})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>d,a:()=>r});var i=s(67294);const n={},l=i.createContext(n);function r(e){const t=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),i.createElement(l.Provider,{value:t},e.children)}}}]);