"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[36165],{75752:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>d,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var n=o(85893),a=o(11151);const i={},d="tourAddPost method",r={id:"talawa-mobile-docs/view_model_main_screen_view_model/MainScreenViewModel/tourAddPost",title:"tourAddPost method",description:"void tourAddPost",source:"@site/docs/talawa-mobile-docs/view_model_main_screen_view_model/MainScreenViewModel/tourAddPost.md",sourceDirName:"talawa-mobile-docs/view_model_main_screen_view_model/MainScreenViewModel",slug:"/talawa-mobile-docs/view_model_main_screen_view_model/MainScreenViewModel/tourAddPost",permalink:"/docs/talawa-mobile-docs/view_model_main_screen_view_model/MainScreenViewModel/tourAddPost",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/view_model_main_screen_view_model/MainScreenViewModel/tourAddPost.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"targets property",permalink:"/docs/talawa-mobile-docs/view_model_main_screen_view_model/MainScreenViewModel/targets"},next:{title:"tourChat method",permalink:"/docs/talawa-mobile-docs/view_model_main_screen_view_model/MainScreenViewModel/tourChat"}},s={},l=[{value:"Implementation",id:"implementation",level:2}];function c(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"touraddpost-method",children:"tourAddPost method"}),"\n",(0,n.jsx)(t.p,{children:"void tourAddPost\n()"}),"\n",(0,n.jsx)("p",{children:"This function show the tutorial to add Post in the organization."}),"\n",(0,n.jsxs)("p",{children:[(0,n.jsx)("strong",{children:"params"}),":\nNone"]}),"\n",(0,n.jsxs)("p",{children:[(0,n.jsx)("strong",{children:"returns"}),":\nNone"]}),"\n",(0,n.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-dart",children:"void tourAddPost() {\n  targets.clear();\n  targets.add(\n    focusTarget(\n      keyBNPost,\n      'keyBNPost',\n      'This is the Create post tab here you can add post to the current selected organization',\n      isCircle: true,\n      align: ContentAlign.top,\n    ),\n  );\n  showTutorial(\n    onFinish: () {\n      onTabTapped(currentPageIndex + 1);\n      if (!tourComplete && !tourSkipped) {\n        tourChat();\n      }\n    },\n    onClickTarget: (TargetFocus a) {},\n  );\n}\n"})})]})}function m(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},11151:(e,t,o)=>{o.d(t,{Z:()=>r,a:()=>d});var n=o(67294);const a={},i=n.createContext(a);function d(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);