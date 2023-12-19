"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[99887],{9937:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=t(85893),n=t(11151);const a={},i="setupLocator function",c={id:"talawa-mobile-docs/locator/setupLocator",title:"setupLocator function",description:"void setupLocator",source:"@site/docs/talawa-mobile-docs/locator/setupLocator.md",sourceDirName:"talawa-mobile-docs/locator",slug:"/talawa-mobile-docs/locator/setupLocator",permalink:"/docs/talawa-mobile-docs/locator/setupLocator",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/locator/setupLocator.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"queries top-level property",permalink:"/docs/talawa-mobile-docs/locator/queries"},next:{title:"sizeConfig top-level property",permalink:"/docs/talawa-mobile-docs/locator/sizeConfig"}},l={},s=[{value:"Implementation",id:"implementation",level:2}];function g(e){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.h1,{id:"setuplocator-function",children:"setupLocator function"}),"\n",(0,r.jsx)(o.p,{children:"void setupLocator\n()"}),"\n",(0,r.jsx)("p",{children:'This function registers the widgets/objects in "GetIt".'}),"\n",(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{children:"params"}),":\nNone"]}),"\n",(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{children:"returns"}),":\nNone"]}),"\n",(0,r.jsx)(o.h2,{id:"implementation",children:"Implementation"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-dart",children:"void setupLocator() {\n  //services\n  locator.registerSingleton(NavigationService());\n\n  //sizeConfig\n  locator.registerSingleton(SizeConfig());\n\n  locator.registerSingleton(Validator());\n\n  //userConfig\n  locator.registerSingleton(UserConfig());\n\n  //Services\n  locator.registerLazySingleton(() => PostService());\n  locator.registerLazySingleton(() => EventService());\n  locator.registerLazySingleton(() => TaskService());\n  locator.registerLazySingleton(() => CommentService());\n  locator.registerLazySingleton(() => OrganizationService());\n  locator.registerLazySingleton(() => MultiMediaPickerService());\n  locator.registerLazySingleton(() => Connectivity());\n  locator.registerLazySingleton(() => ChatService());\n  locator.registerLazySingleton(() => ImageCropper());\n  locator.registerLazySingleton(() => ImagePicker());\n\n  //graphql\n  locator.registerSingleton(GraphqlConfig());\n\n  //databaseMutationFunction\n  locator.registerSingleton(DataBaseMutationFunctions());\n\n  //queries\n  locator.registerSingleton(Queries());\n\n  //Page viewModels\n  locator.registerFactory(() => DemoViewModel());\n  // locator.registerFactory(() => OrganizationFeedViewModel());\n  locator.registerFactory(() => OrganizationFeedViewModel());\n  locator.registerFactory(() => SetUrlViewModel());\n  locator.registerFactory(() => LoginViewModel());\n\n  locator.registerFactory(() => SelectOrganizationViewModel());\n  locator.registerFactory(() => SignupDetailsViewModel());\n  locator.registerFactory(() => WaitingViewModel());\n  locator.registerFactory(() => ExploreEventsViewModel());\n  locator.registerFactory(() => ExploreTasksViewModel());\n  locator.registerFactory(() => CreateTaskViewModel());\n  locator.registerFactory(() => MainScreenViewModel());\n  locator.registerFactory(() => ProfilePageViewModel());\n  locator.registerFactory(() => EditProfilePageViewModel());\n  locator.registerFactory(() => CreateEventViewModel());\n  locator.registerFactory(() => EditEventViewModel());\n  locator.registerFactory(() => AddPostViewModel());\n  locator.registerFactory(() => EventInfoViewModel());\n\n  //Widgets viewModels\n  locator.registerFactory(() => ProgressDialogViewModel());\n  locator.registerFactory(() => CustomDrawerViewModel());\n  locator.registerFactory(() => LikeButtonViewModel());\n  locator.registerFactory(() => AppLanguage());\n  locator.registerFactory(() => CommentsViewModel());\n  locator.registerFactory(() => AppTheme());\n  locator.registerFactory(() => DirectChatViewModel());\n  locator.registerFactory(() => AccessScreenViewModel());\n}\n"})})]})}function d(e={}){const{wrapper:o}={...(0,n.a)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(g,{...e})}):g(e)}},11151:(e,o,t)=>{t.d(o,{Z:()=>c,a:()=>i});var r=t(67294);const n={},a=r.createContext(n);function i(e){const o=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(a.Provider,{value:o},e.children)}}}]);