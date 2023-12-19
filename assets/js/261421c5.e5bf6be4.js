"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[25277],{6540:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>d,toc:()=>i});var o=n(85893),s=n(11151);const r={},l="dropDownList method",d={id:"talawa-mobile-docs/views_after_auth_screens_events_explore_events/ExploreEvents/dropDownList",title:"dropDownList method",description:"Widget dropDownList",source:"@site/docs/talawa-mobile-docs/views_after_auth_screens_events_explore_events/ExploreEvents/dropDownList.md",sourceDirName:"talawa-mobile-docs/views_after_auth_screens_events_explore_events/ExploreEvents",slug:"/talawa-mobile-docs/views_after_auth_screens_events_explore_events/ExploreEvents/dropDownList",permalink:"/docs/talawa-mobile-docs/views_after_auth_screens_events_explore_events/ExploreEvents/dropDownList",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/views_after_auth_screens_events_explore_events/ExploreEvents/dropDownList.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"build method",permalink:"/docs/talawa-mobile-docs/views_after_auth_screens_events_explore_events/ExploreEvents/build"},next:{title:"homeModel property",permalink:"/docs/talawa-mobile-docs/views_after_auth_screens_events_explore_events/ExploreEvents/homeModel"}},a={},i=[{value:"Implementation",id:"implementation",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"dropdownlist-method",children:"dropDownList method"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https://api.flutter.dev/flutter/widgets/Widget-class.html",children:"Widget"})," dropDownList\n(",(0,o.jsx)(t.a,{href:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_event_view_models_explore_events_view_model/ExploreEventsViewModel-class",children:"ExploreEventsViewModel"})," model, ",(0,o.jsx)(t.a,{href:"https://api.flutter.dev/flutter/widgets/BuildContext-class.html",children:"BuildContext"})," context)"]}),"\n",(0,o.jsxs)("p",{children:["Shows a list of dropdown taken from  ",(0,o.jsx)("code",{children:"model"})," and ",(0,o.jsx)("code",{children:"context"}),"."]}),"\n",(0,o.jsxs)("p",{children:[(0,o.jsx)("strong",{children:"params"}),":"]}),"\n",(0,o.jsxs)("ul",{children:[(0,o.jsxs)("li",{children:[(0,o.jsx)("code",{children:"model"}),": contains the events data"]}),(0,o.jsxs)("li",{children:[(0,o.jsx)("code",{children:"context"}),": the overall context of UI"]})]}),"\n",(0,o.jsxs)("p",{children:[(0,o.jsx)("strong",{children:"returns"}),":"]}),"\n",(0,o.jsx)("ul",{children:(0,o.jsxs)("li",{children:[(0,o.jsx)("code",{children:"Widget"}),": the dropdown"]})}),"\n",(0,o.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-dart",children:"Widget dropDownList(ExploreEventsViewModel model, BuildContext context) {\n  return DropdownButton<String>(\n    key: homeModel?.keySECategoryMenu,\n    value: model.chosenValue,\n    isExpanded: true,\n    items: <String>[\n      'All Events',\n      'Created Events',\n      'Registered Events',\n      'Public Events',\n      'Private Events',\n    ].map<DropdownMenuItem<String>>((String value) {\n      return DropdownMenuItem<String>(\n        value: value,\n        child: Text(\n          AppLocalizations.of(context)!.strictTranslate(value),\n          style: Theme.of(context)\n              .textTheme\n              .titleLarge!\n              .copyWith(color: Theme.of(context).colorScheme.secondary),\n        ),\n      );\n    }).toList(),\n    onChanged: (value) {\n      model.choseValueFromDropdown(value!);\n    },\n  );\n}\n"})})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>l});var o=n(67294);const s={},r=o.createContext(s);function l(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);