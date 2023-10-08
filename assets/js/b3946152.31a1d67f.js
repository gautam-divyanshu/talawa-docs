"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[10893],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(r),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||s;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var l=2;l<s;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},63740:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const s={},a="getPosts method",i={unversionedId:"talawa-mobile-docs/services_post_service/PostService/getPosts",id:"talawa-mobile-docs/services_post_service/PostService/getPosts",title:"getPosts method",description:"Future&lt;void> getPosts",source:"@site/docs/talawa-mobile-docs/services_post_service/PostService/getPosts.md",sourceDirName:"talawa-mobile-docs/services_post_service/PostService",slug:"/talawa-mobile-docs/services_post_service/PostService/getPosts",permalink:"/docs/talawa-mobile-docs/services_post_service/PostService/getPosts",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/services_post_service/PostService/getPosts.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"addLike method",permalink:"/docs/talawa-mobile-docs/services_post_service/PostService/addLike"},next:{title:"postStream property",permalink:"/docs/talawa-mobile-docs/services_post_service/PostService/postStream"}},c={},l=[{value:"Implementation",id:"implementation",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getposts-method"},"getPosts method"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://api.flutter.dev/flutter/dart-async/Future-class.html"},"Future"),"<","void> getPosts\n()"),(0,o.kt)("p",null,"This function used to get all posts of an organization. The function reference the organization Id from ",(0,o.kt)("code",null,"_currentOrg"),"."),(0,o.kt)("h2",{id:"implementation"},"Implementation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"Future<void> getPosts() async {\n  // variables\n  final String currentOrgID = _currentOrg.id!;\n  final String query = PostQueries().getPostsById(currentOrgID);\n  final result = await _dbFunctions.gqlAuthQuery(query);\n\n  //Checking if the dbFunctions return the postJSON, if not return.\n  if (result.data!['postsByOrganization'] == null) return;\n\n  final List postsJson = result.data!['postsByOrganization'] as List;\n\n  postsJson.forEach((postJson) {\n    final Post post = Post.fromJson(postJson as Map<String, dynamic>);\n    if (!_renderedPostID.contains(post.sId)) {\n      _posts.insert(0, post);\n      _renderedPostID.add(post.sId);\n    }\n  });\n  _postStreamController.add(_posts);\n}\n")))}d.isMDXComponent=!0}}]);