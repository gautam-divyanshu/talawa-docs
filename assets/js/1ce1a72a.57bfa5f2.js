"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[70577],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>m});var o=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=o.createContext({}),c=function(e){var t=o.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},i=function(e){var t=c(e.components);return o.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,d=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=c(a),g=r,m=p["".concat(d,".").concat(g)]||p[g]||u[g]||n;return a?o.createElement(m,s(s({ref:t},i),{},{components:a})):o.createElement(m,s({ref:t},i))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,s=new Array(n);s[0]=g;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[p]="string"==typeof e?e:r,s[1]=l;for(var c=2;c<n;c++)s[c]=a[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,a)}g.displayName="MDXCreateElement"},65102:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>i,Details:()=>m,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>l,default:()=>k,frontMatter:()=>s,metadata:()=>d,toc:()=>g});var o=a(87462),r=a(67294),n=a(3905);const s={id:"forgot-password-data",title:"ForgotPasswordData",hide_table_of_contents:!1},l=void 0,d={unversionedId:"schema/inputs/forgot-password-data",id:"schema/inputs/forgot-password-data",title:"ForgotPasswordData",description:"No description",source:"@site/docs/schema/inputs/forgot-password-data.mdx",sourceDirName:"schema/inputs",slug:"/schema/inputs/forgot-password-data",permalink:"/docs/schema/inputs/forgot-password-data",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/schema/inputs/forgot-password-data.mdx",tags:[],version:"current",frontMatter:{id:"forgot-password-data",title:"ForgotPasswordData",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"FeedbackInput",permalink:"/docs/schema/inputs/feedback-input"},next:{title:"LanguageInput",permalink:"/docs/schema/inputs/language-input"}},c={},i=()=>(0,n.kt)(r.Fragment,null,(0,n.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,n.kt)(r.Fragment,null,"Specification",(0,n.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,n.kt)(r.Fragment,null,(0,n.kt)("span",{className:"badge badge--"+e.class},e.text)),g=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ForgotPasswordData.<b>userOtp</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-forgotpassworddatabuserotpbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ForgotPasswordData.<b>newPassword</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-forgotpassworddatabnewpasswordbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ForgotPasswordData.<b>otpToken</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-forgotpassworddatabotptokenbcodestring--",level:4},{value:"Member of",id:"member-of",level:3}],m=e=>{let{dataOpen:t,dataClose:a,children:s,startOpen:l=!1}=e;const[d,c]=(0,r.useState)(l);return(0,n.kt)("details",(0,o.Z)({},d?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,n.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},d?t:a),d&&s)},f={Bullet:i,SpecifiedBy:p,Badge:u,toc:g,Details:m},y="wrapper";function k(e){let{components:t,...a}=e;return(0,n.kt)(y,(0,o.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"No description"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"input ForgotPasswordData {\n  userOtp: String!\n  newPassword: String!\n  otpToken: String!\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"code-style-fontweight-normal-forgotpassworddatabuserotpbcodestring--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"ForgotPasswordData.",(0,n.kt)("b",null,"userOtp"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"../../../docs/schema/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,n.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-forgotpassworddatabnewpasswordbcodestring--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"ForgotPasswordData.",(0,n.kt)("b",null,"newPassword"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"../../../docs/schema/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,n.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-forgotpassworddatabotptokenbcodestring--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"ForgotPasswordData.",(0,n.kt)("b",null,"otpToken"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"../../../docs/schema/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,n.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h3",{id:"member-of"},"Member of"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"../../../docs/schema/mutations/forgot-password"},(0,n.kt)("inlineCode",{parentName:"a"},"forgotPassword"))," ",(0,n.kt)(u,{class:"secondary",text:"mutation",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);