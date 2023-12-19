"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[75146],{36322:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>c,frontMatter:()=>n,metadata:()=>d,toc:()=>a});var s=o(85893),i=o(11151);const n={},l="dispose method",d={id:"talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_explore_events_view_model/ExploreEventsViewModel/dispose",title:"dispose method",description:"- @override",source:"@site/docs/talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_explore_events_view_model/ExploreEventsViewModel/dispose.md",sourceDirName:"talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_explore_events_view_model/ExploreEventsViewModel",slug:"/talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_explore_events_view_model/ExploreEventsViewModel/dispose",permalink:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_explore_events_view_model/ExploreEventsViewModel/dispose",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_explore_events_view_model/ExploreEventsViewModel/dispose.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"deleteEvent method",permalink:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_explore_events_view_model/ExploreEventsViewModel/deleteEvent"},next:{title:"emptyListMessage property",permalink:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_explore_events_view_model/ExploreEventsViewModel/emptyListMessage"}},r={},a=[{value:"Implementation",id:"implementation",level:2}];function _(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"dispose-method",children:"dispose method"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["@",(0,s.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/override-constant.html",children:"override"})]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"void dispose\n()"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:(0,s.jsx)("span",{class:"feature",children:"override"})})}),"\n",(0,s.jsxs)("p",{children:["Discards any resources used by the object. After this is called, the\nobject is not in a usable state and should be discarded (calls to\n",(0,s.jsx)("a",{href:"https://api.flutter.dev/flutter/foundation/ChangeNotifier/addListener.html",children:"addListener"})," will throw after the object is disposed)."]}),"\n",(0,s.jsx)("p",{children:"This method should only be called by the object's owner."}),"\n",(0,s.jsx)("p",{children:"This method does not notify listeners, and clears the listener list once\nit is called. Consumers of this class must decide on whether to notify\nlisteners or not immediately before disposal."}),"\n",(0,s.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-dart",children:"@override\nvoid dispose() {\n  _eventStreamSubscription.cancel();\n  _currentOrganizationStreamSubscription.cancel();\n  super.dispose();\n}\n"})})]})}function c(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(_,{...e})}):_(e)}},11151:(e,t,o)=>{o.d(t,{Z:()=>d,a:()=>l});var s=o(67294);const i={},n=s.createContext(i);function l(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);