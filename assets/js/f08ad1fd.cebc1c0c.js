"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[50866],{3677:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>n,metadata:()=>i,toc:()=>r});var s=o(85893),a=o(11151);const n={},c="addCommentLocally method",i={id:"talawa-mobile-docs/services_post_service/PostService/addCommentLocally",title:"addCommentLocally method",description:"void addCommentLocally",source:"@site/docs/talawa-mobile-docs/services_post_service/PostService/addCommentLocally.md",sourceDirName:"talawa-mobile-docs/services_post_service/PostService",slug:"/talawa-mobile-docs/services_post_service/PostService/addCommentLocally",permalink:"/docs/talawa-mobile-docs/services_post_service/PostService/addCommentLocally",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/services_post_service/PostService/addCommentLocally.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"PostService constructor",permalink:"/docs/talawa-mobile-docs/services_post_service/PostService/"},next:{title:"addLike method",permalink:"/docs/talawa-mobile-docs/services_post_service/PostService/addLike"}},d={},r=[{value:"Implementation",id:"implementation",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"addcommentlocally-method",children:"addCommentLocally method"}),"\n",(0,s.jsxs)(t.p,{children:["void addCommentLocally\n(",(0,s.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," postID)"]}),"\n",(0,s.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-dart",children:"void addCommentLocally(String postID) {\n  for (int i = 0; i < _posts.length; i++) {\n    if (_posts[i].sId == postID) {\n      _posts[i].comments!.add(Comments(sId: postID));\n      _updatedPostStreamController.add(_posts[i]);\n    }\n  }\n}\n"})})]})}function m(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},11151:(e,t,o)=>{o.d(t,{Z:()=>i,a:()=>c});var s=o(67294);const a={},n=s.createContext(a);function c(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);