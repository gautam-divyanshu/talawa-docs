"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[25619],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(r),f=a,m=c["".concat(l,".").concat(f)]||c[f]||u[f]||o;return r?n.createElement(m,i(i({ref:t},d),{},{components:r})):n.createElement(m,i({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},36155:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={},i="android method",s={unversionedId:"talawa-mobile-docs/firebase_options/DefaultFirebaseOptions/android",id:"talawa-mobile-docs/firebase_options/DefaultFirebaseOptions/android",title:"android method",description:"FirebaseOptions android",source:"@site/docs/talawa-mobile-docs/firebase_options/DefaultFirebaseOptions/android.md",sourceDirName:"talawa-mobile-docs/firebase_options/DefaultFirebaseOptions",slug:"/talawa-mobile-docs/firebase_options/DefaultFirebaseOptions/android",permalink:"/docs/talawa-mobile-docs/firebase_options/DefaultFirebaseOptions/android",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/firebase_options/DefaultFirebaseOptions/android.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"DefaultFirebaseOptions constructor",permalink:"/docs/talawa-mobile-docs/firebase_options/DefaultFirebaseOptions/"},next:{title:"currentPlatform method",permalink:"/docs/talawa-mobile-docs/firebase_options/DefaultFirebaseOptions/currentPlatform"}},l={},p=[{value:"Implementation",id:"implementation",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"android-method"},"android method"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://pub.dev/documentation/firebase_core_platform_interface/4.8.0/firebase_core_platform_interface/FirebaseOptions-class.html"},"FirebaseOptions")," android\n(",(0,a.kt)("a",{parentName:"p",href:"https://api.flutter.dev/flutter/dart-core/Map-class.html"},"Map"),"<",(0,a.kt)("a",{parentName:"p",href:"https://api.flutter.dev/flutter/dart-core/String-class.html"},"String"),", dynamic> androidFirebaseOptions)"),(0,a.kt)("p",null,"Scaffolds androidFirebaseOptions around FirebaseOptions."),(0,a.kt)("p",null,(0,a.kt)("strong",null,"params"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("code",null,"androidFirebaseOptions"),": The options which we want to scaffold")),(0,a.kt)("p",null,(0,a.kt)("strong",null,"returns"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("code",null,"FirebaseOptions"),": Scaffolded FirebaseOptions")),(0,a.kt)("h2",{id:"implementation"},"Implementation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"static FirebaseOptions android(Map<String, dynamic> androidFirebaseOptions) =>\n    FirebaseOptions(\n      apiKey: androidFirebaseOptions['apiKey'] as String,\n      appId: androidFirebaseOptions['appId'] as String,\n      messagingSenderId:\n          androidFirebaseOptions['messagingSenderId'] as String,\n      projectId: androidFirebaseOptions['projectId'] as String,\n      storageBucket: androidFirebaseOptions['storageBucket'] as String,\n    );\n")))}u.isMDXComponent=!0}}]);