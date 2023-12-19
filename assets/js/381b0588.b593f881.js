"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[62327],{75342:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>i,Details:()=>j,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>o,default:()=>v,frontMatter:()=>d,metadata:()=>r,toc:()=>h});var a=n(85893),s=n(11151),c=n(67294);const d={id:"update-event-project",title:"updateEventProject",hide_table_of_contents:!1},o=void 0,r={id:"schema/mutations/update-event-project",title:"updateEventProject",description:"No description",source:"@site/docs/schema/mutations/update-event-project.mdx",sourceDirName:"schema/mutations",slug:"/schema/mutations/update-event-project",permalink:"/docs/schema/mutations/update-event-project",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/schema/mutations/update-event-project.mdx",tags:[],version:"current",frontMatter:{id:"update-event-project",title:"updateEventProject",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"unregisterForEventByUser",permalink:"/docs/schema/mutations/unregister-for-event-by-user"},next:{title:"updateEvent",permalink:"/docs/schema/mutations/update-event"}},l={},i=()=>{const e={span:"span",...(0,s.a)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const t={a:"a",...(0,s.a)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const t={span:"span",...(0,s.a)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(t.span,{className:"badge badge--"+e.class,children:e.text})})},h=[{value:"Arguments",id:"arguments",level:3},{value:'<code>updateEventProject.<b>id</b></code><Bullet></Bullet><code>ID!</code> <Badge class="secondary"></Badge> <Badge class="secondary"></Badge>',id:"updateeventprojectidid--",level:4},{value:'<code>updateEventProject.<b>data</b></code><Bullet></Bullet><code>UpdateEventProjectInput!</code> <Badge class="secondary"></Badge> <Badge class="secondary"></Badge>',id:"updateeventprojectdataupdateeventprojectinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>EventProject</code> <Badge class="secondary"></Badge>',id:"eventproject-",level:4}],j=({dataOpen:e,dataClose:t,children:n,startOpen:d=!1})=>{const o={details:"details",summary:"summary",...(0,s.a)()},[r,l]=(0,c.useState)(d);return(0,a.jsxs)(o.details,{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(o.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:r?e:t}),r&&n]})};function m(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"No description"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-graphql",children:"updateEventProject(\n  id: ID!\n  data: UpdateEventProjectInput!\n): EventProject!\n"})}),"\n",(0,a.jsx)(t.h3,{id:"arguments",children:"Arguments"}),"\n",(0,a.jsxs)(t.h4,{id:"updateeventprojectidid--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["updateEventProject.",(0,a.jsx)("b",{children:"id"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(t.a,{href:"../../../docs/schema/scalars/id",children:(0,a.jsx)(t.code,{children:"ID!"})})," ",(0,a.jsx)(p,{class:"secondary",text:"non-null"})," ",(0,a.jsx)(p,{class:"secondary",text:"scalar"})]}),"\n",(0,a.jsx)(t.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(t.h4,{id:"updateeventprojectdataupdateeventprojectinput--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["updateEventProject.",(0,a.jsx)("b",{children:"data"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(t.a,{href:"../../../docs/schema/inputs/update-event-project-input",children:(0,a.jsx)(t.code,{children:"UpdateEventProjectInput!"})})," ",(0,a.jsx)(p,{class:"secondary",text:"non-null"})," ",(0,a.jsx)(p,{class:"secondary",text:"input"})]}),"\n",(0,a.jsx)(t.blockquote,{children:"\n"}),"\n",(0,a.jsx)(t.h3,{id:"type",children:"Type"}),"\n",(0,a.jsxs)(t.h4,{id:"eventproject-",children:[(0,a.jsx)(t.a,{href:"../../../docs/schema/objects/event-project",children:(0,a.jsx)(t.code,{children:"EventProject"})})," ",(0,a.jsx)(p,{class:"secondary",text:"object"})]}),"\n",(0,a.jsx)(t.blockquote,{children:"\n"})]})}function v(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>d});var a=n(67294);const s={},c=a.createContext(s);function d(e){const t=a.useContext(c);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),a.createElement(c.Provider,{value:t},e.children)}}}]);