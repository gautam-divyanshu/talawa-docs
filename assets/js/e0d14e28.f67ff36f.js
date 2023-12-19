"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[57394],{92926:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var n=r(85893),a=r(11151);const s={},i="currentPlatform method",o={id:"talawa-mobile-docs/firebase_options/DefaultFirebaseOptions/currentPlatform",title:"currentPlatform method",description:"FirebaseOptions currentPlatform",source:"@site/docs/talawa-mobile-docs/firebase_options/DefaultFirebaseOptions/currentPlatform.md",sourceDirName:"talawa-mobile-docs/firebase_options/DefaultFirebaseOptions",slug:"/talawa-mobile-docs/firebase_options/DefaultFirebaseOptions/currentPlatform",permalink:"/docs/talawa-mobile-docs/firebase_options/DefaultFirebaseOptions/currentPlatform",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/firebase_options/DefaultFirebaseOptions/currentPlatform.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"android method",permalink:"/docs/talawa-mobile-docs/firebase_options/DefaultFirebaseOptions/android"},next:{title:"ios method",permalink:"/docs/talawa-mobile-docs/firebase_options/DefaultFirebaseOptions/ios"}},l={},c=[{value:"Implementation",id:"implementation",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"currentplatform-method",children:"currentPlatform method"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://pub.dev/documentation/firebase_core_platform_interface/4.8.0/firebase_core_platform_interface/FirebaseOptions-class.html",children:"FirebaseOptions"})," currentPlatform\n(",(0,n.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/Map-class.html",children:"Map"}),"<",(0,n.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/String-class.html",children:"String"}),", dynamic> androidFirebaseOptions, ",(0,n.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/Map-class.html",children:"Map"}),"<",(0,n.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/String-class.html",children:"String"}),", dynamic> iosFirebaseOptions)"]}),"\n",(0,n.jsxs)("p",{children:["Builds and returns ",(0,n.jsx)("a",{href:"https://pub.dev/documentation/firebase_core_platform_interface/4.8.0/firebase_core_platform_interface/FirebaseOptions-class.html",children:"FirebaseOptions"})," based on the current platform."]}),"\n",(0,n.jsxs)("p",{children:["Switches on the current platform and calls ",(0,n.jsx)("a",{href:"../../firebase_options/DefaultFirebaseOptions/android.md",children:"android"})," or ",(0,n.jsx)("code",{children:"iOS"}),"\nmethods accordingly to build the ",(0,n.jsx)("a",{href:"https://pub.dev/documentation/firebase_core_platform_interface/4.8.0/firebase_core_platform_interface/FirebaseOptions-class.html",children:"FirebaseOptions"}),". Throws\n",(0,n.jsx)("a",{href:"https://api.flutter.dev/flutter/dart-core/UnsupportedError-class.html",children:"UnsupportedError"})," if the platform is other than these two."]}),"\n",(0,n.jsxs)("p",{children:[(0,n.jsx)("strong",{children:"params"}),":"]}),"\n",(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:[(0,n.jsx)("code",{children:"androidFirebaseOptions"}),": Firebase Options for Android"]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("code",{children:"iosFirebaseOptions"}),": Firebase Options for iOS"]})]}),"\n",(0,n.jsxs)("p",{children:[(0,n.jsx)("strong",{children:"returns"}),":"]}),"\n",(0,n.jsx)("ul",{children:(0,n.jsxs)("li",{children:[(0,n.jsx)("code",{children:"FirebaseOptions"}),": The ",(0,n.jsx)("a",{href:"https://pub.dev/documentation/firebase_core_platform_interface/4.8.0/firebase_core_platform_interface/FirebaseOptions-class.html",children:"FirebaseOptions"})," built according to the platform."]})}),"\n",(0,n.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-dart",children:"static FirebaseOptions currentPlatform(\n  Map<String, dynamic> androidFirebaseOptions,\n  Map<String, dynamic> iosFirebaseOptions,\n) {\n  if (kIsWeb) {\n    throw UnsupportedError(\n      'DefaultFirebaseOptions have not been configured for web - '\n      'you can reconfigure this by running the FlutterFire CLI again.',\n    );\n  }\n  switch (defaultTargetPlatform) {\n    case TargetPlatform.android:\n      return android(androidFirebaseOptions);\n    case TargetPlatform.iOS:\n      return ios(iosFirebaseOptions);\n    case TargetPlatform.macOS:\n      throw UnsupportedError(\n        'DefaultFirebaseOptions have not been configured for macos - '\n        'you can reconfigure this by running the FlutterFire CLI again.',\n      );\n    default:\n      throw UnsupportedError(\n        'DefaultFirebaseOptions are not supported for this platform.',\n      );\n  }\n}\n"})})]})}function p(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,t,r)=>{r.d(t,{Z:()=>o,a:()=>i});var n=r(67294);const a={},s=n.createContext(a);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);