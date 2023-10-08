"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[86293],{3905:(e,t,a)=>{a.d(t,{Zo:()=>_,kt:()=>u});var o=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,o,i=function(e,t){if(null==e)return{};var a,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=o.createContext({}),s=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},_=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},m="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,_=d(e,["components","mdxType","originalType","parentName"]),m=s(a),c=i,u=m["".concat(l,".").concat(c)]||m[c]||v[c]||n;return a?o.createElement(u,r(r({ref:t},_),{},{components:a})):o.createElement(u,r({ref:t},_))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,r=new Array(n);r[0]=c;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[m]="string"==typeof e?e:i,r[1]=d;for(var s=2;s<n;s++)r[s]=a[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}c.displayName="MDXCreateElement"},61996:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>v,frontMatter:()=>n,metadata:()=>d,toc:()=>s});var o=a(87462),i=(a(67294),a(3905));const n={},r="navigateToIndividualPage method",d={unversionedId:"talawa-mobile-docs/view_model_after_auth_view_models_feed_view_models_organization_feed_view_model/OrganizationFeedViewModel/navigateToIndividualPage",id:"talawa-mobile-docs/view_model_after_auth_view_models_feed_view_models_organization_feed_view_model/OrganizationFeedViewModel/navigateToIndividualPage",title:"navigateToIndividualPage method",description:"void navigateToIndividualPage",source:"@site/docs/talawa-mobile-docs/view_model_after_auth_view_models_feed_view_models_organization_feed_view_model/OrganizationFeedViewModel/navigateToIndividualPage.md",sourceDirName:"talawa-mobile-docs/view_model_after_auth_view_models_feed_view_models_organization_feed_view_model/OrganizationFeedViewModel",slug:"/talawa-mobile-docs/view_model_after_auth_view_models_feed_view_models_organization_feed_view_model/OrganizationFeedViewModel/navigateToIndividualPage",permalink:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_feed_view_models_organization_feed_view_model/OrganizationFeedViewModel/navigateToIndividualPage",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/view_model_after_auth_view_models_feed_view_models_organization_feed_view_model/OrganizationFeedViewModel/navigateToIndividualPage.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"istest property",permalink:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_feed_view_models_organization_feed_view_model/OrganizationFeedViewModel/istest"},next:{title:"navigateToPinnedPostPage method",permalink:"/docs/talawa-mobile-docs/view_model_after_auth_view_models_feed_view_models_organization_feed_view_model/OrganizationFeedViewModel/navigateToPinnedPostPage"}},l={},s=[{value:"Implementation",id:"implementation",level:2}],_={toc:s},m="wrapper";function v(e){let{components:t,...a}=e;return(0,i.kt)(m,(0,o.Z)({},_,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"navigatetoindividualpage-method"},"navigateToIndividualPage method"),(0,i.kt)("p",null,"void navigateToIndividualPage\n(",(0,i.kt)("a",{parentName:"p",href:"/docs/talawa-mobile-docs/models_post_post_model/Post-class"},"Post")," post)"),(0,i.kt)("p",null,"This function navigate to individual post page."),(0,i.kt)("h2",{id:"implementation"},"Implementation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"void navigateToIndividualPage(Post post) {\n  // uses `pushScreen` method by `navigationService` service.\n  _navigationService.pushScreen(Routes.individualPost, arguments: post);\n}\n")))}v.isMDXComponent=!0}}]);