"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[41922],{63238:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>t,metadata:()=>r,toc:()=>d});var o=i(85893),a=i(11151);const t={},s="login method",r={id:"talawa-mobile-docs/view_model_pre_auth_view_models_login_view_model/LoginViewModel/login",title:"login method",description:"Future&lt;void> login",source:"@site/docs/talawa-mobile-docs/view_model_pre_auth_view_models_login_view_model/LoginViewModel/login.md",sourceDirName:"talawa-mobile-docs/view_model_pre_auth_view_models_login_view_model/LoginViewModel",slug:"/talawa-mobile-docs/view_model_pre_auth_view_models_login_view_model/LoginViewModel/login",permalink:"/docs/talawa-mobile-docs/view_model_pre_auth_view_models_login_view_model/LoginViewModel/login",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/view_model_pre_auth_view_models_login_view_model/LoginViewModel/login.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"initialize method",permalink:"/docs/talawa-mobile-docs/view_model_pre_auth_view_models_login_view_model/LoginViewModel/initialize"},next:{title:"password property",permalink:"/docs/talawa-mobile-docs/view_model_pre_auth_view_models_login_view_model/LoginViewModel/password"}},l={},d=[{value:"Implementation",id:"implementation",level:2}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"login-method",children:"login method"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://api.flutter.dev/flutter/dart-async/Future-class.html",children:"Future"}),"<void> login\n()"]}),"\n",(0,o.jsx)("p",{children:"This function is used to sign-in the user into application."}),"\n",(0,o.jsx)(n.h2,{id:"implementation",children:"Implementation"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-dart",children:"Future<void> login() async {\n  emailFocus.unfocus();\n  passwordFocus.unfocus();\n  validate = AutovalidateMode.always;\n  // if the email and password are not empty.\n  if (formKey.currentState!.validate()) {\n    validate = AutovalidateMode.disabled;\n    navigationService\n        .pushDialog(const CustomProgressDialog(key: Key('LoginProgress')));\n    databaseFunctions.init();\n    try {\n      // run the graph QL query to login the user, passing `email` and `password`.\n      final result = await databaseFunctions\n          .gqlNonAuthMutation(queries.loginUser(email.text, password.text));\n      navigationService.pop();\n      // if user found.\n      if (result != null) {\n        final User loggedInUser =\n            User.fromJson(result.data!['login'] as Map<String, dynamic>);\n        userConfig.updateUser(loggedInUser);\n        // if user has not already joined any organization.\n        if (userConfig.currentUser.joinedOrganizations!.isEmpty) {\n          navigationService.removeAllAndPush(\n            Routes.waitingScreen,\n            Routes.splashScreen,\n          );\n        } else {\n          userConfig.saveCurrentOrgInHive(\n            userConfig.currentUser.joinedOrganizations![0],\n          );\n          navigationService.removeAllAndPush(\n            Routes.mainScreen,\n            Routes.splashScreen,\n            arguments: MainScreenArgs(mainScreenIndex: 0, fromSignUp: false),\n          );\n        }\n        final loginResult = result.data['login'] as Map<String, dynamic>;\n        androidFirebaseOptions =\n            loginResult['androidFirebaseOptions'] as Map<String, dynamic>;\n        iosFirebaseOptions =\n            loginResult['iosFirebaseOptions'] as Map<String, dynamic>;\n        if (androidFirebaseOptions['apiKey'] != null ||\n            iosFirebaseOptions['apiKey'] != null) {\n          await setUpFirebase();\n\n          final token = await FirebaseMessaging.instance.getToken();\n          await databaseFunctions.gqlAuthMutation(\n            queries.saveFcmToken(token),\n          );\n\n          await setUpFirebaseMessaging();\n\n          final androidFirebaseOptionsBox =\n              await Hive.openBox('androidFirebaseOptions');\n          androidFirebaseOptionsBox.put(\n            'androidFirebaseOptions',\n            androidFirebaseOptions,\n          );\n\n          final iosFirebaseOptionsBox =\n              await Hive.openBox('iosFirebaseOptions');\n          iosFirebaseOptionsBox.put(\n            'iosFirebaseOptions',\n            iosFirebaseOptions,\n          );\n        }\n      }\n    } on Exception catch (e) {\n      print('here');\n      print(e);\n    }\n  }\n}\n"})})]})}function c(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>s});var o=i(67294);const a={},t=o.createContext(a);function s(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);