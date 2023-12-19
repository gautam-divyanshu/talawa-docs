"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[78185],{35320:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>d,toc:()=>o});var n=s(85893),i=s(11151);const a={},r="build method",d={id:"talawa-mobile-docs/views_after_auth_screens_tasks_user_tasks_page/UserTasksPage/build",title:"build method",description:"- @override",source:"@site/docs/talawa-mobile-docs/views_after_auth_screens_tasks_user_tasks_page/UserTasksPage/build.md",sourceDirName:"talawa-mobile-docs/views_after_auth_screens_tasks_user_tasks_page/UserTasksPage",slug:"/talawa-mobile-docs/views_after_auth_screens_tasks_user_tasks_page/UserTasksPage/build",permalink:"/docs/talawa-mobile-docs/views_after_auth_screens_tasks_user_tasks_page/UserTasksPage/build",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/views_after_auth_screens_tasks_user_tasks_page/UserTasksPage/build.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"UserTasksPage constructor",permalink:"/docs/talawa-mobile-docs/views_after_auth_screens_tasks_user_tasks_page/UserTasksPage/"},next:{title:"UserTasksPage class",permalink:"/docs/talawa-mobile-docs/views_after_auth_screens_tasks_user_tasks_page/UserTasksPage-class"}},l={},o=[{value:"Implementation",id:"implementation",level:2}];function h(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"build-method",children:"build method"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["@",(0,n.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/override-constant.html",children:"override"})]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://api.flutter.dev/flutter/widgets/Widget-class.html",children:"Widget"})," build\n(",(0,n.jsx)(t.a,{href:"https://api.flutter.dev/flutter/widgets/BuildContext-class.html",children:"BuildContext"})," context)"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:(0,n.jsx)("span",{class:"feature",children:"override"})})}),"\n",(0,n.jsx)("p",{children:"Describes the part of the user interface represented by this widget."}),"\n",(0,n.jsxs)("p",{children:["The framework calls this method when this widget is inserted into the tree\nin a given ",(0,n.jsx)("a",{href:"https://api.flutter.dev/flutter/widgets/BuildContext-class.html",children:"BuildContext"})," and when the dependencies of this widget change\n(e.g., an ",(0,n.jsx)("a",{href:"https://api.flutter.dev/flutter/widgets/InheritedWidget-class.html",children:"InheritedWidget"})," referenced by this widget changes). This\nmethod can potentially be called in every frame and should not have any side\neffects beyond building a widget."]}),"\n",(0,n.jsxs)("p",{children:["The framework replaces the subtree below this widget with the widget\nreturned by this method, either by updating the existing subtree or by\nremoving the subtree and inflating a new subtree, depending on whether the\nwidget returned by this method can update the root of the existing\nsubtree, as determined by calling ",(0,n.jsx)("a",{href:"https://api.flutter.dev/flutter/widgets/Widget/canUpdate.html",children:"Widget.canUpdate"}),"."]}),"\n",(0,n.jsxs)("p",{children:["Typically implementations return a newly created constellation of widgets\nthat are configured with information from this widget's constructor and\nfrom the given ",(0,n.jsx)("a",{href:"https://api.flutter.dev/flutter/widgets/BuildContext-class.html",children:"BuildContext"}),"."]}),"\n",(0,n.jsxs)("p",{children:["The given ",(0,n.jsx)("a",{href:"https://api.flutter.dev/flutter/widgets/BuildContext-class.html",children:"BuildContext"})," contains information about the location in the\ntree at which this widget is being built. For example, the context\nprovides the set of inherited widgets for this location in the tree. A\ngiven widget might be built with multiple different ",(0,n.jsx)("a",{href:"https://api.flutter.dev/flutter/widgets/BuildContext-class.html",children:"BuildContext"}),"\narguments over time if the widget is moved around the tree or if the\nwidget is inserted into the tree in multiple places at once."]}),"\n",(0,n.jsx)("p",{children:"The implementation of this method must only depend on:"}),"\n",(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"the fields of the widget, which themselves must not change over time,\nand"}),(0,n.jsxs)("li",{children:["any ambient state obtained from the ",(0,n.jsx)("code",{children:"context"})," using\n",(0,n.jsx)("a",{href:"https://api.flutter.dev/flutter/widgets/BuildContext/dependOnInheritedWidgetOfExactType.html",children:"BuildContext.dependOnInheritedWidgetOfExactType"}),"."]})]}),"\n",(0,n.jsxs)("p",{children:["If a widget's ",(0,n.jsx)("a",{href:"../../views_after_auth_screens_tasks_user_tasks_page/UserTasksPage/build.md",children:"build"})," method is to depend on anything else, use a\n",(0,n.jsx)("a",{href:"https://api.flutter.dev/flutter/widgets/StatefulWidget-class.html",children:"StatefulWidget"})," instead."]}),"\n",(0,n.jsx)("p",{children:"See also:"}),"\n",(0,n.jsx)("ul",{children:(0,n.jsxs)("li",{children:[(0,n.jsx)("a",{href:"https://api.flutter.dev/flutter/widgets/StatelessWidget-class.html",children:"StatelessWidget"}),", which contains the discussion on performance considerations."]})}),"\n",(0,n.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-dart",children:"@override\nWidget build(BuildContext context) {\n  return BaseView<ExploreTasksViewModel>(\n    onModelReady: (model) => model.fetchTasksByUser(),\n    builder: (_, model, __) {\n      final tasks = model.tasks;\n      return RefreshIndicator(\n        onRefresh: () => model.fetchTasksByUser(),\n        child: Scaffold(\n          appBar: AppBar(\n            title: const Text('User Tasks'),\n          ),\n          // TaskSchedule is custom widget.\n          body: TaskSchedule(tasks: tasks, showMoreOptions: true),\n        ),\n      );\n    },\n  );\n}\n"})})]})}function c(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>d,a:()=>r});var n=s(67294);const i={},a=n.createContext(i);function r(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);