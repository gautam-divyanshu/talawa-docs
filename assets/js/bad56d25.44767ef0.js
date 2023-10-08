"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[95714],{3905:(t,e,o)=>{o.d(e,{Zo:()=>m,kt:()=>f});var n=o(67294);function r(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function s(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function a(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?s(Object(o),!0).forEach((function(e){r(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function l(t,e){if(null==t)return{};var o,n,r=function(t,e){if(null==t)return{};var o,n,r={},s=Object.keys(t);for(n=0;n<s.length;n++)o=s[n],e.indexOf(o)>=0||(r[o]=t[o]);return r}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(n=0;n<s.length;n++)o=s[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(r[o]=t[o])}return r}var i=n.createContext({}),c=function(t){var e=n.useContext(i),o=e;return t&&(o="function"==typeof t?t(e):a(a({},e),t)),o},m=function(t){var e=c(t.components);return n.createElement(i.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var o=t.components,r=t.mdxType,s=t.originalType,i=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),p=c(o),u=r,f=p["".concat(i,".").concat(u)]||p[u]||d[u]||s;return o?n.createElement(f,a(a({ref:e},m),{},{components:o})):n.createElement(f,a({ref:e},m))}));function f(t,e){var o=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var s=o.length,a=new Array(s);a[0]=u;var l={};for(var i in e)hasOwnProperty.call(e,i)&&(l[i]=e[i]);l.originalType=t,l[p]="string"==typeof t?t:r,a[1]=l;for(var c=2;c<s;c++)a[c]=o[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},51909:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=o(87462),r=(o(67294),o(3905));const s={},a="Post.fromJson constructor",l={unversionedId:"talawa-mobile-docs/models_post_post_model/Post/Post.fromJson",id:"talawa-mobile-docs/models_post_post_model/Post/Post.fromJson",title:"Post.fromJson constructor",description:"Post.fromJson(Map&lt;String, dynamic> json)",source:"@site/docs/talawa-mobile-docs/models_post_post_model/Post/Post.fromJson.md",sourceDirName:"talawa-mobile-docs/models_post_post_model/Post",slug:"/talawa-mobile-docs/models_post_post_model/Post/Post.fromJson",permalink:"/docs/talawa-mobile-docs/models_post_post_model/Post/Post.fromJson",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/models_post_post_model/Post/Post.fromJson.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"Post constructor",permalink:"/docs/talawa-mobile-docs/models_post_post_model/Post/"},next:{title:"comments property",permalink:"/docs/talawa-mobile-docs/models_post_post_model/Post/comments"}},i={},c=[{value:"Implementation",id:"implementation",level:2}],m={toc:c},p="wrapper";function d(t){let{components:e,...o}=t;return(0,r.kt)(p,(0,n.Z)({},m,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"postfromjson-constructor"},"Post.fromJson constructor"),(0,r.kt)("p",null,"Post.fromJson(",(0,r.kt)("a",{parentName:"p",href:"https://api.flutter.dev/flutter/dart-core/Map-class.html"},"Map"),"<",(0,r.kt)("a",{parentName:"p",href:"https://api.flutter.dev/flutter/dart-core/String-class.html"},"String"),", dynamic> json)"),(0,r.kt)("p",null,"Creating a new Post instance from a map structure."),(0,r.kt)("p",null,"params: None returns:"),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"PostObject"),": Dart Object for posts")),(0,r.kt)("h2",{id:"implementation"},"Implementation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"///\n/// params:\n/// None\n/// returns:\n/// * `PostObject`: Dart Object for posts\nPost.fromJson(Map<String, dynamic> json) {\n  sId = json['_id'] as String;\n  description = json['text'] as String?;\n  createdAt = DateTime.parse(json['createdAt'] as String);\n  imageUrl = json['imageUrl'] as String?;\n  videoUrl = json['videoUrl'] as String?;\n  creator = json['creator'] != null\n      ? User.fromJson(json['creator'] as Map<String, dynamic>, fromOrg: true)\n      : null;\n  organization = json['organization'] != null\n      ? OrgInfo.fromJson(json['organization'] as Map<String, dynamic>)\n      : null;\n  if (json['likedBy'] != null) {\n    likedBy = <LikedBy>[];\n    json['likedBy'].forEach((v) {\n      likedBy?.add(LikedBy.fromJson(v as Map<String, dynamic>));\n    });\n  }\n  if (json['comments'] != null) {\n    comments = <Comments>[];\n    json['comments'].forEach((v) {\n      comments?.add(Comments.fromJson(v as Map<String, dynamic>));\n    });\n  }\n}\n")))}d.isMDXComponent=!0}}]);