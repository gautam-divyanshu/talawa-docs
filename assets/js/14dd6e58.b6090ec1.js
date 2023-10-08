"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[81566],{3905:(e,r,a)=>{a.d(r,{Zo:()=>p,kt:()=>g});var t=a(67294);function o(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function n(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?n(Object(a),!0).forEach((function(r){o(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function s(e,r){if(null==e)return{};var a,t,o=function(e,r){if(null==e)return{};var a,t,o={},n=Object.keys(e);for(t=0;t<n.length;t++)a=n[t],r.indexOf(a)>=0||(o[a]=e[a]);return o}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)a=n[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=t.createContext({}),c=function(e){var r=t.useContext(l),a=r;return e&&(a="function"==typeof e?e(r):i(i({},r),e)),a},p=function(e){var r=c(e.components);return t.createElement(l.Provider,{value:r},e.children)},v="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var a=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),v=c(a),d=o,g=v["".concat(l,".").concat(d)]||v[d]||m[d]||n;return a?t.createElement(g,i(i({ref:r},p),{},{components:a})):t.createElement(g,i({ref:r},p))}));function g(e,r){var a=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=d;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[v]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<n;c++)i[c]=a[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},84072:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var t=a(87462),o=(a(67294),a(3905));const n={},i="showTalawaErrorDialog method",s={unversionedId:"talawa-mobile-docs/services_navigation_service/NavigationService/showTalawaErrorDialog",id:"talawa-mobile-docs/services_navigation_service/NavigationService/showTalawaErrorDialog",title:"showTalawaErrorDialog method",description:"void showTalawaErrorDialog",source:"@site/docs/talawa-mobile-docs/services_navigation_service/NavigationService/showTalawaErrorDialog.md",sourceDirName:"talawa-mobile-docs/services_navigation_service/NavigationService",slug:"/talawa-mobile-docs/services_navigation_service/NavigationService/showTalawaErrorDialog",permalink:"/docs/talawa-mobile-docs/services_navigation_service/NavigationService/showTalawaErrorDialog",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/services_navigation_service/NavigationService/showTalawaErrorDialog.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"showSnackBar method",permalink:"/docs/talawa-mobile-docs/services_navigation_service/NavigationService/showSnackBar"},next:{title:"showTalawaErrorSnackBar method",permalink:"/docs/talawa-mobile-docs/services_navigation_service/NavigationService/showTalawaErrorSnackBar"}},l={},c=[{value:"Implementation",id:"implementation",level:2}],p={toc:c},v="wrapper";function m(e){let{components:r,...a}=e;return(0,o.kt)(v,(0,t.Z)({},p,a,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"showtalawaerrordialog-method"},"showTalawaErrorDialog method"),(0,o.kt)("p",null,"void showTalawaErrorDialog\n(",(0,o.kt)("a",{parentName:"p",href:"https://api.flutter.dev/flutter/dart-core/String-class.html"},"String")," errorMessage, ",(0,o.kt)("a",{parentName:"p",href:"/docs/talawa-mobile-docs/enums_enums/MessageType"},"MessageType")," messageType)"),(0,o.kt)("h2",{id:"implementation"},"Implementation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"void showTalawaErrorDialog(String errorMessage, MessageType messageType) {\n  showDialog(\n    context: navigatorKey.currentContext!,\n    barrierColor: Colors.transparent,\n    barrierDismissible: false,\n    builder: (BuildContext context) {\n      return TalawaErrorDialog(\n        errorMessage,\n        messageType: messageType,\n      );\n    },\n  );\n}\n")))}m.isMDXComponent=!0}}]);