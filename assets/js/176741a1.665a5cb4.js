"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[67346],{56449:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(85893),o=n(11151);const i={},r="clientToQuery method",l={id:"talawa-mobile-docs/services_graphql_config/GraphqlConfig/clientToQuery",title:"clientToQuery method",description:"GraphQLClient clientToQuery",source:"@site/docs/talawa-mobile-docs/services_graphql_config/GraphqlConfig/clientToQuery.md",sourceDirName:"talawa-mobile-docs/services_graphql_config/GraphqlConfig",slug:"/talawa-mobile-docs/services_graphql_config/GraphqlConfig/clientToQuery",permalink:"/docs/talawa-mobile-docs/services_graphql_config/GraphqlConfig/clientToQuery",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/services_graphql_config/GraphqlConfig/clientToQuery.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"authClient method",permalink:"/docs/talawa-mobile-docs/services_graphql_config/GraphqlConfig/authClient"},next:{title:"displayImgRoute property",permalink:"/docs/talawa-mobile-docs/services_graphql_config/GraphqlConfig/displayImgRoute"}},c={},s=[{value:"Implementation",id:"implementation",level:2}];function p(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"clienttoquery-method",children:"clientToQuery method"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://pub.dev/documentation/graphql/5.2.0-beta.4/graphql/GraphQLClient-class.html",children:"GraphQLClient"})," clientToQuery\n()"]}),"\n",(0,a.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-dart",children:"GraphQLClient clientToQuery() {\n  //TODO: Implement websocket link from OrgUrl\n  // final link = Link.split(\n  //     (request) => request.isSubscription, webSocketLink, httpLink);\n  return GraphQLClient(\n    cache: GraphQLCache(partialDataPolicy: PartialDataCachePolicy.accept),\n    link: httpLink,\n  );\n}\n"})})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>r});var a=n(67294);const o={},i=a.createContext(o);function r(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);