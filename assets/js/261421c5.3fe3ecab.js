"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[25277],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>v});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),p=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,v=d["".concat(i,".").concat(m)]||d[m]||u[m]||l;return n?o.createElement(v,a(a({ref:t},c),{},{components:n})):o.createElement(v,a({ref:t},c))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:r,a[1]=s;for(var p=2;p<l;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},93623:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const l={},a="dropDownList method",s={unversionedId:"talawa-mobile-docs/views_after_auth_screens_events_explore_events/ExploreEvents/dropDownList",id:"talawa-mobile-docs/views_after_auth_screens_events_explore_events/ExploreEvents/dropDownList",title:"dropDownList method",description:"Widget dropDownList",source:"@site/docs/talawa-mobile-docs/views_after_auth_screens_events_explore_events/ExploreEvents/dropDownList.md",sourceDirName:"talawa-mobile-docs/views_after_auth_screens_events_explore_events/ExploreEvents",slug:"/talawa-mobile-docs/views_after_auth_screens_events_explore_events/ExploreEvents/dropDownList",permalink:"/docs/talawa-mobile-docs/views_after_auth_screens_events_explore_events/ExploreEvents/dropDownList",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/views_after_auth_screens_events_explore_events/ExploreEvents/dropDownList.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"build method",permalink:"/docs/talawa-mobile-docs/views_after_auth_screens_events_explore_events/ExploreEvents/build"},next:{title:"homeModel property",permalink:"/docs/talawa-mobile-docs/views_after_auth_screens_events_explore_events/ExploreEvents/homeModel"}},i={},p=[{value:"Implementation",id:"implementation",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"dropdownlist-method"},"dropDownList method"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://api.flutter.dev/flutter/widgets/Widget-class.html"},"Widget")," dropDownList\n(",(0,r.kt)("a",{parentName:"p",href:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_explore_events_view_model/ExploreEventsViewModel-class"},"ExploreEventsViewModel")," model, ",(0,r.kt)("a",{parentName:"p",href:"https://api.flutter.dev/flutter/widgets/BuildContext-class.html"},"BuildContext")," context)"),(0,r.kt)("p",null,"Shows a list of dropdown taken from  ",(0,r.kt)("code",null,"model")," and ",(0,r.kt)("code",null,"context"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",null,"params"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"model"),": contains the events data"),(0,r.kt)("li",null,(0,r.kt)("code",null,"context"),": the overall context of UI")),(0,r.kt)("p",null,(0,r.kt)("strong",null,"returns"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"Widget"),": the dropdown")),(0,r.kt)("h2",{id:"implementation"},"Implementation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"Widget dropDownList(ExploreEventsViewModel model, BuildContext context) {\n  return DropdownButton<String>(\n    key: homeModel?.keySECategoryMenu,\n    value: model.chosenValue,\n    isExpanded: true,\n    items: <String>[\n      'All Events',\n      'Created Events',\n      'Registered Events',\n      'Public Events',\n      'Private Events',\n    ].map<DropdownMenuItem<String>>((String value) {\n      return DropdownMenuItem<String>(\n        value: value,\n        child: Text(\n          AppLocalizations.of(context)!.strictTranslate(value),\n          style: Theme.of(context)\n              .textTheme\n              .titleLarge!\n              .copyWith(color: Theme.of(context).colorScheme.secondary),\n        ),\n      );\n    }).toList(),\n    onChanged: (value) {\n      model.choseValueFromDropdown(value!);\n    },\n  );\n}\n")))}u.isMDXComponent=!0}}]);