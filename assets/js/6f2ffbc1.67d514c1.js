"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[19322],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>g});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=o.createContext({}),s=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=s(e.components);return o.createElement(c.Provider,{value:n},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(t),u=a,g=m["".concat(c,".").concat(u)]||m[u]||p[u]||i;return t?o.createElement(g,r(r({ref:n},d),{},{components:t})):o.createElement(g,r({ref:n},d))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[m]="string"==typeof e?e:a,r[1]=l;for(var s=2;s<i;s++)r[s]=t[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5997:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var o=t(87462),a=(t(67294),t(3905));const i={},r="fetchAndAddPlugins method",l={unversionedId:"talawa-mobile-docs/view_model_main_screen_view_model/MainScreenViewModel/fetchAndAddPlugins",id:"talawa-mobile-docs/view_model_main_screen_view_model/MainScreenViewModel/fetchAndAddPlugins",title:"fetchAndAddPlugins method",description:"void fetchAndAddPlugins",source:"@site/docs/talawa-mobile-docs/view_model_main_screen_view_model/MainScreenViewModel/fetchAndAddPlugins.md",sourceDirName:"talawa-mobile-docs/view_model_main_screen_view_model/MainScreenViewModel",slug:"/talawa-mobile-docs/view_model_main_screen_view_model/MainScreenViewModel/fetchAndAddPlugins",permalink:"/docs/talawa-mobile-docs/view_model_main_screen_view_model/MainScreenViewModel/fetchAndAddPlugins",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/view_model_main_screen_view_model/MainScreenViewModel/fetchAndAddPlugins.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"currentPageIndex property",permalink:"/docs/talawa-mobile-docs/view_model_main_screen_view_model/MainScreenViewModel/currentPageIndex"},next:{title:"focusTarget method",permalink:"/docs/talawa-mobile-docs/view_model_main_screen_view_model/MainScreenViewModel/focusTarget"}},c={},s=[{value:"Implementation",id:"implementation",level:2}],d={toc:s},m="wrapper";function p(e){let{components:n,...t}=e;return(0,a.kt)(m,(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"fetchandaddplugins-method"},"fetchAndAddPlugins method"),(0,a.kt)("p",null,"void fetchAndAddPlugins\n(",(0,a.kt)("a",{parentName:"p",href:"https://api.flutter.dev/flutter/widgets/BuildContext-class.html"},"BuildContext")," context)"),(0,a.kt)("p",null,"Dynamically adds ",(0,a.kt)("code",null,"BottomNavigationBarItems")," in ",(0,a.kt)("code",null,"BottomNavigationBar"),"."),(0,a.kt)("p",null,"by mapping over the data received from the server."),(0,a.kt)("p",null,(0,a.kt)("strong",null,"params"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("code",null,"context"),": its the same context you use everywhere in the flutter framework refer flutter docs for more info.")),(0,a.kt)("p",null,(0,a.kt)("strong",null,"returns"),": None"),(0,a.kt)("h2",{id:"implementation"},"Implementation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"void fetchAndAddPlugins(\n  BuildContext context,\n) {\n  navBarItems = [\n    BottomNavigationBarItem(\n      icon: Icon(\n        Icons.home,\n        key: keyBNHome,\n      ),\n      label: AppLocalizations.of(context)!.strictTranslate('Home'),\n    ),\n    BottomNavigationBarItem(\n      icon: Icon(\n        Icons.event_note,\n        key: keyBNEvents,\n      ),\n      label: AppLocalizations.of(context)!.strictTranslate('Events'),\n    ),\n    BottomNavigationBarItem(\n      icon: Icon(\n        Icons.add_box,\n        key: keyBNPost,\n      ),\n      label: AppLocalizations.of(context)!.strictTranslate('Add'),\n    ),\n    BottomNavigationBarItem(\n      icon: Icon(\n        Icons.chat_outlined,\n        key: keyBNChat,\n      ),\n      label: AppLocalizations.of(context)!.strictTranslate('Chat'),\n    ),\n    BottomNavigationBarItem(\n      icon: Icon(\n        Icons.account_circle,\n        key: keyBNProfile,\n      ),\n      label: AppLocalizations.of(context)!.strictTranslate('Profile'),\n    )\n  ];\n\n  pages = [\n    OrganizationFeed(\n      key: const Key(\"HomeView\"),\n      homeModel: this,\n    ),\n    ExploreEvents(\n      key: const Key('ExploreEvents'),\n      homeModel: this,\n    ),\n    AddPost(\n      key: const Key('AddPost'),\n      drawerKey: MainScreenViewModel.scaffoldKey,\n    ),\n    const ChatPage(\n      key: Key('Chats'),\n    ),\n    ProfilePage(\n      key: keySPEditProfile,\n      homeModel: this,\n    ),\n  ];\n\n  pluginList = (Hive.box('pluginBox').get('plugins') ?? []) as List<dynamic>;\n\n  pluginList.forEach((plugin) {\n    if (pluginPrototypeData.containsKey(\n          (plugin as Map<String, dynamic>)[\"pluginName\"] as String,\n        ) &&\n        plugin[\"pluginInstallStatus\"] as bool) {\n      navBarItems.add(\n        BottomNavigationBarItem(\n          icon: Icon(\n            (pluginPrototypeData[plugin[\"pluginName\"]]\n                as Map<String, dynamic>)[\"icon\"] as IconData,\n          ),\n          label: AppLocalizations.of(context)!.strictTranslate(\n            plugin[\"pluginName\"] as String,\n          ),\n        ),\n      );\n      pages.add(\n        (pluginPrototypeData[plugin[\"pluginName\"]]\n            as Map<String, dynamic>)[\"class\"] as StatelessWidget,\n      );\n    }\n  });\n\n  /// Causes the app check the plugins updates in every 300 sec\n  ///\n  /// updated and re-render the navbar\n  Timer.periodic(const Duration(seconds: 300), (timer) {\n    FetchPluginList();\n    final newPluginList =\n        (Hive.box('pluginBox').get('plugins') ?? []) as List<dynamic>;\n\n    if (listEquals(pluginList, newPluginList)) {\n      notifyListeners();\n    }\n  });\n}\n")))}p.isMDXComponent=!0}}]);