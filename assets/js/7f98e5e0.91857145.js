"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[86438],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var l=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=l.createContext({}),u=function(e){var t=l.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=u(e.components);return l.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},h=l.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=u(a),h=r,m=p["".concat(s,".").concat(h)]||p[h]||c[h]||n;return a?l.createElement(m,i(i({ref:t},d),{},{components:a})):l.createElement(m,i({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<n;u++)i[u]=a[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}h.displayName="MDXCreateElement"},26997:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>o,toc:()=>u});var l=a(87462),r=(a(67294),a(3905));const n={},i="AppLanguage class",o={unversionedId:"talawa-mobile-docs/view_model_lang_view_model/AppLanguage-class",id:"talawa-mobile-docs/view_model_lang_view_model/AppLanguage-class",title:"AppLanguage class",description:"AppLanguage view model class interact with modal in the context of the App Language.",source:"@site/docs/talawa-mobile-docs/view_model_lang_view_model/AppLanguage-class.md",sourceDirName:"talawa-mobile-docs/view_model_lang_view_model",slug:"/talawa-mobile-docs/view_model_lang_view_model/AppLanguage-class",permalink:"/docs/talawa-mobile-docs/view_model_lang_view_model/AppLanguage-class",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/view_model_lang_view_model/AppLanguage-class.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"userLanguageQuery method",permalink:"/docs/talawa-mobile-docs/view_model_lang_view_model/AppLanguage/userLanguageQuery"},next:{title:"lang_view_model library",permalink:"/docs/talawa-mobile-docs/view_model_lang_view_model/view_model_lang_view_model-library"}},s={},u=[{value:"Constructors",id:"constructors",level:2},{value:"Properties",id:"properties",level:2},{value:"appLocal \u2192 Locale",id:"applocal--locale",level:5},{value:"databaseFunctions \u2192 DataBaseMutationFunctions",id:"databasefunctions--databasemutationfunctions",level:5},{value:"hashCode \u2192 int",id:"hashcode--int",level:5},{value:"hasListeners \u2192 bool",id:"haslisteners--bool",level:5},{value:"isBusy \u2192 bool",id:"isbusy--bool",level:5},{value:"isTest \u2192 bool",id:"istest--bool",level:5},{value:"navigationService \u2192 NavigationService",id:"navigationservice--navigationservice",level:5},{value:"runtimeType \u2192 Type",id:"runtimetype--type",level:5},{value:"state \u2192 ViewState",id:"state--viewstate",level:5},{value:"Methods",id:"methods",level:2},{value:"addListener(VoidCallback listener) void",id:"addlistenervoidcallback-listener-void",level:5},{value:"appLanguageQuery() Future&lt;void&gt;",id:"applanguagequery-futurevoid",level:5},{value:"changeLanguage(Locale type) Future&lt;void&gt;",id:"changelanguagelocale-type-futurevoid",level:5},{value:"dbLanguageUpdate() Future&lt;void&gt;",id:"dblanguageupdate-futurevoid",level:5},{value:"dispose() void",id:"dispose-void",level:5},{value:"fetchLocale() Future&lt;void&gt;",id:"fetchlocale-futurevoid",level:5},{value:"initialize() Future&lt;void&gt;",id:"initialize-futurevoid",level:5},{value:"noSuchMethod(Invocation invocation) dynamic",id:"nosuchmethodinvocation-invocation-dynamic",level:5},{value:"notifyListeners() void",id:"notifylisteners-void",level:5},{value:"removeListener(VoidCallback listener) void",id:"removelistenervoidcallback-listener-void",level:5},{value:"selectLanguagePress() Future&lt;void&gt;",id:"selectlanguagepress-futurevoid",level:5},{value:"setState(ViewState viewState) void",id:"setstateviewstate-viewstate-void",level:5},{value:"toString() String",id:"tostring-string",level:5},{value:"userLanguageQuery(String userId) Future&lt;void&gt;",id:"userlanguagequerystring-userid-futurevoid",level:5},{value:"Operators",id:"operators",level:2},{value:"operator ==(Object other) bool",id:"operator-object-other-bool",level:5}],d={toc:u},p="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,l.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"applanguage-class"},"AppLanguage class"),(0,r.kt)("p",null,"AppLanguage view model class interact with modal in the context of the App Language. The class provides methods that set's the language, change the language in the modal."),(0,r.kt)("p",null,"Methods include:"),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"fetchLocale")),(0,r.kt)("li",null,(0,r.kt)("code",null,"changeLanguage")),(0,r.kt)("li",null,(0,r.kt)("code",null,"selectLanguagePress")),(0,r.kt)("li",null,(0,r.kt)("code",null,"dbLanguageUpdate")),(0,r.kt)("li",null,(0,r.kt)("code",null,"appLanguageQuery")),(0,r.kt)("li",null,(0,r.kt)("code",null,"userLanguageQuery"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Inheritance")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://api.flutter.dev/flutter/dart-core/Object-class.html"},"Object")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://api.flutter.dev/flutter/foundation/ChangeNotifier-class.html"},"ChangeNotifier")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/talawa-mobile-docs/view_model_base_view_model/BaseModel-class"},"BaseModel")),(0,r.kt)("li",{parentName:"ul"},"AppLanguage")),(0,r.kt)("h2",{id:"constructors"},"Constructors"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/talawa-mobile-docs/view_model_lang_view_model/AppLanguage/"},"AppLanguage")," ({",(0,r.kt)("a",{parentName:"p",href:"https://api.flutter.dev/flutter/dart-core/bool-class.html"},"bool")," isTest = false})"),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h5",{id:"applocal--locale"},(0,r.kt)("a",{parentName:"h5",href:"/docs/talawa-mobile-docs/view_model_lang_view_model/AppLanguage/appLocal"},"appLocal")," ","\u2192"," ",(0,r.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/dart-ui/Locale-class.html"},"Locale")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("span",{class:"feature"},"read-only"))),(0,r.kt)("h5",{id:"databasefunctions--databasemutationfunctions"},(0,r.kt)("a",{parentName:"h5",href:"/docs/talawa-mobile-docs/view_model_lang_view_model/AppLanguage/databaseFunctions"},"databaseFunctions")," ","\u2192"," ",(0,r.kt)("a",{parentName:"h5",href:"/docs/talawa-mobile-docs/services_database_mutation_functions/DataBaseMutationFunctions-class"},"DataBaseMutationFunctions")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("span",{class:"feature"},"final"))),(0,r.kt)("h5",{id:"hashcode--int"},(0,r.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/dart-core/Object/hashCode.html"},"hashCode")," ","\u2192"," ",(0,r.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/dart-core/int-class.html"},"int")),(0,r.kt)("p",null,"The hash code for this object.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("span",{class:"feature"},"read-only"),(0,r.kt)("span",{class:"feature"},"inherited"))),(0,r.kt)("h5",{id:"haslisteners--bool"},(0,r.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/foundation/ChangeNotifier/hasListeners.html"},"hasListeners")," ","\u2192"," ",(0,r.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/dart-core/bool-class.html"},"bool")),(0,r.kt)("p",null,"Whether any listeners are currently registered.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("span",{class:"feature"},"read-only"),(0,r.kt)("span",{class:"feature"},"inherited"))),(0,r.kt)("h5",{id:"isbusy--bool"},(0,r.kt)("a",{parentName:"h5",href:"/docs/talawa-mobile-docs/view_model_base_view_model/BaseModel/isBusy"},"isBusy")," ","\u2192"," ",(0,r.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/dart-core/bool-class.html"},"bool")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("span",{class:"feature"},"read-only"),(0,r.kt)("span",{class:"feature"},"inherited"))),(0,r.kt)("h5",{id:"istest--bool"},(0,r.kt)("a",{parentName:"h5",href:"/docs/talawa-mobile-docs/view_model_lang_view_model/AppLanguage/isTest"},"isTest")," ","\u2192"," ",(0,r.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/dart-core/bool-class.html"},"bool")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("span",{class:"feature"},"final"))),(0,r.kt)("h5",{id:"navigationservice--navigationservice"},(0,r.kt)("a",{parentName:"h5",href:"/docs/talawa-mobile-docs/view_model_lang_view_model/AppLanguage/navigationService"},"navigationService")," ","\u2192"," ",(0,r.kt)("a",{parentName:"h5",href:"/docs/talawa-mobile-docs/services_navigation_service/NavigationService-class"},"NavigationService")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("span",{class:"feature"},"final"))),(0,r.kt)("h5",{id:"runtimetype--type"},(0,r.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html"},"runtimeType")," ","\u2192"," ",(0,r.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/dart-core/Type-class.html"},"Type")),(0,r.kt)("p",null,"A representation of the runtime type of the object.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("span",{class:"feature"},"read-only"),(0,r.kt)("span",{class:"feature"},"inherited"))),(0,r.kt)("h5",{id:"state--viewstate"},(0,r.kt)("a",{parentName:"h5",href:"/docs/talawa-mobile-docs/view_model_base_view_model/BaseModel/state"},"state")," ","\u2192"," ",(0,r.kt)("a",{parentName:"h5",href:"/docs/talawa-mobile-docs/enums_enums/ViewState"},"ViewState")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("span",{class:"feature"},"read-only"),(0,r.kt)("span",{class:"feature"},"inherited"))),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h5",{id:"addlistenervoidcallback-listener-void"},(0,r.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/foundation/ChangeNotifier/addListener.html"},"addListener"),"(",(0,r.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/dart-ui/VoidCallback.html"},"VoidCallback")," listener) void"),(0,r.kt)("p",null,"Register a closure to be called when the object changes.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("span",{class:"feature"},"inherited"))),(0,r.kt)("h5",{id:"applanguagequery-futurevoid"},(0,r.kt)("a",{parentName:"h5",href:"/docs/talawa-mobile-docs/view_model_lang_view_model/AppLanguage/appLanguageQuery"},"appLanguageQuery"),"() ",(0,r.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/dart-async/Future-class.html"},"Future"),"<","void>"),(0,r.kt)("p",null,"This function perform graphQL query to check the app language.\nThe function uses ",(0,r.kt)("code",null,"gqlAuthQuery")," method provided by Database Functions Services.  "),(0,r.kt)("h5",{id:"changelanguagelocale-type-futurevoid"},(0,r.kt)("a",{parentName:"h5",href:"/docs/talawa-mobile-docs/view_model_lang_view_model/AppLanguage/changeLanguage"},"changeLanguage"),"(",(0,r.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/dart-ui/Locale-class.html"},"Locale")," type) ",(0,r.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/dart-async/Future-class.html"},"Future"),"<","void>"),(0,r.kt)("p",null,"This function change the app default language.  "),(0,r.kt)("h5",{id:"dblanguageupdate-futurevoid"},(0,r.kt)("a",{parentName:"h5",href:"/docs/talawa-mobile-docs/view_model_lang_view_model/AppLanguage/dbLanguageUpdate"},"dbLanguageUpdate"),"() ",(0,r.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/dart-async/Future-class.html"},"Future"),"<","void>"),(0,r.kt)("p",null,"This function updates the Database Language by running the graphQL ",(0,r.kt)("code",null,"mutations"),".  "),(0,r.kt)("h5",{id:"dispose-void"},(0,r.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/foundation/ChangeNotifier/dispose.html"},"dispose"),"() void"),(0,r.kt)("p",null,"Discards any resources used by the object. After this is called, the\nobject is not in a usable state and should be discarded (calls to"),(0,r.kt)("a",{href:"https://api.flutter.dev/flutter/foundation/ChangeNotifier/addListener.html"},"addListener")," will throw after the object is disposed). _",(0,r.kt)("span",{class:"feature"},"inherited"),"_",(0,r.kt)("h5",{id:"fetchlocale-futurevoid"},(0,r.kt)("a",{parentName:"h5",href:"/docs/talawa-mobile-docs/view_model_lang_view_model/AppLanguage/fetchLocale"},"fetchLocale"),"() ",(0,r.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/dart-async/Future-class.html"},"Future"),"<","void>"),(0,r.kt)("p",null,"This function fetch the language of the user's app.  "),(0,r.kt)("h5",{id:"initialize-futurevoid"},(0,r.kt)("a",{parentName:"h5",href:"/docs/talawa-mobile-docs/view_model_lang_view_model/AppLanguage/initialize"},"initialize"),"() ",(0,r.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/dart-async/Future-class.html"},"Future"),"<","void>"),(0,r.kt)("h5",{id:"nosuchmethodinvocation-invocation-dynamic"},(0,r.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html"},"noSuchMethod"),"(",(0,r.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/dart-core/Invocation-class.html"},"Invocation")," invocation) dynamic"),(0,r.kt)("p",null,"Invoked when a non-existent method or property is accessed.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("span",{class:"feature"},"inherited"))),(0,r.kt)("h5",{id:"notifylisteners-void"},(0,r.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/foundation/ChangeNotifier/notifyListeners.html"},"notifyListeners"),"() void"),(0,r.kt)("p",null,"Call all the registered listeners.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("span",{class:"feature"},"inherited"))),(0,r.kt)("h5",{id:"removelistenervoidcallback-listener-void"},(0,r.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/foundation/ChangeNotifier/removeListener.html"},"removeListener"),"(",(0,r.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/dart-ui/VoidCallback.html"},"VoidCallback")," listener) void"),(0,r.kt)("p",null,"Remove a previously registered closure from the list of closures that are\nnotified when the object changes.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("span",{class:"feature"},"inherited"))),(0,r.kt)("h5",{id:"selectlanguagepress-futurevoid"},(0,r.kt)("a",{parentName:"h5",href:"/docs/talawa-mobile-docs/view_model_lang_view_model/AppLanguage/selectLanguagePress"},"selectLanguagePress"),"() ",(0,r.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/dart-async/Future-class.html"},"Future"),"<","void>"),(0,r.kt)("p",null,"This function navigate user to ",(0,r.kt)("code",null,"/appSettingsPage")," route if the user is authenticated\nelse navigate to ",(0,r.kt)("code",null,"/setUrl")," route.  "),(0,r.kt)("h5",{id:"setstateviewstate-viewstate-void"},(0,r.kt)("a",{parentName:"h5",href:"/docs/talawa-mobile-docs/view_model_base_view_model/BaseModel/setState"},"setState"),"(",(0,r.kt)("a",{parentName:"h5",href:"/docs/talawa-mobile-docs/enums_enums/ViewState"},"ViewState")," viewState) void"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("span",{class:"feature"},"inherited"))),(0,r.kt)("h5",{id:"tostring-string"},(0,r.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/dart-core/Object/toString.html"},"toString"),"() ",(0,r.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/dart-core/String-class.html"},"String")),(0,r.kt)("p",null,"A string representation of this object.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("span",{class:"feature"},"inherited"))),(0,r.kt)("h5",{id:"userlanguagequerystring-userid-futurevoid"},(0,r.kt)("a",{parentName:"h5",href:"/docs/talawa-mobile-docs/view_model_lang_view_model/AppLanguage/userLanguageQuery"},"userLanguageQuery"),"(",(0,r.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/dart-core/String-class.html"},"String")," userId) ",(0,r.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/dart-async/Future-class.html"},"Future"),"<","void>"),(0,r.kt)("p",null,"This function perform graphQL query to check the user's language in the database.\nThe function uses ",(0,r.kt)("code",null,"gqlAuthQuery")," method provided by Database Functions Services.  "),(0,r.kt)("h2",{id:"operators"},"Operators"),(0,r.kt)("h5",{id:"operator-object-other-bool"},(0,r.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html"},"operator =="),"(",(0,r.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/dart-core/Object-class.html"},"Object")," other) ",(0,r.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/dart-core/bool-class.html"},"bool")),(0,r.kt)("p",null,"The equality operator.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("span",{class:"feature"},"inherited"))))}c.isMDXComponent=!0}}]);