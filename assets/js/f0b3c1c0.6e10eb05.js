"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[1791],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=o.createContext({}),l=function(e){var t=o.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):d(d({},t),e)),r},s=function(e){var t=l(e.components);return o.createElement(u.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=l(r),m=n,f=c["".concat(u,".").concat(m)]||c[m]||p[m]||a;return r?o.createElement(f,d(d({ref:t},s),{},{components:r})):o.createElement(f,d({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,d=new Array(a);d[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[c]="string"==typeof e?e:n,d[1]=i;for(var l=2;l<a;l++)d[l]=r[l];return o.createElement.apply(null,d)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},84772:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var o=r(87462),n=(r(67294),r(3905));const a={},d="RaisedRoundedButton constructor",i={unversionedId:"talawa-mobile-docs/widgets_raised_round_edge_button/RaisedRoundedButton/RaisedRoundedButton",id:"talawa-mobile-docs/widgets_raised_round_edge_button/RaisedRoundedButton/RaisedRoundedButton",title:"RaisedRoundedButton constructor",description:"const",source:"@site/docs/talawa-mobile-docs/widgets_raised_round_edge_button/RaisedRoundedButton/RaisedRoundedButton.md",sourceDirName:"talawa-mobile-docs/widgets_raised_round_edge_button/RaisedRoundedButton",slug:"/talawa-mobile-docs/widgets_raised_round_edge_button/RaisedRoundedButton/",permalink:"/docs/talawa-mobile-docs/widgets_raised_round_edge_button/RaisedRoundedButton/",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/widgets_raised_round_edge_button/RaisedRoundedButton/RaisedRoundedButton.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"post_widget library",permalink:"/docs/talawa-mobile-docs/widgets_post_widget/widgets_post_widget-library"},next:{title:"backgroundColor property",permalink:"/docs/talawa-mobile-docs/widgets_raised_round_edge_button/RaisedRoundedButton/backgroundColor"}},u={},l=[{value:"Implementation",id:"implementation",level:2}],s={toc:l},c="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,o.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"raisedroundedbutton-constructor"},"RaisedRoundedButton constructor"),(0,n.kt)("p",null,"const\nRaisedRoundedButton({required ",(0,n.kt)("a",{parentName:"p",href:"https://api.flutter.dev/flutter/foundation/Key-class.html"},"Key")," key, required ",(0,n.kt)("a",{parentName:"p",href:"https://api.flutter.dev/flutter/dart-core/String-class.html"},"String")," buttonLabel, required ",(0,n.kt)("a",{parentName:"p",href:"https://api.flutter.dev/flutter/dart-ui/Color-class.html"},"Color")," backgroundColor, required ",(0,n.kt)("a",{parentName:"p",href:"https://api.flutter.dev/flutter/dart-ui/Color-class.html"},"Color")," textColor, required dynamic onTap(), ",(0,n.kt)("a",{parentName:"p",href:"https://api.flutter.dev/flutter/dart-core/double-class.html"},"double"),"? height, ",(0,n.kt)("a",{parentName:"p",href:"https://api.flutter.dev/flutter/dart-core/double-class.html"},"double"),"? width, ",(0,n.kt)("a",{parentName:"p",href:"https://api.flutter.dev/flutter/dart-core/bool-class.html"},"bool")," showArrow = false})"),(0,n.kt)("h2",{id:"implementation"},"Implementation"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart"},"const RaisedRoundedButton({\n  required Key key,\n  required this.buttonLabel,\n  required this.backgroundColor,\n  required this.textColor,\n  required this.onTap,\n  this.height,\n  this.width,\n  this.showArrow = false,\n}) : super(key: key);\n")))}p.isMDXComponent=!0}}]);