"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[54273],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=l(r),d=a,h=p["".concat(c,".").concat(d)]||p[d]||m[d]||i;return r?n.createElement(h,s(s({ref:t},u),{},{components:r})):n.createElement(h,s({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},99693:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const i={},s="messageSentToDirectChatsubscription property",o={unversionedId:"talawa-mobile-docs/utils_chat_queries/ChatQueries/messageSentToDirectChatsubscription",id:"talawa-mobile-docs/utils_chat_queries/ChatQueries/messageSentToDirectChatsubscription",title:"messageSentToDirectChatsubscription property",description:"String messageSentToDirectChatsubscription",source:"@site/docs/talawa-mobile-docs/utils_chat_queries/ChatQueries/messageSentToDirectChatsubscription.md",sourceDirName:"talawa-mobile-docs/utils_chat_queries/ChatQueries",slug:"/talawa-mobile-docs/utils_chat_queries/ChatQueries/messageSentToDirectChatsubscription",permalink:"/docs/talawa-mobile-docs/utils_chat_queries/ChatQueries/messageSentToDirectChatsubscription",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/utils_chat_queries/ChatQueries/messageSentToDirectChatsubscription.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"fetchDirectChatsByUserId method",permalink:"/docs/talawa-mobile-docs/utils_chat_queries/ChatQueries/fetchDirectChatsByUserId"},next:{title:"sendMessageToDirectChat method",permalink:"/docs/talawa-mobile-docs/utils_chat_queries/ChatQueries/sendMessageToDirectChat"}},c={},l=[{value:"Implementation",id:"implementation",level:2}],u={toc:l},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"messagesenttodirectchatsubscription-property"},"messageSentToDirectChatsubscription property"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://api.flutter.dev/flutter/dart-core/String-class.html"},"String")," messageSentToDirectChatsubscription"),(0,a.kt)("h2",{id:"implementation"},"Implementation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"String get messageSentToDirectChatsubscription => '''\n    subscription{\n      messageSentToDirectChat{\n        _id\n        messageContent\n        sender {\n            _id\n            firstName\n            image\n          }\n          receiver {\n            _id\n            firstName\n            image\n          }\n      }\n    }\n''';\n")))}m.isMDXComponent=!0}}]);