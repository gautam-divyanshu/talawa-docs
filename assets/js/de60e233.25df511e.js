"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[74590],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,u=p["".concat(c,".").concat(m)]||p[m]||f[m]||i;return n?r.createElement(u,o(o({ref:t},d),{},{components:n})):r.createElement(u,o({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},93824:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const i={},o="test method",s={unversionedId:"talawa-mobile-docs/services_size_config/SizeConfig/test",id:"talawa-mobile-docs/services_size_config/SizeConfig/test",title:"test method",description:"void test",source:"@site/docs/talawa-mobile-docs/services_size_config/SizeConfig/test.md",sourceDirName:"talawa-mobile-docs/services_size_config/SizeConfig",slug:"/talawa-mobile-docs/services_size_config/SizeConfig/test",permalink:"/docs/talawa-mobile-docs/services_size_config/SizeConfig/test",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/services_size_config/SizeConfig/test.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"screenWidth property",permalink:"/docs/talawa-mobile-docs/services_size_config/SizeConfig/screenWidth"},next:{title:"SizeConfig class",permalink:"/docs/talawa-mobile-docs/services_size_config/SizeConfig-class"}},c={},l=[{value:"Implementation",id:"implementation",level:2}],d={toc:l},p="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"test-method"},"test method"),(0,a.kt)("p",null,"void test\n()"),(0,a.kt)("h2",{id:"implementation"},"Implementation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"void test() {\n  _mediaQueryData =\n      const MediaQueryData(size: Size(360, 684), padding: EdgeInsets.zero);\n  screenWidth = _mediaQueryData.size.width;\n  screenHeight = _mediaQueryData.size.height;\n  blockSizeHorizontal = screenWidth! / 100;\n  blockSizeVertical = screenHeight! / 100;\n\n  _safeAreaHorizontal =\n      _mediaQueryData.padding.left + _mediaQueryData.padding.right;\n  _safeAreaVertical =\n      _mediaQueryData.padding.top + _mediaQueryData.padding.bottom;\n  safeBlockHorizontal = (screenWidth! - _safeAreaHorizontal) / 100;\n  safeBlockVertical = (screenHeight! - _safeAreaVertical) / 100;\n}\n")))}f.isMDXComponent=!0}}]);