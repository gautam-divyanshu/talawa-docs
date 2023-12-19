"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[49347],{62760:(e,n,o)=>{o.r(n),o.d(n,{Badge:()=>g,Bullet:()=>l,Details:()=>x,SpecifiedBy:()=>h,assets:()=>r,contentTitle:()=>d,default:()=>p,frontMatter:()=>c,metadata:()=>a,toc:()=>u});var t=o(85893),i=o(11151),s=o(67294);const c={id:"get-donation-by-org-id-connection",title:"getDonationByOrgIdConnection",hide_table_of_contents:!1},d=void 0,a={id:"schema/queries/get-donation-by-org-id-connection",title:"getDonationByOrgIdConnection",description:"No description",source:"@site/docs/schema/queries/get-donation-by-org-id-connection.mdx",sourceDirName:"schema/queries",slug:"/schema/queries/get-donation-by-org-id-connection",permalink:"/docs/schema/queries/get-donation-by-org-id-connection",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/schema/queries/get-donation-by-org-id-connection.mdx",tags:[],version:"current",frontMatter:{id:"get-donation-by-org-id-connection",title:"getDonationByOrgIdConnection",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"getDonationById",permalink:"/docs/schema/queries/get-donation-by-id"},next:{title:"getDonationByOrgId",permalink:"/docs/schema/queries/get-donation-by-org-id"}},r={},l=()=>{const e={span:"span",...(0,i.a)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const n={a:"a",...(0,i.a)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},g=e=>{const n={span:"span",...(0,i.a)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(n.span,{className:"badge badge--"+e.class,children:e.text})})},u=[{value:"Arguments",id:"arguments",level:3},{value:'<code>getDonationByOrgIdConnection.<b>orgId</b></code><Bullet></Bullet><code>ID!</code> <Badge class="secondary"></Badge> <Badge class="secondary"></Badge>',id:"getdonationbyorgidconnectionorgidid--",level:4},{value:'<code>getDonationByOrgIdConnection.<b>where</b></code><Bullet></Bullet><code>DonationWhereInput</code> <Badge class="secondary"></Badge>',id:"getdonationbyorgidconnectionwheredonationwhereinput-",level:4},{value:'<code>getDonationByOrgIdConnection.<b>first</b></code><Bullet></Bullet><code>Int</code> <Badge class="secondary"></Badge>',id:"getdonationbyorgidconnectionfirstint-",level:4},{value:'<code>getDonationByOrgIdConnection.<b>skip</b></code><Bullet></Bullet><code>Int</code> <Badge class="secondary"></Badge>',id:"getdonationbyorgidconnectionskipint-",level:4},{value:"Type",id:"type",level:3},{value:'<code>Donation</code> <Badge class="secondary"></Badge>',id:"donation-",level:4}],x=({dataOpen:e,dataClose:n,children:o,startOpen:c=!1})=>{const d={details:"details",summary:"summary",...(0,i.a)()},[a,r]=(0,s.useState)(c);return(0,t.jsxs)(d.details,{...a?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(d.summary,{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:a?e:n}),a&&o]})};function y(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"No description"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-graphql",children:"getDonationByOrgIdConnection(\n  orgId: ID!\n  where: DonationWhereInput\n  first: Int\n  skip: Int\n): [Donation!]!\n"})}),"\n",(0,t.jsx)(n.h3,{id:"arguments",children:"Arguments"}),"\n",(0,t.jsxs)(n.h4,{id:"getdonationbyorgidconnectionorgidid--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["getDonationByOrgIdConnection.",(0,t.jsx)("b",{children:"orgId"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"../../../docs/schema/scalars/id",children:(0,t.jsx)(n.code,{children:"ID!"})})," ",(0,t.jsx)(g,{class:"secondary",text:"non-null"})," ",(0,t.jsx)(g,{class:"secondary",text:"scalar"})]}),"\n",(0,t.jsx)(n.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(n.h4,{id:"getdonationbyorgidconnectionwheredonationwhereinput-",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["getDonationByOrgIdConnection.",(0,t.jsx)("b",{children:"where"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"../../../docs/schema/inputs/donation-where-input",children:(0,t.jsx)(n.code,{children:"DonationWhereInput"})})," ",(0,t.jsx)(g,{class:"secondary",text:"input"})]}),"\n",(0,t.jsx)(n.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(n.h4,{id:"getdonationbyorgidconnectionfirstint-",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["getDonationByOrgIdConnection.",(0,t.jsx)("b",{children:"first"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"../../../docs/schema/scalars/int",children:(0,t.jsx)(n.code,{children:"Int"})})," ",(0,t.jsx)(g,{class:"secondary",text:"scalar"})]}),"\n",(0,t.jsx)(n.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(n.h4,{id:"getdonationbyorgidconnectionskipint-",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["getDonationByOrgIdConnection.",(0,t.jsx)("b",{children:"skip"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"../../../docs/schema/scalars/int",children:(0,t.jsx)(n.code,{children:"Int"})})," ",(0,t.jsx)(g,{class:"secondary",text:"scalar"})]}),"\n",(0,t.jsx)(n.blockquote,{children:"\n"}),"\n",(0,t.jsx)(n.h3,{id:"type",children:"Type"}),"\n",(0,t.jsxs)(n.h4,{id:"donation-",children:[(0,t.jsx)(n.a,{href:"../../../docs/schema/objects/donation",children:(0,t.jsx)(n.code,{children:"Donation"})})," ",(0,t.jsx)(g,{class:"secondary",text:"object"})]}),"\n",(0,t.jsx)(n.blockquote,{children:"\n"})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(y,{...e})}):y(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>d,a:()=>c});var t=o(67294);const i={},s=t.createContext(i);function c(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);