"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[69856],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(a),d=o,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||n;return a?r.createElement(h,l(l({ref:t},u),{},{components:a})):r.createElement(h,l({ref:t},u))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,l=new Array(n);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<n;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},34879:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>n,metadata:()=>i,toc:()=>p});var r=a(87462),o=(a(67294),a(3905));const n={},l="shouldRepaint method",i={unversionedId:"talawa-mobile-docs/custom_painters_telegram_logo/TelegramLogo/shouldRepaint",id:"talawa-mobile-docs/custom_painters_telegram_logo/TelegramLogo/shouldRepaint",title:"shouldRepaint method",description:"- @override",source:"@site/docs/talawa-mobile-docs/custom_painters_telegram_logo/TelegramLogo/shouldRepaint.md",sourceDirName:"talawa-mobile-docs/custom_painters_telegram_logo/TelegramLogo",slug:"/talawa-mobile-docs/custom_painters_telegram_logo/TelegramLogo/shouldRepaint",permalink:"/docs/talawa-mobile-docs/custom_painters_telegram_logo/TelegramLogo/shouldRepaint",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/talawa-mobile-docs/custom_painters_telegram_logo/TelegramLogo/shouldRepaint.md",tags:[],version:"current",frontMatter:{},sidebar:"Talawa",previous:{title:"paint method",permalink:"/docs/talawa-mobile-docs/custom_painters_telegram_logo/TelegramLogo/paint"},next:{title:"TelegramLogo class",permalink:"/docs/talawa-mobile-docs/custom_painters_telegram_logo/TelegramLogo-class"}},s={},p=[{value:"Implementation",id:"implementation",level:2}],u={toc:p},m="wrapper";function c(e){let{components:t,...a}=e;return(0,o.kt)(m,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"shouldrepaint-method"},"shouldRepaint method"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"@",(0,o.kt)("a",{parentName:"li",href:"https://api.flutter.dev/flutter/dart-core/override-constant.html"},"override"))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://api.flutter.dev/flutter/dart-core/bool-class.html"},"bool")," shouldRepaint\n(covariant ",(0,o.kt)("a",{parentName:"p",href:"https://api.flutter.dev/flutter/rendering/CustomPainter-class.html"},"CustomPainter")," oldDelegate)"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("span",{class:"feature"},"override"))),(0,o.kt)("p",null,"Called whenever a new instance of the custom painter delegate class is provided to the ",(0,o.kt)("a",{href:"https://api.flutter.dev/flutter/rendering/RenderCustomPaint-class.html"},"RenderCustomPaint")," object, or any time that a new",(0,o.kt)("a",{href:"https://api.flutter.dev/flutter/widgets/CustomPaint-class.html"},"CustomPaint")," object is created with a new instance of the custom painter delegate class (which amounts to the same thing, because the latter is implemented in terms of the former)."),(0,o.kt)("p",null,"If the new instance represents different information than the old instance, then the method should return true, otherwise it should return false."),(0,o.kt)("p",null,"If the method returns false, then the ",(0,o.kt)("a",{href:"../../custom_painters_telegram_logo/TelegramLogo/paint.md"},"paint")," call might be optimized away."),(0,o.kt)("p",null,"It's possible that the ",(0,o.kt)("a",{href:"../../custom_painters_telegram_logo/TelegramLogo/paint.md"},"paint")," method will get called even if",(0,o.kt)("a",{href:"../../custom_painters_telegram_logo/TelegramLogo/shouldRepaint.md"},"shouldRepaint")," returns false (e.g. if an ancestor or descendant needed to be repainted). It's also possible that the ",(0,o.kt)("a",{href:"../../custom_painters_telegram_logo/TelegramLogo/paint.md"},"paint")," method will get called without ",(0,o.kt)("a",{href:"../../custom_painters_telegram_logo/TelegramLogo/shouldRepaint.md"},"shouldRepaint")," being called at all (e.g. if the box changes size)."),(0,o.kt)("p",null,"If a custom delegate has a particularly expensive paint function such that repaints should be avoided as much as possible, a ",(0,o.kt)("a",{href:"https://api.flutter.dev/flutter/widgets/RepaintBoundary-class.html"},"RepaintBoundary")," or",(0,o.kt)("a",{href:"https://api.flutter.dev/flutter/rendering/RenderRepaintBoundary-class.html"},"RenderRepaintBoundary")," (or other render object with",(0,o.kt)("a",{href:"https://api.flutter.dev/flutter/rendering/RenderObject/isRepaintBoundary.html"},"RenderObject.isRepaintBoundary")," set to true) might be helpful."),(0,o.kt)("p",null,"The ",(0,o.kt)("code",null,"oldDelegate")," argument will never be null."),(0,o.kt)("h2",{id:"implementation"},"Implementation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"@override\nbool shouldRepaint(covariant CustomPainter oldDelegate) {\n  return true;\n}\n")))}c.isMDXComponent=!0}}]);