"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[47205],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(a),m=n,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return a?r.createElement(f,o(o({ref:t},p),{},{components:a})):r.createElement(f,o({ref:t},p))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},64693:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const i={},o="createState method",l={unversionedId:"talawa-mobile-docs/views_pre_auth_screens_select_organization/SelectOrganization/createState",id:"talawa-mobile-docs/views_pre_auth_screens_select_organization/SelectOrganization/createState",title:"createState method",description:"- @override",source:"@site/docs/talawa-mobile-docs/views_pre_auth_screens_select_organization/SelectOrganization/createState.md",sourceDirName:"talawa-mobile-docs/views_pre_auth_screens_select_organization/SelectOrganization",slug:"/talawa-mobile-docs/views_pre_auth_screens_select_organization/SelectOrganization/createState",permalink:"/docs/talawa-mobile-docs/views_pre_auth_screens_select_organization/SelectOrganization/createState",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/views_pre_auth_screens_select_organization/SelectOrganization/createState.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"SelectOrganization constructor",permalink:"/docs/talawa-mobile-docs/views_pre_auth_screens_select_organization/SelectOrganization/"},next:{title:"selectedOrgId property",permalink:"/docs/talawa-mobile-docs/views_pre_auth_screens_select_organization/SelectOrganization/selectedOrgId"}},c={},s=[{value:"Implementation",id:"implementation",level:2}],p={toc:s},d="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"createstate-method"},"createState method"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"@",(0,n.kt)("a",{parentName:"li",href:"https://api.flutter.dev/flutter/dart-core/override-constant.html"},"override"))),(0,n.kt)("p",null,"_SelectOrganizationState createState\n()"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},(0,n.kt)("span",{class:"feature"},"override"))),(0,n.kt)("p",null,"Creates the mutable state for this widget at a given location in the tree."),(0,n.kt)("p",null,"Subclasses should override this method to return a newly created instance of their associated ",(0,n.kt)("a",{href:"https://api.flutter.dev/flutter/widgets/State-class.html"},"State")," subclass:"),(0,n.kt)("pre",{class:"language-dart"},(0,n.kt)("code",{class:"language-dart"},"@override State<SomeWidget> createState() => _SomeWidgetState();")),(0,n.kt)("p",null,"The framework can call this method multiple times over the lifetime of a ",(0,n.kt)("code",null,"StatefulWidget"),". For example, if the widget is inserted into the tree in multiple locations, the framework will create a separate ",(0,n.kt)("a",{href:"https://api.flutter.dev/flutter/widgets/State-class.html"},"State")," object for each location. Similarly, if the widget is removed from the tree and later inserted into the tree again, the framework will call ",(0,n.kt)("a",{href:"../../views_pre_auth_screens_select_organization/SelectOrganization/createState.md"},"createState"),"again to create a fresh ",(0,n.kt)("a",{href:"https://api.flutter.dev/flutter/widgets/State-class.html"},"State")," object, simplifying the lifecycle of",(0,n.kt)("a",{href:"https://api.flutter.dev/flutter/widgets/State-class.html"},"State")," objects."),(0,n.kt)("h2",{id:"implementation"},"Implementation"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart"},"@override\n_SelectOrganizationState createState() => _SelectOrganizationState();\n")))}u.isMDXComponent=!0}}]);