"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[99855],{14031:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>r,toc:()=>d});var i=e(85893),l=e(11151);const n={},o="validateURL method",r={id:"talawa-mobile-docs/utils_validators/Validator/validateURL",title:"validateURL method",description:"String? validateURL",source:"@site/docs/talawa-mobile-docs/utils_validators/Validator/validateURL.md",sourceDirName:"talawa-mobile-docs/utils_validators/Validator",slug:"/talawa-mobile-docs/utils_validators/Validator/validateURL",permalink:"/docs/talawa-mobile-docs/utils_validators/Validator/validateURL",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/utils_validators/Validator/validateURL.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"validatePasswordConfirm method",permalink:"/docs/talawa-mobile-docs/utils_validators/Validator/validatePasswordConfirm"},next:{title:"validateUrlExistence method",permalink:"/docs/talawa-mobile-docs/utils_validators/Validator/validateUrlExistence"}},s={},d=[{value:"Implementation",id:"implementation",level:2}];function c(t){const a={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,l.a)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.h1,{id:"validateurl-method",children:"validateURL method"}),"\n",(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.a,{href:"https://api.flutter.dev/flutter/dart-core/String-class.html",children:"String"}),"? validateURL\n(",(0,i.jsx)(a.a,{href:"https://api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," value)"]}),"\n",(0,i.jsx)(a.h2,{id:"implementation",children:"Implementation"}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-dart",children:"static String? validateURL(\n  String value,\n) {\n  if (value.isEmpty) {\n    return 'Please verify URL first';\n  }\n  final bool validURL = Uri.parse(value).isAbsolute;\n  if (!validURL) {\n    return 'Enter a valid URL';\n  }\n  return null;\n}\n"})})]})}function u(t={}){const{wrapper:a}={...(0,l.a)(),...t.components};return a?(0,i.jsx)(a,{...t,children:(0,i.jsx)(c,{...t})}):c(t)}},11151:(t,a,e)=>{e.d(a,{Z:()=>r,a:()=>o});var i=e(67294);const l={},n=i.createContext(l);function o(t){const a=i.useContext(n);return i.useMemo((function(){return"function"==typeof t?t(a):{...a,...t}}),[a,t])}function r(t){let a;return a=t.disableParentContext?"function"==typeof t.components?t.components(l):t.components||l:o(t.components),i.createElement(n.Provider,{value:a},t.children)}}}]);