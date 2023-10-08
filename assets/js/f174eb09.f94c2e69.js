"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[85921],{3905:(e,o,t)=>{t.d(o,{Zo:()=>_,kt:()=>f});var r=t(67294);function a(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function l(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?l(Object(t),!0).forEach((function(o){a(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function n(e,o){if(null==e)return{};var t,r,a=function(e,o){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],o.indexOf(t)>=0||(a[t]=e[t]);return a}(e,o);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=r.createContext({}),s=function(e){var o=r.useContext(d),t=o;return e&&(t="function"==typeof e?e(o):i(i({},o),e)),t},_=function(e){var o=s(e.components);return r.createElement(d.Provider,{value:o},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var o=e.children;return r.createElement(r.Fragment,{},o)}},m=r.forwardRef((function(e,o){var t=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,_=n(e,["components","mdxType","originalType","parentName"]),c=s(t),m=a,f=c["".concat(d,".").concat(m)]||c[m]||p[m]||l;return t?r.createElement(f,i(i({ref:o},_),{},{components:t})):r.createElement(f,i({ref:o},_))}));function f(e,o){var t=arguments,a=o&&o.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=m;var n={};for(var d in o)hasOwnProperty.call(o,d)&&(n[d]=o[d]);n.originalType=e,n[c]="string"==typeof e?e:a,i[1]=n;for(var s=2;s<l;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},53193:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>n,toc:()=>s});var r=t(87462),a=(t(67294),t(3905));const l={},i="showSnackBar method",n={unversionedId:"talawa-mobile-docs/view_model_after_auth_view_models_profile_view_models_profile_page_view_model/ProfilePageViewModel/showSnackBar",id:"talawa-mobile-docs/view_model_after_auth_view_models_profile_view_models_profile_page_view_model/ProfilePageViewModel/showSnackBar",title:"showSnackBar method",description:"void showSnackBar",source:"@site/docs/talawa-mobile-docs/view_model_after_auth_view_models_profile_view_models_profile_page_view_model/ProfilePageViewModel/showSnackBar.md",sourceDirName:"talawa-mobile-docs/view_model_after_auth_view_models_profile_view_models_profile_page_view_model/ProfilePageViewModel",slug:"/talawa-mobile-docs/view_model_after_auth_view_models_profile_view_models_profile_page_view_model/ProfilePageViewModel/showSnackBar",permalink:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_profile_view_models_profile_page_view_model/ProfilePageViewModel/showSnackBar",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/view_model_after_auth_view_models_profile_view_models_profile_page_view_model/ProfilePageViewModel/showSnackBar.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"scaffoldKey property",permalink:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_profile_view_models_profile_page_view_model/ProfilePageViewModel/scaffoldKey"},next:{title:"updateSheetHeight method",permalink:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_profile_view_models_profile_page_view_model/ProfilePageViewModel/updateSheetHeight"}},d={},s=[{value:"Implementation",id:"implementation",level:2}],_={toc:s},c="wrapper";function p(e){let{components:o,...t}=e;return(0,a.kt)(c,(0,r.Z)({},_,t,{components:o,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"showsnackbar-method"},"showSnackBar method"),(0,a.kt)("p",null,"void showSnackBar\n(",(0,a.kt)("a",{parentName:"p",href:"https://api.flutter.dev/flutter/dart-core/String-class.html"},"String")," message)"),(0,a.kt)("h2",{id:"implementation"},"Implementation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"void showSnackBar(String message) {\n  _navigationService.showTalawaErrorDialog(message, MessageType.error);\n}\n")))}p.isMDXComponent=!0}}]);