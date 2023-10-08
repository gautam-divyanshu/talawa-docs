"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[78185],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var s=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,s,r=function(e,t){if(null==e)return{};var a,s,r={},n=Object.keys(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=s.createContext({}),d=function(e){var t=s.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=d(e.components);return s.createElement(o.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},h=s.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(a),h=r,f=c["".concat(o,".").concat(h)]||c[h]||p[h]||n;return a?s.createElement(f,i(i({ref:t},u),{},{components:a})):s.createElement(f,i({ref:t},u))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=h;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<n;d++)i[d]=a[d];return s.createElement.apply(null,i)}return s.createElement.apply(null,a)}h.displayName="MDXCreateElement"},76819:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>d});var s=a(87462),r=(a(67294),a(3905));const n={},i="build method",l={unversionedId:"talawa-mobile-docs/views_after_auth_screens_tasks_user_tasks_page/UserTasksPage/build",id:"talawa-mobile-docs/views_after_auth_screens_tasks_user_tasks_page/UserTasksPage/build",title:"build method",description:"- @override",source:"@site/docs/talawa-mobile-docs/views_after_auth_screens_tasks_user_tasks_page/UserTasksPage/build.md",sourceDirName:"talawa-mobile-docs/views_after_auth_screens_tasks_user_tasks_page/UserTasksPage",slug:"/talawa-mobile-docs/views_after_auth_screens_tasks_user_tasks_page/UserTasksPage/build",permalink:"/docs/talawa-mobile-docs/views_after_auth_screens_tasks_user_tasks_page/UserTasksPage/build",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/views_after_auth_screens_tasks_user_tasks_page/UserTasksPage/build.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"UserTasksPage constructor",permalink:"/docs/talawa-mobile-docs/views_after_auth_screens_tasks_user_tasks_page/UserTasksPage/"},next:{title:"UserTasksPage class",permalink:"/docs/talawa-mobile-docs/views_after_auth_screens_tasks_user_tasks_page/UserTasksPage-class"}},o={},d=[{value:"Implementation",id:"implementation",level:2}],u={toc:d},c="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,s.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"build-method"},"build method"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"@",(0,r.kt)("a",{parentName:"li",href:"https://api.flutter.dev/flutter/dart-core/override-constant.html"},"override"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://api.flutter.dev/flutter/widgets/Widget-class.html"},"Widget")," build\n(",(0,r.kt)("a",{parentName:"p",href:"https://api.flutter.dev/flutter/widgets/BuildContext-class.html"},"BuildContext")," context)"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("span",{class:"feature"},"override"))),(0,r.kt)("p",null,"Describes the part of the user interface represented by this widget."),(0,r.kt)("p",null,"The framework calls this method when this widget is inserted into the tree in a given ",(0,r.kt)("a",{href:"https://api.flutter.dev/flutter/widgets/BuildContext-class.html"},"BuildContext")," and when the dependencies of this widget change (e.g., an ",(0,r.kt)("a",{href:"https://api.flutter.dev/flutter/widgets/InheritedWidget-class.html"},"InheritedWidget")," referenced by this widget changes). This method can potentially be called in every frame and should not have any side effects beyond building a widget."),(0,r.kt)("p",null,"The framework replaces the subtree below this widget with the widget returned by this method, either by updating the existing subtree or by removing the subtree and inflating a new subtree, depending on whether the widget returned by this method can update the root of the existing subtree, as determined by calling ",(0,r.kt)("a",{href:"https://api.flutter.dev/flutter/widgets/Widget/canUpdate.html"},"Widget.canUpdate"),"."),(0,r.kt)("p",null,"Typically implementations return a newly created constellation of widgets that are configured with information from this widget's constructor and from the given ",(0,r.kt)("a",{href:"https://api.flutter.dev/flutter/widgets/BuildContext-class.html"},"BuildContext"),"."),(0,r.kt)("p",null,"The given ",(0,r.kt)("a",{href:"https://api.flutter.dev/flutter/widgets/BuildContext-class.html"},"BuildContext")," contains information about the location in the tree at which this widget is being built. For example, the context provides the set of inherited widgets for this location in the tree. A given widget might be built with multiple different ",(0,r.kt)("a",{href:"https://api.flutter.dev/flutter/widgets/BuildContext-class.html"},"BuildContext"),"arguments over time if the widget is moved around the tree or if the widget is inserted into the tree in multiple places at once."),(0,r.kt)("p",null,"The implementation of this method must only depend on:"),(0,r.kt)("ul",null,(0,r.kt)("li",null,"the fields of the widget, which themselves must not change over time, and"),(0,r.kt)("li",null,"any ambient state obtained from the ",(0,r.kt)("code",null,"context")," using",(0,r.kt)("a",{href:"https://api.flutter.dev/flutter/widgets/BuildContext/dependOnInheritedWidgetOfExactType.html"},"BuildContext.dependOnInheritedWidgetOfExactType"),".")),(0,r.kt)("p",null,"If a widget's ",(0,r.kt)("a",{href:"../../views_after_auth_screens_tasks_user_tasks_page/UserTasksPage/build.md"},"build")," method is to depend on anything else, use a",(0,r.kt)("a",{href:"https://api.flutter.dev/flutter/widgets/StatefulWidget-class.html"},"StatefulWidget")," instead."),(0,r.kt)("p",null,"See also:"),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("a",{href:"https://api.flutter.dev/flutter/widgets/StatelessWidget-class.html"},"StatelessWidget"),", which contains the discussion on performance considerations.")),(0,r.kt)("h2",{id:"implementation"},"Implementation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"@override\nWidget build(BuildContext context) {\n  return BaseView<ExploreTasksViewModel>(\n    onModelReady: (model) => model.fetchTasksByUser(),\n    builder: (_, model, __) {\n      final tasks = model.tasks;\n      return RefreshIndicator(\n        onRefresh: () => model.fetchTasksByUser(),\n        child: Scaffold(\n          appBar: AppBar(\n            title: const Text('User Tasks'),\n          ),\n          // TaskSchedule is custom widget.\n          body: TaskSchedule(tasks: tasks, showMoreOptions: true),\n        ),\n      );\n    },\n  );\n}\n")))}p.isMDXComponent=!0}}]);