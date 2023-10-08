"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[18386],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>w});var n=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var d=n.createContext({}),s=function(e){var t=n.useContext(d),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},c=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(i),u=r,w=m["".concat(d,".").concat(u)]||m[u]||p[u]||o;return i?n.createElement(w,a(a({ref:t},c),{},{components:i})):n.createElement(w,a({ref:t},c))}));function w(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=i.length,a=new Array(o);a[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[m]="string"==typeof e?e:r,a[1]=l;for(var s=2;s<o;s++)a[s]=i[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"},12592:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=i(87462),r=(i(67294),i(3905));const o={},a="initialise method",l={unversionedId:"talawa-mobile-docs/view_model_pre_auth_view_models_waiting_view_model/WaitingViewModel/initialise",id:"talawa-mobile-docs/view_model_pre_auth_view_models_waiting_view_model/WaitingViewModel/initialise",title:"initialise method",description:"void initialise",source:"@site/docs/talawa-mobile-docs/view_model_pre_auth_view_models_waiting_view_model/WaitingViewModel/initialise.md",sourceDirName:"talawa-mobile-docs/view_model_pre_auth_view_models_waiting_view_model/WaitingViewModel",slug:"/talawa-mobile-docs/view_model_pre_auth_view_models_waiting_view_model/WaitingViewModel/initialise",permalink:"/docs/talawa-mobile-docs/view_model_pre_auth_view_models_waiting_view_model/WaitingViewModel/initialise",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/view_model_pre_auth_view_models_waiting_view_model/WaitingViewModel/initialise.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"greeting property",permalink:"/docs/talawa-mobile-docs/view_model_pre_auth_view_models_waiting_view_model/WaitingViewModel/greeting"},next:{title:"joinOrg method",permalink:"/docs/talawa-mobile-docs/view_model_pre_auth_view_models_waiting_view_model/WaitingViewModel/joinOrg"}},d={},s=[{value:"Implementation",id:"implementation",level:2}],c={toc:s},m="wrapper";function p(e){let{components:t,...i}=e;return(0,r.kt)(m,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"initialise-method"},"initialise method"),(0,r.kt)("p",null,"void initialise\n(",(0,r.kt)("a",{parentName:"p",href:"https://api.flutter.dev/flutter/widgets/BuildContext-class.html"},"BuildContext")," context)"),(0,r.kt)("h2",{id:"implementation"},"Implementation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"void initialise(BuildContext context) {\n  currentUser = userConfig.currentUser;\n  pendingRequestOrg = currentUser.membershipRequests!;\n  // greetings\n  greeting = [\n    {\n      'text': \"Please wait\",\n      'textStyle': Theme.of(context).textTheme.headlineSmall\n    },\n    {\n      'text': \" ${currentUser.firstName} \",\n      'textStyle':\n          Theme.of(context).textTheme.titleLarge!.copyWith(fontSize: 24)\n    },\n    {\n      'text': \"for organisation(s) to accept your invitation.\",\n      'textStyle': Theme.of(context).textTheme.headlineSmall\n    },\n  ];\n}\n")))}p.isMDXComponent=!0}}]);