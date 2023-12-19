"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[76630],{89115:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>t,metadata:()=>r,toc:()=>d});var i=s(85893),a=s(11151);const t={},o="setUpFirebaseKeys function",r={id:"talawa-mobile-docs/main/setUpFirebaseKeys",title:"setUpFirebaseKeys function",description:"Future&lt;void> setUpFirebaseKeys",source:"@site/docs/talawa-mobile-docs/main/setUpFirebaseKeys.md",sourceDirName:"talawa-mobile-docs/main",slug:"/talawa-mobile-docs/main/setUpFirebaseKeys",permalink:"/docs/talawa-mobile-docs/main/setUpFirebaseKeys",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/main/setUpFirebaseKeys.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"setUpFirebase function",permalink:"/docs/talawa-mobile-docs/main/setUpFirebase"},next:{title:"setUpFirebaseMessaging function",permalink:"/docs/talawa-mobile-docs/main/setUpFirebaseMessaging"}},l={},d=[{value:"Implementation",id:"implementation",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"setupfirebasekeys-function",children:"setUpFirebaseKeys function"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://api.flutter.dev/flutter/dart-async/Future-class.html",children:"Future"}),"<void> setUpFirebaseKeys\n()"]}),"\n",(0,i.jsx)("p",{children:"Initializes the firebase keys in the app according to the userplatform (android/iOS)."}),"\n",(0,i.jsxs)("p",{children:[(0,i.jsx)("strong",{children:"params"}),":\nNone"]}),"\n",(0,i.jsxs)("p",{children:[(0,i.jsx)("strong",{children:"returns"}),":"]}),"\n",(0,i.jsx)("ul",{children:(0,i.jsxs)("li",{children:[(0,i.jsx)("code",{children:"Future<void>"}),": promise that will be fulfilled Firebase keys are setted up."]})}),"\n",(0,i.jsx)(n.h2,{id:"implementation",children:"Implementation"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"Future<void> setUpFirebaseKeys() async {\n  final androidFirebaseOptionsBox =\n      await Hive.openBox('androidFirebaseOptions');\n  final androidFirebaseOptionsMap = androidFirebaseOptionsBox\n      .get('androidFirebaseOptions') as Map<dynamic, dynamic>?;\n\n  final iosFirebaseOptionsBox = await Hive.openBox('iosFirebaseOptions');\n  final iosFirebaseOptionsMap =\n      iosFirebaseOptionsBox.get('iosFirebaseOptions') as Map<dynamic, dynamic>?;\n  if (androidFirebaseOptionsMap != null) {\n    androidFirebaseOptions = androidFirebaseOptionsMap.map((key, value) {\n      return MapEntry(key.toString(), value);\n    });\n  }\n  if (iosFirebaseOptionsMap != null) {\n    iosFirebaseOptions = iosFirebaseOptionsMap.map((key, value) {\n      return MapEntry(key.toString(), value);\n    });\n  }\n}\n"})})]})}function c(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>o});var i=s(67294);const a={},t=i.createContext(a);function o(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);