"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[5798],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>s});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),d=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=d(e.components);return o.createElement(c.Provider,{value:t},e.children)},_="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),_=d(r),m=n,s=_["".concat(c,".").concat(m)]||_[m]||u[m]||a;return r?o.createElement(s,l(l({ref:t},p),{},{components:r})):o.createElement(s,l({ref:t},p))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[_]="string"==typeof e?e:n,l[1]=i;for(var d=2;d<a;d++)l[d]=r[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},41885:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var o=r(87462),n=(r(67294),r(3905));const a={},l="changeCurrency method",i={unversionedId:"talawa-mobile-docs/view_model_after_auth_view_models_profile_view_models_profile_page_view_model/ProfilePageViewModel/changeCurrency",id:"talawa-mobile-docs/view_model_after_auth_view_models_profile_view_models_profile_page_view_model/ProfilePageViewModel/changeCurrency",title:"changeCurrency method",description:"void changeCurrency",source:"@site/docs/talawa-mobile-docs/view_model_after_auth_view_models_profile_view_models_profile_page_view_model/ProfilePageViewModel/changeCurrency.md",sourceDirName:"talawa-mobile-docs/view_model_after_auth_view_models_profile_view_models_profile_page_view_model/ProfilePageViewModel",slug:"/talawa-mobile-docs/view_model_after_auth_view_models_profile_view_models_profile_page_view_model/ProfilePageViewModel/changeCurrency",permalink:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_profile_view_models_profile_page_view_model/ProfilePageViewModel/changeCurrency",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/view_model_after_auth_view_models_profile_view_models_profile_page_view_model/ProfilePageViewModel/changeCurrency.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"bottomSheetHeight property",permalink:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_profile_view_models_profile_page_view_model/ProfilePageViewModel/bottomSheetHeight"},next:{title:"currentOrg property",permalink:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_profile_view_models_profile_page_view_model/ProfilePageViewModel/currentOrg"}},c={},d=[{value:"Implementation",id:"implementation",level:2}],p={toc:d},_="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(_,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"changecurrency-method"},"changeCurrency method"),(0,n.kt)("p",null,"void changeCurrency\n(",(0,n.kt)("a",{parentName:"p",href:"https://api.flutter.dev/flutter/widgets/BuildContext-class.html"},"BuildContext")," context, ",(0,n.kt)("a",{parentName:"p",href:"https://api.flutter.dev/flutter/dart-core/Function-class.html"},"Function")," setter)"),(0,n.kt)("p",null,"This method changes the currency of the user for donation purpose."),(0,n.kt)("h2",{id:"implementation"},"Implementation"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart"},"void changeCurrency(BuildContext context, Function setter) {\n  showCurrencyPicker(\n    context: context,\n    currencyFilter: supportedCurrencies,\n    onSelect: (Currency currency) {\n      setter(() {\n        donationCurrency = currency.code;\n        donationCurrencySymbol = currency.symbol;\n      });\n    },\n  );\n}\n")))}u.isMDXComponent=!0}}]);