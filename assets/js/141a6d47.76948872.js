"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[49479],{52418:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var n=r(85893),i=r(11151);const s={},a="fetchOrgById method",o={id:"talawa-mobile-docs/utils_queries/Queries/fetchOrgById",title:"fetchOrgById method",description:"String fetchOrgById",source:"@site/docs/talawa-mobile-docs/utils_queries/Queries/fetchOrgById.md",sourceDirName:"talawa-mobile-docs/utils_queries/Queries",slug:"/talawa-mobile-docs/utils_queries/Queries/fetchOrgById",permalink:"/docs/talawa-mobile-docs/utils_queries/Queries/fetchOrgById",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/utils_queries/Queries/fetchOrgById.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"fetchJoinInOrgByName property",permalink:"/docs/talawa-mobile-docs/utils_queries/Queries/fetchJoinInOrgByName"},next:{title:"fetchOrgDetailsById method",permalink:"/docs/talawa-mobile-docs/utils_queries/Queries/fetchOrgDetailsById"}},c={},d=[{value:"Implementation",id:"implementation",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"fetchorgbyid-method",children:"fetchOrgById method"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," fetchOrgById\n(",(0,n.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," orgId)"]}),"\n",(0,n.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-dart",children:"String fetchOrgById(String orgId) {\n  return '''\n  query{\n    organizations(id: \"$orgId\"){\n      image\n      _id\n      name\n      image\n      isPublic\n      creator{\n        firstName\n        lastName\n      }\n    }\n  }\n''';\n}\n"})})]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},11151:(e,t,r)=>{r.d(t,{Z:()=>o,a:()=>a});var n=r(67294);const i={},s=n.createContext(i);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);