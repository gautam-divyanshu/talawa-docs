"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[94943],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>p});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=i.createContext({}),s=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},h=function(e){var t=s(e.components);return i.createElement(d.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,p=c["".concat(d,".").concat(m)]||c[m]||u[m]||a;return n?i.createElement(p,l(l({ref:t},h),{},{components:n})):i.createElement(p,l({ref:t},h))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<a;s++)l[s]=n[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},82830:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var i=n(87462),r=(n(67294),n(3905));const a={},l="build method",o={unversionedId:"talawa-mobile-docs/widgets_theme_switch/ChangeThemeTile/build",id:"talawa-mobile-docs/widgets_theme_switch/ChangeThemeTile/build",title:"build method",description:"- @override",source:"@site/docs/talawa-mobile-docs/widgets_theme_switch/ChangeThemeTile/build.md",sourceDirName:"talawa-mobile-docs/widgets_theme_switch/ChangeThemeTile",slug:"/talawa-mobile-docs/widgets_theme_switch/ChangeThemeTile/build",permalink:"/docs/talawa-mobile-docs/widgets_theme_switch/ChangeThemeTile/build",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/widgets_theme_switch/ChangeThemeTile/build.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"ChangeThemeTile constructor",permalink:"/docs/talawa-mobile-docs/widgets_theme_switch/ChangeThemeTile/"},next:{title:"ChangeThemeTile class",permalink:"/docs/talawa-mobile-docs/widgets_theme_switch/ChangeThemeTile-class"}},d={},s=[{value:"Implementation",id:"implementation",level:2}],h={toc:s},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,i.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"build-method"},"build method"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"@",(0,r.kt)("a",{parentName:"li",href:"https://api.flutter.dev/flutter/dart-core/override-constant.html"},"override"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://api.flutter.dev/flutter/widgets/Widget-class.html"},"Widget")," build\n(",(0,r.kt)("a",{parentName:"p",href:"https://api.flutter.dev/flutter/widgets/BuildContext-class.html"},"BuildContext")," context)"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("span",{class:"feature"},"override"))),(0,r.kt)("p",null,"Describes the part of the user interface represented by this widget."),(0,r.kt)("p",null,"The framework calls this method when this widget is inserted into the tree in a given ",(0,r.kt)("a",{href:"https://api.flutter.dev/flutter/widgets/BuildContext-class.html"},"BuildContext")," and when the dependencies of this widget change (e.g., an ",(0,r.kt)("a",{href:"https://api.flutter.dev/flutter/widgets/InheritedWidget-class.html"},"InheritedWidget")," referenced by this widget changes). This method can potentially be called in every frame and should not have any side effects beyond building a widget."),(0,r.kt)("p",null,"The framework replaces the subtree below this widget with the widget returned by this method, either by updating the existing subtree or by removing the subtree and inflating a new subtree, depending on whether the widget returned by this method can update the root of the existing subtree, as determined by calling ",(0,r.kt)("a",{href:"https://api.flutter.dev/flutter/widgets/Widget/canUpdate.html"},"Widget.canUpdate"),"."),(0,r.kt)("p",null,"Typically implementations return a newly created constellation of widgets that are configured with information from this widget's constructor and from the given ",(0,r.kt)("a",{href:"https://api.flutter.dev/flutter/widgets/BuildContext-class.html"},"BuildContext"),"."),(0,r.kt)("p",null,"The given ",(0,r.kt)("a",{href:"https://api.flutter.dev/flutter/widgets/BuildContext-class.html"},"BuildContext")," contains information about the location in the tree at which this widget is being built. For example, the context provides the set of inherited widgets for this location in the tree. A given widget might be built with multiple different ",(0,r.kt)("a",{href:"https://api.flutter.dev/flutter/widgets/BuildContext-class.html"},"BuildContext"),"arguments over time if the widget is moved around the tree or if the widget is inserted into the tree in multiple places at once."),(0,r.kt)("p",null,"The implementation of this method must only depend on:"),(0,r.kt)("ul",null,(0,r.kt)("li",null,"the fields of the widget, which themselves must not change over time, and"),(0,r.kt)("li",null,"any ambient state obtained from the ",(0,r.kt)("code",null,"context")," using",(0,r.kt)("a",{href:"https://api.flutter.dev/flutter/widgets/BuildContext/dependOnInheritedWidgetOfExactType.html"},"BuildContext.dependOnInheritedWidgetOfExactType"),".")),(0,r.kt)("p",null,"If a widget's ",(0,r.kt)("a",{href:"../../widgets_theme_switch/ChangeThemeTile/build.md"},"build")," method is to depend on anything else, use a",(0,r.kt)("a",{href:"https://api.flutter.dev/flutter/widgets/StatefulWidget-class.html"},"StatefulWidget")," instead."),(0,r.kt)("p",null,"See also:"),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("a",{href:"https://api.flutter.dev/flutter/widgets/StatelessWidget-class.html"},"StatelessWidget"),", which contains the discussion on performance considerations.")),(0,r.kt)("h2",{id:"implementation"},"Implementation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"@override\nWidget build(BuildContext context) {\n  final themeProvider = Provider.of<AppTheme>(context);\n  return ListTile(\n    key: const Key('ThemeSwitch'),\n    contentPadding: EdgeInsets.zero,\n    title: Text(AppLocalizations.of(context)!.strictTranslate(\"Dark Theme\")),\n    trailing: Switch(\n      key: const Key('ToggleTheme'),\n      autofocus: true,\n      activeColor: Theme.of(context).colorScheme.primary,\n      value: themeProvider.isdarkTheme,\n      onChanged: (value) {\n        final provider = Provider.of<AppTheme>(context, listen: false);\n        provider.switchTheme(isOn: value);\n      },\n    ),\n  );\n}\n")))}u.isMDXComponent=!0}}]);