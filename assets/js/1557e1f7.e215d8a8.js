"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[93840],{79681:(e,d,c)=>{c.r(d),c.d(d,{assets:()=>l,contentTitle:()=>r,default:()=>x,frontMatter:()=>i,metadata:()=>o,toc:()=>h});var n=c(85893),s=c(11151);const i={},r="Module: env",o={id:"talawa-api-docs/modules/env",title:"env",description:"talawa-api / Exports / env",source:"@site/docs/talawa-api-docs/modules/env.md",sourceDirName:"talawa-api-docs/modules",slug:"/talawa-api-docs/modules/env",permalink:"/docs/talawa-api-docs/modules/env",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/modules/env.md",tags:[],version:"current",frontMatter:{},sidebar:"API",previous:{title:"directives_directiveTransformer_roleDirectiveTransformer",permalink:"/docs/talawa-api-docs/modules/directives_directiveTransformer_roleDirectiveTransformer"},next:{title:"helpers_event_createEventHelpers",permalink:"/docs/talawa-api-docs/modules/helpers_event_createEventHelpers"}},l={},h=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Variables",id:"variables",level:3},{value:"Functions",id:"functions",level:3},{value:"Variables",id:"variables-1",level:2},{value:"envSchema",id:"envschema",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"Functions",id:"functions-1",level:2},{value:"getEnvIssues",id:"getenvissues",level:3},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-1",level:4}];function t(e){const d={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(d.p,{children:[(0,n.jsx)(d.a,{href:"../README.md",children:"talawa-api"})," / ",(0,n.jsx)(d.a,{href:"/docs/talawa-api-docs/modules",children:"Exports"})," / env"]}),"\n",(0,n.jsx)(d.h1,{id:"module-env",children:"Module: env"}),"\n",(0,n.jsx)(d.h2,{id:"table-of-contents",children:"Table of contents"}),"\n",(0,n.jsx)(d.h3,{id:"variables",children:"Variables"}),"\n",(0,n.jsxs)(d.ul,{children:["\n",(0,n.jsx)(d.li,{children:(0,n.jsx)(d.a,{href:"/docs/talawa-api-docs/modules/env#envschema",children:"envSchema"})}),"\n"]}),"\n",(0,n.jsx)(d.h3,{id:"functions",children:"Functions"}),"\n",(0,n.jsxs)(d.ul,{children:["\n",(0,n.jsx)(d.li,{children:(0,n.jsx)(d.a,{href:"/docs/talawa-api-docs/modules/env#getenvissues",children:"getEnvIssues"})}),"\n"]}),"\n",(0,n.jsx)(d.h2,{id:"variables-1",children:"Variables"}),"\n",(0,n.jsx)(d.h3,{id:"envschema",children:"envSchema"}),"\n",(0,n.jsxs)(d.p,{children:["\u2022 ",(0,n.jsx)(d.code,{children:"Const"})," ",(0,n.jsx)(d.strong,{children:"envSchema"}),": ",(0,n.jsx)(d.code,{children:"ZodObject"}),"<{ ",(0,n.jsx)(d.code,{children:"ACCESS_TOKEN_SECRET"}),": ",(0,n.jsx)(d.code,{children:"ZodString"})," ; ",(0,n.jsx)(d.code,{children:"COLORIZE_LOGS"}),": ",(0,n.jsx)(d.code,{children:"ZodOptional"}),"<",(0,n.jsx)(d.code,{children:"ZodEffects"}),"<",(0,n.jsx)(d.code,{children:"ZodString"}),", ",(0,n.jsx)(d.code,{children:"string"}),", ",(0,n.jsx)(d.code,{children:"string"}),">> ; ",(0,n.jsx)(d.code,{children:"IS_SMTP"}),": ",(0,n.jsx)(d.code,{children:"ZodOptional"}),"<",(0,n.jsx)(d.code,{children:"ZodEffects"}),"<",(0,n.jsx)(d.code,{children:"ZodString"}),", ",(0,n.jsx)(d.code,{children:"string"}),", ",(0,n.jsx)(d.code,{children:"string"}),">> ; ",(0,n.jsx)(d.code,{children:"LAST_RESORT_SUPERADMIN_EMAIL"}),": ",(0,n.jsx)(d.code,{children:"ZodOptional"}),"<",(0,n.jsx)(d.code,{children:"ZodString"}),"> ; ",(0,n.jsx)(d.code,{children:"LOG_LEVEL"}),": ",(0,n.jsx)(d.code,{children:"ZodEnum"}),"<[",(0,n.jsx)(d.code,{children:'"trace"'}),", ",(0,n.jsx)(d.code,{children:'"debug"'}),", ",(0,n.jsx)(d.code,{children:'"info"'}),", ",(0,n.jsx)(d.code,{children:'"warn"'}),", ",(0,n.jsx)(d.code,{children:'"error"'}),", ",(0,n.jsx)(d.code,{children:'"fatal"'}),"]> ; ",(0,n.jsx)(d.code,{children:"MAIL_PASSWORD"}),": ",(0,n.jsx)(d.code,{children:"ZodOptional"}),"<",(0,n.jsx)(d.code,{children:"ZodString"}),"> ; ",(0,n.jsx)(d.code,{children:"MAIL_USERNAME"}),": ",(0,n.jsx)(d.code,{children:"ZodOptional"}),"<",(0,n.jsx)(d.code,{children:"ZodString"}),"> ; ",(0,n.jsx)(d.code,{children:"MONGO_DB_URL"}),": ",(0,n.jsx)(d.code,{children:"ZodString"})," ; ",(0,n.jsx)(d.code,{children:"NODE_ENV"}),": ",(0,n.jsx)(d.code,{children:"ZodEffects"}),"<",(0,n.jsx)(d.code,{children:"ZodString"}),", ",(0,n.jsx)(d.code,{children:"string"}),", ",(0,n.jsx)(d.code,{children:"string"}),"> ; ",(0,n.jsx)(d.code,{children:"RECAPTCHA_SECRET_KEY"}),": ",(0,n.jsx)(d.code,{children:"ZodOptional"}),"<",(0,n.jsx)(d.code,{children:"ZodString"}),"> ; ",(0,n.jsx)(d.code,{children:"REDIS_HOST"}),": ",(0,n.jsx)(d.code,{children:"ZodString"})," ; ",(0,n.jsx)(d.code,{children:"REDIS_PASSWORD"}),": ",(0,n.jsx)(d.code,{children:"ZodOptional"}),"<",(0,n.jsx)(d.code,{children:"ZodString"}),"> ; ",(0,n.jsx)(d.code,{children:"REDIS_PORT"}),": ",(0,n.jsx)(d.code,{children:"ZodEffects"}),"<",(0,n.jsx)(d.code,{children:"ZodString"}),", ",(0,n.jsx)(d.code,{children:"string"}),", ",(0,n.jsx)(d.code,{children:"string"}),"> ; ",(0,n.jsx)(d.code,{children:"REFRESH_TOKEN_SECRET"}),": ",(0,n.jsx)(d.code,{children:"ZodString"})," ; ",(0,n.jsx)(d.code,{children:"SMTP_HOST"}),": ",(0,n.jsx)(d.code,{children:"ZodOptional"}),"<",(0,n.jsx)(d.code,{children:"ZodString"}),"> ; ",(0,n.jsx)(d.code,{children:"SMTP_PASSWORD"}),": ",(0,n.jsx)(d.code,{children:"ZodOptional"}),"<",(0,n.jsx)(d.code,{children:"ZodString"}),"> ; ",(0,n.jsx)(d.code,{children:"SMTP_PORT"}),": ",(0,n.jsx)(d.code,{children:"ZodOptional"}),"<",(0,n.jsx)(d.code,{children:"ZodString"}),"> ; ",(0,n.jsx)(d.code,{children:"SMTP_SSL_TLS"}),": ",(0,n.jsx)(d.code,{children:"ZodOptional"}),"<",(0,n.jsx)(d.code,{children:"ZodEffects"}),"<",(0,n.jsx)(d.code,{children:"ZodString"}),", ",(0,n.jsx)(d.code,{children:"string"}),", ",(0,n.jsx)(d.code,{children:"string"}),">> ; ",(0,n.jsx)(d.code,{children:"SMTP_USERNAME"}),": ",(0,n.jsx)(d.code,{children:"ZodOptional"}),"<",(0,n.jsx)(d.code,{children:"ZodString"}),">  }, ",(0,n.jsx)(d.code,{children:'"strip"'}),", ",(0,n.jsx)(d.code,{children:"ZodTypeAny"}),", { ",(0,n.jsx)(d.code,{children:"ACCESS_TOKEN_SECRET"}),": ",(0,n.jsx)(d.code,{children:"string"})," ; ",(0,n.jsx)(d.code,{children:"COLORIZE_LOGS?"}),": ",(0,n.jsx)(d.code,{children:"string"})," ; ",(0,n.jsx)(d.code,{children:"IS_SMTP?"}),": ",(0,n.jsx)(d.code,{children:"string"})," ; ",(0,n.jsx)(d.code,{children:"LAST_RESORT_SUPERADMIN_EMAIL?"}),": ",(0,n.jsx)(d.code,{children:"string"})," ; ",(0,n.jsx)(d.code,{children:"LOG_LEVEL"}),": ",(0,n.jsx)(d.code,{children:'"error"'})," | ",(0,n.jsx)(d.code,{children:'"trace"'})," | ",(0,n.jsx)(d.code,{children:'"debug"'})," | ",(0,n.jsx)(d.code,{children:'"info"'})," | ",(0,n.jsx)(d.code,{children:'"warn"'})," | ",(0,n.jsx)(d.code,{children:'"fatal"'})," ; ",(0,n.jsx)(d.code,{children:"MAIL_PASSWORD?"}),": ",(0,n.jsx)(d.code,{children:"string"})," ; ",(0,n.jsx)(d.code,{children:"MAIL_USERNAME?"}),": ",(0,n.jsx)(d.code,{children:"string"})," ; ",(0,n.jsx)(d.code,{children:"MONGO_DB_URL"}),": ",(0,n.jsx)(d.code,{children:"string"})," ; ",(0,n.jsx)(d.code,{children:"NODE_ENV"}),": ",(0,n.jsx)(d.code,{children:"string"})," ; ",(0,n.jsx)(d.code,{children:"RECAPTCHA_SECRET_KEY?"}),": ",(0,n.jsx)(d.code,{children:"string"})," ; ",(0,n.jsx)(d.code,{children:"REDIS_HOST"}),": ",(0,n.jsx)(d.code,{children:"string"})," ; ",(0,n.jsx)(d.code,{children:"REDIS_PASSWORD?"}),": ",(0,n.jsx)(d.code,{children:"string"})," ; ",(0,n.jsx)(d.code,{children:"REDIS_PORT"}),": ",(0,n.jsx)(d.code,{children:"string"})," ; ",(0,n.jsx)(d.code,{children:"REFRESH_TOKEN_SECRET"}),": ",(0,n.jsx)(d.code,{children:"string"})," ; ",(0,n.jsx)(d.code,{children:"SMTP_HOST?"}),": ",(0,n.jsx)(d.code,{children:"string"})," ; ",(0,n.jsx)(d.code,{children:"SMTP_PASSWORD?"}),": ",(0,n.jsx)(d.code,{children:"string"})," ; ",(0,n.jsx)(d.code,{children:"SMTP_PORT?"}),": ",(0,n.jsx)(d.code,{children:"string"})," ; ",(0,n.jsx)(d.code,{children:"SMTP_SSL_TLS?"}),": ",(0,n.jsx)(d.code,{children:"string"})," ; ",(0,n.jsx)(d.code,{children:"SMTP_USERNAME?"}),": ",(0,n.jsx)(d.code,{children:"string"}),"  }, { ",(0,n.jsx)(d.code,{children:"ACCESS_TOKEN_SECRET"}),": ",(0,n.jsx)(d.code,{children:"string"})," ; ",(0,n.jsx)(d.code,{children:"COLORIZE_LOGS?"}),": ",(0,n.jsx)(d.code,{children:"string"})," ; ",(0,n.jsx)(d.code,{children:"IS_SMTP?"}),": ",(0,n.jsx)(d.code,{children:"string"})," ; ",(0,n.jsx)(d.code,{children:"LAST_RESORT_SUPERADMIN_EMAIL?"}),": ",(0,n.jsx)(d.code,{children:"string"})," ; ",(0,n.jsx)(d.code,{children:"LOG_LEVEL"}),": ",(0,n.jsx)(d.code,{children:'"error"'})," | ",(0,n.jsx)(d.code,{children:'"trace"'})," | ",(0,n.jsx)(d.code,{children:'"debug"'})," | ",(0,n.jsx)(d.code,{children:'"info"'})," | ",(0,n.jsx)(d.code,{children:'"warn"'})," | ",(0,n.jsx)(d.code,{children:'"fatal"'})," ; ",(0,n.jsx)(d.code,{children:"MAIL_PASSWORD?"}),": ",(0,n.jsx)(d.code,{children:"string"})," ; ",(0,n.jsx)(d.code,{children:"MAIL_USERNAME?"}),": ",(0,n.jsx)(d.code,{children:"string"})," ; ",(0,n.jsx)(d.code,{children:"MONGO_DB_URL"}),": ",(0,n.jsx)(d.code,{children:"string"})," ; ",(0,n.jsx)(d.code,{children:"NODE_ENV"}),": ",(0,n.jsx)(d.code,{children:"string"})," ; ",(0,n.jsx)(d.code,{children:"RECAPTCHA_SECRET_KEY?"}),": ",(0,n.jsx)(d.code,{children:"string"})," ; ",(0,n.jsx)(d.code,{children:"REDIS_HOST"}),": ",(0,n.jsx)(d.code,{children:"string"})," ; ",(0,n.jsx)(d.code,{children:"REDIS_PASSWORD?"}),": ",(0,n.jsx)(d.code,{children:"string"})," ; ",(0,n.jsx)(d.code,{children:"REDIS_PORT"}),": ",(0,n.jsx)(d.code,{children:"string"})," ; ",(0,n.jsx)(d.code,{children:"REFRESH_TOKEN_SECRET"}),": ",(0,n.jsx)(d.code,{children:"string"})," ; ",(0,n.jsx)(d.code,{children:"SMTP_HOST?"}),": ",(0,n.jsx)(d.code,{children:"string"})," ; ",(0,n.jsx)(d.code,{children:"SMTP_PASSWORD?"}),": ",(0,n.jsx)(d.code,{children:"string"})," ; ",(0,n.jsx)(d.code,{children:"SMTP_PORT?"}),": ",(0,n.jsx)(d.code,{children:"string"})," ; ",(0,n.jsx)(d.code,{children:"SMTP_SSL_TLS?"}),": ",(0,n.jsx)(d.code,{children:"string"})," ; ",(0,n.jsx)(d.code,{children:"SMTP_USERNAME?"}),": ",(0,n.jsx)(d.code,{children:"string"}),"  }>"]}),"\n",(0,n.jsx)(d.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,n.jsx)(d.p,{children:(0,n.jsx)(d.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/4c7d3ea/src/env.ts#L2",children:"src/env.ts:2"})}),"\n",(0,n.jsx)(d.h2,{id:"functions-1",children:"Functions"}),"\n",(0,n.jsx)(d.h3,{id:"getenvissues",children:"getEnvIssues"}),"\n",(0,n.jsxs)(d.p,{children:["\u25b8 ",(0,n.jsx)(d.strong,{children:"getEnvIssues"}),"(): ",(0,n.jsx)(d.code,{children:"void"})," | ",(0,n.jsx)(d.code,{children:"ZodIssue"}),"[]"]}),"\n",(0,n.jsx)(d.h4,{id:"returns",children:"Returns"}),"\n",(0,n.jsxs)(d.p,{children:[(0,n.jsx)(d.code,{children:"void"})," | ",(0,n.jsx)(d.code,{children:"ZodIssue"}),"[]"]}),"\n",(0,n.jsx)(d.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,n.jsx)(d.p,{children:(0,n.jsx)(d.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/4c7d3ea/src/env.ts#L35",children:"src/env.ts:35"})})]})}function x(e={}){const{wrapper:d}={...(0,s.a)(),...e.components};return d?(0,n.jsx)(d,{...e,children:(0,n.jsx)(t,{...e})}):t(e)}},11151:(e,d,c)=>{c.d(d,{Z:()=>o,a:()=>r});var n=c(67294);const s={},i=n.createContext(s);function r(e){const d=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function o(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(i.Provider,{value:d},e.children)}}}]);