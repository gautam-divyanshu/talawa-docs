"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[11088],{3905:(e,t,i)=>{i.d(t,{Zo:()=>m,kt:()=>f});var o=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function l(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function n(e,t){if(null==e)return{};var i,o,r=function(e,t){if(null==e)return{};var i,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)i=l[o],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)i=l[o],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var _=o.createContext({}),d=function(e){var t=o.useContext(_),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},m=function(e){var t=d(e.components);return o.createElement(_.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},s=o.forwardRef((function(e,t){var i=e.components,r=e.mdxType,l=e.originalType,_=e.parentName,m=n(e,["components","mdxType","originalType","parentName"]),c=d(i),s=r,f=c["".concat(_,".").concat(s)]||c[s]||p[s]||l;return i?o.createElement(f,a(a({ref:t},m),{},{components:i})):o.createElement(f,a({ref:t},m))}));function f(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=i.length,a=new Array(l);a[0]=s;var n={};for(var _ in t)hasOwnProperty.call(t,_)&&(n[_]=t[_]);n.originalType=e,n[c]="string"==typeof e?e:r,a[1]=n;for(var d=2;d<l;d++)a[d]=i[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,i)}s.displayName="MDXCreateElement"},40334:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>_,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>n,toc:()=>d});var o=i(87462),r=(i(67294),i(3905));const l={},a="initialize method",n={unversionedId:"talawa-mobile-docs/view_model_after_auth_view_models_profile_view_models_profile_page_view_model/ProfilePageViewModel/initialize",id:"talawa-mobile-docs/view_model_after_auth_view_models_profile_view_models_profile_page_view_model/ProfilePageViewModel/initialize",title:"initialize method",description:"void initialize",source:"@site/docs/talawa-mobile-docs/view_model_after_auth_view_models_profile_view_models_profile_page_view_model/ProfilePageViewModel/initialize.md",sourceDirName:"talawa-mobile-docs/view_model_after_auth_view_models_profile_view_models_profile_page_view_model/ProfilePageViewModel",slug:"/talawa-mobile-docs/view_model_after_auth_view_models_profile_view_models_profile_page_view_model/ProfilePageViewModel/initialize",permalink:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_profile_view_models_profile_page_view_model/ProfilePageViewModel/initialize",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/view_model_after_auth_view_models_profile_view_models_profile_page_view_model/ProfilePageViewModel/initialize.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"iconButton method",permalink:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_profile_view_models_profile_page_view_model/ProfilePageViewModel/iconButton"},next:{title:"invite method",permalink:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_profile_view_models_profile_page_view_model/ProfilePageViewModel/invite"}},_={},d=[{value:"Implementation",id:"implementation",level:2}],m={toc:d},c="wrapper";function p(e){let{components:t,...i}=e;return(0,r.kt)(c,(0,o.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"initialize-method"},"initialize method"),(0,r.kt)("p",null,"void initialize\n()"),(0,r.kt)("h2",{id:"implementation"},"Implementation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"void initialize() {\n  setState(ViewState.busy);\n  currentOrg = _userConfig.currentOrg;\n  currentUser = _userConfig.currentUser;\n  setState(ViewState.idle);\n}\n")))}p.isMDXComponent=!0}}]);