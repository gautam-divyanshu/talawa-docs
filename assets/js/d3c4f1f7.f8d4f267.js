"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[39212],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),c=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=n,f=p["".concat(i,".").concat(m)]||p[m]||u[m]||o;return r?a.createElement(f,s(s({ref:t},d),{},{components:r})):a.createElement(f,s({ref:t},d))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:n,s[1]=l;for(var c=2;c<o;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},55323:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={},s="TaskCard constructor",l={unversionedId:"talawa-mobile-docs/widgets_task_schedule/TaskCard/TaskCard",id:"talawa-mobile-docs/widgets_task_schedule/TaskCard/TaskCard",title:"TaskCard constructor",description:"const",source:"@site/docs/talawa-mobile-docs/widgets_task_schedule/TaskCard/TaskCard.md",sourceDirName:"talawa-mobile-docs/widgets_task_schedule/TaskCard",slug:"/talawa-mobile-docs/widgets_task_schedule/TaskCard/",permalink:"/docs/talawa-mobile-docs/widgets_task_schedule/TaskCard/",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/widgets_task_schedule/TaskCard/TaskCard.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"task_form library",permalink:"/docs/talawa-mobile-docs/widgets_task_form/widgets_task_form-library"},next:{title:"appointment property",permalink:"/docs/talawa-mobile-docs/widgets_task_schedule/TaskCard/appointment"}},i={},c=[{value:"Implementation",id:"implementation",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"taskcard-constructor"},"TaskCard constructor"),(0,n.kt)("p",null,"const\nTaskCard({",(0,n.kt)("a",{parentName:"p",href:"https://api.flutter.dev/flutter/foundation/Key-class.html"},"Key"),"? key, required ",(0,n.kt)("a",{parentName:"p",href:"https://pub.dev/documentation/syncfusion_flutter_calendar/20.4.54/calendar/Appointment-class.html"},"Appointment")," appointment, required ",(0,n.kt)("a",{parentName:"p",href:"https://api.flutter.dev/flutter/dart-core/bool-class.html"},"bool")," showMoreOptions, required ",(0,n.kt)("a",{parentName:"p",href:"/docs/talawa-mobile-docs/models_task_task_model/Task-class"},"Task")," task})"),(0,n.kt)("h2",{id:"implementation"},"Implementation"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart"},"const TaskCard({\n  Key? key,\n  required this.appointment,\n  required this.showMoreOptions,\n  required this.task,\n}) : super(key: key);\n")))}u.isMDXComponent=!0}}]);