"use strict";(self.webpackChunktalawa_docs=self.webpackChunktalawa_docs||[]).push([[31981],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),g=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=g(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=g(n),p=a,f=u["".concat(s,".").concat(p)]||u[p]||d[p]||i;return n?r.createElement(f,o(o({ref:t},l),{},{components:n})):r.createElement(f,o({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:a,o[1]=c;for(var g=2;g<i;g++)o[g]=n[g];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},81853:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>g});var r=n(87462),a=(n(67294),n(3905));const i={},o="Stage changes",c={unversionedId:"git-guide/Git working/Stage changes/stage-changes",id:"git-guide/Git working/Stage changes/stage-changes",title:"Stage changes",description:"Files in Git can have three possible states: committed, modified, and staged.",source:"@site/docs/git-guide/Git working/Stage changes/stage-changes.md",sourceDirName:"git-guide/Git working/Stage changes",slug:"/git-guide/Git working/Stage changes/stage-changes",permalink:"/docs/git-guide/Git working/Stage changes/stage-changes",draft:!1,editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/develop/docs/git-guide/Git working/Stage changes/stage-changes.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Work on a feature branch",permalink:"/docs/git-guide/Git working/Feature-branch"},next:{title:"Get status of working directory",permalink:"/docs/git-guide/Git working/Stage changes/status"}},s={},g=[],l={toc:g},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"stage-changes"},"Stage changes"),(0,a.kt)("p",null,"Files in Git can have three possible states: committed, modified, and staged."),(0,a.kt)("p",null,"To prepare a commit, first add the files with changes that you want to include in your commit to your staging area. You add both new files and existing ones. You can also remove files from staging when necessary."))}d.isMDXComponent=!0}}]);