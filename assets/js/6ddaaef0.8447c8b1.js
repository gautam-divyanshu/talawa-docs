"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[16334],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=i.createContext({}),s=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(d.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=s(n),h=r,f=u["".concat(d,".").concat(h)]||u[h]||p[h]||l;return n?i.createElement(f,o(o({ref:t},c),{},{components:n})):i.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=h;var a={};for(var d in t)hasOwnProperty.call(t,d)&&(a[d]=t[d]);a.originalType=e,a[u]="string"==typeof e?e:r,o[1]=a;for(var s=2;s<l;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},28246:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>s});var i=n(87462),r=(n(67294),n(3905));const l={},o="build method",a={unversionedId:"talawa-mobile-docs/widgets_task_form/DescriptionField/build",id:"talawa-mobile-docs/widgets_task_form/DescriptionField/build",title:"build method",description:"- @override",source:"@site/docs/talawa-mobile-docs/widgets_task_form/DescriptionField/build.md",sourceDirName:"talawa-mobile-docs/widgets_task_form/DescriptionField",slug:"/talawa-mobile-docs/widgets_task_form/DescriptionField/build",permalink:"/docs/talawa-mobile-docs/widgets_task_form/DescriptionField/build",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/widgets_task_form/DescriptionField/build.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"DescriptionField constructor",permalink:"/docs/talawa-mobile-docs/widgets_task_form/DescriptionField/"},next:{title:"DescriptionField class",permalink:"/docs/talawa-mobile-docs/widgets_task_form/DescriptionField-class"}},d={},s=[{value:"Implementation",id:"implementation",level:2}],c={toc:s},u="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"build-method"},"build method"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"@",(0,r.kt)("a",{parentName:"li",href:"https://api.flutter.dev/flutter/dart-core/override-constant.html"},"override"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://api.flutter.dev/flutter/widgets/Widget-class.html"},"Widget")," build\n(",(0,r.kt)("a",{parentName:"p",href:"https://api.flutter.dev/flutter/widgets/BuildContext-class.html"},"BuildContext")," context)"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("span",{class:"feature"},"override"))),(0,r.kt)("p",null,"Describes the part of the user interface represented by this widget."),(0,r.kt)("p",null,"The framework calls this method when this widget is inserted into the tree in a given ",(0,r.kt)("a",{href:"https://api.flutter.dev/flutter/widgets/BuildContext-class.html"},"BuildContext")," and when the dependencies of this widget change (e.g., an ",(0,r.kt)("a",{href:"https://api.flutter.dev/flutter/widgets/InheritedWidget-class.html"},"InheritedWidget")," referenced by this widget changes). This method can potentially be called in every frame and should not have any side effects beyond building a widget."),(0,r.kt)("p",null,"The framework replaces the subtree below this widget with the widget returned by this method, either by updating the existing subtree or by removing the subtree and inflating a new subtree, depending on whether the widget returned by this method can update the root of the existing subtree, as determined by calling ",(0,r.kt)("a",{href:"https://api.flutter.dev/flutter/widgets/Widget/canUpdate.html"},"Widget.canUpdate"),"."),(0,r.kt)("p",null,"Typically implementations return a newly created constellation of widgets that are configured with information from this widget's constructor and from the given ",(0,r.kt)("a",{href:"https://api.flutter.dev/flutter/widgets/BuildContext-class.html"},"BuildContext"),"."),(0,r.kt)("p",null,"The given ",(0,r.kt)("a",{href:"https://api.flutter.dev/flutter/widgets/BuildContext-class.html"},"BuildContext")," contains information about the location in the tree at which this widget is being built. For example, the context provides the set of inherited widgets for this location in the tree. A given widget might be built with multiple different ",(0,r.kt)("a",{href:"https://api.flutter.dev/flutter/widgets/BuildContext-class.html"},"BuildContext"),"arguments over time if the widget is moved around the tree or if the widget is inserted into the tree in multiple places at once."),(0,r.kt)("p",null,"The implementation of this method must only depend on:"),(0,r.kt)("ul",null,(0,r.kt)("li",null,"the fields of the widget, which themselves must not change over time, and"),(0,r.kt)("li",null,"any ambient state obtained from the ",(0,r.kt)("code",null,"context")," using",(0,r.kt)("a",{href:"https://api.flutter.dev/flutter/widgets/BuildContext/dependOnInheritedWidgetOfExactType.html"},"BuildContext.dependOnInheritedWidgetOfExactType"),".")),(0,r.kt)("p",null,"If a widget's ",(0,r.kt)("a",{href:"../../widgets_task_form/DescriptionField/build.md"},"build")," method is to depend on anything else, use a",(0,r.kt)("a",{href:"https://api.flutter.dev/flutter/widgets/StatefulWidget-class.html"},"StatefulWidget")," instead."),(0,r.kt)("p",null,"See also:"),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("a",{href:"https://api.flutter.dev/flutter/widgets/StatelessWidget-class.html"},"StatelessWidget"),", which contains the discussion on performance considerations.")),(0,r.kt)("h2",{id:"implementation"},"Implementation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"@override\nWidget build(BuildContext context) {\n  final taskDescriptionTextController = context.select(\n    (CreateTaskViewModel model) => model.taskDescriptionTextController,\n  );\n\n  return TextFormField(\n    keyboardType: TextInputType.multiline,\n    controller: taskDescriptionTextController,\n    validator: (value) => Validator.validateEventForm(value!, 'Description'),\n    maxLines: 10,\n    minLines: 1,\n    decoration: InputDecoration(\n      hintText: 'Describe the task',\n      labelText: 'Add Description',\n      labelStyle: Theme.of(context).textTheme.titleMedium,\n      border: InputBorder.none,\n      focusedBorder: InputBorder.none,\n      enabledBorder: InputBorder.none,\n      prefixIcon: Container(\n        transform: Matrix4.translationValues(\n          -SizeConfig.screenWidth! * 0.027,\n          0.0,\n          0.0,\n        ),\n        child: const Icon(\n          Icons.view_headline,\n          size: 25,\n        ),\n      ),\n    ),\n  );\n}\n")))}p.isMDXComponent=!0}}]);