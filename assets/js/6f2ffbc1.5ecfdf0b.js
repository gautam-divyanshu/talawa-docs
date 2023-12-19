"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[19322],{41612:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=t(85893),o=t(11151);const a={},s="fetchAndAddPlugins method",l={id:"talawa-mobile-docs/view_model_main_screen_view_model/MainScreenViewModel/fetchAndAddPlugins",title:"fetchAndAddPlugins method",description:"void fetchAndAddPlugins",source:"@site/docs/talawa-mobile-docs/view_model_main_screen_view_model/MainScreenViewModel/fetchAndAddPlugins.md",sourceDirName:"talawa-mobile-docs/view_model_main_screen_view_model/MainScreenViewModel",slug:"/talawa-mobile-docs/view_model_main_screen_view_model/MainScreenViewModel/fetchAndAddPlugins",permalink:"/docs/talawa-mobile-docs/view_model_main_screen_view_model/MainScreenViewModel/fetchAndAddPlugins",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/view_model_main_screen_view_model/MainScreenViewModel/fetchAndAddPlugins.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"currentPageIndex property",permalink:"/docs/talawa-mobile-docs/view_model_main_screen_view_model/MainScreenViewModel/currentPageIndex"},next:{title:"focusTarget method",permalink:"/docs/talawa-mobile-docs/view_model_main_screen_view_model/MainScreenViewModel/focusTarget"}},d={},c=[{value:"Implementation",id:"implementation",level:2}];function r(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"fetchandaddplugins-method",children:"fetchAndAddPlugins method"}),"\n",(0,i.jsxs)(e.p,{children:["void fetchAndAddPlugins\n(",(0,i.jsx)(e.a,{href:"https://api.flutter.dev/flutter/widgets/BuildContext-class.html",children:"BuildContext"})," context)"]}),"\n",(0,i.jsxs)("p",{children:["Dynamically adds ",(0,i.jsx)("code",{children:"BottomNavigationBarItems"})," in ",(0,i.jsx)("code",{children:"BottomNavigationBar"}),"."]}),"\n",(0,i.jsx)("p",{children:"by mapping over the data received from the server."}),"\n",(0,i.jsxs)("p",{children:[(0,i.jsx)("strong",{children:"params"}),":"]}),"\n",(0,i.jsx)("ul",{children:(0,i.jsxs)("li",{children:[(0,i.jsx)("code",{children:"context"}),": its the same context you use everywhere in the flutter framework refer flutter docs for more info."]})}),"\n",(0,i.jsxs)("p",{children:[(0,i.jsx)("strong",{children:"returns"}),":\nNone"]}),"\n",(0,i.jsx)(e.h2,{id:"implementation",children:"Implementation"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-dart",children:"void fetchAndAddPlugins(\n  BuildContext context,\n) {\n  navBarItems = [\n    BottomNavigationBarItem(\n      icon: Icon(\n        Icons.home,\n        key: keyBNHome,\n      ),\n      label: AppLocalizations.of(context)!.strictTranslate('Home'),\n    ),\n    BottomNavigationBarItem(\n      icon: Icon(\n        Icons.event_note,\n        key: keyBNEvents,\n      ),\n      label: AppLocalizations.of(context)!.strictTranslate('Events'),\n    ),\n    BottomNavigationBarItem(\n      icon: Icon(\n        Icons.add_box,\n        key: keyBNPost,\n      ),\n      label: AppLocalizations.of(context)!.strictTranslate('Add'),\n    ),\n    BottomNavigationBarItem(\n      icon: Icon(\n        Icons.chat_outlined,\n        key: keyBNChat,\n      ),\n      label: AppLocalizations.of(context)!.strictTranslate('Chat'),\n    ),\n    BottomNavigationBarItem(\n      icon: Icon(\n        Icons.account_circle,\n        key: keyBNProfile,\n      ),\n      label: AppLocalizations.of(context)!.strictTranslate('Profile'),\n    )\n  ];\n\n  pages = [\n    OrganizationFeed(\n      key: const Key(\"HomeView\"),\n      homeModel: this,\n    ),\n    ExploreEvents(\n      key: const Key('ExploreEvents'),\n      homeModel: this,\n    ),\n    AddPost(\n      key: const Key('AddPost'),\n      drawerKey: MainScreenViewModel.scaffoldKey,\n    ),\n    const ChatPage(\n      key: Key('Chats'),\n    ),\n    ProfilePage(\n      key: keySPEditProfile,\n      homeModel: this,\n    ),\n  ];\n\n  pluginList = (Hive.box('pluginBox').get('plugins') ?? []) as List<dynamic>;\n\n  pluginList.forEach((plugin) {\n    if (pluginPrototypeData.containsKey(\n          (plugin as Map<String, dynamic>)[\"pluginName\"] as String,\n        ) &&\n        plugin[\"pluginInstallStatus\"] as bool) {\n      navBarItems.add(\n        BottomNavigationBarItem(\n          icon: Icon(\n            (pluginPrototypeData[plugin[\"pluginName\"]]\n                as Map<String, dynamic>)[\"icon\"] as IconData,\n          ),\n          label: AppLocalizations.of(context)!.strictTranslate(\n            plugin[\"pluginName\"] as String,\n          ),\n        ),\n      );\n      pages.add(\n        (pluginPrototypeData[plugin[\"pluginName\"]]\n            as Map<String, dynamic>)[\"class\"] as StatelessWidget,\n      );\n    }\n  });\n\n  /// Causes the app check the plugins updates in every 300 sec\n  ///\n  /// updated and re-render the navbar\n  Timer.periodic(const Duration(seconds: 300), (timer) {\n    FetchPluginList();\n    final newPluginList =\n        (Hive.box('pluginBox').get('plugins') ?? []) as List<dynamic>;\n\n    if (listEquals(pluginList, newPluginList)) {\n      notifyListeners();\n    }\n  });\n}\n"})})]})}function m(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(r,{...n})}):r(n)}},11151:(n,e,t)=>{t.d(e,{Z:()=>l,a:()=>s});var i=t(67294);const o={},a=i.createContext(o);function s(n){const e=i.useContext(a);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:s(n.components),i.createElement(a.Provider,{value:e},n.children)}}}]);