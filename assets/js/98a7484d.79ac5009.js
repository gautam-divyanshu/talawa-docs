"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[41542],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),l=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},v=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),v=n,d=u["".concat(c,".").concat(v)]||u[v]||m[v]||i;return r?o.createElement(d,a(a({ref:t},p),{},{components:r})):o.createElement(d,a({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=v;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:n,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}v.displayName="MDXCreateElement"},62504:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=r(87462),n=(r(67294),r(3905));const i={},a="removeLike method",s={unversionedId:"talawa-mobile-docs/services_post_service/PostService/removeLike",id:"talawa-mobile-docs/services_post_service/PostService/removeLike",title:"removeLike method",description:"Future&lt;void> removeLike",source:"@site/docs/talawa-mobile-docs/services_post_service/PostService/removeLike.md",sourceDirName:"talawa-mobile-docs/services_post_service/PostService",slug:"/talawa-mobile-docs/services_post_service/PostService/removeLike",permalink:"/docs/talawa-mobile-docs/services_post_service/PostService/removeLike",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/services_post_service/PostService/removeLike.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"postStream property",permalink:"/docs/talawa-mobile-docs/services_post_service/PostService/postStream"},next:{title:"setOrgStreamSubscription method",permalink:"/docs/talawa-mobile-docs/services_post_service/PostService/setOrgStreamSubscription"}},c={},l=[{value:"Implementation",id:"implementation",level:2}],p={toc:l},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"removelike-method"},"removeLike method"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://api.flutter.dev/flutter/dart-async/Future-class.html"},"Future"),"<","void> removeLike\n(",(0,n.kt)("a",{parentName:"p",href:"https://api.flutter.dev/flutter/dart-core/String-class.html"},"String")," postID)"),(0,n.kt)("p",null,"This function is used to remove like from the Post."),(0,n.kt)("p",null,"params:"),(0,n.kt)("ul",null,(0,n.kt)("li",null,(0,n.kt)("code",null,"postId")," : id of the post where like need to be removed.")),(0,n.kt)("h2",{id:"implementation"},"Implementation"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart"},'Future<void> removeLike(String postID) async {\n  _removeLocal(postID);\n  final String mutation = PostQueries().removeLike();\n  final result = await _dbFunctions\n      .gqlAuthMutation(mutation, variables: {"postID": postID});\n  print(result);\n  return result;\n}\n')))}m.isMDXComponent=!0}}]);