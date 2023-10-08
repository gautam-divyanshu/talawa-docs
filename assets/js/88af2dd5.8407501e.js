"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[63381],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var r=a(67294);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,c=function(e,t){if(null==e)return{};var a,r,c={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var s=r.createContext({}),i=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,c=e.mdxType,n=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=i(a),f=c,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||n;return a?r.createElement(m,o(o({ref:t},u),{},{components:a})):r.createElement(m,o({ref:t},u))}));function m(e,t){var a=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var n=a.length,o=new Array(n);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:c,o[1]=l;for(var i=2;i<n;i++)o[i]=a[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},99416:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>i});var r=a(87462),c=(a(67294),a(3905));const n={},o="createState method",l={unversionedId:"talawa-mobile-docs/views_after_auth_screens_chat_select_contact/SelectContact/createState",id:"talawa-mobile-docs/views_after_auth_screens_chat_select_contact/SelectContact/createState",title:"createState method",description:"- @override",source:"@site/docs/talawa-mobile-docs/views_after_auth_screens_chat_select_contact/SelectContact/createState.md",sourceDirName:"talawa-mobile-docs/views_after_auth_screens_chat_select_contact/SelectContact",slug:"/talawa-mobile-docs/views_after_auth_screens_chat_select_contact/SelectContact/createState",permalink:"/docs/talawa-mobile-docs/views_after_auth_screens_chat_select_contact/SelectContact/createState",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/views_after_auth_screens_chat_select_contact/SelectContact/createState.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"SelectContact constructor",permalink:"/docs/talawa-mobile-docs/views_after_auth_screens_chat_select_contact/SelectContact/"},next:{title:"SelectContact class",permalink:"/docs/talawa-mobile-docs/views_after_auth_screens_chat_select_contact/SelectContact-class"}},s={},i=[{value:"Implementation",id:"implementation",level:2}],u={toc:i},d="wrapper";function p(e){let{components:t,...a}=e;return(0,c.kt)(d,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"createstate-method"},"createState method"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"@",(0,c.kt)("a",{parentName:"li",href:"https://api.flutter.dev/flutter/dart-core/override-constant.html"},"override"))),(0,c.kt)("p",null,"_SelectContactState createState\n()"),(0,c.kt)("p",null,(0,c.kt)("em",{parentName:"p"},(0,c.kt)("span",{class:"feature"},"override"))),(0,c.kt)("p",null,"Creates the mutable state for this widget at a given location in the tree."),(0,c.kt)("p",null,"Subclasses should override this method to return a newly created instance of their associated ",(0,c.kt)("a",{href:"https://api.flutter.dev/flutter/widgets/State-class.html"},"State")," subclass:"),(0,c.kt)("pre",{class:"language-dart"},(0,c.kt)("code",{class:"language-dart"},"@override State<SomeWidget> createState() => _SomeWidgetState();")),(0,c.kt)("p",null,"The framework can call this method multiple times over the lifetime of a ",(0,c.kt)("code",null,"StatefulWidget"),". For example, if the widget is inserted into the tree in multiple locations, the framework will create a separate ",(0,c.kt)("a",{href:"https://api.flutter.dev/flutter/widgets/State-class.html"},"State")," object for each location. Similarly, if the widget is removed from the tree and later inserted into the tree again, the framework will call ",(0,c.kt)("a",{href:"../../views_after_auth_screens_chat_select_contact/SelectContact/createState.md"},"createState"),"again to create a fresh ",(0,c.kt)("a",{href:"https://api.flutter.dev/flutter/widgets/State-class.html"},"State")," object, simplifying the lifecycle of",(0,c.kt)("a",{href:"https://api.flutter.dev/flutter/widgets/State-class.html"},"State")," objects."),(0,c.kt)("h2",{id:"implementation"},"Implementation"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-dart"},"@override\n_SelectContactState createState() => _SelectContactState();\n")))}p.isMDXComponent=!0}}]);