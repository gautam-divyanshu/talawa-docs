"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[86709],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=n.createContext({}),p=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(a),s=i,f=m["".concat(c,".").concat(s)]||m[s]||u[s]||r;return a?n.createElement(f,o(o({ref:t},d),{},{components:a})):n.createElement(f,o({ref:t},d))}));function f(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},69166:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));const r={},o="initialize method",l={unversionedId:"talawa-mobile-docs/view_model_lang_view_model/AppLanguage/initialize",id:"talawa-mobile-docs/view_model_lang_view_model/AppLanguage/initialize",title:"initialize method",description:"Future&lt;void> initialize",source:"@site/docs/talawa-mobile-docs/view_model_lang_view_model/AppLanguage/initialize.md",sourceDirName:"talawa-mobile-docs/view_model_lang_view_model/AppLanguage",slug:"/talawa-mobile-docs/view_model_lang_view_model/AppLanguage/initialize",permalink:"/docs/talawa-mobile-docs/view_model_lang_view_model/AppLanguage/initialize",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/view_model_lang_view_model/AppLanguage/initialize.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"fetchLocale method",permalink:"/docs/talawa-mobile-docs/view_model_lang_view_model/AppLanguage/fetchLocale"},next:{title:"isTest property",permalink:"/docs/talawa-mobile-docs/view_model_lang_view_model/AppLanguage/isTest"}},c={},p=[{value:"Implementation",id:"implementation",level:2}],d={toc:p},m="wrapper";function u(e){let{components:t,...a}=e;return(0,i.kt)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"initialize-method"},"initialize method"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://api.flutter.dev/flutter/dart-async/Future-class.html"},"Future"),"<","void> initialize\n()"),(0,i.kt)("h2",{id:"implementation"},"Implementation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"Future<void> initialize() async {\n  _appLocale = const Locale('en');\n  await fetchLocale();\n}\n")))}u.isMDXComponent=!0}}]);