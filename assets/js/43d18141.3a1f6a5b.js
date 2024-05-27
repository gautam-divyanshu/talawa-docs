"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[91078],{87177:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var i=t(85893),s=t(11151);const o={},c="Module: setup/verifySmtpConnection",r={id:"talawa-api-docs/modules/setup_verifySmtpConnection",title:"setup_verifySmtpConnection",description:"talawa-api / Exports / setup/verifySmtpConnection",source:"@site/docs/talawa-api-docs/modules/setup_verifySmtpConnection.md",sourceDirName:"talawa-api-docs/modules",slug:"/talawa-api-docs/modules/setup_verifySmtpConnection",permalink:"/docs/talawa-api-docs/modules/setup_verifySmtpConnection",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/modules/setup_verifySmtpConnection.md",tags:[],version:"current",frontMatter:{},sidebar:"API",previous:{title:"setup_updateEnvVariable",permalink:"/docs/talawa-api-docs/modules/setup_updateEnvVariable"},next:{title:"typeDefs",permalink:"/docs/talawa-api-docs/modules/typeDefs"}},d={},l=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Functions",id:"functions",level:3},{value:"Functions",id:"functions-1",level:2},{value:"verifySmtpConnection",id:"verifysmtpconnection",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/talawa-api-docs/",children:"talawa-api"})," / ",(0,i.jsx)(n.a,{href:"/docs/talawa-api-docs/modules",children:"Exports"})," / setup/verifySmtpConnection"]}),"\n",(0,i.jsx)(n.h1,{id:"module-setupverifysmtpconnection",children:"Module: setup/verifySmtpConnection"}),"\n",(0,i.jsx)(n.h2,{id:"table-of-contents",children:"Table of contents"}),"\n",(0,i.jsx)(n.h3,{id:"functions",children:"Functions"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/talawa-api-docs/modules/setup_verifySmtpConnection#verifysmtpconnection",children:"verifySmtpConnection"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"functions-1",children:"Functions"}),"\n",(0,i.jsx)(n.h3,{id:"verifysmtpconnection",children:"verifySmtpConnection"}),"\n",(0,i.jsxs)(n.p,{children:["\u25b8 ",(0,i.jsx)(n.strong,{children:"verifySmtpConnection"}),"(",(0,i.jsx)(n.code,{children:"config"}),"): ",(0,i.jsx)(n.code,{children:"Promise"}),"<",(0,i.jsx)(n.code,{children:"VerifySmtpConnectionReturnType"}),">"]}),"\n",(0,i.jsxs)(n.p,{children:["The function ",(0,i.jsx)(n.code,{children:"verifySmtpConnection"})," verifies the SMTP connection using the provided configuration\nand returns a success status and error message if applicable."]}),"\n",(0,i.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"config"})}),(0,i.jsxs)(n.td,{style:{textAlign:"left"},children:[(0,i.jsx)(n.code,{children:"Record"}),"<",(0,i.jsx)(n.code,{children:"string"}),", ",(0,i.jsx)(n.code,{children:"string"}),">"]}),(0,i.jsxs)(n.td,{style:{textAlign:"left"},children:["The ",(0,i.jsx)(n.code,{children:"config"})," parameter is an object that contains the configuration settings for the SMTP connection. It should have the following properties:"]})]})})]}),"\n",(0,i.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Promise"}),"<",(0,i.jsx)(n.code,{children:"VerifySmtpConnectionReturnType"}),">"]}),"\n",(0,i.jsxs)(n.p,{children:["The function ",(0,i.jsx)(n.code,{children:"verifySmtpConnection"})," returns a Promise that resolves to an object of type\n",(0,i.jsx)(n.code,{children:"VerifySmtpConnectionReturnType"}),". The ",(0,i.jsx)(n.code,{children:"VerifySmtpConnectionReturnType"})," object has two properties:\n",(0,i.jsx)(n.code,{children:"success"})," and ",(0,i.jsx)(n.code,{children:"error"}),". If the SMTP connection is verified successfully, the ",(0,i.jsx)(n.code,{children:"success"})," property will\nbe ",(0,i.jsx)(n.code,{children:"true"})," and the ",(0,i.jsx)(n.code,{children:"error"})," property will be ",(0,i.jsx)(n.code,{children:"null"}),". If the SMTP connection verification fails"]}),"\n",(0,i.jsx)(n.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/9fa6a1c/src/setup/verifySmtpConnection.ts#L18",children:"src/setup/verifySmtpConnection.ts:18"})})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>c});var i=t(67294);const s={},o=i.createContext(s);function c(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);