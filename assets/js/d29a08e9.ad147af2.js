"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[54486],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),v=o,m=p["".concat(l,".").concat(v)]||p[v]||d[v]||i;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=v;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},45789:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const i={},a="registerForEvent method",s={unversionedId:"talawa-mobile-docs/utils_event_queries/EventQueries/registerForEvent",id:"talawa-mobile-docs/utils_event_queries/EventQueries/registerForEvent",title:"registerForEvent method",description:"String registerForEvent",source:"@site/docs/talawa-mobile-docs/utils_event_queries/EventQueries/registerForEvent.md",sourceDirName:"talawa-mobile-docs/utils_event_queries/EventQueries",slug:"/talawa-mobile-docs/utils_event_queries/EventQueries/registerForEvent",permalink:"/docs/talawa-mobile-docs/utils_event_queries/EventQueries/registerForEvent",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/utils_event_queries/EventQueries/registerForEvent.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"fetchOrgEvents method",permalink:"/docs/talawa-mobile-docs/utils_event_queries/EventQueries/fetchOrgEvents"},next:{title:"registrantsByEvent method",permalink:"/docs/talawa-mobile-docs/utils_event_queries/EventQueries/registrantsByEvent"}},l={},c=[{value:"Implementation",id:"implementation",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"registerforevent-method"},"registerForEvent method"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://api.flutter.dev/flutter/dart-core/String-class.html"},"String")," registerForEvent\n()"),(0,o.kt)("h2",{id:"implementation"},"Implementation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},'String registerForEvent() {\n  return """\n   mutation registerForEvent(\\$eventId: ID!) {\n    registerForEvent(id: \\$eventId)\n      {\n      _id\n      title\n      description\n    }\n  }\n""";\n}\n')))}d.isMDXComponent=!0}}]);