"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[84115],{25828:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>t,metadata:()=>s,toc:()=>c});var i=o(85893),a=o(11151);const t={},r="onTapJoin method",s={id:"talawa-mobile-docs/view_model_pre_auth_view_models_select_organization_view_model/SelectOrganizationViewModel/onTapJoin",title:"onTapJoin method",description:"Future&lt;void> onTapJoin",source:"@site/docs/talawa-mobile-docs/view_model_pre_auth_view_models_select_organization_view_model/SelectOrganizationViewModel/onTapJoin.md",sourceDirName:"talawa-mobile-docs/view_model_pre_auth_view_models_select_organization_view_model/SelectOrganizationViewModel",slug:"/talawa-mobile-docs/view_model_pre_auth_view_models_select_organization_view_model/SelectOrganizationViewModel/onTapJoin",permalink:"/docs/talawa-mobile-docs/view_model_pre_auth_view_models_select_organization_view_model/SelectOrganizationViewModel/onTapJoin",draft:!1,unlisted:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/view_model_pre_auth_view_models_select_organization_view_model/SelectOrganizationViewModel/onTapJoin.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"onTapContinue method",permalink:"/docs/talawa-mobile-docs/view_model_pre_auth_view_models_select_organization_view_model/SelectOrganizationViewModel/onTapContinue"},next:{title:"orgId property",permalink:"/docs/talawa-mobile-docs/view_model_pre_auth_view_models_select_organization_view_model/SelectOrganizationViewModel/orgId"}},l={},c=[{value:"Implementation",id:"implementation",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"ontapjoin-method",children:"onTapJoin method"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://api.flutter.dev/flutter/dart-async/Future-class.html",children:"Future"}),"<void> onTapJoin\n()"]}),"\n",(0,i.jsxs)("p",{children:["This function make user to join the selected organization.\nThe function uses ",(0,i.jsx)("code",{children:"joinOrgById"})," graph QL query."]}),"\n",(0,i.jsx)(n.h2,{id:"implementation",children:"Implementation"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"Future<void> onTapJoin() async {\n  // if `selectedOrganization` is public.\n  if (selectedOrganization.isPublic == true) {\n    try {\n      // run the graph QL mutation\n      final QueryResult result = await databaseFunctions.gqlAuthMutation(\n        queries.joinOrgById(selectedOrganization.id!),\n      ) as QueryResult;\n\n      final List<OrgInfo>? joinedOrg =\n          ((result.data!['joinPublicOrganization']\n                      as Map<String, dynamic>)['joinedOrganizations']\n                  as List<dynamic>?)\n              ?.map((e) => OrgInfo.fromJson(e as Map<String, dynamic>))\n              .toList();\n      userConfig.updateUserJoinedOrg(joinedOrg!);\n      // if user joined organization length is 1\n      if (userConfig.currentUser.joinedOrganizations!.length == 1) {\n        userConfig.saveCurrentOrgInHive(\n          userConfig.currentUser.joinedOrganizations![0],\n        );\n        navigationService.removeAllAndPush(\n          Routes.mainScreen,\n          Routes.splashScreen,\n          arguments: MainScreenArgs(mainScreenIndex: 0),\n        );\n      } else {\n        navigationService.pop();\n        navigationService.showTalawaErrorSnackBar(\n          'Joined ${selectedOrganization.name} successfully',\n          MessageType.info,\n        );\n      }\n    } on Exception catch (e) {\n      print(e);\n      navigationService.showTalawaErrorSnackBar(\n        'SomeThing went wrong',\n        MessageType.error,\n      );\n    }\n  }\n  // else {\n  //   try {\n  //     // navigationService.pushScreen(Routes.requestAccess);\n  //   } on Exception catch (e) {\n  //     print(e);\n  //     navigationService.showTalawaErrorSnackBar(\n  //       'SomeThing went wrong',\n  //       MessageType.error,\n  //     );\n  //   }\n  // }\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>s,a:()=>r});var i=o(67294);const a={},t=i.createContext(a);function r(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);