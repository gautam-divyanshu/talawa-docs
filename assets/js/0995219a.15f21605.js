"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[27927],{3905:(e,t,o)=>{o.d(t,{Zo:()=>m,kt:()=>w});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},m=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=s(o),u=r,w=d["".concat(c,".").concat(u)]||d[u]||p[u]||a;return o?n.createElement(w,i(i({ref:t},m),{},{components:o})):n.createElement(w,i({ref:t},m))}));function w(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=o[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},2392:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=o(87462),r=(o(67294),o(3905));const a={},i="showHome method",l={unversionedId:"talawa-mobile-docs/view_model_main_screen_view_model/MainScreenViewModel/showHome",id:"talawa-mobile-docs/view_model_main_screen_view_model/MainScreenViewModel/showHome",title:"showHome method",description:"void showHome",source:"@site/docs/talawa-mobile-docs/view_model_main_screen_view_model/MainScreenViewModel/showHome.md",sourceDirName:"talawa-mobile-docs/view_model_main_screen_view_model/MainScreenViewModel",slug:"/talawa-mobile-docs/view_model_main_screen_view_model/MainScreenViewModel/showHome",permalink:"/docs/talawa-mobile-docs/view_model_main_screen_view_model/MainScreenViewModel/showHome",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/view_model_main_screen_view_model/MainScreenViewModel/showHome.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"showAppTour property",permalink:"/docs/talawa-mobile-docs/view_model_main_screen_view_model/MainScreenViewModel/showAppTour"},next:{title:"showTutorial method",permalink:"/docs/talawa-mobile-docs/view_model_main_screen_view_model/MainScreenViewModel/showTutorial"}},c={},s=[{value:"Implementation",id:"implementation",level:2}],m={toc:s},d="wrapper";function p(e){let{components:t,...o}=e;return(0,r.kt)(d,(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"showhome-method"},"showHome method"),(0,r.kt)("p",null,"void showHome\n(",(0,r.kt)("a",{parentName:"p",href:"https://pub.dev/documentation/tutorial_coach_mark/1.2.9/tutorial_coach_mark/TargetFocus-class.html"},"TargetFocus")," clickedTarget)"),(0,r.kt)("p",null,"This function shows the Home screen."),(0,r.kt)("p",null,(0,r.kt)("strong",null,"params"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"clickedTarget"),": object to identify clickedTarget.")),(0,r.kt)("p",null,(0,r.kt)("strong",null,"returns"),": None"),(0,r.kt)("h2",{id:"implementation"},"Implementation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},'void showHome(TargetFocus clickedTarget) {\n  switch (clickedTarget.identify) {\n    case "keySHMenuIcon":\n      scaffoldKey.currentState!.openDrawer();\n      break;\n    case "keyDrawerLeaveCurrentOrg":\n      navigationService.pop();\n  }\n}\n')))}p.isMDXComponent=!0}}]);