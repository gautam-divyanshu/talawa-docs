"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[84019],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var r=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=r.createContext({}),d=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=d(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(a),h=l,u=c["".concat(i,".").concat(h)]||c[h]||m[h]||n;return a?r.createElement(u,s(s({ref:t},p),{},{components:a})):r.createElement(u,s({ref:t},p))}));function u(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,s=new Array(n);s[0]=h;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[c]="string"==typeof e?e:l,s[1]=o;for(var d=2;d<n;d++)s[d]=a[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},5568:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>n,metadata:()=>o,toc:()=>d});var r=a(87462),l=(a(67294),a(3905));const n={},s="Event class",o={unversionedId:"talawa-mobile-docs/models_events_event_model/Event-class",id:"talawa-mobile-docs/models_events_event_model/Event-class",title:"Event class",description:"This class creates an event model and returns an Event instance.",source:"@site/docs/talawa-mobile-docs/models_events_event_model/Event-class.md",sourceDirName:"talawa-mobile-docs/models_events_event_model",slug:"/talawa-mobile-docs/models_events_event_model/Event-class",permalink:"/docs/talawa-mobile-docs/models_events_event_model/Event-class",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/models_events_event_model/Event-class.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"title property",permalink:"/docs/talawa-mobile-docs/models_events_event_model/Event/title"},next:{title:"event_model library",permalink:"/docs/talawa-mobile-docs/models_events_event_model/models_events_event_model-library"}},i={},d=[{value:"Constructors",id:"constructors",level:2},{value:"Properties",id:"properties",level:2},{value:"admins \u2194 List&lt;User&gt;?",id:"admins--listuser",level:5},{value:"allDay \u2194 bool?",id:"allday--bool",level:5},{value:"attendees \u2194 String?",id:"attendees--string",level:5},{value:"creator \u2194 User?",id:"creator--user",level:5},{value:"description \u2194 String?",id:"description--string",level:5},{value:"endDate \u2194 String?",id:"enddate--string",level:5},{value:"endTime \u2194 String?",id:"endtime--string",level:5},{value:"hashCode \u2192 int",id:"hashcode--int",level:5},{value:"id \u2194 String?",id:"id--string",level:5},{value:"isPublic \u2194 bool?",id:"ispublic--bool",level:5},{value:"isRegisterable \u2194 bool?",id:"isregisterable--bool",level:5},{value:"isRegistered \u2194 bool?",id:"isregistered--bool",level:5},{value:"latitude \u2194 double?",id:"latitude--double",level:5},{value:"location \u2194 String?",id:"location--string",level:5},{value:"longitude \u2194 double?",id:"longitude--double",level:5},{value:"organization \u2194 OrgInfo?",id:"organization--orginfo",level:5},{value:"recurrence \u2194 String?",id:"recurrence--string",level:5},{value:"recurring \u2194 bool?",id:"recurring--bool",level:5},{value:"registrants \u2194 List&lt;User&gt;?",id:"registrants--listuser",level:5},{value:"runtimeType \u2192 Type",id:"runtimetype--type",level:5},{value:"startDate \u2194 String?",id:"startdate--string",level:5},{value:"startTime \u2194 String?",id:"starttime--string",level:5},{value:"title \u2194 String?",id:"title--string",level:5},{value:"Methods",id:"methods",level:2},{value:"noSuchMethod(Invocation invocation) dynamic",id:"nosuchmethodinvocation-invocation-dynamic",level:5},{value:"toString() String",id:"tostring-string",level:5},{value:"Operators",id:"operators",level:2},{value:"operator ==(Object other) bool",id:"operator-object-other-bool",level:5}],p={toc:d},c="wrapper";function m(e){let{components:t,...a}=e;return(0,l.kt)(c,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"event-class"},"Event class"),(0,l.kt)("p",null,"This class creates an event model and returns an Event instance."),(0,l.kt)("h2",{id:"constructors"},"Constructors"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/talawa-mobile-docs/models_events_event_model/Event/"},"Event")," ({",(0,l.kt)("a",{parentName:"p",href:"https://api.flutter.dev/flutter/dart-core/String-class.html"},"String"),"? id, ",(0,l.kt)("a",{parentName:"p",href:"https://api.flutter.dev/flutter/dart-core/String-class.html"},"String"),"? title, ",(0,l.kt)("a",{parentName:"p",href:"https://api.flutter.dev/flutter/dart-core/String-class.html"},"String"),"? description, ",(0,l.kt)("a",{parentName:"p",href:"https://api.flutter.dev/flutter/dart-core/String-class.html"},"String"),"? attendees, ",(0,l.kt)("a",{parentName:"p",href:"https://api.flutter.dev/flutter/dart-core/String-class.html"},"String"),"? location, ",(0,l.kt)("a",{parentName:"p",href:"https://api.flutter.dev/flutter/dart-core/double-class.html"},"double"),"? latitude, ",(0,l.kt)("a",{parentName:"p",href:"https://api.flutter.dev/flutter/dart-core/double-class.html"},"double"),"? longitude, ",(0,l.kt)("a",{parentName:"p",href:"https://api.flutter.dev/flutter/dart-core/bool-class.html"},"bool"),"? recurring, ",(0,l.kt)("a",{parentName:"p",href:"https://api.flutter.dev/flutter/dart-core/bool-class.html"},"bool"),"? allDay, ",(0,l.kt)("a",{parentName:"p",href:"https://api.flutter.dev/flutter/dart-core/String-class.html"},"String"),"? startDate, ",(0,l.kt)("a",{parentName:"p",href:"https://api.flutter.dev/flutter/dart-core/String-class.html"},"String"),"? endDate, ",(0,l.kt)("a",{parentName:"p",href:"https://api.flutter.dev/flutter/dart-core/String-class.html"},"String"),"? startTime, ",(0,l.kt)("a",{parentName:"p",href:"https://api.flutter.dev/flutter/dart-core/String-class.html"},"String"),"? endTime, ",(0,l.kt)("a",{parentName:"p",href:"https://api.flutter.dev/flutter/dart-core/String-class.html"},"String"),"? recurrence, ",(0,l.kt)("a",{parentName:"p",href:"https://api.flutter.dev/flutter/dart-core/bool-class.html"},"bool"),"? isPublic, ",(0,l.kt)("a",{parentName:"p",href:"https://api.flutter.dev/flutter/dart-core/bool-class.html"},"bool"),"? isRegistered, ",(0,l.kt)("a",{parentName:"p",href:"https://api.flutter.dev/flutter/dart-core/bool-class.html"},"bool"),"? isRegisterable, ",(0,l.kt)("a",{parentName:"p",href:"/docs/talawa-mobile-docs/models_user_user_info/User-class"},"User"),"? creator, ",(0,l.kt)("a",{parentName:"p",href:"/docs/talawa-mobile-docs/models_organization_org_info/OrgInfo-class"},"OrgInfo"),"? organization, ",(0,l.kt)("a",{parentName:"p",href:"https://api.flutter.dev/flutter/dart-core/List-class.html"},"List"),"<",(0,l.kt)("a",{parentName:"p",href:"/docs/talawa-mobile-docs/models_user_user_info/User-class"},"User"),">? admins, ",(0,l.kt)("a",{parentName:"p",href:"https://api.flutter.dev/flutter/dart-core/List-class.html"},"List"),"<",(0,l.kt)("a",{parentName:"p",href:"/docs/talawa-mobile-docs/models_user_user_info/User-class"},"User"),">? registrants})"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/talawa-mobile-docs/models_events_event_model/Event/Event.fromJson"},"Event.fromJson")," (",(0,l.kt)("a",{parentName:"p",href:"https://api.flutter.dev/flutter/dart-core/Map-class.html"},"Map"),"<",(0,l.kt)("a",{parentName:"p",href:"https://api.flutter.dev/flutter/dart-core/String-class.html"},"String"),", dynamic> json)"),(0,l.kt)("p",null,"   ",(0,l.kt)("em",{parentName:"p"},"factory")),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h5",{id:"admins--listuser"},(0,l.kt)("a",{parentName:"h5",href:"/docs/talawa-mobile-docs/models_events_event_model/Event/admins"},"admins")," ","\u2194"," ",(0,l.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/dart-core/List-class.html"},"List"),"<",(0,l.kt)("a",{parentName:"h5",href:"/docs/talawa-mobile-docs/models_user_user_info/User-class"},"User"),">?"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},(0,l.kt)("span",{class:"feature"},"read / write"))),(0,l.kt)("h5",{id:"allday--bool"},(0,l.kt)("a",{parentName:"h5",href:"/docs/talawa-mobile-docs/models_events_event_model/Event/allDay"},"allDay")," ","\u2194"," ",(0,l.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/dart-core/bool-class.html"},"bool"),"?"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},(0,l.kt)("span",{class:"feature"},"read / write"))),(0,l.kt)("h5",{id:"attendees--string"},(0,l.kt)("a",{parentName:"h5",href:"/docs/talawa-mobile-docs/models_events_event_model/Event/attendees"},"attendees")," ","\u2194"," ",(0,l.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/dart-core/String-class.html"},"String"),"?"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},(0,l.kt)("span",{class:"feature"},"read / write"))),(0,l.kt)("h5",{id:"creator--user"},(0,l.kt)("a",{parentName:"h5",href:"/docs/talawa-mobile-docs/models_events_event_model/Event/creator"},"creator")," ","\u2194"," ",(0,l.kt)("a",{parentName:"h5",href:"/docs/talawa-mobile-docs/models_user_user_info/User-class"},"User"),"?"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},(0,l.kt)("span",{class:"feature"},"read / write"))),(0,l.kt)("h5",{id:"description--string"},(0,l.kt)("a",{parentName:"h5",href:"/docs/talawa-mobile-docs/models_events_event_model/Event/description"},"description")," ","\u2194"," ",(0,l.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/dart-core/String-class.html"},"String"),"?"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},(0,l.kt)("span",{class:"feature"},"read / write"))),(0,l.kt)("h5",{id:"enddate--string"},(0,l.kt)("a",{parentName:"h5",href:"/docs/talawa-mobile-docs/models_events_event_model/Event/endDate"},"endDate")," ","\u2194"," ",(0,l.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/dart-core/String-class.html"},"String"),"?"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},(0,l.kt)("span",{class:"feature"},"read / write"))),(0,l.kt)("h5",{id:"endtime--string"},(0,l.kt)("a",{parentName:"h5",href:"/docs/talawa-mobile-docs/models_events_event_model/Event/endTime"},"endTime")," ","\u2194"," ",(0,l.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/dart-core/String-class.html"},"String"),"?"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},(0,l.kt)("span",{class:"feature"},"read / write"))),(0,l.kt)("h5",{id:"hashcode--int"},(0,l.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/dart-core/Object/hashCode.html"},"hashCode")," ","\u2192"," ",(0,l.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/dart-core/int-class.html"},"int")),(0,l.kt)("p",null,"The hash code for this object.",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("em",{parentName:"p"},(0,l.kt)("span",{class:"feature"},"read-only"),(0,l.kt)("span",{class:"feature"},"inherited"))),(0,l.kt)("h5",{id:"id--string"},(0,l.kt)("a",{parentName:"h5",href:"/docs/talawa-mobile-docs/models_events_event_model/Event/id"},"id")," ","\u2194"," ",(0,l.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/dart-core/String-class.html"},"String"),"?"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},(0,l.kt)("span",{class:"feature"},"read / write"))),(0,l.kt)("h5",{id:"ispublic--bool"},(0,l.kt)("a",{parentName:"h5",href:"/docs/talawa-mobile-docs/models_events_event_model/Event/isPublic"},"isPublic")," ","\u2194"," ",(0,l.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/dart-core/bool-class.html"},"bool"),"?"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},(0,l.kt)("span",{class:"feature"},"read / write"))),(0,l.kt)("h5",{id:"isregisterable--bool"},(0,l.kt)("a",{parentName:"h5",href:"/docs/talawa-mobile-docs/models_events_event_model/Event/isRegisterable"},"isRegisterable")," ","\u2194"," ",(0,l.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/dart-core/bool-class.html"},"bool"),"?"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},(0,l.kt)("span",{class:"feature"},"read / write"))),(0,l.kt)("h5",{id:"isregistered--bool"},(0,l.kt)("a",{parentName:"h5",href:"/docs/talawa-mobile-docs/models_events_event_model/Event/isRegistered"},"isRegistered")," ","\u2194"," ",(0,l.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/dart-core/bool-class.html"},"bool"),"?"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},(0,l.kt)("span",{class:"feature"},"read / write"))),(0,l.kt)("h5",{id:"latitude--double"},(0,l.kt)("a",{parentName:"h5",href:"/docs/talawa-mobile-docs/models_events_event_model/Event/latitude"},"latitude")," ","\u2194"," ",(0,l.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/dart-core/double-class.html"},"double"),"?"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},(0,l.kt)("span",{class:"feature"},"read / write"))),(0,l.kt)("h5",{id:"location--string"},(0,l.kt)("a",{parentName:"h5",href:"/docs/talawa-mobile-docs/models_events_event_model/Event/location"},"location")," ","\u2194"," ",(0,l.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/dart-core/String-class.html"},"String"),"?"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},(0,l.kt)("span",{class:"feature"},"read / write"))),(0,l.kt)("h5",{id:"longitude--double"},(0,l.kt)("a",{parentName:"h5",href:"/docs/talawa-mobile-docs/models_events_event_model/Event/longitude"},"longitude")," ","\u2194"," ",(0,l.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/dart-core/double-class.html"},"double"),"?"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},(0,l.kt)("span",{class:"feature"},"read / write"))),(0,l.kt)("h5",{id:"organization--orginfo"},(0,l.kt)("a",{parentName:"h5",href:"/docs/talawa-mobile-docs/models_events_event_model/Event/organization"},"organization")," ","\u2194"," ",(0,l.kt)("a",{parentName:"h5",href:"/docs/talawa-mobile-docs/models_organization_org_info/OrgInfo-class"},"OrgInfo"),"?"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},(0,l.kt)("span",{class:"feature"},"read / write"))),(0,l.kt)("h5",{id:"recurrence--string"},(0,l.kt)("a",{parentName:"h5",href:"/docs/talawa-mobile-docs/models_events_event_model/Event/recurrence"},"recurrence")," ","\u2194"," ",(0,l.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/dart-core/String-class.html"},"String"),"?"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},(0,l.kt)("span",{class:"feature"},"read / write"))),(0,l.kt)("h5",{id:"recurring--bool"},(0,l.kt)("a",{parentName:"h5",href:"/docs/talawa-mobile-docs/models_events_event_model/Event/recurring"},"recurring")," ","\u2194"," ",(0,l.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/dart-core/bool-class.html"},"bool"),"?"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},(0,l.kt)("span",{class:"feature"},"read / write"))),(0,l.kt)("h5",{id:"registrants--listuser"},(0,l.kt)("a",{parentName:"h5",href:"/docs/talawa-mobile-docs/models_events_event_model/Event/registrants"},"registrants")," ","\u2194"," ",(0,l.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/dart-core/List-class.html"},"List"),"<",(0,l.kt)("a",{parentName:"h5",href:"/docs/talawa-mobile-docs/models_user_user_info/User-class"},"User"),">?"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},(0,l.kt)("span",{class:"feature"},"read / write"))),(0,l.kt)("h5",{id:"runtimetype--type"},(0,l.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html"},"runtimeType")," ","\u2192"," ",(0,l.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/dart-core/Type-class.html"},"Type")),(0,l.kt)("p",null,"A representation of the runtime type of the object.",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("em",{parentName:"p"},(0,l.kt)("span",{class:"feature"},"read-only"),(0,l.kt)("span",{class:"feature"},"inherited"))),(0,l.kt)("h5",{id:"startdate--string"},(0,l.kt)("a",{parentName:"h5",href:"/docs/talawa-mobile-docs/models_events_event_model/Event/startDate"},"startDate")," ","\u2194"," ",(0,l.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/dart-core/String-class.html"},"String"),"?"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},(0,l.kt)("span",{class:"feature"},"read / write"))),(0,l.kt)("h5",{id:"starttime--string"},(0,l.kt)("a",{parentName:"h5",href:"/docs/talawa-mobile-docs/models_events_event_model/Event/startTime"},"startTime")," ","\u2194"," ",(0,l.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/dart-core/String-class.html"},"String"),"?"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},(0,l.kt)("span",{class:"feature"},"read / write"))),(0,l.kt)("h5",{id:"title--string"},(0,l.kt)("a",{parentName:"h5",href:"/docs/talawa-mobile-docs/models_events_event_model/Event/title"},"title")," ","\u2194"," ",(0,l.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/dart-core/String-class.html"},"String"),"?"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},(0,l.kt)("span",{class:"feature"},"read / write"))),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("h5",{id:"nosuchmethodinvocation-invocation-dynamic"},(0,l.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html"},"noSuchMethod"),"(",(0,l.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/dart-core/Invocation-class.html"},"Invocation")," invocation) dynamic"),(0,l.kt)("p",null,"Invoked when a non-existent method or property is accessed.",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("em",{parentName:"p"},(0,l.kt)("span",{class:"feature"},"inherited"))),(0,l.kt)("h5",{id:"tostring-string"},(0,l.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/dart-core/Object/toString.html"},"toString"),"() ",(0,l.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/dart-core/String-class.html"},"String")),(0,l.kt)("p",null,"A string representation of this object.",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("em",{parentName:"p"},(0,l.kt)("span",{class:"feature"},"inherited"))),(0,l.kt)("h2",{id:"operators"},"Operators"),(0,l.kt)("h5",{id:"operator-object-other-bool"},(0,l.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html"},"operator =="),"(",(0,l.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/dart-core/Object-class.html"},"Object")," other) ",(0,l.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/dart-core/bool-class.html"},"bool")),(0,l.kt)("p",null,"The equality operator.",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("em",{parentName:"p"},(0,l.kt)("span",{class:"feature"},"inherited"))))}m.isMDXComponent=!0}}]);