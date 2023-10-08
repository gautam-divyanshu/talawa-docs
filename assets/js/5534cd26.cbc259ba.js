"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[66976],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>_});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(o),m=n,_=p["".concat(s,".").concat(m)]||p[m]||c[m]||i;return o?r.createElement(_,a(a({ref:t},d),{},{components:o})):r.createElement(_,a({ref:t},d))}));function _(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,a[1]=l;for(var u=2;u<i;u++)a[u]=o[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},19880:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=o(87462),n=(o(67294),o(3905));const i={},a="logout method",l={unversionedId:"talawa-mobile-docs/view_model_after_auth_view_models_profile_view_models_profile_page_view_model/ProfilePageViewModel/logout",id:"talawa-mobile-docs/view_model_after_auth_view_models_profile_view_models_profile_page_view_model/ProfilePageViewModel/logout",title:"logout method",description:"Future&lt;void> logout",source:"@site/docs/talawa-mobile-docs/view_model_after_auth_view_models_profile_view_models_profile_page_view_model/ProfilePageViewModel/logout.md",sourceDirName:"talawa-mobile-docs/view_model_after_auth_view_models_profile_view_models_profile_page_view_model/ProfilePageViewModel",slug:"/talawa-mobile-docs/view_model_after_auth_view_models_profile_view_models_profile_page_view_model/ProfilePageViewModel/logout",permalink:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_profile_view_models_profile_page_view_model/ProfilePageViewModel/logout",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/view_model_after_auth_view_models_profile_view_models_profile_page_view_model/ProfilePageViewModel/logout.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"invite method",permalink:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_profile_view_models_profile_page_view_model/ProfilePageViewModel/invite"},next:{title:"organisation property",permalink:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_profile_view_models_profile_page_view_model/ProfilePageViewModel/organisation"}},s={},u=[{value:"Implementation",id:"implementation",level:2}],d={toc:u},p="wrapper";function c(e){let{components:t,...o}=e;return(0,n.kt)(p,(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"logout-method"},"logout method"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://api.flutter.dev/flutter/dart-async/Future-class.html"},"Future"),"<","void> logout\n(",(0,n.kt)("a",{parentName:"p",href:"https://api.flutter.dev/flutter/widgets/BuildContext-class.html"},"BuildContext")," context)"),(0,n.kt)("p",null,"This method destroys the user's session or sign out the user from app. The function asks for the confimation in Custom Alert Dialog."),(0,n.kt)("h2",{id:"implementation"},"Implementation"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart"},"Future<void> logout(BuildContext context) async {\n  // push custom alert dialog with the confirmation message.\n  navigationService.pushDialog(\n    CustomAlertDialog(\n      reverse: true,\n      dialogSubTitle: 'Are you sure you want to logout?',\n      successText: 'Logout',\n      success: () async {\n        try {\n          final result = await databaseFunctions\n              .gqlAuthMutation(queries.logout()) as QueryResult?;\n          if (result != null && result.data!['logout'] == true) {\n            navigationService.pop();\n            navigationService.pushDialog(\n              const CustomProgressDialog(\n                key: Key('LogoutProgress'),\n              ),\n            );\n            Future.delayed(const Duration(seconds: 1)).then((value) {\n              user = Hive.box<User>('currentUser');\n              url = Hive.box('url');\n              final androidFirebaseOptionsBox =\n                  Hive.box('androidFirebaseOptions');\n              final iosFirebaseOptionsBox = Hive.box('iosFirebaseOptions');\n              organisation = Hive.box<OrgInfo>('currentOrg');\n              user.clear();\n              url.clear();\n              androidFirebaseOptionsBox.clear();\n              iosFirebaseOptionsBox.clear();\n              try {\n                Firebase.app()\n                    .delete(); // Deleting app will stop all Firebase plugins\n              } catch (e) {\n                debugPrint(\"ERROR: Unable to delete firebase app $e\");\n              }\n              organisation.clear();\n              navigationService.pop();\n              navigationService.removeAllAndPush(\n                '/selectLang',\n                '/',\n                arguments: '0',\n              );\n            });\n          }\n        } catch (e) {\n          print(e);\n        }\n      },\n    ),\n  );\n}\n")))}c.isMDXComponent=!0}}]);