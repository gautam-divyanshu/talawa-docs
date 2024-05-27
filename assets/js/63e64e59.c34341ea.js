"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[87125],{52505:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>d,metadata:()=>o,toc:()=>l});var i=n(85893),t=n(11151);const d={},r="Module: setup/redisConfiguration",o={id:"talawa-api-docs/modules/setup_redisConfiguration",title:"setup_redisConfiguration",description:"talawa-api / Exports / setup/redisConfiguration",source:"@site/docs/talawa-api-docs/modules/setup_redisConfiguration.md",sourceDirName:"talawa-api-docs/modules",slug:"/talawa-api-docs/modules/setup_redisConfiguration",permalink:"/docs/talawa-api-docs/modules/setup_redisConfiguration",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-api-docs/modules/setup_redisConfiguration.md",tags:[],version:"current",frontMatter:{},sidebar:"API",previous:{title:"setup_reCaptcha",permalink:"/docs/talawa-api-docs/modules/setup_reCaptcha"},next:{title:"setup_setImageUploadSize",permalink:"/docs/talawa-api-docs/modules/setup_setImageUploadSize"}},c={},l=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Functions",id:"functions",level:3},{value:"Functions",id:"functions-1",level:2},{value:"askForRedisUrl",id:"askforredisurl",level:3},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"checkExistingRedis",id:"checkexistingredis",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"checkRedisConnection",id:"checkredisconnection",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-2",level:4}];function a(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"/docs/talawa-api-docs/",children:"talawa-api"})," / ",(0,i.jsx)(s.a,{href:"/docs/talawa-api-docs/modules",children:"Exports"})," / setup/redisConfiguration"]}),"\n",(0,i.jsx)(s.h1,{id:"module-setupredisconfiguration",children:"Module: setup/redisConfiguration"}),"\n",(0,i.jsx)(s.h2,{id:"table-of-contents",children:"Table of contents"}),"\n",(0,i.jsx)(s.h3,{id:"functions",children:"Functions"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/docs/talawa-api-docs/modules/setup_redisConfiguration#askforredisurl",children:"askForRedisUrl"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/docs/talawa-api-docs/modules/setup_redisConfiguration#checkexistingredis",children:"checkExistingRedis"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/docs/talawa-api-docs/modules/setup_redisConfiguration#checkredisconnection",children:"checkRedisConnection"})}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"functions-1",children:"Functions"}),"\n",(0,i.jsx)(s.h3,{id:"askforredisurl",children:"askForRedisUrl"}),"\n",(0,i.jsxs)(s.p,{children:["\u25b8 ",(0,i.jsx)(s.strong,{children:"askForRedisUrl"}),"(): ",(0,i.jsx)(s.code,{children:"Promise"}),"<{ ",(0,i.jsx)(s.code,{children:"host"}),": ",(0,i.jsx)(s.code,{children:"string"})," ; ",(0,i.jsx)(s.code,{children:"password"}),": ",(0,i.jsx)(s.code,{children:"string"})," ; ",(0,i.jsx)(s.code,{children:"port"}),": ",(0,i.jsx)(s.code,{children:"number"}),"  }>"]}),"\n",(0,i.jsxs)(s.p,{children:["The function ",(0,i.jsx)(s.code,{children:"askForRedisUrl"})," prompts the user to enter the Redis hostname, port, and password, and\nreturns an object with these values."]}),"\n",(0,i.jsx)(s.h4,{id:"returns",children:"Returns"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"Promise"}),"<{ ",(0,i.jsx)(s.code,{children:"host"}),": ",(0,i.jsx)(s.code,{children:"string"})," ; ",(0,i.jsx)(s.code,{children:"password"}),": ",(0,i.jsx)(s.code,{children:"string"})," ; ",(0,i.jsx)(s.code,{children:"port"}),": ",(0,i.jsx)(s.code,{children:"number"}),"  }>"]}),"\n",(0,i.jsxs)(s.p,{children:["The function ",(0,i.jsx)(s.code,{children:"askForRedisUrl"})," returns a promise that resolves to an object with the\nproperties ",(0,i.jsx)(s.code,{children:"host"}),", ",(0,i.jsx)(s.code,{children:"port"}),", and ",(0,i.jsx)(s.code,{children:"password"}),"."]}),"\n",(0,i.jsx)(s.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/9fa6a1c/src/setup/redisConfiguration.ts#L36",children:"src/setup/redisConfiguration.ts:36"})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"checkexistingredis",children:"checkExistingRedis"}),"\n",(0,i.jsxs)(s.p,{children:["\u25b8 ",(0,i.jsx)(s.strong,{children:"checkExistingRedis"}),"(): ",(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.code,{children:"string"})," | ",(0,i.jsx)(s.code,{children:"null"}),">"]}),"\n",(0,i.jsxs)(s.p,{children:["The function ",(0,i.jsx)(s.code,{children:"checkExistingRedis"})," checks if there is an existing Redis connection by iterating\nthrough a list of Redis URLs and testing the connection."]}),"\n",(0,i.jsx)(s.h4,{id:"returns-1",children:"Returns"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.code,{children:"string"})," | ",(0,i.jsx)(s.code,{children:"null"}),">"]}),"\n",(0,i.jsxs)(s.p,{children:["The function ",(0,i.jsx)(s.code,{children:"checkExistingRedis"})," returns a Promise that resolves to a string or null."]}),"\n",(0,i.jsx)(s.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/9fa6a1c/src/setup/redisConfiguration.ts#L71",children:"src/setup/redisConfiguration.ts:71"})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"checkredisconnection",children:"checkRedisConnection"}),"\n",(0,i.jsxs)(s.p,{children:["\u25b8 ",(0,i.jsx)(s.strong,{children:"checkRedisConnection"}),"(",(0,i.jsx)(s.code,{children:"url"}),"): ",(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.code,{children:"boolean"}),">"]}),"\n",(0,i.jsxs)(s.p,{children:["The function ",(0,i.jsx)(s.code,{children:"checkRedisConnection"})," checks if a connection to Redis can be established using the\nprovided URL."]}),"\n",(0,i.jsx)(s.h4,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Type"}),(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"url"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"string"})}),(0,i.jsxs)(s.td,{style:{textAlign:"left"},children:["The ",(0,i.jsx)(s.code,{children:"url"})," parameter is a string that represents the URL of the Redis server. It is used to establish a connection to the Redis server."]})]})})]}),"\n",(0,i.jsx)(s.h4,{id:"returns-2",children:"Returns"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.code,{children:"boolean"}),">"]}),"\n",(0,i.jsx)(s.p,{children:"a Promise that resolves to a boolean value."}),"\n",(0,i.jsx)(s.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/9fa6a1c/src/setup/redisConfiguration.ts#L12",children:"src/setup/redisConfiguration.ts:12"})})]})}function h(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>o,a:()=>r});var i=n(67294);const t={},d=i.createContext(t);function r(e){const s=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(d.Provider,{value:s},e.children)}}}]);