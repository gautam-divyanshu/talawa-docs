"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[34456],{97279:(e,r,s)=>{s.r(r),s.d(r,{Badge:()=>h,Bullet:()=>d,Details:()=>x,SpecifiedBy:()=>m,assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var n=s(85893),a=s(11151),t=s(67294);const c={id:"maximum-length-error",title:"MaximumLengthError",hide_table_of_contents:!1},o=void 0,l={id:"schema/objects/maximum-length-error",title:"MaximumLengthError",description:"No description",source:"@site/docs/schema/objects/maximum-length-error.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/maximum-length-error",permalink:"/docs/schema/objects/maximum-length-error",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/schema/objects/maximum-length-error.mdx",tags:[],version:"current",frontMatter:{id:"maximum-length-error",title:"MaximumLengthError",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"Language",permalink:"/docs/schema/objects/language"},next:{title:"MaximumValueError",permalink:"/docs/schema/objects/maximum-value-error"}},i={},d=()=>{const e={span:"span",...(0,a.a)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},m=e=>{const r={a:"a",...(0,a.a)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(r.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const r={span:"span",...(0,a.a)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(r.span,{className:"badge badge--"+e.class,children:e.text})})},u=[{value:"Fields",id:"fields",level:3},{value:'<code>MaximumLengthError.<b>message</b></code><Bullet></Bullet><code>String!</code> <Badge class="secondary"></Badge> <Badge class="secondary"></Badge>',id:"maximumlengtherrormessagestring--",level:4},{value:'<code>MaximumLengthError.<b>path</b></code><Bullet></Bullet><code>[String!]!</code> <Badge class="secondary"></Badge> <Badge class="secondary"></Badge>',id:"maximumlengtherrorpathstring--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>FieldError</code> <Badge class="secondary"></Badge>',id:"fielderror-",level:4}],x=({dataOpen:e,dataClose:r,children:s,startOpen:c=!1})=>{const o={details:"details",summary:"summary",...(0,a.a)()},[l,i]=(0,t.useState)(c);return(0,n.jsxs)(o.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(o.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:l?e:r}),l&&s]})};function g(e){const r={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"No description"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-graphql",children:"type MaximumLengthError implements FieldError {\n  message: String!\n  path: [String!]!\n}\n"})}),"\n",(0,n.jsx)(r.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(r.h4,{id:"maximumlengtherrormessagestring--",children:[(0,n.jsx)(r.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["MaximumLengthError.",(0,n.jsx)("b",{children:"message"})]})}),(0,n.jsx)(d,{}),(0,n.jsx)(r.a,{href:"../../../docs/schema/scalars/string",children:(0,n.jsx)(r.code,{children:"String!"})})," ",(0,n.jsx)(h,{class:"secondary",text:"non-null"})," ",(0,n.jsx)(h,{class:"secondary",text:"scalar"})]}),"\n",(0,n.jsx)(r.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(r.h4,{id:"maximumlengtherrorpathstring--",children:[(0,n.jsx)(r.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["MaximumLengthError.",(0,n.jsx)("b",{children:"path"})]})}),(0,n.jsx)(d,{}),(0,n.jsx)(r.a,{href:"../../../docs/schema/scalars/string",children:(0,n.jsx)(r.code,{children:"[String!]!"})})," ",(0,n.jsx)(h,{class:"secondary",text:"non-null"})," ",(0,n.jsx)(h,{class:"secondary",text:"scalar"})]}),"\n",(0,n.jsx)(r.blockquote,{children:"\n"}),"\n",(0,n.jsx)(r.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,n.jsxs)(r.h4,{id:"fielderror-",children:[(0,n.jsx)(r.a,{href:"../../../docs/schema/interfaces/field-error",children:(0,n.jsx)(r.code,{children:"FieldError"})})," ",(0,n.jsx)(h,{class:"secondary",text:"interface"})]}),"\n",(0,n.jsx)(r.blockquote,{children:"\n"})]})}function p(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(g,{...e})}):g(e)}},11151:(e,r,s)=>{s.d(r,{Z:()=>o,a:()=>c});var n=s(67294);const a={},t=n.createContext(a);function c(e){const r=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),n.createElement(t.Provider,{value:r},e.children)}}}]);