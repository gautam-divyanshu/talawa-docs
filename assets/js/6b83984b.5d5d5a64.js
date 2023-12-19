"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[3982],{17552:(e,s,c)=>{c.r(s),c.d(s,{Badge:()=>x,Bullet:()=>i,Details:()=>u,SpecifiedBy:()=>h,assets:()=>r,contentTitle:()=>l,default:()=>b,frontMatter:()=>d,metadata:()=>a,toc:()=>j});var t=c(85893),o=c(11151),n=c(67294);const d={id:"post",title:"Post",hide_table_of_contents:!1},l=void 0,a={id:"schema/objects/post",title:"Post",description:"No description",source:"@site/docs/schema/objects/post.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/post",permalink:"/docs/schema/objects/post",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/schema/objects/post.mdx",tags:[],version:"current",frontMatter:{id:"post",title:"Post",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"PostConnection",permalink:"/docs/schema/objects/post-connection"},next:{title:"Task",permalink:"/docs/schema/objects/task"}},r={},i=()=>{const e={span:"span",...(0,o.a)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const s={a:"a",...(0,o.a)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},x=e=>{const s={span:"span",...(0,o.a)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(s.span,{className:"badge badge--"+e.class,children:e.text})})},j=[{value:"Fields",id:"fields",level:3},{value:'<code>Post.<b>_id</b></code><Bullet></Bullet><code>ID</code> <Badge class="secondary"></Badge>',id:"post_idid-",level:4},{value:'<code>Post.<b>text</b></code><Bullet></Bullet><code>String!</code> <Badge class="secondary"></Badge> <Badge class="secondary"></Badge>',id:"posttextstring--",level:4},{value:'<code>Post.<b>title</b></code><Bullet></Bullet><code>String</code> <Badge class="secondary"></Badge>',id:"posttitlestring-",level:4},{value:'<code>Post.<b>createdAt</b></code><Bullet></Bullet><code>DateTime</code> <Badge class="secondary"></Badge>',id:"postcreatedatdatetime-",level:4},{value:'<code>Post.<b>imageUrl</b></code><Bullet></Bullet><code>URL</code> <Badge class="secondary"></Badge>',id:"postimageurlurl-",level:4},{value:'<code>Post.<b>videoUrl</b></code><Bullet></Bullet><code>URL</code> <Badge class="secondary"></Badge>',id:"postvideourlurl-",level:4},{value:'<code>Post.<b>creator</b></code><Bullet></Bullet><code>User!</code> <Badge class="secondary"></Badge> <Badge class="secondary"></Badge>',id:"postcreatoruser--",level:4},{value:'<code>Post.<b>organization</b></code><Bullet></Bullet><code>Organization!</code> <Badge class="secondary"></Badge> <Badge class="secondary"></Badge>',id:"postorganizationorganization--",level:4},{value:'<code>Post.<b>likedBy</b></code><Bullet></Bullet><code>[User]</code> <Badge class="secondary"></Badge> <Badge class="secondary"></Badge>',id:"postlikedbyuser--",level:4},{value:'<code>Post.<b>comments</b></code><Bullet></Bullet><code>[Comment]</code> <Badge class="secondary"></Badge> <Badge class="secondary"></Badge>',id:"postcommentscomment--",level:4},{value:'<code>Post.<b>likeCount</b></code><Bullet></Bullet><code>Int</code> <Badge class="secondary"></Badge>',id:"postlikecountint-",level:4},{value:'<code>Post.<b>commentCount</b></code><Bullet></Bullet><code>Int</code> <Badge class="secondary"></Badge>',id:"postcommentcountint-",level:4},{value:'<code>Post.<b>pinned</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="secondary"></Badge>',id:"postpinnedboolean-",level:4},{value:"Returned by",id:"returned-by",level:3},{value:"Member of",id:"member-of",level:3}],u=({dataOpen:e,dataClose:s,children:c,startOpen:d=!1})=>{const l={details:"details",summary:"summary",...(0,o.a)()},[a,r]=(0,n.useState)(d);return(0,t.jsxs)(l.details,{...a?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(l.summary,{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:a?e:s}),a&&c]})};function m(e){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"No description"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-graphql",children:"type Post {\n  _id: ID\n  text: String!\n  title: String\n  createdAt: DateTime\n  imageUrl: URL\n  videoUrl: URL\n  creator: User!\n  organization: Organization!\n  likedBy: [User]\n  comments: [Comment]\n  likeCount: Int\n  commentCount: Int\n  pinned: Boolean\n}\n"})}),"\n",(0,t.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(s.h4,{id:"post_idid-",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Post.",(0,t.jsx)("b",{children:"_id"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(s.a,{href:"../../../docs/schema/scalars/id",children:(0,t.jsx)(s.code,{children:"ID"})})," ",(0,t.jsx)(x,{class:"secondary",text:"scalar"})]}),"\n",(0,t.jsx)(s.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(s.h4,{id:"posttextstring--",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Post.",(0,t.jsx)("b",{children:"text"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(s.a,{href:"../../../docs/schema/scalars/string",children:(0,t.jsx)(s.code,{children:"String!"})})," ",(0,t.jsx)(x,{class:"secondary",text:"non-null"})," ",(0,t.jsx)(x,{class:"secondary",text:"scalar"})]}),"\n",(0,t.jsx)(s.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(s.h4,{id:"posttitlestring-",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Post.",(0,t.jsx)("b",{children:"title"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(s.a,{href:"../../../docs/schema/scalars/string",children:(0,t.jsx)(s.code,{children:"String"})})," ",(0,t.jsx)(x,{class:"secondary",text:"scalar"})]}),"\n",(0,t.jsx)(s.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(s.h4,{id:"postcreatedatdatetime-",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Post.",(0,t.jsx)("b",{children:"createdAt"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(s.a,{href:"../../../docs/schema/scalars/date-time",children:(0,t.jsx)(s.code,{children:"DateTime"})})," ",(0,t.jsx)(x,{class:"secondary",text:"scalar"})]}),"\n",(0,t.jsx)(s.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(s.h4,{id:"postimageurlurl-",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Post.",(0,t.jsx)("b",{children:"imageUrl"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(s.a,{href:"../../../docs/schema/scalars/url",children:(0,t.jsx)(s.code,{children:"URL"})})," ",(0,t.jsx)(x,{class:"secondary",text:"scalar"})]}),"\n",(0,t.jsx)(s.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(s.h4,{id:"postvideourlurl-",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Post.",(0,t.jsx)("b",{children:"videoUrl"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(s.a,{href:"../../../docs/schema/scalars/url",children:(0,t.jsx)(s.code,{children:"URL"})})," ",(0,t.jsx)(x,{class:"secondary",text:"scalar"})]}),"\n",(0,t.jsx)(s.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(s.h4,{id:"postcreatoruser--",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Post.",(0,t.jsx)("b",{children:"creator"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(s.a,{href:"../../../docs/schema/objects/user",children:(0,t.jsx)(s.code,{children:"User!"})})," ",(0,t.jsx)(x,{class:"secondary",text:"non-null"})," ",(0,t.jsx)(x,{class:"secondary",text:"object"})]}),"\n",(0,t.jsx)(s.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(s.h4,{id:"postorganizationorganization--",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Post.",(0,t.jsx)("b",{children:"organization"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(s.a,{href:"../../../docs/schema/objects/organization",children:(0,t.jsx)(s.code,{children:"Organization!"})})," ",(0,t.jsx)(x,{class:"secondary",text:"non-null"})," ",(0,t.jsx)(x,{class:"secondary",text:"object"})]}),"\n",(0,t.jsx)(s.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(s.h4,{id:"postlikedbyuser--",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Post.",(0,t.jsx)("b",{children:"likedBy"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(s.a,{href:"../../../docs/schema/objects/user",children:(0,t.jsx)(s.code,{children:"[User]"})})," ",(0,t.jsx)(x,{class:"secondary",text:"list"})," ",(0,t.jsx)(x,{class:"secondary",text:"object"})]}),"\n",(0,t.jsx)(s.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(s.h4,{id:"postcommentscomment--",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Post.",(0,t.jsx)("b",{children:"comments"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(s.a,{href:"../../../docs/schema/objects/comment",children:(0,t.jsx)(s.code,{children:"[Comment]"})})," ",(0,t.jsx)(x,{class:"secondary",text:"list"})," ",(0,t.jsx)(x,{class:"secondary",text:"object"})]}),"\n",(0,t.jsx)(s.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(s.h4,{id:"postlikecountint-",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Post.",(0,t.jsx)("b",{children:"likeCount"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(s.a,{href:"../../../docs/schema/scalars/int",children:(0,t.jsx)(s.code,{children:"Int"})})," ",(0,t.jsx)(x,{class:"secondary",text:"scalar"})]}),"\n",(0,t.jsx)(s.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(s.h4,{id:"postcommentcountint-",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Post.",(0,t.jsx)("b",{children:"commentCount"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(s.a,{href:"../../../docs/schema/scalars/int",children:(0,t.jsx)(s.code,{children:"Int"})})," ",(0,t.jsx)(x,{class:"secondary",text:"scalar"})]}),"\n",(0,t.jsx)(s.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(s.h4,{id:"postpinnedboolean-",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Post.",(0,t.jsx)("b",{children:"pinned"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(s.a,{href:"../../../docs/schema/scalars/boolean",children:(0,t.jsx)(s.code,{children:"Boolean"})})," ",(0,t.jsx)(x,{class:"secondary",text:"scalar"})]}),"\n",(0,t.jsx)(s.blockquote,{children:"\n"}),"\n",(0,t.jsx)(s.h3,{id:"returned-by",children:"Returned by"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"../../../docs/schema/mutations/create-post",children:(0,t.jsx)(s.code,{children:"createPost"})})," ",(0,t.jsx)(x,{class:"secondary",text:"mutation"}),(0,t.jsx)(i,{}),(0,t.jsx)(s.a,{href:"../../../docs/schema/mutations/like-post",children:(0,t.jsx)(s.code,{children:"likePost"})})," ",(0,t.jsx)(x,{class:"secondary",text:"mutation"}),(0,t.jsx)(i,{}),(0,t.jsx)(s.a,{href:"../../../docs/schema/queries/post",children:(0,t.jsx)(s.code,{children:"post"})})," ",(0,t.jsx)(x,{class:"secondary",text:"query"}),(0,t.jsx)(i,{}),(0,t.jsx)(s.a,{href:"../../../docs/schema/queries/posts-by-organization",children:(0,t.jsx)(s.code,{children:"postsByOrganization"})})," ",(0,t.jsx)(x,{class:"secondary",text:"query"}),(0,t.jsx)(i,{}),(0,t.jsx)(s.a,{href:"../../../docs/schema/mutations/remove-post",children:(0,t.jsx)(s.code,{children:"removePost"})})," ",(0,t.jsx)(x,{class:"secondary",text:"mutation"}),(0,t.jsx)(i,{}),(0,t.jsx)(s.a,{href:"../../../docs/schema/mutations/toggle-post-pin",children:(0,t.jsx)(s.code,{children:"togglePostPin"})})," ",(0,t.jsx)(x,{class:"secondary",text:"mutation"}),(0,t.jsx)(i,{}),(0,t.jsx)(s.a,{href:"../../../docs/schema/mutations/unlike-post",children:(0,t.jsx)(s.code,{children:"unlikePost"})})," ",(0,t.jsx)(x,{class:"secondary",text:"mutation"}),(0,t.jsx)(i,{}),(0,t.jsx)(s.a,{href:"../../../docs/schema/mutations/update-post",children:(0,t.jsx)(s.code,{children:"updatePost"})})," ",(0,t.jsx)(x,{class:"secondary",text:"mutation"})]}),"\n",(0,t.jsx)(s.h3,{id:"member-of",children:"Member of"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"../../../docs/schema/objects/comment",children:(0,t.jsx)(s.code,{children:"Comment"})})," ",(0,t.jsx)(x,{class:"secondary",text:"object"}),(0,t.jsx)(i,{}),(0,t.jsx)(s.a,{href:"../../../docs/schema/objects/organization",children:(0,t.jsx)(s.code,{children:"Organization"})})," ",(0,t.jsx)(x,{class:"secondary",text:"object"}),(0,t.jsx)(i,{}),(0,t.jsx)(s.a,{href:"../../../docs/schema/objects/post-connection",children:(0,t.jsx)(s.code,{children:"PostConnection"})})," ",(0,t.jsx)(x,{class:"secondary",text:"object"})]})]})}function b(e={}){const{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},11151:(e,s,c)=>{c.d(s,{Z:()=>l,a:()=>d});var t=c(67294);const o={},n=t.createContext(o);function d(e){const s=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),t.createElement(n.Provider,{value:s},e.children)}}}]);