"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[95056],{82715:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>r,contentTitle:()=>n,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var d=s(85893),i=s(11151);const a={},n="Module: middleware/isAuth",l={id:"talawa-api-docs/modules/middleware_isAuth",title:"middleware_isAuth",description:"talawa-api / Exports / middleware/isAuth",source:"@site/docs/talawa-api-docs/modules/middleware_isAuth.md",sourceDirName:"talawa-api-docs/modules",slug:"/talawa-api-docs/modules/middleware_isAuth",permalink:"/docs/talawa-api-docs/modules/middleware_isAuth",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/modules/middleware_isAuth.md",tags:[],version:"current",frontMatter:{},sidebar:"API",previous:{title:"middleware",permalink:"/docs/talawa-api-docs/modules/middleware"},next:{title:"models",permalink:"/docs/talawa-api-docs/modules/models"}},r={},c=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Interfaces",id:"interfaces",level:3},{value:"Functions",id:"functions",level:3},{value:"Functions",id:"functions-1",level:2},{value:"isAuth",id:"isauth",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}];function o(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.a,{href:"../README.md",children:"talawa-api"})," / ",(0,d.jsx)(t.a,{href:"/docs/talawa-api-docs/modules",children:"Exports"})," / middleware/isAuth"]}),"\n",(0,d.jsx)(t.h1,{id:"module-middlewareisauth",children:"Module: middleware/isAuth"}),"\n",(0,d.jsx)(t.h2,{id:"table-of-contents",children:"Table of contents"}),"\n",(0,d.jsx)(t.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,d.jsxs)(t.ul,{children:["\n",(0,d.jsx)(t.li,{children:(0,d.jsx)(t.a,{href:"/docs/talawa-api-docs/interfaces/middleware_isAuth.InterfaceAuthData",children:"InterfaceAuthData"})}),"\n"]}),"\n",(0,d.jsx)(t.h3,{id:"functions",children:"Functions"}),"\n",(0,d.jsxs)(t.ul,{children:["\n",(0,d.jsx)(t.li,{children:(0,d.jsx)(t.a,{href:"/docs/talawa-api-docs/modules/middleware_isAuth#isauth",children:"isAuth"})}),"\n"]}),"\n",(0,d.jsx)(t.h2,{id:"functions-1",children:"Functions"}),"\n",(0,d.jsx)(t.h3,{id:"isauth",children:"isAuth"}),"\n",(0,d.jsxs)(t.p,{children:["\u25b8 ",(0,d.jsx)(t.strong,{children:"isAuth"}),"(",(0,d.jsx)(t.code,{children:"request"}),"): ",(0,d.jsx)(t.a,{href:"/docs/talawa-api-docs/interfaces/middleware_isAuth.InterfaceAuthData",children:(0,d.jsx)(t.code,{children:"InterfaceAuthData"})})]}),"\n",(0,d.jsx)(t.p,{children:"This function determines whether the user is authorised and whether the access token has expired."}),"\n",(0,d.jsx)(t.h4,{id:"parameters",children:"Parameters"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,d.jsx)(t.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,d.jsx)(t.tbody,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"left"},children:(0,d.jsx)(t.code,{children:"request"})}),(0,d.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,d.jsx)(t.code,{children:"Request"}),"<",(0,d.jsx)(t.code,{children:"ParamsDictionary"}),", ",(0,d.jsx)(t.code,{children:"any"}),", ",(0,d.jsx)(t.code,{children:"any"}),", ",(0,d.jsx)(t.code,{children:"ParsedQs"}),", ",(0,d.jsx)(t.code,{children:"Record"}),"<",(0,d.jsx)(t.code,{children:"string"}),", ",(0,d.jsx)(t.code,{children:"any"}),">>"]})]})})]}),"\n",(0,d.jsx)(t.h4,{id:"returns",children:"Returns"}),"\n",(0,d.jsx)(t.p,{children:(0,d.jsx)(t.a,{href:"/docs/talawa-api-docs/interfaces/middleware_isAuth.InterfaceAuthData",children:(0,d.jsx)(t.code,{children:"InterfaceAuthData"})})}),"\n",(0,d.jsxs)(t.p,{children:["Returns ",(0,d.jsx)(t.code,{children:"authData"})," object with ",(0,d.jsx)(t.code,{children:"isAuth"}),", ",(0,d.jsx)(t.code,{children:"expired"})," and ",(0,d.jsx)(t.code,{children:"userId"})," properties."]}),"\n",(0,d.jsx)(t.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,d.jsx)(t.p,{children:(0,d.jsx)(t.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/55cb3be/src/middleware/isAuth.ts#L17",children:"src/middleware/isAuth.ts:17"})})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>l,a:()=>n});var d=s(67294);const i={},a=d.createContext(i);function n(e){const t=d.useContext(a);return d.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),d.createElement(a.Provider,{value:t},e.children)}}}]);