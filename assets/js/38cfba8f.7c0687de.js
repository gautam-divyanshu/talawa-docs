"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[39135],{87967:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var s=r(85893),n=r(11151);const i={},o="getCurrentOrgUsersList method",a={id:"talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_create_event_view_model/CreateEventViewModel/getCurrentOrgUsersList",title:"getCurrentOrgUsersList method",description:"Future&lt;List&lt;User>> getCurrentOrgUsersList",source:"@site/docs/talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_create_event_view_model/CreateEventViewModel/getCurrentOrgUsersList.md",sourceDirName:"talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_create_event_view_model/CreateEventViewModel",slug:"/talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_create_event_view_model/CreateEventViewModel/getCurrentOrgUsersList",permalink:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_create_event_view_model/CreateEventViewModel/getCurrentOrgUsersList",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_create_event_view_model/CreateEventViewModel/getCurrentOrgUsersList.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"formKey property",permalink:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_create_event_view_model/CreateEventViewModel/formKey"},next:{title:"getImageFromGallery method",permalink:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_create_event_view_model/CreateEventViewModel/getImageFromGallery"}},l={},d=[{value:"Implementation",id:"implementation",level:2}];function _(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"getcurrentorguserslist-method",children:"getCurrentOrgUsersList method"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-async/Future-class.html",children:"Future"}),"<",(0,s.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/List-class.html",children:"List"}),"<",(0,s.jsx)(t.a,{href:"/docs/talawa-mobile-docs/models_user_user_info/User-class",children:"User"}),">> getCurrentOrgUsersList\n()"]}),"\n",(0,s.jsxs)("p",{children:["This function fetch all the users in the current organization and return ",(0,s.jsx)("code",{children:"List"}),"."]}),"\n",(0,s.jsxs)("p",{children:[(0,s.jsx)("strong",{children:"params"}),":\nNone"]}),"\n",(0,s.jsxs)("p",{children:[(0,s.jsx)("strong",{children:"returns"}),":"]}),"\n",(0,s.jsx)("ul",{children:(0,s.jsxs)("li",{children:[(0,s.jsx)("code",{children:"Future<List<User>>"}),": Current Organization Users List"]})}),"\n",(0,s.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-dart",children:"Future<List<User>> getCurrentOrgUsersList() async {\n  if (orgMembersList.isEmpty) {\n    orgMembersList = await organizationService\n        .getOrgMembersList(userConfig.currentOrg.id!);\n  }\n\n  // loop through list\n  orgMembersList.forEach((orgMember) {\n    _memberCheckedMap.putIfAbsent(orgMember.id!, () => false);\n    _memberCheckedMap.putIfAbsent(orgMember.id!, () => false);\n  });\n  // return list\n  return orgMembersList;\n}\n"})})]})}function c(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(_,{...e})}):_(e)}},11151:(e,t,r)=>{r.d(t,{Z:()=>a,a:()=>o});var s=r(67294);const n={},i=s.createContext(n);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);