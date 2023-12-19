"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[5590],{26583:(e,s,c)=>{c.r(s),c.d(s,{Badge:()=>u,Bullet:()=>i,Details:()=>j,SpecifiedBy:()=>h,assets:()=>r,contentTitle:()=>o,default:()=>k,frontMatter:()=>d,metadata:()=>l,toc:()=>x});var t=c(85893),n=c(11151),a=c(67294);const d={id:"check-in-status",title:"CheckInStatus",hide_table_of_contents:!1},o=void 0,l={id:"schema/objects/check-in-status",title:"CheckInStatus",description:"No description",source:"@site/docs/schema/objects/check-in-status.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/check-in-status",permalink:"/docs/schema/objects/check-in-status",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/schema/objects/check-in-status.mdx",tags:[],version:"current",frontMatter:{id:"check-in-status",title:"CheckInStatus",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AuthData",permalink:"/docs/schema/objects/auth-data"},next:{title:"CheckIn",permalink:"/docs/schema/objects/check-in"}},r={},i=()=>{const e={span:"span",...(0,n.a)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const s={a:"a",...(0,n.a)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const s={span:"span",...(0,n.a)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(s.span,{className:"badge badge--"+e.class,children:e.text})})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>CheckInStatus.<b>_id</b></code><Bullet></Bullet><code>ID!</code> <Badge class="secondary"></Badge> <Badge class="secondary"></Badge>',id:"checkinstatus_idid--",level:4},{value:'<code>CheckInStatus.<b>user</b></code><Bullet></Bullet><code>User!</code> <Badge class="secondary"></Badge> <Badge class="secondary"></Badge>',id:"checkinstatususeruser--",level:4},{value:'<code>CheckInStatus.<b>checkIn</b></code><Bullet></Bullet><code>CheckIn</code> <Badge class="secondary"></Badge>',id:"checkinstatuscheckincheckin-",level:4},{value:"Member of",id:"member-of",level:3}],j=({dataOpen:e,dataClose:s,children:c,startOpen:d=!1})=>{const o={details:"details",summary:"summary",...(0,n.a)()},[l,r]=(0,a.useState)(d);return(0,t.jsxs)(o.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(o.summary,{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:l?e:s}),l&&c]})};function m(e){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"No description"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-graphql",children:"type CheckInStatus {\n  _id: ID!\n  user: User!\n  checkIn: CheckIn\n}\n"})}),"\n",(0,t.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(s.h4,{id:"checkinstatus_idid--",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["CheckInStatus.",(0,t.jsx)("b",{children:"_id"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(s.a,{href:"../../../docs/schema/scalars/id",children:(0,t.jsx)(s.code,{children:"ID!"})})," ",(0,t.jsx)(u,{class:"secondary",text:"non-null"})," ",(0,t.jsx)(u,{class:"secondary",text:"scalar"})]}),"\n",(0,t.jsx)(s.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(s.h4,{id:"checkinstatususeruser--",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["CheckInStatus.",(0,t.jsx)("b",{children:"user"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(s.a,{href:"../../../docs/schema/objects/user",children:(0,t.jsx)(s.code,{children:"User!"})})," ",(0,t.jsx)(u,{class:"secondary",text:"non-null"})," ",(0,t.jsx)(u,{class:"secondary",text:"object"})]}),"\n",(0,t.jsx)(s.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(s.h4,{id:"checkinstatuscheckincheckin-",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["CheckInStatus.",(0,t.jsx)("b",{children:"checkIn"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(s.a,{href:"../../../docs/schema/objects/check-in",children:(0,t.jsx)(s.code,{children:"CheckIn"})})," ",(0,t.jsx)(u,{class:"secondary",text:"object"})]}),"\n",(0,t.jsx)(s.blockquote,{children:"\n"}),"\n",(0,t.jsx)(s.h3,{id:"member-of",children:"Member of"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"../../../docs/schema/objects/event",children:(0,t.jsx)(s.code,{children:"Event"})})," ",(0,t.jsx)(u,{class:"secondary",text:"object"})]})]})}function k(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},11151:(e,s,c)=>{c.d(s,{Z:()=>o,a:()=>d});var t=c(67294);const n={},a=t.createContext(n);function d(e){const s=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),t.createElement(a.Provider,{value:s},e.children)}}}]);