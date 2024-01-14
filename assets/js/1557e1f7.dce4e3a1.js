"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[93840],{79681:(e,d,n)=>{n.r(d),n.d(d,{assets:()=>l,contentTitle:()=>r,default:()=>a,frontMatter:()=>s,metadata:()=>o,toc:()=>t});var c=n(85893),i=n(11151);const s={},r="Module: env",o={id:"talawa-api-docs/modules/env",title:"env",description:"talawa-api / Exports / env",source:"@site/docs/talawa-api-docs/modules/env.md",sourceDirName:"talawa-api-docs/modules",slug:"/talawa-api-docs/modules/env",permalink:"/docs/talawa-api-docs/modules/env",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/modules/env.md",tags:[],version:"current",frontMatter:{},sidebar:"API",previous:{title:"directives_roleDirective",permalink:"/docs/talawa-api-docs/modules/directives_roleDirective"},next:{title:"index",permalink:"/docs/talawa-api-docs/modules/"}},l={},t=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Variables",id:"variables",level:3},{value:"Functions",id:"functions",level:3},{value:"Variables",id:"variables-1",level:2},{value:"envSchema",id:"envschema",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"Functions",id:"functions-1",level:2},{value:"getEnvIssues",id:"getenvissues",level:3},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-1",level:4}];function h(e){const d={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(d.p,{children:[(0,c.jsx)(d.a,{href:"../README.md",children:"talawa-api"})," / ",(0,c.jsx)(d.a,{href:"/docs/talawa-api-docs/modules",children:"Exports"})," / env"]}),"\n",(0,c.jsx)(d.h1,{id:"module-env",children:"Module: env"}),"\n",(0,c.jsx)(d.h2,{id:"table-of-contents",children:"Table of contents"}),"\n",(0,c.jsx)(d.h3,{id:"variables",children:"Variables"}),"\n",(0,c.jsxs)(d.ul,{children:["\n",(0,c.jsx)(d.li,{children:(0,c.jsx)(d.a,{href:"/docs/talawa-api-docs/modules/env#envschema",children:"envSchema"})}),"\n"]}),"\n",(0,c.jsx)(d.h3,{id:"functions",children:"Functions"}),"\n",(0,c.jsxs)(d.ul,{children:["\n",(0,c.jsx)(d.li,{children:(0,c.jsx)(d.a,{href:"/docs/talawa-api-docs/modules/env#getenvissues",children:"getEnvIssues"})}),"\n"]}),"\n",(0,c.jsx)(d.h2,{id:"variables-1",children:"Variables"}),"\n",(0,c.jsx)(d.h3,{id:"envschema",children:"envSchema"}),"\n",(0,c.jsxs)(d.p,{children:["\u2022 ",(0,c.jsx)(d.code,{children:"Const"})," ",(0,c.jsx)(d.strong,{children:"envSchema"}),": ",(0,c.jsx)(d.code,{children:"ZodObject"}),"<{ ",(0,c.jsx)(d.code,{children:"ACCESS_TOKEN_SECRET"}),": ",(0,c.jsx)(d.code,{children:"ZodString"})," ; ",(0,c.jsx)(d.code,{children:"MAIL_PASSWORD"}),": ",(0,c.jsx)(d.code,{children:"ZodString"})," ; ",(0,c.jsx)(d.code,{children:"MAIL_USERNAME"}),": ",(0,c.jsx)(d.code,{children:"ZodString"})," ; ",(0,c.jsx)(d.code,{children:"MONGO_DB_URL"}),": ",(0,c.jsx)(d.code,{children:"ZodString"})," ; ",(0,c.jsx)(d.code,{children:"NODE_ENV"}),": ",(0,c.jsx)(d.code,{children:"ZodDefault"}),"<",(0,c.jsx)(d.code,{children:"ZodEnum"}),"<[",(0,c.jsx)(d.code,{children:'"development"'}),", ",(0,c.jsx)(d.code,{children:'"test"'}),", ",(0,c.jsx)(d.code,{children:'"production"'}),"]>> ; ",(0,c.jsx)(d.code,{children:"RECAPTCHA_SECRET_KEY"}),": ",(0,c.jsx)(d.code,{children:"ZodString"})," ; ",(0,c.jsx)(d.code,{children:"RECAPTCHA_SITE_KEY"}),": ",(0,c.jsx)(d.code,{children:"ZodString"})," ; ",(0,c.jsx)(d.code,{children:"REFRESH_TOKEN_SECRET"}),": ",(0,c.jsx)(d.code,{children:"ZodString"})," ; ",(0,c.jsx)(d.code,{children:"apiKey"}),": ",(0,c.jsx)(d.code,{children:"ZodString"})," ; ",(0,c.jsx)(d.code,{children:"appId"}),": ",(0,c.jsx)(d.code,{children:"ZodString"})," ; ",(0,c.jsx)(d.code,{children:"iOSapiKey"}),": ",(0,c.jsx)(d.code,{children:"ZodString"})," ; ",(0,c.jsx)(d.code,{children:"iOSappId"}),": ",(0,c.jsx)(d.code,{children:"ZodString"})," ; ",(0,c.jsx)(d.code,{children:"iOSmessagingSenderId"}),": ",(0,c.jsx)(d.code,{children:"ZodString"})," ; ",(0,c.jsx)(d.code,{children:"iOSprojectId"}),": ",(0,c.jsx)(d.code,{children:"ZodString"})," ; ",(0,c.jsx)(d.code,{children:"iOSstorageBucket"}),": ",(0,c.jsx)(d.code,{children:"ZodString"})," ; ",(0,c.jsx)(d.code,{children:"iosBundleId"}),": ",(0,c.jsx)(d.code,{children:"ZodString"})," ; ",(0,c.jsx)(d.code,{children:"iosClientId"}),": ",(0,c.jsx)(d.code,{children:"ZodString"})," ; ",(0,c.jsx)(d.code,{children:"messagingSenderId"}),": ",(0,c.jsx)(d.code,{children:"ZodString"})," ; ",(0,c.jsx)(d.code,{children:"projectId"}),": ",(0,c.jsx)(d.code,{children:"ZodString"})," ; ",(0,c.jsx)(d.code,{children:"storageBucket"}),": ",(0,c.jsx)(d.code,{children:"ZodString"}),"  }, ",(0,c.jsx)(d.code,{children:'"strip"'}),", ",(0,c.jsx)(d.code,{children:"ZodTypeAny"}),", { ",(0,c.jsx)(d.code,{children:"ACCESS_TOKEN_SECRET"}),": ",(0,c.jsx)(d.code,{children:"string"})," ; ",(0,c.jsx)(d.code,{children:"MAIL_PASSWORD"}),": ",(0,c.jsx)(d.code,{children:"string"})," ; ",(0,c.jsx)(d.code,{children:"MAIL_USERNAME"}),": ",(0,c.jsx)(d.code,{children:"string"})," ; ",(0,c.jsx)(d.code,{children:"MONGO_DB_URL"}),": ",(0,c.jsx)(d.code,{children:"string"})," ; ",(0,c.jsx)(d.code,{children:"NODE_ENV"}),": ",(0,c.jsx)(d.code,{children:'"test"'})," | ",(0,c.jsx)(d.code,{children:'"production"'})," | ",(0,c.jsx)(d.code,{children:'"development"'})," ; ",(0,c.jsx)(d.code,{children:"RECAPTCHA_SECRET_KEY"}),": ",(0,c.jsx)(d.code,{children:"string"})," ; ",(0,c.jsx)(d.code,{children:"RECAPTCHA_SITE_KEY"}),": ",(0,c.jsx)(d.code,{children:"string"})," ; ",(0,c.jsx)(d.code,{children:"REFRESH_TOKEN_SECRET"}),": ",(0,c.jsx)(d.code,{children:"string"})," ; ",(0,c.jsx)(d.code,{children:"apiKey"}),": ",(0,c.jsx)(d.code,{children:"string"})," ; ",(0,c.jsx)(d.code,{children:"appId"}),": ",(0,c.jsx)(d.code,{children:"string"})," ; ",(0,c.jsx)(d.code,{children:"iOSapiKey"}),": ",(0,c.jsx)(d.code,{children:"string"})," ; ",(0,c.jsx)(d.code,{children:"iOSappId"}),": ",(0,c.jsx)(d.code,{children:"string"})," ; ",(0,c.jsx)(d.code,{children:"iOSmessagingSenderId"}),": ",(0,c.jsx)(d.code,{children:"string"})," ; ",(0,c.jsx)(d.code,{children:"iOSprojectId"}),": ",(0,c.jsx)(d.code,{children:"string"})," ; ",(0,c.jsx)(d.code,{children:"iOSstorageBucket"}),": ",(0,c.jsx)(d.code,{children:"string"})," ; ",(0,c.jsx)(d.code,{children:"iosBundleId"}),": ",(0,c.jsx)(d.code,{children:"string"})," ; ",(0,c.jsx)(d.code,{children:"iosClientId"}),": ",(0,c.jsx)(d.code,{children:"string"})," ; ",(0,c.jsx)(d.code,{children:"messagingSenderId"}),": ",(0,c.jsx)(d.code,{children:"string"})," ; ",(0,c.jsx)(d.code,{children:"projectId"}),": ",(0,c.jsx)(d.code,{children:"string"})," ; ",(0,c.jsx)(d.code,{children:"storageBucket"}),": ",(0,c.jsx)(d.code,{children:"string"}),"  }, { ",(0,c.jsx)(d.code,{children:"ACCESS_TOKEN_SECRET"}),": ",(0,c.jsx)(d.code,{children:"string"})," ; ",(0,c.jsx)(d.code,{children:"MAIL_PASSWORD"}),": ",(0,c.jsx)(d.code,{children:"string"})," ; ",(0,c.jsx)(d.code,{children:"MAIL_USERNAME"}),": ",(0,c.jsx)(d.code,{children:"string"})," ; ",(0,c.jsx)(d.code,{children:"MONGO_DB_URL"}),": ",(0,c.jsx)(d.code,{children:"string"})," ; ",(0,c.jsx)(d.code,{children:"NODE_ENV?"}),": ",(0,c.jsx)(d.code,{children:'"test"'})," | ",(0,c.jsx)(d.code,{children:'"production"'})," | ",(0,c.jsx)(d.code,{children:'"development"'})," ; ",(0,c.jsx)(d.code,{children:"RECAPTCHA_SECRET_KEY"}),": ",(0,c.jsx)(d.code,{children:"string"})," ; ",(0,c.jsx)(d.code,{children:"RECAPTCHA_SITE_KEY"}),": ",(0,c.jsx)(d.code,{children:"string"})," ; ",(0,c.jsx)(d.code,{children:"REFRESH_TOKEN_SECRET"}),": ",(0,c.jsx)(d.code,{children:"string"})," ; ",(0,c.jsx)(d.code,{children:"apiKey"}),": ",(0,c.jsx)(d.code,{children:"string"})," ; ",(0,c.jsx)(d.code,{children:"appId"}),": ",(0,c.jsx)(d.code,{children:"string"})," ; ",(0,c.jsx)(d.code,{children:"iOSapiKey"}),": ",(0,c.jsx)(d.code,{children:"string"})," ; ",(0,c.jsx)(d.code,{children:"iOSappId"}),": ",(0,c.jsx)(d.code,{children:"string"})," ; ",(0,c.jsx)(d.code,{children:"iOSmessagingSenderId"}),": ",(0,c.jsx)(d.code,{children:"string"})," ; ",(0,c.jsx)(d.code,{children:"iOSprojectId"}),": ",(0,c.jsx)(d.code,{children:"string"})," ; ",(0,c.jsx)(d.code,{children:"iOSstorageBucket"}),": ",(0,c.jsx)(d.code,{children:"string"})," ; ",(0,c.jsx)(d.code,{children:"iosBundleId"}),": ",(0,c.jsx)(d.code,{children:"string"})," ; ",(0,c.jsx)(d.code,{children:"iosClientId"}),": ",(0,c.jsx)(d.code,{children:"string"})," ; ",(0,c.jsx)(d.code,{children:"messagingSenderId"}),": ",(0,c.jsx)(d.code,{children:"string"})," ; ",(0,c.jsx)(d.code,{children:"projectId"}),": ",(0,c.jsx)(d.code,{children:"string"})," ; ",(0,c.jsx)(d.code,{children:"storageBucket"}),": ",(0,c.jsx)(d.code,{children:"string"}),"  }>"]}),"\n",(0,c.jsx)(d.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,c.jsx)(d.p,{children:(0,c.jsx)(d.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/55cb3be/src/env.ts#L3",children:"src/env.ts:3"})}),"\n",(0,c.jsx)(d.h2,{id:"functions-1",children:"Functions"}),"\n",(0,c.jsx)(d.h3,{id:"getenvissues",children:"getEnvIssues"}),"\n",(0,c.jsxs)(d.p,{children:["\u25b8 ",(0,c.jsx)(d.strong,{children:"getEnvIssues"}),"(): ",(0,c.jsx)(d.code,{children:"void"})," | ",(0,c.jsx)(d.code,{children:"ZodIssue"}),"[]"]}),"\n",(0,c.jsx)(d.h4,{id:"returns",children:"Returns"}),"\n",(0,c.jsxs)(d.p,{children:[(0,c.jsx)(d.code,{children:"void"})," | ",(0,c.jsx)(d.code,{children:"ZodIssue"}),"[]"]}),"\n",(0,c.jsx)(d.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,c.jsx)(d.p,{children:(0,c.jsx)(d.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/55cb3be/src/env.ts#L35",children:"src/env.ts:35"})})]})}function a(e={}){const{wrapper:d}={...(0,i.a)(),...e.components};return d?(0,c.jsx)(d,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},11151:(e,d,n)=>{n.d(d,{Z:()=>o,a:()=>r});var c=n(67294);const i={},s=c.createContext(i);function r(e){const d=c.useContext(s);return c.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function o(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),c.createElement(s.Provider,{value:d},e.children)}}}]);