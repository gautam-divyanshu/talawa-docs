"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[24906],{99203:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>r});var i=n(85893),s=n(11151);const l={},c="fetchList method",o={id:"talawa-mobile-docs/plugins_fetch_plugin_list/FetchPluginList/fetchList",title:"fetchList method",description:"Future&lt;void> fetchList",source:"@site/docs/talawa-mobile-docs/plugins_fetch_plugin_list/FetchPluginList/fetchList.md",sourceDirName:"talawa-mobile-docs/plugins_fetch_plugin_list/FetchPluginList",slug:"/talawa-mobile-docs/plugins_fetch_plugin_list/FetchPluginList/fetchList",permalink:"/docs/talawa-mobile-docs/plugins_fetch_plugin_list/FetchPluginList/fetchList",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/plugins_fetch_plugin_list/FetchPluginList/fetchList.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"box property",permalink:"/docs/talawa-mobile-docs/plugins_fetch_plugin_list/FetchPluginList/box"},next:{title:"FetchPluginList class",permalink:"/docs/talawa-mobile-docs/plugins_fetch_plugin_list/FetchPluginList-class"}},a={},r=[{value:"Implementation",id:"implementation",level:2}];function u(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"fetchlist-method",children:"fetchList method"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.a,{href:"https://api.flutter.dev/flutter/dart-async/Future-class.html",children:"Future"}),"<void> fetchList\n()"]}),"\n",(0,i.jsxs)("p",{children:["Fetches plugins from server and stores them in Hive ",(0,i.jsx)("code",{children:"pluginBox"}),"."]}),"\n",(0,i.jsxs)("p",{children:[(0,i.jsx)("strong",{children:"params"}),":\nNone"]}),"\n",(0,i.jsxs)("p",{children:[(0,i.jsx)("strong",{children:"returns"}),":"]}),"\n",(0,i.jsx)("ul",{children:(0,i.jsxs)("li",{children:[(0,i.jsx)("code",{children:"Future<void>"}),": it returns Future of void"]})}),"\n",(0,i.jsx)(e.h2,{id:"implementation",children:"Implementation"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-dart",children:"Future<void> fetchList() async {\n  late final GraphQLClient client = graphqlConfig.clientToQuery();\n  final QueryResult result = await client.query(\n    QueryOptions(\n      document: gql(queries.getPluginsList()),\n    ),\n  );\n  box = Hive.box('pluginBox');\n  box.put('plugins', result.data![\"getPlugins\"]);\n}\n"})})]})}function d(t={}){const{wrapper:e}={...(0,s.a)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(u,{...t})}):u(t)}},11151:(t,e,n)=>{n.d(e,{Z:()=>o,a:()=>c});var i=n(67294);const s={},l=i.createContext(s);function c(t){const e=i.useContext(l);return i.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function o(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:c(t.components),i.createElement(l.Provider,{value:e},t.children)}}}]);