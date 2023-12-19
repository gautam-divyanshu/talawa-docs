"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[61268],{36152:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>n,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>r});var l=t(85893),o=t(11151);const i={},n="load method",s={id:"talawa-mobile-docs/utils_app_localization/AppLocalizationsDelegate/load",title:"load method",description:"- @override",source:"@site/docs/talawa-mobile-docs/utils_app_localization/AppLocalizationsDelegate/load.md",sourceDirName:"talawa-mobile-docs/utils_app_localization/AppLocalizationsDelegate",slug:"/talawa-mobile-docs/utils_app_localization/AppLocalizationsDelegate/load",permalink:"/docs/talawa-mobile-docs/utils_app_localization/AppLocalizationsDelegate/load",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/utils_app_localization/AppLocalizationsDelegate/load.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"isTest property",permalink:"/docs/talawa-mobile-docs/utils_app_localization/AppLocalizationsDelegate/isTest"},next:{title:"shouldReload method",permalink:"/docs/talawa-mobile-docs/utils_app_localization/AppLocalizationsDelegate/shouldReload"}},c={},r=[{value:"Implementation",id:"implementation",level:2}];function d(e){const a={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.h1,{id:"load-method",children:"load method"}),"\n",(0,l.jsxs)(a.ul,{children:["\n",(0,l.jsxs)(a.li,{children:["@",(0,l.jsx)(a.a,{href:"https://api.flutter.dev/flutter/dart-core/override-constant.html",children:"override"})]}),"\n"]}),"\n",(0,l.jsxs)(a.p,{children:[(0,l.jsx)(a.a,{href:"https://api.flutter.dev/flutter/dart-async/Future-class.html",children:"Future"}),"<",(0,l.jsx)(a.a,{href:"/docs/talawa-mobile-docs/utils_app_localization/AppLocalizations-class",children:"AppLocalizations"}),"> load\n(",(0,l.jsx)(a.a,{href:"https://api.flutter.dev/flutter/dart-ui/Locale-class.html",children:"Locale"})," locale)"]}),"\n",(0,l.jsx)(a.p,{children:(0,l.jsx)(a.em,{children:(0,l.jsx)("span",{class:"feature",children:"override"})})}),"\n",(0,l.jsxs)("p",{children:["Start loading the resources for ",(0,l.jsx)("code",{children:"locale"}),". The returned future completes\nwhen the resources have finished loading."]}),"\n",(0,l.jsxs)("p",{children:["It's assumed that this method will return an object that contains a\ncollection of related string resources (typically defined with one method\nper resource). The object will be retrieved with ",(0,l.jsx)("a",{href:"https://api.flutter.dev/flutter/widgets/Localizations/of.html",children:"Localizations.of"}),"."]}),"\n",(0,l.jsx)(a.h2,{id:"implementation",children:"Implementation"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-dart",children:"@override\nFuture<AppLocalizations> load(Locale locale) async {\n  // AppLocalizations class is where the JSON loading actually runs\n  final AppLocalizations localizations =\n      AppLocalizations(locale, isTest: isTest);\n  if (isTest) {\n    await localizations.loadTest(locale);\n  } else {\n    await localizations.load();\n  }\n\n  return localizations;\n}\n"})})]})}function p(e={}){const{wrapper:a}={...(0,o.a)(),...e.components};return a?(0,l.jsx)(a,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},11151:(e,a,t)=>{t.d(a,{Z:()=>s,a:()=>n});var l=t(67294);const o={},i=l.createContext(o);function n(e){const a=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:n(e.components),l.createElement(i.Provider,{value:a},e.children)}}}]);