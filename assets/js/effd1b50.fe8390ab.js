"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[7419],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>m});var r=a(67294);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function n(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,r,i=function(t,e){if(null==t)return{};var a,r,i={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var o=r.createContext({}),p=function(t){var e=r.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):n(n({},e),t)),a},d=function(t){var e=p(t.components);return r.createElement(o.Provider,{value:e},t.children)},c="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},h=r.forwardRef((function(t,e){var a=t.components,i=t.mdxType,l=t.originalType,o=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),c=p(a),h=i,m=c["".concat(o,".").concat(h)]||c[h]||u[h]||l;return a?r.createElement(m,n(n({ref:e},d),{},{components:a})):r.createElement(m,n({ref:e},d))}));function m(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var l=a.length,n=new Array(l);n[0]=h;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s[c]="string"==typeof t?t:i,n[1]=s;for(var p=2;p<l;p++)n[p]=a[p];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},17890:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>n,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=a(87462),i=(a(67294),a(3905));const l={},n="CustomAvatar class",s={unversionedId:"talawa-mobile-docs/widgets_custom_avatar/CustomAvatar-class",id:"talawa-mobile-docs/widgets_custom_avatar/CustomAvatar-class",title:"CustomAvatar class",description:"Creates a custom avatar.",source:"@site/docs/talawa-mobile-docs/widgets_custom_avatar/CustomAvatar-class.md",sourceDirName:"talawa-mobile-docs/widgets_custom_avatar",slug:"/talawa-mobile-docs/widgets_custom_avatar/CustomAvatar-class",permalink:"/docs/talawa-mobile-docs/widgets_custom_avatar/CustomAvatar-class",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/widgets_custom_avatar/CustomAvatar-class.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"isImageNull property",permalink:"/docs/talawa-mobile-docs/widgets_custom_avatar/CustomAvatar/isImageNull"},next:{title:"custom_avatar library",permalink:"/docs/talawa-mobile-docs/widgets_custom_avatar/widgets_custom_avatar-library"}},o={},p=[{value:"Constructors",id:"constructors",level:2},{value:"Properties",id:"properties",level:2},{value:"cacheManager \u2192 BaseCacheManager?",id:"cachemanager--basecachemanager",level:5},{value:"firstAlphabet \u2192 String?",id:"firstalphabet--string",level:5},{value:"fontSize \u2192 double?",id:"fontsize--double",level:5},{value:"hashCode \u2192 int",id:"hashcode--int",level:5},{value:"imageUrl \u2192 String?",id:"imageurl--string",level:5},{value:"isImageNull \u2192 bool",id:"isimagenull--bool",level:5},{value:"key \u2192 Key?",id:"key--key",level:5},{value:"runtimeType \u2192 Type",id:"runtimetype--type",level:5},{value:"Methods",id:"methods",level:2},{value:"build(BuildContext context) Widget",id:"buildbuildcontext-context-widget",level:5},{value:"createElement() StatelessElement",id:"createelement-statelesselement",level:5},{value:"debugDescribeChildren() List&lt;DiagnosticsNode&gt;",id:"debugdescribechildren-listdiagnosticsnode",level:5},{value:"debugFillProperties(DiagnosticPropertiesBuilder properties) void",id:"debugfillpropertiesdiagnosticpropertiesbuilder-properties-void",level:5},{value:"noSuchMethod(Invocation invocation) dynamic",id:"nosuchmethodinvocation-invocation-dynamic",level:5},{value:"toDiagnosticsNode({String? name, DiagnosticsTreeStyle? style}) DiagnosticsNode",id:"todiagnosticsnodestring-name-diagnosticstreestyle-style-diagnosticsnode",level:5},{value:"toString({DiagnosticLevel minLevel = DiagnosticLevel.info}) String",id:"tostringdiagnosticlevel-minlevel--diagnosticlevelinfo-string",level:5},{value:"toStringDeep({String prefixLineOne = &#39;&#39;, String? prefixOtherLines, DiagnosticLevel minLevel = DiagnosticLevel.debug}) String",id:"tostringdeepstring-prefixlineone---string-prefixotherlines-diagnosticlevel-minlevel--diagnosticleveldebug-string",level:5},{value:"toStringShallow({String joiner = &#39;, &#39;, DiagnosticLevel minLevel = DiagnosticLevel.debug}) String",id:"tostringshallowstring-joiner----diagnosticlevel-minlevel--diagnosticleveldebug-string",level:5},{value:"toStringShort() String",id:"tostringshort-string",level:5},{value:"Operators",id:"operators",level:2},{value:"operator ==(Object other) bool",id:"operator-object-other-bool",level:5}],d={toc:p},c="wrapper";function u(t){let{components:e,...a}=t;return(0,i.kt)(c,(0,r.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"customavatar-class"},"CustomAvatar class"),(0,i.kt)("p",null,"Creates a custom avatar. The avatar is created using the image provided, or the first alphabet with a standard background color."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Inheritance")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://api.flutter.dev/flutter/dart-core/Object-class.html"},"Object")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://api.flutter.dev/flutter/foundation/DiagnosticableTree-class.html"},"DiagnosticableTree")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://api.flutter.dev/flutter/widgets/Widget-class.html"},"Widget")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://api.flutter.dev/flutter/widgets/StatelessWidget-class.html"},"StatelessWidget")),(0,i.kt)("li",{parentName:"ul"},"CustomAvatar")),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/talawa-mobile-docs/widgets_custom_avatar/CustomAvatar/"},"CustomAvatar")," ({",(0,i.kt)("a",{parentName:"p",href:"https://api.flutter.dev/flutter/foundation/Key-class.html"},"Key"),"? key, required ",(0,i.kt)("a",{parentName:"p",href:"https://api.flutter.dev/flutter/dart-core/bool-class.html"},"bool")," isImageNull, ",(0,i.kt)("a",{parentName:"p",href:"https://api.flutter.dev/flutter/dart-core/String-class.html"},"String"),"? firstAlphabet, ",(0,i.kt)("a",{parentName:"p",href:"https://pub.dev/documentation/flutter_cache_manager/3.3.1/flutter_cache_manager/BaseCacheManager-class.html"},"BaseCacheManager"),"? cacheManager, ",(0,i.kt)("a",{parentName:"p",href:"https://api.flutter.dev/flutter/dart-core/String-class.html"},"String"),"? imageUrl, ",(0,i.kt)("a",{parentName:"p",href:"https://api.flutter.dev/flutter/dart-core/double-class.html"},"double"),"? fontSize = 40})"),(0,i.kt)("p",null,"  ",(0,i.kt)("em",{parentName:"p"},"const")," "),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h5",{id:"cachemanager--basecachemanager"},(0,i.kt)("a",{parentName:"h5",href:"/docs/talawa-mobile-docs/widgets_custom_avatar/CustomAvatar/cacheManager"},"cacheManager")," ","\u2192"," ",(0,i.kt)("a",{parentName:"h5",href:"https://pub.dev/documentation/flutter_cache_manager/3.3.1/flutter_cache_manager/BaseCacheManager-class.html"},"BaseCacheManager"),"?"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},(0,i.kt)("span",{class:"feature"},"final"))),(0,i.kt)("h5",{id:"firstalphabet--string"},(0,i.kt)("a",{parentName:"h5",href:"/docs/talawa-mobile-docs/widgets_custom_avatar/CustomAvatar/firstAlphabet"},"firstAlphabet")," ","\u2192"," ",(0,i.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/dart-core/String-class.html"},"String"),"?"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},(0,i.kt)("span",{class:"feature"},"final"))),(0,i.kt)("h5",{id:"fontsize--double"},(0,i.kt)("a",{parentName:"h5",href:"/docs/talawa-mobile-docs/widgets_custom_avatar/CustomAvatar/fontSize"},"fontSize")," ","\u2192"," ",(0,i.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/dart-core/double-class.html"},"double"),"?"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},(0,i.kt)("span",{class:"feature"},"final"))),(0,i.kt)("h5",{id:"hashcode--int"},(0,i.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/widgets/Widget/hashCode.html"},"hashCode")," ","\u2192"," ",(0,i.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/dart-core/int-class.html"},"int")),(0,i.kt)("p",null,"The hash code for this object.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("span",{class:"feature"},"read-only"),(0,i.kt)("span",{class:"feature"},"inherited"))),(0,i.kt)("h5",{id:"imageurl--string"},(0,i.kt)("a",{parentName:"h5",href:"/docs/talawa-mobile-docs/widgets_custom_avatar/CustomAvatar/imageUrl"},"imageUrl")," ","\u2192"," ",(0,i.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/dart-core/String-class.html"},"String"),"?"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},(0,i.kt)("span",{class:"feature"},"final"))),(0,i.kt)("h5",{id:"isimagenull--bool"},(0,i.kt)("a",{parentName:"h5",href:"/docs/talawa-mobile-docs/widgets_custom_avatar/CustomAvatar/isImageNull"},"isImageNull")," ","\u2192"," ",(0,i.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/dart-core/bool-class.html"},"bool")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},(0,i.kt)("span",{class:"feature"},"final"))),(0,i.kt)("h5",{id:"key--key"},(0,i.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/widgets/Widget/key.html"},"key")," ","\u2192"," ",(0,i.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/foundation/Key-class.html"},"Key"),"?"),(0,i.kt)("p",null,"Controls how one widget replaces another widget in the tree.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("span",{class:"feature"},"final"),(0,i.kt)("span",{class:"feature"},"inherited"))),(0,i.kt)("h5",{id:"runtimetype--type"},(0,i.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html"},"runtimeType")," ","\u2192"," ",(0,i.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/dart-core/Type-class.html"},"Type")),(0,i.kt)("p",null,"A representation of the runtime type of the object.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("span",{class:"feature"},"read-only"),(0,i.kt)("span",{class:"feature"},"inherited"))),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h5",{id:"buildbuildcontext-context-widget"},(0,i.kt)("a",{parentName:"h5",href:"/docs/talawa-mobile-docs/widgets_custom_avatar/CustomAvatar/build"},"build"),"(",(0,i.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/widgets/BuildContext-class.html"},"BuildContext")," context) ",(0,i.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/widgets/Widget-class.html"},"Widget")),(0,i.kt)("p",null,"Describes the part of the user interface represented by this widget.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("span",{class:"feature"},"override"))),(0,i.kt)("h5",{id:"createelement-statelesselement"},(0,i.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/widgets/StatelessWidget/createElement.html"},"createElement"),"() ",(0,i.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/widgets/StatelessElement-class.html"},"StatelessElement")),(0,i.kt)("p",null,"Creates a ",(0,i.kt)("a",{href:"https://api.flutter.dev/flutter/widgets/StatelessElement-class.html"},"StatelessElement")," to manage this widget's location in the tree.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("span",{class:"feature"},"inherited"))),(0,i.kt)("h5",{id:"debugdescribechildren-listdiagnosticsnode"},(0,i.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/foundation/DiagnosticableTree/debugDescribeChildren.html"},"debugDescribeChildren"),"() ",(0,i.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/dart-core/List-class.html"},"List"),"<",(0,i.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/foundation/DiagnosticsNode-class.html"},"DiagnosticsNode"),">"),(0,i.kt)("p",null,"Returns a list of ",(0,i.kt)("code",null,"DiagnosticsNode")," objects describing this node's\nchildren.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("span",{class:"feature"},"inherited"))),(0,i.kt)("h5",{id:"debugfillpropertiesdiagnosticpropertiesbuilder-properties-void"},(0,i.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/widgets/Widget/debugFillProperties.html"},"debugFillProperties"),"(",(0,i.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/foundation/DiagnosticPropertiesBuilder-class.html"},"DiagnosticPropertiesBuilder")," properties) void"),(0,i.kt)("p",null,"Add additional properties associated with the node.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("span",{class:"feature"},"inherited"))),(0,i.kt)("h5",{id:"nosuchmethodinvocation-invocation-dynamic"},(0,i.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html"},"noSuchMethod"),"(",(0,i.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/dart-core/Invocation-class.html"},"Invocation")," invocation) dynamic"),(0,i.kt)("p",null,"Invoked when a non-existent method or property is accessed.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("span",{class:"feature"},"inherited"))),(0,i.kt)("h5",{id:"todiagnosticsnodestring-name-diagnosticstreestyle-style-diagnosticsnode"},(0,i.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toDiagnosticsNode.html"},"toDiagnosticsNode"),"({",(0,i.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/dart-core/String-class.html"},"String"),"? name, ",(0,i.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/foundation/DiagnosticsTreeStyle.html"},"DiagnosticsTreeStyle"),"? style}) ",(0,i.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/foundation/DiagnosticsNode-class.html"},"DiagnosticsNode")),(0,i.kt)("p",null,"Returns a debug representation of the object that is used by debugging\ntools and by ",(0,i.kt)("a",{href:"https://api.flutter.dev/flutter/foundation/DiagnosticsNode/toStringDeep.html"},"DiagnosticsNode.toStringDeep"),".",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("span",{class:"feature"},"inherited"))),(0,i.kt)("h5",{id:"tostringdiagnosticlevel-minlevel--diagnosticlevelinfo-string"},(0,i.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/foundation/Diagnosticable/toString.html"},"toString"),"({",(0,i.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/foundation/DiagnosticLevel.html"},"DiagnosticLevel")," minLevel = DiagnosticLevel.info}) ",(0,i.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/dart-core/String-class.html"},"String")),(0,i.kt)("p",null,"A string representation of this object.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("span",{class:"feature"},"inherited"))),(0,i.kt)("h5",{id:"tostringdeepstring-prefixlineone---string-prefixotherlines-diagnosticlevel-minlevel--diagnosticleveldebug-string"},(0,i.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringDeep.html"},"toStringDeep"),"({",(0,i.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/dart-core/String-class.html"},"String")," prefixLineOne = '', ",(0,i.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/dart-core/String-class.html"},"String"),"? prefixOtherLines, ",(0,i.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/foundation/DiagnosticLevel.html"},"DiagnosticLevel")," minLevel = DiagnosticLevel.debug}) ",(0,i.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/dart-core/String-class.html"},"String")),(0,i.kt)("p",null,"Returns a string representation of this node and its descendants.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("span",{class:"feature"},"inherited"))),(0,i.kt)("h5",{id:"tostringshallowstring-joiner----diagnosticlevel-minlevel--diagnosticleveldebug-string"},(0,i.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/foundation/DiagnosticableTree/toStringShallow.html"},"toStringShallow"),"({",(0,i.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/dart-core/String-class.html"},"String")," joiner = ', ', ",(0,i.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/foundation/DiagnosticLevel.html"},"DiagnosticLevel")," minLevel = DiagnosticLevel.debug}) ",(0,i.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/dart-core/String-class.html"},"String")),(0,i.kt)("p",null,"Returns a one-line detailed description of the object.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("span",{class:"feature"},"inherited"))),(0,i.kt)("h5",{id:"tostringshort-string"},(0,i.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/widgets/Widget/toStringShort.html"},"toStringShort"),"() ",(0,i.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/dart-core/String-class.html"},"String")),(0,i.kt)("p",null,"A short, textual description of this widget.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("span",{class:"feature"},"inherited"))),(0,i.kt)("h2",{id:"operators"},"Operators"),(0,i.kt)("h5",{id:"operator-object-other-bool"},(0,i.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/widgets/Widget/operator_equals.html"},"operator =="),"(",(0,i.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/dart-core/Object-class.html"},"Object")," other) ",(0,i.kt)("a",{parentName:"h5",href:"https://api.flutter.dev/flutter/dart-core/bool-class.html"},"bool")),(0,i.kt)("p",null,"The equality operator.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("span",{class:"feature"},"inherited"))))}u.isMDXComponent=!0}}]);