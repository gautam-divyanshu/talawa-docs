"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[77344],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),g=a,p=u["".concat(s,".").concat(g)]||u[g]||m[g]||o;return n?r.createElement(p,i(i({ref:t},d),{},{components:n})):r.createElement(p,i({ref:t},d))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},38305:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={},i="selectOrg method",l={unversionedId:"talawa-mobile-docs/view_model_pre_auth_view_models_select_organization_view_model/SelectOrganizationViewModel/selectOrg",id:"talawa-mobile-docs/view_model_pre_auth_view_models_select_organization_view_model/SelectOrganizationViewModel/selectOrg",title:"selectOrg method",description:"Future&lt;void> selectOrg",source:"@site/docs/talawa-mobile-docs/view_model_pre_auth_view_models_select_organization_view_model/SelectOrganizationViewModel/selectOrg.md",sourceDirName:"talawa-mobile-docs/view_model_pre_auth_view_models_select_organization_view_model/SelectOrganizationViewModel",slug:"/talawa-mobile-docs/view_model_pre_auth_view_models_select_organization_view_model/SelectOrganizationViewModel/selectOrg",permalink:"/docs/talawa-mobile-docs/view_model_pre_auth_view_models_select_organization_view_model/SelectOrganizationViewModel/selectOrg",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/view_model_pre_auth_view_models_select_organization_view_model/SelectOrganizationViewModel/selectOrg.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"searching property",permalink:"/docs/talawa-mobile-docs/view_model_pre_auth_view_models_select_organization_view_model/SelectOrganizationViewModel/searching"},next:{title:"selectedOrganization property",permalink:"/docs/talawa-mobile-docs/view_model_pre_auth_view_models_select_organization_view_model/SelectOrganizationViewModel/selectedOrganization"}},s={},c=[{value:"Implementation",id:"implementation",level:2}],d={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"selectorg-method"},"selectOrg method"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://api.flutter.dev/flutter/dart-async/Future-class.html"},"Future"),"<","void> selectOrg\n(",(0,a.kt)("a",{parentName:"p",href:"/docs/talawa-mobile-docs/models_organization_org_info/OrgInfo-class"},"OrgInfo")," item)"),(0,a.kt)("p",null,"This function select the organization."),(0,a.kt)("p",null,"params:"),(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("code",null,"item")," : Selected organization data.")),(0,a.kt)("h2",{id:"implementation"},"Implementation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"Future<void> selectOrg(OrgInfo item) async {\n  print(item.id);\n  bool orgAlreadyJoined = false;\n  bool orgRequestAlreadyPresent = false;\n  final bool userLoggedIn = await userConfig.userLoggedIn();\n  // if user session not expirec\n  if (userLoggedIn) {\n    // check if user has already joined the selected organization.\n    userConfig.currentUser.joinedOrganizations!.forEach((element) {\n      if (element.id! == item.id) {\n        orgAlreadyJoined = true;\n      }\n    });\n    // check if user has already send the membership request to the selected organization.\n    userConfig.currentUser.membershipRequests!.forEach((element) {\n      if (element.id! == item.id) {\n        orgRequestAlreadyPresent = true;\n      }\n    });\n    // if not already joined and not memebrship request.\n    if (!orgAlreadyJoined && !orgRequestAlreadyPresent) {\n      selectedOrganization = item;\n      notifyListeners();\n      onTapJoin();\n      // print(selectedOrganization.isPublic);\n\n      if (!selectedOrganization.isPublic!) {\n        navigationService.pushScreen(\n          Routes.requestAccess,\n          arguments: selectedOrganization,\n        );\n      }\n    } else if (orgAlreadyJoined) {\n      selectedOrganization = OrgInfo(id: '-1');\n      navigationService.showTalawaErrorSnackBar(\n        'Organisation already joined',\n        MessageType.warning,\n      );\n    } else {\n      navigationService.showTalawaErrorSnackBar(\n        'Membership request already sent',\n        MessageType.warning,\n      );\n    }\n  } else {\n    selectedOrganization = item;\n    notifyListeners();\n    navigationService.pushScreen(\n      Routes.signupDetailScreen,\n      arguments: selectedOrganization,\n    );\n  }\n}\n")))}m.isMDXComponent=!0}}]);