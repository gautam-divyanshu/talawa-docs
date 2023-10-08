"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[31368],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=o.createContext({}),l=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return o.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},v=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(r),v=n,d=m["".concat(i,".").concat(v)]||m[v]||u[v]||a;return r?o.createElement(d,c(c({ref:t},p),{},{components:r})):o.createElement(d,c({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=v;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[m]="string"==typeof e?e:n,c[1]=s;for(var l=2;l<a;l++)c[l]=r[l];return o.createElement.apply(null,c)}return o.createElement.apply(null,r)}v.displayName="MDXCreateElement"},28548:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=r(87462),n=(r(67294),r(3905));const a={},c="PostService constructor",s={unversionedId:"talawa-mobile-docs/services_post_service/PostService/PostService",id:"talawa-mobile-docs/services_post_service/PostService/PostService",title:"PostService constructor",description:"PostService()",source:"@site/docs/talawa-mobile-docs/services_post_service/PostService/PostService.md",sourceDirName:"talawa-mobile-docs/services_post_service/PostService",slug:"/talawa-mobile-docs/services_post_service/PostService/",permalink:"/docs/talawa-mobile-docs/services_post_service/PostService/",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/services_post_service/PostService/PostService.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"org_service library",permalink:"/docs/talawa-mobile-docs/services_org_service/services_org_service-library"},next:{title:"addCommentLocally method",permalink:"/docs/talawa-mobile-docs/services_post_service/PostService/addCommentLocally"}},i={},l=[{value:"Implementation",id:"implementation",level:2}],p={toc:l},m="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"postservice-constructor"},"PostService constructor"),(0,n.kt)("p",null,"PostService()"),(0,n.kt)("h2",{id:"implementation"},"Implementation"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart"},"PostService() {\n  _postStream = _postStreamController.stream.asBroadcastStream();\n  _updatedPostStream =\n      _updatedPostStreamController.stream.asBroadcastStream();\n  _currentOrg = _userConfig.currentOrg;\n  setOrgStreamSubscription();\n  getPosts();\n}\n")))}u.isMDXComponent=!0}}]);